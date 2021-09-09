class Comment {
  static all = [];
  constructor(data) {
    this.data = data;
    this.constructor.all.push(this);
  }

  static viewComments() {
    const punkCards = document.querySelectorAll(".punk-card");
    for (const card of punkCards) {
      card.addEventListener("click", (e) => {
        e.preventDefault()
        const commentsContainer = document.querySelector('#comments-container');
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `<form>
                    <label for="comment">Comment:</label><br>
                    <input type="textarea" id="comment" name="comment"><br>
                    <label for="username">User name:</label><br>
                    <input type="text" id="username" name="username">
                    <input type="submit" value="Submit">
                </form>
                `;
        commentsContainer.append(commentDiv);
        Punk.showPunk(e)
      });
    }
  }
}
