class Like {
  
  constructor(data) {
    this.data = data;
    
  }

  static addLike = () => {
    const likes = document.querySelectorAll(".likes");
    for (const like of likes) {
      
      like.addEventListener("click", (e) => {
        e.preventDefault();
        
          const newLike = {
            punk_id: e.target.dataset.id,
            user_id: user.id,
            count: true,
          };

          new Like(like);
          api.createLike(newLike).then((resp) => {
            console.log(resp);
            const likes = document.getElementById("all-likes");
            Punk.all = [];
            api.fetchPunks().then((punks) => {
              punks.forEach((punk) => new Punk(punk));
              const likedPunks = Punk.all.filter(punk => punk.likes.length != 0)
              console.log(likedPunks)
              Punk.renderIndex();
              // const myLikedPunks = likedPunks.filter(punk => punk.likes.data.user_id == user.id) 
              //   console.log(myLikedPunks)
                
              })
              // console.log(e.target.innerText);
              // if (e.target.innerText == "♡") {
              //   e.target.innerText = "🖤";
              
              }
            )
            
          });
        } 
      ;
    }
  };

