const api = new ApiService("http://localhost:3000");
const main = document.querySelector("#main");
const login = document.querySelector(".log-in");
const modal = new Modal()
const tickerDiv = document.querySelector('.ticker')

handleDarkTheme = () => {
  if (document.body.classList == "") {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList = ""
  }
  
}
document.querySelector('#dark-theme').addEventListener("click", handleDarkTheme)



showLoginForm = () => {
  modal.open()
  clear()
  modal.main.innerHTML = `<form id="login">
  <label for="username">Username</label>
  <input type="text" id="username" name="username">
  <input type="submit" class="log-in" value="Log In">
</form>`
document.querySelector("form").addEventListener("submit", User.handleUsernameSubmit);

}

document.querySelector('#login').addEventListener('click', showLoginForm)

let user;


function clear() {
  main.innerHTML = "";
  tickerDiv.innerHTML = "";
}

handleLogOutClick = () => {
  user = "";
  User.all = []
  clear();
  main.innerHTML = `<h2>PUNKS</h2>
  <img src="assets/images/allPunks.png"/>
  `
}


handleFindAPunkClick = (e) => {
  e.preventDefault()
  clear()
  modal.open()
  modal.addCloseEventListener()
  Punk.punkByNumberForm()
  
}

document.querySelector('#logout').addEventListener('click', handleLogOutClick)

document.querySelector('#get-punks').addEventListener('click', Punk.renderIndex)

document.querySelector('#find-a-punk').addEventListener('click', handleFindAPunkClick)

document.querySelector('#my-account').addEventListener('click', User.greetUser)

  







