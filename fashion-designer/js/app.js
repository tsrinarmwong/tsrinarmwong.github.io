// ===============================
// 🎨 AI Fashion Designer - app.js
// ===============================

// === ELEMENTS ===
const modelInput = document.getElementById("modelUpload");           // Upload 1 model image
const inspirationInput = document.getElementById("inspirationUpload"); // Upload multiple inspiration images
const runBtn = document.getElementById("generateBtn");                // Final generate button

const modelPreview = document.getElementById("modelPreview");        // Preview for model image
const inspirationPreview = document.getElementById("inspirationPreview"); // Preview for inspirations
const loadingIndicator = document.getElementById("loadingIndicator");    // Loading status message
const debugOutput = document.getElementById("debugOutput");              // Debug logs
const poseOutput = document.getElementById("poseOutput");                // OpenPose map output
const results = document.getElementById("results");                      // Final generated design

// === STATE ===
let modelImage = null;
let inspirationImages = [];

// === HELPERS ===
function showLoading(message) {
  loadingIndicator.textContent = message;
  loadingIndicator.classList.remove("hidden");
}

function hideLoading() {
  loadingIndicator.classList.add("hidden");
}

function printDebug(message) {
  const p = document.createElement("p");
  p.textContent = message;
  debugOutput.appendChild(p);
}

function updateProgress(percent) {
  const bar = document.getElementById("progressBar");
  bar.style.width = percent + "%";
}

// === 1. HANDLE MODEL IMAGE UPLOAD ===
modelInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  modelImage = file;

  modelPreview.innerHTML = "";
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.className = "rounded shadow max-h-64";
    modelPreview.appendChild(img);
  }
});

// === 2. HANDLE INSPIRATION IMAGES UPLOAD ===
inspirationInput.addEventListener("change", (e) => {
  inspirationImages = Array.from(e.target.files);
  inspirationPreview.innerHTML = "";

  inspirationImages.forEach(file => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.className = "rounded shadow max-h-32 inline-block mr-2";
    inspirationPreview.appendChild(img);
  });
});

// === 3. RUN FULL GENERATION PROCESS ===
runBtn.addEventListener("click", async () => {
  updateProgress(0);
  if (!modelImage || inspirationImages.length < 1) {
    alert("Please upload a model image and at least one inspiration image.");
    return;
  }
  updateProgress(10); // after model validation

  try {
    // 🔹 STEP 1: Get Text Prompts using BLIP
    showLoading("🔍 Extracting captions from inspirations (BLIP)...");
    const promptParts = [];

    for (const file of inspirationImages) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/caption", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      printDebug("📝 Caption: " + data.caption);
      promptParts.push(data.caption);
    }

    const finalPrompt = promptParts.join(", ") + ", hand drawn, fashion sketch, trending on runway, elegant";
    printDebug("🧠 Final Prompt: " + finalPrompt);
    document.getElementById("captionOutput").textContent = finalPrompt;
    updateProgress(25); // after BLIP

    // 🔹 STEP 2: Extract OpenPose from model image
    showLoading("📐 Extracting pose from model image...");
    const poseForm = new FormData();
    poseForm.append("file", modelImage);

    const poseRes = await fetch("http://localhost:8000/extract-pose", {
      method: "POST",
      body: poseForm
    });
    updateProgress(50); // after OpenPose

    const poseData = await poseRes.json();
    poseOutput.innerHTML = `<img src="data:image/png;base64,${poseData.pose}" class="rounded max-h-64" />`;

    // 🔹 STEP 3: Generate Final Fashion Design using ControlNet
    showLoading("🎨 Generating outfit with ControlNet...");
    const genForm = new FormData();
    genForm.append("file", modelImage);
    genForm.append("prompt", finalPrompt);

    const genRes = await fetch("http://localhost:8000/generate-local-image", {
      method: "POST",
      body: genForm
    });
    updateProgress(90); // during generation

    const genData = await genRes.json();
    results.innerHTML = `<img src="data:image/png;base64,${genData.generated}" class="rounded shadow max-h-96" />`;

    printDebug("✅ Generation complete!");
    updateProgress(100); // when done
  } catch (err) {
    printDebug("❌ Error: " + err);
    updateProgress(0);
  } finally {
    hideLoading();
  }
});