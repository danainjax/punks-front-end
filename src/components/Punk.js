class Punk {
  static all = [];
  constructor(data) {
    this.id = data.id;
    this.punktype = data.punktype;
    this.image = data.image;
    this.accessories = JSON.parse(data.accessories)    
    this.constructor.all.push(this);
   
  }

  renderCard = () => {
    punksDiv.innerHTML += `
      <div class="punks-container"> 
        <div class="punk-card" data-id=${this.id}>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src=${this.image} alt="punkImage"/>
                        <p class="likes" id="likes" data-id=${this.id}> ♡ </p>
                        <p class="punk-number"> Punk number ${parseInt(
                          this.id + 99
                        )}</p>
                        <p class="punktype">${this.punktype}</p>
                        <p class="accessories">${this.accessories}
                    </div>
                    <div class="flip-card-back">
                        <h1 id="punk-number" dataset-id= ${this.id}>PUNK NUMBER ${parseInt(this.id + 99)}</h1>
                        <p id="comments-container"> Comments </p>
                      
                        <button id="add-comment" data-id=${this.id}>Add a comment</button>

                    </div>
                </div>
            </div>
          
        </div>
      </div>`;

    
  };

  static getPunks() {
    punksDiv.innerHTML = ""
    api.fetchPunks().then((punks) => {
        punks.forEach((punk) => new Punk(punk));
        this.all.forEach((punk) => {
          punk.renderCard();
          punk.addLike();
          punksDiv.addEventListener('click', this.handleIndexClick)
          })
          // Comment.viewComments();
        });
      };
 
   static handleIndexClick = (e) => {
     e.preventDefault()
     if(e.target.tagName === "IMG" || e.target.classList.contains('punk-number')){
       const id = e.target.closest('.punk-card').dataset.id
       this.find(id).renderShow()
     }
   }

   static find = (id) => this.all.find(punk => punk.id == id)
  
  renderShow = () => {
    console.log(this)
    punksDiv.innerHTML = `
    <div class="show">
      <img src=${this.image} alt="punk" />
      <h1> Punk number ${parseInt(this.id) + 99}</h1>
      <p class="punktype">${this.punktype}</p>
      <p class="accessories">${this.accessories}
      <button id="comment">Add comment to wall</button>
      <button id="back">Go Back</button>
    `
    Comment.addComment()
    const back = document.getElementById('back')
    back.addEventListener('click', (e) => {
      e.preventDefault()
      Punk.getPunks()
    })
    }
      


  addLike() {
    const likes = document.querySelectorAll(".likes");
    for (const like of likes) {
      like.addEventListener("click", (e) => {
        console.log(e.target.dataset.id);
        if (e.target.innerText == "♡") {
          e.target.innerText = "🖤";
        } else {
          e.target.innerText = "♡";
        }
      });
    }
  }
}
