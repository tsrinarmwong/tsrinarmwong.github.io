// // js/sketchProvider.js

// // Later on, you can swap this out with:

// export async function getSketchesFromAPI(images) {
//     const formData = new FormData();
//     images.forEach((img) => formData.append("images", img));
  
//     const res = await fetch("/api/generate", {
//       method: "POST",
//       body: formData,
//     });
  
//     const data = await res.json();
//     return data.sketchUrls;
//   }