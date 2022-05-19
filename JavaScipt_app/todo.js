const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function toDoSubmitF(event) {
  event.preventDefault();
  // newTodo != value
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}
// only paint, not save, delete
function paintToDo(newTodo) {
  const makeList = document.createElement("li");
  const makeSpan = document.createElement("span");
  makeList.appendChild(makeSpan);
  makeSpan.innerText = newTodo;
  toDoList.appendChild(makeList);
}

toDoForm.addEventListener("submit", toDoSubmitF);
