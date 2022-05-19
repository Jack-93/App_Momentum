// // JavaScript,
// // the scripting language used to create dynamic functionality on the web

// // 1. variable: const, let (var not used)
// let a = 5;
// const myName = "jack";

// console.log("my name is", myName);
// console.log(a + 1);
// console.log(a + 2);
// console.log(a + 3);

// a = 6;
// // myName="jaewook";
// // console.log("my name is", myName);
// console.log(a + 1);
// console.log(a + 2);
// console.log(a + 3);

// // 2. boolean: binary (1, 0), (true, false)
// // null, undefined
// const nothing = null; // nothing
// let something; // memory use

// console.log(nothing);
// console.log(something);

// // 3. group, array

// const days = ["mon", "tus", "wed", "thr", "fri", "sat", "sun"];

// // Get items of array
// console.log(days);
// for (let i = 1; i <= 7; i++) {
//   console.log(days[i - 1]);
// }
// days[8] = "what dyas";

// // Edit value and index of array

// // Add some values
// console.log(days.indexOf("mon"));

// days.push("what days");
// console.log(days);

// // Shows values and indexes
// days.find(function (value) {
//   console.log("Here's are days : ", value);
// });

// days.findIndex(function (value, index) {
//   console.log("value is : ", value, " index is : ", index);
// });

// // find index of array you want
// console.log(days.indexOf("mon"));

// // find the length of array (# of array items)
// console.log(days.length);

// // 4. * Object (different items in one category)
// const jack = {
//   name: "jack",
//   age: 30,
//   height: 176 + "cm",
//   points: 10,
// };
// // The Object "jack" is const, but items not
// jack.age = 29;

// // Add items (also can insert items)
// jack.sex = "male";

// console.log(jack.name);
// console.log(jack.age);
// console.log(jack.height);
// console.log(jack.points);
// console.log(jack.sex);

// // 6. function - incapsulation
// function sayHello(name, express) {
//   console.log("Hello my name is", name);
//   console.log(express, "to meet you");
// }
// sayHello("Jack", "nice");

// function plus(a, b) {
//   return a + b;
// }
// function devide(a, b) {
//   return a / b;
// }
// console.log(plus(1, 2));
// console.log(devide(4, 2));

// // Implemetation in Object
// const Player = {
//   name: function (nameOfPlayer) {
//     return nameOfPlayer;
//   },
//   age: function (ageOfPlayer) {
//     return ageOfPlayer;
//   },
// };
// console.log(Player.name("jack"));
// console.log(Player.age(10));
// // not availalbe example
// // console.log(Player(Player.name("jin"), Player.age(12)));

// // Global, Local value in function
// var x = 10;
// function createFunction1() {
//   var x = 20;
//   return new Function(x); // Local x (=20)
// }
// console.log(createFunction1());

// const calc = {
//   add: function (a, b) {
//     return a + b;
//   },
//   substract: function (a, b) {
//     return a - b;
//   },
//   devide: function (a, b) {
//     return a / b;
//   },
//   multi: function (a, b) {
//     return a * b;
//   },
//   powers: function (a, b) {
//     return a ** b;
//   },
// };
// const resultOfAdd = calc.add(2, 3);
// const resultOfSubs = calc.substract(resultOfAdd, 1);
// console.log(resultOfSubs);

// // 7. type

// // prompt defalut value - string
// const age = prompt("how old?");
// console.log(typeof age); // age -> string

// // parse, available only real integer
// const height = prompt("how tall?");
// console.log(typeof parseInt(height));

// const age = parseInt(prompt("how old?"));
// console.log(typeof age); // age -> string

// // is"what"() function
// const age = parseInt(prompt("how old?"));
// console.log(isNaN(age));

// // 8. if
// const age = parseInt(prompt("how old?"));
// if (isNaN(age)) {
//   console.log("this is string");
// } else {
//   console.log("this is number");
// }

// if (isNaN(age)) {
//   console.log("plz number");
// } else if (age < 18) {
//   console.log("not an adult");
// } else if (age >= 18 && age < 30) {
//   console.log("you can");
// } else {
//   console.log("you old");
// }

// Use HTML in JS

