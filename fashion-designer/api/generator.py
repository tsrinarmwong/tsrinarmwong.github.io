from diffusers import StableDiffusionControlNetPipeline, ControlNetModel, UniPCMultistepScheduler
from PIL import Image
import torch

device = "mps" if torch.backends.mps.is_available() else "cpu"

controlnet = ControlNetModel.from_pretrained("lllyasviel/control_v11p_sd15_openpose", torch_dtype=torch.float32)
pipe = StableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", controlnet=controlnet, torch_dtype=torch.float32
)
pipe.scheduler = UniPCMultistepScheduler.from_config(pipe.scheduler.config)
pipe.to(device)

def generate_with_diffusers(prompt: str, control_image: Image.Image) -> Image.Image:
    return pipe(prompt=prompt, image=control_image, num_inference_steps=30).images[0]