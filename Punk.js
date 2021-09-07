class Punk {
    static all = []
    constructor(data){
        // debugger
        this.data = data
        this.constructor.all.push(this)
      }
    
      renderCard = () => {
        const { punktype, accessories, image,  id } = this.data
        punksDiv.innerHTML += `
        <div class="punk-card" data-id=${id}>
          <img src=${image} alt="punkImage"/>
          <p class="likes" id="likes" data-id=${id}> ♡ </p>
          <p class="punk-number"> Punk number ${parseInt(id + 99)}</p>
          <p class="punktype">${punktype}</p>
          <p class="accessories">${accessories}
          
        </div>`

    
    }


  
     static getPunks() {

        return fetch('http://localhost:3000/punks/?_limit=10')
        .then(response => response.json())
        .then(punks => {
            punks.forEach(punk => new Punk(punk))
            console.log(punks)
            this.all.forEach(punk => punk.renderCard())
            
        })
        }
        
    









}