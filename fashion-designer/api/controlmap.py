import cv2
import numpy as np
from controlnet_aux import OpenposeDetector
from PIL import Image

# Load once and reuse
openpose = OpenposeDetector.from_pretrained("lllyasviel/ControlNet")

def extract_openpose_control_map(image: Image.Image) -> Image.Image:
    image = image.convert("RGB").resize((512, 512))
    return openpose(image)

def extract_canny_control_map(pil_image: Image.Image, low_threshold=100, high_threshold=200) -> Image.Image:
    """
    Extracts a Canny edge map from a PIL image and returns it as a new PIL image.
    This is modular and doesn't save to disk.
    """
    # Convert PIL → OpenCV format (grayscale)
    image_np = np.array(pil_image.convert("RGB"))
    image_gray = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)

    # Apply Canny Edge Detection
    edges = cv2.Canny(image_gray, low_threshold, high_threshold)

    # Convert back to PIL
    return Image.fromarray(edges)