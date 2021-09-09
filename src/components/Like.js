class Like {
  constructor(data) {
    this.data = data;
  }

  addLike() {
    const likes = document.querySelectorAll(".likes");
    for (const like of likes) {
      like.addEventListener("onmouseover", (e) => {
        console.log(e.target.dataset.id);
        if (e.target.innerText == "♡") {
          e.target.innerText = "🖤";
        } else {
          e.target.innerText = "♡";
        }
      });
    }
  }
}
