class Like {
    constructor(data){
        this.data = data
       
      }


    static addLike() {
        console.log('we are hittinhg the addLike')
        const like = document.getElementsById("likes")
        console.log(like)
        like.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(e.target)
                console.log(e.target.dataset.id)
            })
          
    }
   






}

