const api = new ApiService("http://localhost:3000");
const main = document.querySelector("#main");
const login = document.querySelector(".log-in");
const modal = new Modal();
const tickerDiv = document.querySelector(".ticker");

handleDarkTheme = () => {
  if (document.body.classList == "") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList = "";
  }
};
document
  .querySelector("#dark-theme")
  .addEventListener("click", handleDarkTheme);

showLoginForm = () => {
  modal.open();
  clear();
  modal.main.innerHTML = `<form id="login">
  <label for="username">Username</label>
  <input type="text" id="username" name="username">
  <input type="submit" class="log-in" value="Log In">
</form>`;
  document
    .querySelector("form")
    .addEventListener("submit", User.handleUsernameSubmit);
};

let user;

document.querySelector("#login").addEventListener("click", (e) => {
  if (!localStorage.currentLoggedIn) {
    showLoginForm();
  } else {
    alert(`Already logged in ${localStorage.currentLoggedIn}`);
    Punk.getPunks();
  }
});

function clear() {
  main.innerHTML = "";
  tickerDiv.innerHTML = "";
}

handleLogOutClick = () => {
  user = "";
  User.all = [];
  clear();
  localStorage.clear();
  main.innerHTML = `<h2>PUNKS</h2>
  <img src="assets/images/allPunks.png"/>
  `;
};

handleFindAPunkClick = () => {
  clear();
  modal.open();
  modal.addCloseEventListener();
  Punk.punkByNumberForm();
};

document.querySelector("#logout").addEventListener("click", handleLogOutClick);

document
  .querySelector("#get-punks")
  .addEventListener("click", Punk.renderIndex);

document.querySelector("#find-a-punk").addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.currentLoggedIn) {
    handleFindAPunkClick();
  } else {
    showLoginForm();
  }
});

document.querySelector("#my-account").addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.currentLoggedIn) {
    User.greetUser();
  } else {
    showLoginForm();
  }
});
