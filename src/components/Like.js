class Like {
  static all = []
  constructor(data) {
    this.data = data;
    this.constructor.all.push(this)
  }

  static addLike = () => {
    const likes = document.querySelectorAll(".likes");
    for (const like of likes) {
      like.addEventListener("click", (e) => {
        e.preventDefault()
        
        // if (e.target.innerText == "♡") {
          e.target.innerText = "🖤";
          const newLike = {
            punk_id:  e.target.dataset.id,
            user_id: user.id,
            count: 1

          }
          new Like(like)
          api.createLike(newLike).then(resp => {
            console.log(resp)
            const likes = document.getElementById('all-likes')
            console.log(e.target.previousElementSibling.innerText = `${e.target.previousElementSibling.dataset.id ++} likes`)
            // likes.innerText = `${likes} +1 likes`
          }) 
      //   } else {
      //     e.target.innerText = "♡";
      //   }
      // ;
    })
  }
  }
}