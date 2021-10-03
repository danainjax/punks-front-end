class Punk {
  static all = [];
  constructor(data) {
    this.id = data.id;
    this.punktype = data.punktype;
    this.image = data.image;
    this.accessories = JSON.parse(data.accessories);
    this.comments = data.comments.map((comment) => new Comment(comment, this));
    this.likes = data.likes.map((like) => new Like(like, this));
    this.user = data.user.username;
    this.constructor.all.push(this);
  }

  static getPunks() {
    api.fetchPunks().then((punks) => {
      punks.forEach((punk) => new Punk(punk));
      this.renderIndex();
      
    });
  }

  static renderIndex = () => {
    const punkContainer = document.createElement("div");
    punkContainer.classList.add("punk-container");
    main.innerHTML = "";
    main.appendChild(punkContainer);
    this.all.forEach((punk) => {
      punk.renderCard();
      Like.addLike();
      punkContainer.addEventListener("click", this.handleIndexClick);
    });
  };
  renderCard = () => {
    const { id, punktype, image, accessories, comments, likes, user } = this;

    document.querySelector(".punk-container").innerHTML += `
                  <div class="punk-card" data-id=${parseInt(id)-1}>
                      <div class="flip-card">
                          <div class="flip-card-inner">
                              <div class="flip-card-front">
                                  <img src=${image} alt="punkImage"/>
                                  <p class ="likes" id="all-likes" data-id=${
                                    likes.length
                                  }> ${likes.length} likes</p>
                                  <p class="likes" id="likes" data-id=${parseInt(id) -1}>♡</p>
                                  <p class="punk-number"> Punk number ${parseInt(
                                    id - 1
                                  )}</p>
                                  <p class="punktype">${punktype}</p>
                                  <p class="accessories">${accessories}</p>
                                  <p class="user">Contracted by: ${user}</p>
                                  
                              </div>
                              <div class="flip-card-back">
                                  <h1 id="punk-number" dataset-id= ${id}>PUNK NUMBER ${parseInt(
      id - 1
    )}</h1>
                                  <p>COMMENTS</p>
                                  <button id="comment">Add comment to wall</button>
                              </div>
                          </div>
                      </div>
                    
                  </div>
                </div>`;
  };

  static handleIndexClick = (e) => {
    e.preventDefault();
    if (
      e.target.tagName === "IMG" ||
      e.target.classList.contains("punk-number")
    ) {
      const id = e.target.closest(".punk-card").dataset.id;
      this.find(parseInt(id) +1).renderShow();
    }
  };

  static find = (id) => this.all.find((punk) => punk.id == id);

  renderShow = () => {
    const { id, punktype, image, accessories, comments } = this;
    main.innerHTML = `
    <div class="show">
      <img src=${image} alt="punk" />
      <h1 id="show" data-id =${parseInt(id) -1}> Punk number ${parseInt(id) -1}</h1>
      <p class="punktype">${punktype}</p>
      <p class="accessories">${accessories}</p>
      <div class="container"></div>
      <button id="comment">Add comment to wall</button>
      <button id="back">Go Back</button>
    </div>
    `;
    Comment.showForm();

    // this.renderShow()
    this.comments.forEach((comment) => comment.render());

    const back = document.getElementById("back");
    back.addEventListener("click", (e) => {
      e.preventDefault();
      Punk.all = []
      Punk.renderIndex();
    });
  };

  static renderCommentData = () => {
    const { id, punktype, image, accessories, comments } = this;
    console.log(comments);

    document.querySelector(".container").innerHTML += `
      <div class="card">
        <p>${comment.text}</p>
      </div>`;
  };

  static punkByNumberForm = () => {
    modal.main.innerHTML += `
  <form id="find-punk">
    <label for="number">Enter a number between 0 and 9999</label>
    <input type="text" id="number" name="number">
    <input type="submit" class="number" value="Punk By Number">
  </form>
  `;
    document.getElementById("find-punk").addEventListener("submit", (e) => {
      e.preventDefault();
      let punkId = e.target.number.value;
      console.log(punkId);
      modal.close();
      Punk.all = [];
      punkId = parseInt(punkId) + 1;
      api.PunkByNumber(punkId).then((punk) => new Punk(punk));
      clear();
      modal.main.innerHTML = "";

      this.getPunks();
      //  modal.main.innerHTML = ""
    });
  };
}
