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
    const id = parseInt(document.querySelector("#show").dataset.id) + 1;
    //this is because the Punks are numbered 0 - 9999 in the api and in the real world, but in rails db they are 1 - 10000
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
        User.all[0].comments.push(comment);
        const thisPunk = comment.punk_id;
        Punk.find(thisPunk).comments.push(comment);
        document.querySelector("form").reset();
        const commentInstance = new Comment(comment)
        commentInstance.render()
      });
    });
  }

  render = () => {
    const { id, text, user_id, punkId } = this.data;
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p data-punk=${parseInt(
        punkId - 1
      )} data-id=${id} >${text} <button id="delete-comment" data-punk=${
      parseInt(punkId) - 1
    } data-id=${id}>X</button></p> 
    </div>`;
    const deleteButtons = Array.from(
      document.querySelectorAll("#delete-comment")
    );
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", (e) => {
        const commentToDelete = e.target.closest("p");
        const deleteId = commentToDelete.dataset.id;
        commentToDelete.style.display = "none";
        api.deleteComment(deleteId);
      });
    });
  };

  // static handleComment = (comment) => {
  //   console.log(comment);
  //   document.querySelector(".container").innerHTML += `
  //   <div class="card">
  //   <p data-punk=${parseInt(comment.punk_id - 1)} data-id=${comment.id} >${
  //     comment.text
  //   } <button id="delete-comment" data-punk=${
  //     parseInt(comment.punk_id) - 1
  //   } data-id=${comment.id}>X</button></p> 
  //   </div>`;
  //   document.querySelector("form").reset();
  //   const deleteButtons = Array.from(
  //     document.querySelectorAll("#delete-comment")
  //   );
  //   deleteButtons.forEach((deleteButton) => {
  //     deleteButton.addEventListener("click", (e) => {
  //       const commentToDelete = e.target.closest("p");
  //       const deleteId = commentToDelete.dataset.id;
  //       commentToDelete.style.display = "none";
  //       api.deleteComment(deleteId);
  //     });
  //   });
  // };
}
