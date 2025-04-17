from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from fastapi import FastAPI, File, UploadFile, Form
import os
os.environ["PYTORCH_ENABLE_MPS_FALLBACK"] = "1"
import base64
from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image
import torch
import io
# from api.huggingface_gen import call_controlnet
from api.controlmap import extract_openpose_control_map
from api.generator import generate_with_diffusers

app = FastAPI()

# ✅ Enable requests from your frontend (localhost or GitHub Pages)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to ["http://localhost:5500"] if needed
    allow_methods=["*"],
    allow_headers=["*"],
)

# 📦 Load BLIP model + processor once on startup
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

device = "mps" if torch.backends.mps.is_available() else "cpu"
model.to(device)

@app.post("/caption")
async def caption_image(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    # Preprocess image
    inputs = processor(images=image, return_tensors="pt")
    inputs = {k: v.to(device).to(torch.float32) for k, v in inputs.items()}

    with torch.no_grad():
        output = model.generate(**inputs)

    caption = processor.decode(output[0], skip_special_tokens=True)
    return {"caption": caption}

@app.post("/extract-pose")
async def generate_design(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    # Extract OpenPose map
    pose_image = extract_openpose_control_map(image)

    buf = io.BytesIO()
    pose_image.save(buf, format="PNG")
    pose_b64 = base64.b64encode(buf.getvalue()).decode("utf-8")

    return {"pose": pose_b64}

@app.post("/generate-local-image")
async def generate_with_controlnet(file: UploadFile = File(...), prompt: str = Form(...)):
    image_bytes = await file.read()
    input_image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    # Step 1: OpenPose
    pose_image = extract_openpose_control_map(input_image)

    # Step 2: ControlNet generation
    output_image = generate_with_diffusers(prompt=prompt, control_image=pose_image)

    # Return base64 image
    buf = io.BytesIO()
    output_image.save(buf, format="PNG")
    img_b64 = base64.b64encode(buf.getvalue()).decode("utf-8")

    return {"generated": img_b64}