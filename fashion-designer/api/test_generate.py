from PIL import Image
import os

from controlmap import extract_canny_control_map
from huggingface_gen import call_controlnet

# 🔤 Your custom fashion prompt
prompt = "an elegant black evening gown with lace sleeves"

# 🖼️ Load your model image (full body)
image = Image.open("assets/models/asian_walk1.jpg").convert("RGB")

# ✏️ Extract Canny control map from the image
canny_map = extract_canny_control_map(image)

# 🔑 Hugging Face Token from environment variable
hf_token = os.getenv("HF_TOKEN")
if not hf_token:
    raise ValueError("Please set your Hugging Face token as HF_TOKEN in your environment.")

# 🎨 Call ControlNet to generate fashion sketch
output_image = call_controlnet(prompt, canny_map, hf_token)

# 💾 Save the result
output_path = "assets/control_net/generated_design.png"
output_image.save(output_path)
print(f"✅ Design saved to {output_path}")