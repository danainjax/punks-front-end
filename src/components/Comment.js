class Comment {
  static all = [];
  constructor(data) {
    this.data = data;
    this.constructor.all.push(this);
  }

  static addComment() {
    const commentButton = document.querySelector("#comment");
    console.log(commentButton)
      commentButton.addEventListener("click", (e) => {
        e.preventDefault()
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `<form>
                    <label for="comment">Comment:</label><br>
                    <input type="textarea" id="comment" name="comment"><br>
                    <label for="username">User name:</label><br>
                    <input type="text" id="username" name="username">
                    <input type="submit" value="Submit">
                </form>
                `;
       document.querySelector('.show').append(commentDiv);
       
      });
    }



  }

