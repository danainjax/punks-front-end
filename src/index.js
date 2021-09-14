const api = new ApiService("http://localhost:3000")

const punksDiv = document.getElementById("cryptopunks");


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
    Punk.getPunks();
}


function clear() {
    
    punksDiv.style.display = 'none'
   
}
