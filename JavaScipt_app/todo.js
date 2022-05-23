const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "arraytodo";
const arrayToDo = [];

// save, text -> string
function saveToDo() {
  localStorage.setItem("arrayToDo", JSON.stringify(arrayToDo));
  localStorage.setItem("TODOS_KEY", JSON.stringify(arrayToDo));
}

function toDoSubmitF(event) {
  event.preventDefault();
  // newTodo != value
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  arrayToDo.push(newTodo);
  paintToDo(newTodo);
  saveToDo();
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
// only paint, not save, delete
function paintToDo(newTodo) {
  const makeList = document.createElement("li");
  const makeSpan = document.createElement("span");
  makeSpan.innerText = newTodo;

  const makeButteon = document.createElement("button");
  makeButteon.innerText = "X";
  makeList.appendChild(makeSpan);
  makeList.appendChild(makeButteon);
  toDoList.appendChild(makeList);

  makeButteon.addEventListener("click", deleteToDo);
}

toDoForm.addEventListener("submit", toDoSubmitF);

const savedToDoKey = localStorage.getItem(TODOS_KEY);

if (saveToDo !== null) {
  const parsedToDo = JSON.parse(savedToDoKey);
  parsedToDo.forEach((item) => console.log("turn of ", item));
}
