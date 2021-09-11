class Comment {
  static all = [];
  constructor(data) {
    this.data = data;
    this.constructor.all.push(this);
  }

  static showForm() {
    const commentButton = document.querySelector("#comment");
      commentButton.addEventListener("click", (e) => {
        e.preventDefault()
        ;
        this.commentHtml()
       
      })
    }

      static commentHtml =  () => {
        const commentDiv = document.createElement("div")
        commentDiv.innerHTML = 
        `<form id="comment-form">
            <label for="comment">Comment:</label><br>
            <input type="text" id="comment" name="comment"><br>
            <label for="username">User name:</label><br>
            <input type="text" id="username" name="username">
            <input type="submit" value="Submit Comment">
        </form>`;
       const showPage = document.querySelector('.show')
       showPage.append(commentDiv)
       this.submitForm()
       
       }
        
      

      static submitForm() {
        console.log(this)
        const id = document.querySelector('#show').dataset.id
        const commentForm = document.querySelector("#comment-form")
        commentForm.addEventListener("click", (e) => {
         e.preventDefault()
         console.log(commentForm.comment.value)
         const newComment = {
           text: commentForm.comment.value,
           punk_id: id

          }
          api.createComment(newComment).then(comment => {
            new Comment(comment).renderComment()
          })

    }) 

    }
    renderComment = () => {
      console.log("put comment here")
    }
  

  }