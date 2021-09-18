class Punk {
  static all = [];
  constructor(data) {
    // debugger
    this.id = data.id;
    this.punktype = data.punktype;
    this.image = data.image;
    this.accessories = JSON.parse(data.accessories);
    this.comments = data.comments.map((comment) => new Comment(comment));
    this.constructor.all.push(this);
    console.log(this);
  }

  static getPunks() {
    // main.innerHTML = "";
    api.fetchPunks().then((punks) => {
      punks.forEach((punk) => new Punk(punk));
      this.renderIndex();
    });
  }

  renderCard = () => {
    const { id, punktype, image, accessories, comments } = this;
    document.querySelector(".punk-container").innerHTML += `
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
                                  <p class="comments">I have ${this.comments.length} comments on my wall</p>
                              </div>
                              <div class="flip-card-back">
                                  <h1 id="punk-number" dataset-id= ${id}>PUNK NUMBER ${parseInt(id + 99)}</h1>
                                  <div id="comments-container"> Comments </div>
                                  <p> Display Comments </p>
                              </div>
                          </div>
                      </div>
                    
                  </div>
                </div>`;
  }

  static renderIndex = () => {
    const punkContainer = document.createElement("div");
    punkContainer.classList.add("punk-container");
    document.getElementById("main").appendChild(punkContainer);
    this.all.forEach((punk) => {
      punk.renderCard();
      Like.addLike();
      punkContainer.addEventListener("click", this.handleIndexClick);
    });
  }

  static handleIndexClick = (e) => {
    e.preventDefault();
    if (
      e.target.tagName === "IMG" ||
      e.target.classList.contains("punk-number")
    ) {
      const id = e.target.closest(".punk-card").dataset.id;
      this.find(id).renderShow();
    }
  };

  static find = (id) => this.all.find((punk) => punk.id == id);

  renderShow = () => {
    const { id, punktype, image, accessories, comments } = this;
    main.innerHTML = `
    <div class="show">
      <img src=${image} alt="punk" />
      <h1 id="show" data-id =${id}> Punk number ${parseInt(id) + 99}</h1>
      <p class="punktype">${punktype}</p>
      <p class="accessories">${accessories}</p>
      <div class="container"></div>
      <button id="comment">Add comment to wall</button>
      <button id="back">Go Back</button>
    </div>
    `;
    Comment.showForm();
    this.comments.forEach((comment) => comment.render());
    const back = document.getElementById("back");
    back.addEventListener("click", (e) => {
      main.innerHTML = ""
      Punk.all = []
      e.preventDefault();
      Punk.getPunks();
    });
  };

  
}
