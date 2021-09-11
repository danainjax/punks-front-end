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
       const commentForm = document.querySelector('form')
       commentForm.addEventListener("submit", (e) => {
         e.preventDefault()
         console.log('shazam')
       })
        
      }
      
      

    }
  