// 1. document
// const titles = document.getElementById("title");
// console.log(titles);
// console.log(titles.innerHTML);

// console.log(titles.id);
// console.log(titles.className);

// titles.innerText = "gotyou!";
// console.log(titles.innerText);

// const hellos = document.getElementsByTagName("h1");
// console.log(hellos);

// const title = document.querySelector("div.hello:first-child h1");
// console.log(title);

// // 2. JS Objects

// const h1 = document.querySelector("div.hello:first-child h1");

// function clickTitle() {
//   console.log("you click me!");
//   h1.style.color = "blue";
// }
// function mouseEnterTitle() {
//   console.log("you cursor on me!");
//   h1.innerText = "you are on out!";
// }
// function mouseLeaveTitle() {
//   h1.innerText = "you leave out!";
// }
// // functions are activated by JS
// // title.addEventListener("click", clickTitle);
// h1.onclick = clickTitle;

// // title.addEventListener("mouseenter", mouseEnterTitle);
// h1.onmouseenter = mouseEnterTitle;

// // title.addEventListener("mouseleave", mouseLeaveTitle);
// h1.onmouseleave = mouseLeaveTitle;

// // 3. window

// // resize -> convert 'window' as you want
// function windowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// // copy checks
// function copyWindow() {
//   alert("copier!"); // prompt
// }
// function offlineWindow() {
//   alert("SOS no wifi!");
// }
// function onlineWindow() {
//   alert("wifi on!");
// }
// window.addEventListener("resize", windowResize);
// window.addEventListener("copy", copyWindow);
// window.addEventListener("offline", offlineWindow);
// window.addEventListener("online", onlineWindow);

// const h1 = document.querySelector("div.hello:first-child h1");

// function mouseEnterControl() {
//   const currentColor = h1.style.color;
//   let newColor;

//   h1.innerText = "you on me!";
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
// h1.addEventListener("click", mouseEnterControl);

// // 1. Class
// const h1 = document.querySelector("div.hello:first-child h1");

// function mouseEnterControl() {
//   // const classH1 = h1.className;
//   const activeClass = "active";
//   if (h1.className === activeClass) {
//     h1.className = "";
//   } else {
//     h1.className = activeClass;
//   }
// }
// h1.addEventListener("click", mouseEnterControl);

// const h1 = document.querySelector("div.hello:first-child h1");
// function mouseEnterControl() {
//   // const classH1 = h1.className;
//   const activeClass = "active";
//   if (h1.classList.contains(activeClass)) {
//     h1.classList.remove(activeClass);
//   } else {
//     h1.classList.add(activeClass);
//   }
// }
// h1.addEventListener("click", mouseEnterControl);

// // toggle() => remove, add automatically
// const h1 = document.querySelector("div.hello:first-child h1");
// function mouseEnterControl() {
//   h1.classList.toggle("active");
// }
// h1.addEventListener("click", mouseEnterControl);

// const loginForm = document.querySelector("#login-form");
// // logininput, button is in id:loginform
// const loginInput = loginForm.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("#login-form button");

// // browser func <input required ... = ...> -> <form></form>

// function clickLogInButton() {
//   const username = loginInput.value;
//   if (username === "") {
//     console.log("plz write your name");
//   } else if (username.length) {
//   }
// }
// loginButton.addEventListener("click", clickLogInButton);

// const loginForm = document.querySelector("#login-form");
// // logininput, button is in id:loginform
// const loginInput = loginForm.querySelector("#login-form input");

// function submitLogIn() {
//   const username = loginInput.value;
//   console.log(username);
// }
// loginForm.addEventListener("submit", submitLogIn);

// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("#login-form input");

// const link = document.querySelector("a");

// // submitLogIn(JS gives you info which you need with first argu);
// function submitLogIn(event) {
//   // prevent browser's default event to act ,ex)refresh web
//   event.preventDefault();
//   console.log(loginInput.value);
// }
// function clickLink(event) {
//   // prevent browser's default event to act ,ex)open web
//   event.preventDefault(event);
//   console.dir(event);
// }
// loginForm.addEventListener("submit", submitLogIn);
// link.addEventListener("click", clickLink);

// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// // submitLogIn(JS gives you info which you need with first argu);
// function submitLogIn(event) {
//   // prevent browser's default event to act ,ex)refresh web
//   event.preventDefault();
//   const username = loginInput.value;
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   // greeting.innerText = "Hello " + username;
//   // ``: Backtics, `` combine all of elements in string
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", submitLogIn);

const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// // submitLogIn(JS gives you info which you need with first argu);
// function submitLogIn(event) {
//   event.preventDefault();
//   const username = loginInput.value;
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   paintGreetings(username);

//   localStorage.setItem(USERNAME_KEY, username);
// }

// const savedUsernam = localStorage.getItem(USERNAME_KEY);
// if (savedUsernam === null) {
//   // show form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", submitLogIn);
// } else {
//   // show greeting
//   paintGreetings(savedUsernam);
// }

// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function paintGreetings() {
//   const username = localStorage.getItem(USERNAME_KEY);
//   greeting.classList.remove(HIDDEN_CLASSNAME);

//   greeting.innerText = `Hello ${username}`;
// }

// // submitLogIn(JS gives you info which you need with first argu);
// function submitLogIn(event) {
//   event.preventDefault();
//   /////////////////////////
//   const username = loginInput.value;
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(USERNAME_KEY, username);
//   /////////////////////////
//   paintGreetings();
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   // show form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", submitLogIn);
// } else {
//   // show greeting
//   paintGreetings();
// }

// // interval (=quantum), timeout

// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();
//   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// getClock();
// setInterval(getClock, 1000);

// // padstart, padend -> string restrict func
// // num->string: String()
// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");

//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);

// Add strings
// const quotes = [
//   {
//     quote: "What doesn't destroy me, makes me stronger",
//     author: "Friedrich Wilhelm Nietzsche",
//   },
//   {
//     quote:
//       "All happy families are alike; each unhappy family is unhappy in its own way",
//     author: "Anna Karenina",
//   },
//   {
//     quote: "Necessity is the mother of taking chance",
//     author: "Mark Twain",
//   },
//   {
//     quote: "Miracles happen to only those who believe in them",
//     author: "Bernard Berenson",
//   },
//   {
//     quote: "The only thing we have to fear is fear itself",
//     author: "Franklin Roosebelt",
//   },
//   {
//     quote:
//       "Be nice to people on your way up because you'll meet them when you way down",
//     author: "Wilson Mizner",
//   },
//   {
//     quote: "Never confuse a single feat with a final defeat",
//     author: "F. Scott Fitzgerald",
//   },
//   {
//     quote: "I will prepare, and someday my chance will come",
//     author: "Abraham Lincoln",
//   },
//   {
//     quote:
//       "Learn as if you would live forever, live as if you would die tomorrow",
//     author: "Mahatma Gandhi",
//   },
//   {
//     quote: "Be kind, that is you and me, us",
//     author: "Jack",
//   },
// ];
// const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");

// const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

// // Draw text on screen
// quote.innerText = todaysQuotes.quote;
// author.innerText = todaysQuotes.author;

// Add images on HTML with Javascript
// const images = [
//   "Earth.jpg",
//   "Milkyway.jpg",
//   "Andromeda.jpg",
//   "Andromeda2.jpg",
//   "Andromeda3.jpg",
// ];
// const selectImages = images[Math.floor(Math.random() * images.length)];
// const bgImages = document.createElement("img");

// // console.log(selectImages);
// bgImages.src = `img/${selectImages}`;

// // add child node "body" to parent node
// document.body.appendChild(bgImages);
// // console.log(bgImages);

// const toDoForm = document.querySelector("#todo-form");
// const toDoInput = toDoForm.querySelector("#todo-form input");
// const toDoList = document.querySelector("#todo-list");

// function toDoSubmitF(event) {
//   event.preventDefault();
//   // newTodo != value
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   paintToDo(newTodo);
// }
// // only paint, not save, delete
// function paintToDo(newTodo) {
//   const makeList = document.createElement("li");
//   const makeSpan = document.createElement("span");
//   makeList.appendChild(makeSpan);
//   makeSpan.innerText = newTodo;
//   toDoList.appendChild(makeList);
// }

// toDoForm.addEventListener("submit", toDoSubmitF);
