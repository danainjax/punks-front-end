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
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src=${image} alt="punkImage"/>
                        <p class="likes" id="likes" data-id=${id}> ♡ </p>
                        <p class="punk-number"> Punk number ${parseInt(id + 99)}</p>
                        <p class="punktype">${punktype}</p>
                        <p class="accessories">${accessories}
                    </div>
                    <div class="flip-card-back">
                        <h1>PUNK NUMBER ${parseInt(id + 99)}</h1>
                        <p> Comments </p>
                    </div>
                </div>
            </div>
          
        </div>`

        
    }

    
  
     static getPunks() {

        return fetch('http://localhost:3000/punks')
        .then(response => response.json())
        .then(punks => {
            punks.forEach(punk => new Punk(punk))
            console.log(punks)
            this.all.forEach(punk => {
                // console.log(punk)
                punk.renderCard()
                punk.addLike()
                punk.viewComments()
                    })
                   
                        })
            
        }

        viewComments() {
            const punkCards = document.querySelectorAll('.punk-card')
            for (const card of punkCards) {
                card.addEventListener('click', (e) => {
                    
                    console.log(e.target.closest('div').dataset.id)
                    
                    
                })
            }

        }

         addLike() {
            const likes = document.querySelectorAll('.likes')
            for (const like of likes) {
                like.addEventListener('click', (e) => {
                    console.log(e.target.dataset.id)
                    if (e.target.innerText == "♡") {
                        e.target.innerText = "🖤"
                } else {
                    e.target.innerText = "♡"
                }
                })
        }
    }

}