const api = new ApiService("http://localhost:3000");
const main = document.querySelector("#main");
const login = document.querySelector(".log-in");
const modal = new Modal();
const tickerDiv = document.querySelector(".ticker");

handleDarkTheme = () => {
  if (document.body.classList == "") {
    document.body.classList.add("dark-theme");
    modal.main.classList.add("dark-theme");
    if (document.body.classList == "dark-theme") {
      document
        .querySelectorAll(".punk-card")
        .forEach((card) => (card.classList = "punk-card-dark-theme"));
    }
  } else {
    document.body.classList = "";
    modal.main.classList = "";
    document
      .querySelectorAll(".punk-card-dark-theme")
      .forEach((card) => (card.classList = "punk-card"));
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
    alert(
      `${
        JSON.parse(localStorage.currentLoggedIn).username
      } is already logged in.`
    );
    if (document.body.classList == "dark-theme") {
      document
        .querySelectorAll(".punk-card")
        .forEach((card) => (card.classList = "punk-card-dark-theme"));
    }
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

document.querySelector("#get-punks").addEventListener("click", (e) => {
  if (!user) {
    showLoginForm();
  } else if ((Punk.all = [])) {
    Punk.getPunks();
  } else {
    Punk.renderIndex();
  }
});

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

document.querySelector("#most-likes").addEventListener("click", (e) => {
  e.preventDefault()
  if (!user) {
    showLoginForm();
  } else{
    api.mostLikes().then(data => {
      const id = (data.id)
      Punk.find(id).renderShow()
      alert('We love this one!')
  })
  }
})
