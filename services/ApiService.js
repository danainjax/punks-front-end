class ApiService {
  constructor(api) {
    this.api = api;
  }

  //fetch 1 , Punks Index // Read
  fetchPunks = () =>
    fetch(this.api + "/punks").then((response) => response.json());

  // fetch 2, Create a User //Create

  findOrCreateUser = (username) => {
    return fetch(this.api + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    }).then((response) => response.json());
  };

  //fetch 3, Create a Comment, POST to db, Create
  createComment = (newComment) => {
    let user_id = user.id;
    return fetch(this.api + "/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then((response) => response.json());
  };

  // _____________________________ MVP ___________________________________

  //fetch 4, Search for a Punk by Number

  PunkByNumber = (punkId) =>
    fetch(this.api + `/punks/${punkId}`).then((response) => response.json());

  // fetch 5, create a new like (create)

  createLike = (newLike) => {
    return fetch(this.api + "/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLike),
    }).then((response) => response.json());
  };

  //fetch 6, Delete a comment, Destroy in db, Delete
  // deleteComment = (comment) => {
  //     return fetch(this.api + `/comments/${id}`,{
  //         method: 'DELETE',
  //     })
  //     .then(res => res.json()) // or res.json()
  //     .then(data => console.log(data))
  //     }

  //fetch 7, Edit a comment

  //fetch 8 , Delete a user, Destroy in db, Delete
}
