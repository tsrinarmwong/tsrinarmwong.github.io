from PIL import Image
from controlmap import extract_canny_control_map

# Load your model image
image = Image.open("assets/models/asian_walk1.jpg")  # adjust path as needed

# Extract canny map
canny = extract_canny_control_map(image)

# Save or preview the result
canny.save("assets/control_maps/canny_model1.png")
canny.show()  # Optional, opens preview