// Add images on HTML with Javascript
const images = [
  "Earth.jpg",
  "Milkyway.jpg",
  "Andromeda.jpg",
  "Andromeda2.jpg",
  "Andromeda3.jpg",
  "Onew.jpg",
  "youtube.jpg",
  "naver.jpg",
  "google.jpg",
];
// random painting
const selectImages = images[Math.floor(Math.random() * images.length)];
const bgImages = document.createElement("img");

bgImages.src = `image/${selectImages}`;

// add child node "body" to parent node
document.body.appendChild(bgImages);
