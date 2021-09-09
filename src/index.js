const api = new ApiService("http://localhost:3000")

const punksDiv = document.getElementById("cryptopunks");

Punk.getPunks();
const login = document.querySelector('.log-in')

login.addEventListener('click', (e) => {
    e.preventDefault()
    handleSubmit()
})

function handleSubmit() {
    console.log('log in here')
}

function clear() {
    
    punksDiv.style.display = 'none'
   
}
