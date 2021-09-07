class Like {
    constructor(data){
        this.data = data
       
      }


    static addLike() {
        const likes = document.getElementsByClassName(".likes")
            likes.forEach(like => {
                console.log(like)
                like.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(e.target)
                console.log(e.target.dataset.id)
            })
          })
    }
   






}

