const api = new ApiService("http://localhost:3000")

const punksDiv = document.getElementById("cryptopunks");

Punk.getPunks();
const login = document.querySelector('.log-in')

// login.addEventListener('click', (e) => {
//     e.preventDefault()
//     handleSubmit()
// })

// function handleSubmit() {
//     console.log('log in here')
// }
document.querySelector('form').addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e) {
    e.preventDefault()
    console.log(e.target.username.value)
}


function clear() {
    
    punksDiv.style.display = 'none'
   
}
