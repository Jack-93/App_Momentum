const images = ["Andromeda.jpg", "Andromeda3.jpg", "Earth.jpg", "Milkyway.jpg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `img/${chosenImg}`;

const back = document.querySelector("#background");
back.appendChild(background);
