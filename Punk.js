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
          <p class="punktype">${punktype}</p>
          <p class="accessories">${accessories}
          <p class="punk-number"> Put the punk number or identifier here</p>
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