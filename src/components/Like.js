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
        e.preventDefault();

        const newLike = {
          punk_id: parseInt(e.target.dataset.id) +1,
          user_id: user.id,
          count: true,
        };

        new Like(like);
        api.createLike(newLike).then((resp) => {
          User.all[0].likes.push(resp)
          Punk.all = [];
          api.fetchPunks().then((punks) => {
            punks.forEach((punk) => new Punk(punk));
            Punk.renderIndex();
            
          });
          
        });
      });
    }
  };
}
