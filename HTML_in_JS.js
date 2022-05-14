const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

const link = document.querySelector("a");

// submitLogIn(JS gives you info which you need with first argu);
function submitLogIn(event) {
  // prevent browser's default event to act ,ex)refresh web
  event.preventDefault();
  console.log(loginInput.value);
}
function clickLink(event) {
  // prevent browser's default event to act ,ex)open web
  event.preventDefault(event);
  console.dir(event);
}
loginForm.addEventListener("submit", submitLogIn);
link.addEventListener("click", clickLink);
