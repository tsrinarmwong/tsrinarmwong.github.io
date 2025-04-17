from PIL import Image
import os
os.environ["PYTORCH_ENABLE_MPS_FALLBACK"] = "1"
import torch
from diffusers import StableDiffusionControlNetPipeline, ControlNetModel, UniPCMultistepScheduler
from transformers import AutoProcessor
import numpy as np
import cv2

from controlmap import extract_openpose_control_map  # ✅ Use OpenPose instead of Canny

# Step 1: Load original image and extract OpenPose control map
model_image = Image.open("assets/models/asian_walk1.jpg").convert("RGB")
pose_map = extract_openpose_control_map(model_image)

# Convert PIL → np array for input to diffusers
control_image = pose_map.convert("RGB").resize((512, 512))

device = "mps" if torch.backends.mps.is_available() else "cpu"
controlnet = ControlNetModel.from_pretrained("lllyasviel/control_v11p_sd15_openpose", torch_dtype=torch.float32)
pipe = StableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", controlnet=controlnet, torch_dtype=torch.float32
)
pipe.scheduler = UniPCMultistepScheduler.from_config(pipe.scheduler.config)
pipe.to(device)

# Step 3: Define prompt
prompt = "avant-garde red trench coat with exaggerated shoulders, fashion sketch"

# Step 4: Generate image
result = pipe(prompt=prompt, image=control_image, num_inference_steps=30).images[0]

# Step 5: Save and preview
output_path = "assets/control_net/diffusers_design.png"
result.save(output_path)
print(f"✅ Saved to {output_path}")
result.show()