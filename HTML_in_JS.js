const h1 = document.querySelector("div.hello:first-child h1");

function mouseEnterControl() {
  const currentColor = h1.style.color;
  let newColor;

  h1.innerText = "you on me!";
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", mouseEnterControl);
