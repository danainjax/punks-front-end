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
        console.log(user)
         if (e.target.innerText == "♡") {
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
            Punk.all = []
            api.fetchPunks().then((punks) => {
            punks.forEach((punk) => new Punk(punk))
            Punk.renderIndex()
          })
          }) 
          
        } else {
          alert('Already liked')
        }
        
      //   } else {
      //     e.target.innerText = "♡";
      //   }
      // ;
    })
  }
  }
}