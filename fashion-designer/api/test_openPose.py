from PIL import Image
from controlmap import extract_openpose_control_map

# Load your model image
image = Image.open("assets/models/black_walk1.jpeg")  # adjust path as needed

# Extract openpose map
pose = extract_openpose_control_map(image)

# Save or preview the result
pose.save("assets/control_maps/openpose_model2.png")
pose.show()  # Optional, opens preview