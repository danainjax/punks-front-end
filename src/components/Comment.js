class Comment {
  // static all = [];
  constructor(data, punk) {
    this.data = data;
    this.punk = punk;
    // console.log(punk)
    // this.constructor.all.push(this);
    // Punk.all.push(this)
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
      console.log(newComment)
      api
        .createComment(newComment)
        .then((comment) => {
          console.log(comment)
          // console.log(newComment.punk_id, this.comment.punk)
          this.handleComment(comment);
         const thisPunk = Punk.all.find(punk => punk.id == comment.punk_id)
         console.log(thisPunk)
          
          Punk.all = []
          api.fetchPunks().then((punks) => {
            punks.forEach((punk) => new Punk(punk))
          })
        })
          // Punk.renderCommentData(comment)
          
        
    })
  }
  
  

  render = (comment) => {
    const {id, text, user_id} = this.data
    console.log(text)
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p>${text}</p>
    </div>`
   
    
  }

  static handleComment = (comment) => {
    new Comment(comment);
    console.log(comment.text)
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <p>${comment.text}</p>
    </div>`
    // Punk.renderCommentData()
    
    document.querySelector("form").reset();
    

  };


  
  
}
