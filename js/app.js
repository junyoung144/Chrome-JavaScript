const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const welcomeMy = document.querySelector(".welcome-my__site");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  welcomeMy.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  setTimeout("move_page()", 2000); //2초후에 move_page함수실행
}
function move_page() {
  location.href = "login.html"; // 페이지 이동
}

loginForm.addEventListener("submit", onLogInSubmit);

const localStorageUsername = localStorage.getItem(USERNAME_KEY);
console.log(localStorageUsername);

if (localStorageUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogInSubmit);
} else {
  paintGreetings(localStorageUsername);
}
