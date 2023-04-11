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
  setTimeout(move_page, 2000);
}
function move_page() {
  const newUrl = "login.html";
  history.replaceState(null, null, newUrl);
  location.href = newUrl;
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

function smoothPageTransition(event, targetPage) {
  event.preventDefault();
  const targetPageUrl = targetPage.getAttribute('href');

  document.querySelector('body').style.opacity = 0;

  setTimeout(() => {
    window.location.href = targetPageUrl;
  }, 500);
}

const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const isInternalLink = link.getAttribute('href').startsWith('/');
  if (isInternalLink) {
    link.addEventListener('click', (event) => {
      smoothPageTransition(event, link);
    });
  }
}
