class User {
  static all = [];
  constructor(data) {
    (this.data = data), (this.comments = data.comments);
    this.likes = data.likes;
    this.punks = data.punks;
    this.constructor.all.push(this);
  }

  static handleUsernameSubmit(e) {
    e.preventDefault();
    modal.close();

    api.findOrCreateUser(e.target.username.value).then((data) => {
      user = data;
      new User(data);
      localStorage.setItem("currentLoggedIn", JSON.stringify(user));

      modal.main.innerHTML = "";
      clear();
      Ticker.getTicker();
      Punk.getPunks();
      User.greetUser();
    });
  }

  static greetUser = () => {
    modal.open();
    modal.main.innerHTML = `<p id="greet-user">Welcome, ${
      JSON.parse(localStorage.currentLoggedIn).username
    }! </p>`;
    modal.addCloseEventListener();
    User.renderProfile();
  };

  static renderProfile() {
    if (localStorage.currentLoggedIn) {
      modal.main.innerHTML += `
              <img src="https://www.larvalabs.com/cryptopunks/cryptopunk100.png"\>
              <h1> My comments </h1>`;
      let comments = user.comments.forEach((comment) => {
        modal.main.innerHTML += `
                <p>${comment.text}, Punk Number: ${
          parseInt(comment.punk_id) - 1
        }</p>
                `;
      });
      modal.main.innerHTML += `<h1> My likes </h1>`;
      let likes = user.likes.forEach((like) => {
        modal.main.innerHTML += `<li> ${parseInt(like.punk_id) - 1} ❤️</li>`;
      });
    } else {
      showLoginForm();
    }
  }
}
