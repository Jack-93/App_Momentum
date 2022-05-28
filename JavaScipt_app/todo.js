const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "arraytodo";
// new wep -> empty
let arrayToDo = [];

// save, text -> string
function saveToDo() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(arrayToDo));
}

function toDoSubmitF(event) {
  event.preventDefault();
  // newTodo != value
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newObjectTodo = {
    id: Date.now(),
    text: newTodo,
  };
  arrayToDo.push(newObjectTodo);

  paintToDo(newObjectTodo);

  saveToDo();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  arrayToDo = arrayToDo.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  // arrayToDo.push(newTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", toDoSubmitF);

const savedToDoKey = localStorage.getItem(TODOS_KEY);

if (savedToDoKey !== null) {
  const parsedToDo = JSON.parse(savedToDoKey);
  arrayToDo = parsedToDo;
  parsedToDo.forEach(paintToDo);
}

// // filter -> return value
// function filterForId(item) {}
