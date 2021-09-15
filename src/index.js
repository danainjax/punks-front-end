const api = new ApiService("http://localhost:3000");

const punksDiv = document.getElementById("cryptopunks");
const main = document.querySelector("#main");
const login = document.querySelector(".log-in");

document.querySelector("form").addEventListener("submit", handleUsernameSubmit);

let user;

function handleUsernameSubmit(e) {
  e.preventDefault();
  console.log(e.target.username.value);
  api.findOrCreateUser(e.target.username.value).then((data) => {
    user = data;
    main.innerHTML = "";
    Punk.getPunks();
  });
}

function clear() {
  punksDiv.style.display = "none";
}
