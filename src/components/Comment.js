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
        console.log(e.target.closest(".punk-card").dataset.id);
        const commentsP = e.target.closest("button");
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML += `<form>
                    <label for="comment">Comment:</label><br>
                    <input type="textarea" id="comment" name="comment"><br>
                    <label for="username">User name:</label><br>
                    <input type="text" id="username" name="username">
                    <input type="submit" value="Submit">
                </form>
                `;
        commentsP.append(commentDiv);
      });
    }
  }
}
