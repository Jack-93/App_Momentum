// First sight modal
const modal = document.querySelector("#login");
const btn = document.querySelector(".login-btn");
// name input info
const loginInput = document.querySelector(".login-input");
const name = document.querySelector(".name-input");
//
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  modal.style.display = "none";
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  if (username === "") {
    name.innerText = `Hello, Sir!`;
  } else {
    name.innerText = `Good day! pretty, ${username}`;
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  modal.addEventListener("submit", onLoginSubmit);
} else {
  modal.style.display = "none";
  paintGreetings(savedUsername);
}

btn.addEventListener("click", onLoginSubmit);
