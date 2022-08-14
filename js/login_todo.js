const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

// to make Todo List after Login process
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const USERNAME_KEY = "username";
const TODOS_KEY = "todos";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
  setTodoInput();
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!😎`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// to make Todo List after Login process
function setTodoInput() {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
  setTodoInput();
}

// to make Todo List after Login process
const todoInput = todoForm.querySelector("input");

let todos = [];

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  li.style.marginTop = "5px";
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  span.style.marginRight = "10px";
  const button = document.createElement("button");
  button.innerText = "x";
  button.style.float = "right";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  console.log(event);
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todos) => todos.id !== parseInt(li.id));
  saveTodos();
  console.log(todos);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach(paintTodo);
}
