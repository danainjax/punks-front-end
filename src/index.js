const api = new ApiService("http://localhost:3000");
const main = document.querySelector("#main");
const login = document.querySelector(".log-in");
const modal = new Modal()


handleDarkTheme = () => {
  if (document.body.classList == "") {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList = ""
  }
  
}
document.querySelector('#dark-theme').addEventListener("click", handleDarkTheme)



showLoginForm = () => {
  clear()
  main.innerHTML = `<form id="login">
  <label for="username">Username</label>
  <input type="text" id="username" name="username">
  <input type="submit" class="log-in" value="Log In">
</form>`
document.querySelector("form").addEventListener("submit", handleUsernameSubmit);
}

document.querySelector('#login').addEventListener('click', showLoginForm)

let user;

function handleUsernameSubmit(e) {
  e.preventDefault();
  api.findOrCreateUser(e.target.username.value).then((data) => {
    user = data;
    clear();
    Ticker.getTicker()
    Punk.getPunks()
  });
}

function clear() {
  main.innerHTML = "";
}

handleLogOutClick = () => {
  user = "";
  clear();
}

document.querySelector('#logout').addEventListener('click', handleLogOutClick)

document.querySelector('#get-punks').addEventListener('click', Punk.renderIndex)
  


// api.PunkByNumber(punkId)




