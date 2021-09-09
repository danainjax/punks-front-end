class Punk {
  static all = [];
  constructor(data) {
    this.data = data;
    this.constructor.all.push(this);
  }

  renderCard = () => {
    const { punktype, accessories, image, id} = this.data;
    punksDiv.innerHTML += `
        <div class="punk-card" data-id=${id}>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src=${image} alt="punkImage"/>
                        <p class="likes" id="likes" data-id=${id}> ♡ </p>
                        <p class="punk-number"> Punk number ${parseInt(
                          id + 99
                        )}</p>
                        <p class="punktype">${punktype}</p>
                        <p class="accessories">${accessories}
                    </div>
                    <div class="flip-card-back">
                        <h1 id="punk-number" dataset-id= ${id}>PUNK NUMBER ${parseInt(id + 99)}</h1>
                        <p id="comments-container"> Comments </p>
                      
                        <button id="add-comment" data-id=${id}>Add a comment</button>

                    </div>
                </div>
            </div>
          
        </div>`;
  };

  static getPunks() {
    api.fetchPunks().then((punks) => {
        punks.forEach((punk) => new Punk(punk));
        this.all.forEach((punk) => {
          punk.renderCard();
          punk.addLike();
          
          Comment.viewComments();
        });
      });
  }

  // static showPunk() {
  //   const punkNumber = document.querySelector('#comments-container')
  //   console.log(punkNumber)
  //   const id = punkNumber.dataset.id 
  //   punkNumber.addEventListener('click', (e) => {
  //     api.soloPunk(id).then(console.log)
  //   })
   
  // }

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
