class Comment {
  constructor(data, punk) {
    this.data = data;
    this.punk = punk;
  }

  static showForm() {
    const commentButton = document.querySelector("#comment");
    commentButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.commentHtml();
    });
  }

  static commentHtml = () => {
    const commentDiv = document.createElement("div");
    commentDiv.innerHTML = `<form id="comment-form">
            <label for="comment">Comment:</label><br>
            <input type="text" id="comment" name="comment"><br>
            <input type="submit" id="submit-comment" value="Submit Comment">
        </form>`;
    const showPage = document.querySelector(".show");
    showPage.append(commentDiv);
    this.submitForm();
  };

  static submitForm() {
    const id = document.querySelector("#show").dataset.id;
    const submitButton = document.querySelector("#submit-comment");
    const commentForm = document.querySelector("form");

    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      const newComment = {
        text: commentForm.comment.value,
        punk_id: id,
        user_id: user.id,
      };

      api.createComment(newComment).then((comment) => {
        this.handleComment(comment);
        Punk.all = [];
        api.fetchPunks().then((punks) => {
          punks.forEach((punk) => new Punk(punk));
        });
        // const thisPunk = Punk.all.find((punk) => punk.id == comment.punk_id);
        // console.log(thisPunk);
        // console.log(thisPunk.comments.length);
        // thisPunk.comments.push(comment);
        // console.log(thisPunk.comments.length);

        // thisPunk.comments.forEach(comment => console.log(comment.data.text))
      });
    });
  }

  render = (comment) => {
    const { id, text, user_id } = this.data;
    console.log(text);
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p>${text}</p>
    </div>`;
  };

  static handleComment = (comment) => {
    new Comment(comment);
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p>${comment.text}</p>
    </div>`;
    document.querySelector("form").reset();
  };
}
