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
        console.log(e.target.dataset.id-1);
        if (e.target.innerText == "♡") {
          e.target.innerText = "🖤";
          const newLike = {
            punk_id:  e.target.dataset.id,
            user_id: user.id,
            count: 1

          }
          new Like(like)
          api.createLike(newLike).then(console.log)
        } else {
          e.target.innerText = "♡";
        }
      });
    }
  }
}
