# AI Fashion Designer – PoC

This proof-of-concept (PoC) demonstrates an AI-powered pipeline for generating fashion sketches or garments based on user-uploaded inspiration and model images. Built with Hugging Face tools, FastAPI, and a lightweight frontend.

---

## ✅ Goal
Allow users to:
- Upload multiple fashion reference images
- Select one as a "model image" (for pose/silhouette)
- Automatically generate fashion design images using AI

---

## 🧩 Architecture

### 1. User Input (Frontend)
- Upload multiple images:
  - 1 **model image** (for body pose or silhouette)
  - 2–5 **inspiration images** (sketches, outfits, texture)
- UI allows selecting which image is the model

### 2. Backend Pipeline (FastAPI + Python)

#### A. Prompt Extraction (Text)
- **Tool:** BLIP
- Converts inspiration images into natural-language descriptions
- Combined into one fashion design prompt

#### B. Control Map Extraction
- **Tools:**
  - Canny (basic edges)
  - HED (smooth outlines)
  - OpenPose (body pose map)
- Control map used as input to the generative model

#### C. Image Generation
- **Model:** ControlNetDresscode (Stable Diffusion variant)
- **Input:** Prompt + Control Map
- **Output:** AI-generated fashion sketch or model image

### 3. Output to User (Frontend)
- Show generated fashion designs
- Allow user to:
  - Download results
  - Regenerate with a new prompt
  - Compare multiple generations

---

## 🛠️ Tech Stack

| Function             | Tool / Model                            |
|----------------------|------------------------------------------|
| Prompt extraction    | BLIP                                     |
| Sketch extraction    | Canny / HED / OpenPose                   |
| Image generation     | ControlNetDresscode (Stable Diffusion)  |
| Backend API          | FastAPI                                  |
| Frontend interface   | HTML + JavaScript (TailwindCSS)          |
| Model hosting        | Hugging Face                             |

---

## 🔧 Setup Instructions (Coming Soon)

This repo is under active development. Next steps:
- [ ] Setup ControlNet inference
- [ ] Allow image selection from frontend
- [ ] Deploy backend to Hugging Face Spaces or Render

---

Feel free to contribute ideas or improvements. 💡

> “I don’t do cute. I do couture.” – *Cruella*

