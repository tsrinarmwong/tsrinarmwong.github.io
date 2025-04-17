import requests
import base64
import io
from PIL import Image

HF_API_URL = "https://api-inference.huggingface.co/models/lllyasviel/control_v11p_sd15_canny"

def image_to_base64(pil_img: Image.Image) -> str:
    buffer = io.BytesIO()
    pil_img.save(buffer, format="PNG")
    return base64.b64encode(buffer.getvalue()).decode("utf-8")

def call_controlnet(prompt: str, control_img: Image.Image, hf_token: str) -> Image.Image:
    headers = {"Authorization": f"Bearer {hf_token}"}
    payload = {
        "inputs": prompt,
        "parameters": {
            "image": image_to_base64(control_img),
            "guidance_scale": 9.0,
            "num_inference_steps": 30
        }
    }

    response = requests.post(HF_API_URL, headers=headers, json=payload)
    
    if response.status_code == 200:
        return Image.open(io.BytesIO(response.content))
    else:
        print("❌ ControlNet failed:", response.text)
        raise RuntimeError(f"HF API failed with code {response.status_code}")