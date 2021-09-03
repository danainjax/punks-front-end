console.log('punks')

const punksDiv = document.getElementById('cryptopunks')
console.log(punksDiv)

function getPunks() {

    return fetch('http://localhost:3000/punks')
    .then(response => response.json())
    .then(data => console.log(data));
}

getPunks()