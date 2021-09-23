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
document.querySelector("form").addEventListener("submit", handleUsernameSubmit);

}

document.querySelector('#login').addEventListener('click', showLoginForm)

let user;

function handleUsernameSubmit(e) {
  e.preventDefault();
  modal.close()
  api.findOrCreateUser(e.target.username.value).then((data) => {
    user = data;
    clear();
    Ticker.getTicker()
    Punk.getPunks()
  });
}

function clear() {
  main.innerHTML = "";
  tickerDiv.innerHTML = "";
}

handleLogOutClick = () => {
  user = "";
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
  // api.PunkByNumber(punkId)
  // console.log(punkId)
}

document.querySelector('#logout').addEventListener('click', handleLogOutClick)

document.querySelector('#get-punks').addEventListener('click', Punk.renderIndex)

document.querySelector('#find-a-punk').addEventListener('click', handleFindAPunkClick)

  


// api.PunkByNumber(punkId)




