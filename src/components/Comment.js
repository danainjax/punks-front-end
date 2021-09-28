class Comment {
  static all = [];
  constructor(data) {
    this.data = data;
    this.constructor.all.push(this);
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
      api
        .createComment(newComment)
        .then((comment) => {
          console.log(comment)
          this.handleComment(comment);
    });
    })
  }
  

  render = (comment) => {
    console.log(this.data.text)
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p>${this.data.text}</p>
    </div>`
   
    
  }

  static handleComment = (comment) => {
    new Comment(comment);
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p>${comment.text}</p>
    </div>`
    
    document.querySelector("form").reset();
    

  };


  
  
}
