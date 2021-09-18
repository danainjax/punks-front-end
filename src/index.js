const api = new ApiService("http://localhost:3000");
const main = document.querySelector("#main");
const login = document.querySelector(".log-in");

document.querySelector("form").addEventListener("submit", handleUsernameSubmit);

let user;

function handleUsernameSubmit(e) {
  e.preventDefault();
  api.findOrCreateUser(e.target.username.value).then((data) => {
    user = data;
    main.innerHTML = "";
    Ticker.getTicker()
    Punk.getPunks()
  });
}

function clear() {
  main.style.display = "none";
}

// const bitcoin =  fetch('https://api.cryptonator.com/api/ticker/btc-usd').then(response => response.json()).then(resp => console.log(resp.ticker
// ))
