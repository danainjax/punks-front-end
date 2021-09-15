class ApiService {
    constructor(api) {
        this.api = api;
    }

//fetch 1 , Punks Index // Read
    fetchPunks = () => fetch(this.api + "/punks").then(response => response.json())

// fetch 2, Create a User //Create

    findOrCreateUser = (username) => {
        return fetch(this.api + "/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username}),
        })
        .then(response => response.json())
    }

//fetch 3, Create a Comment, POST to db, Create
    createComment = (newComment) => {
        let user_id = user.id
        return fetch(this.api + "/comments",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        })
        .then(response => response.json())
    }

    // _____________________________ MVP ___________________________________
//fetch 4, Delete a comment, Destroy in db, Delete
    deleteComment = (comment) => {
        return fetch(this.api + `/comments/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json()) // or res.json()
        .then(data => console.log(data))
        }
        
    
//fetch 5 , Delete a user, Destroy in db, Delete



//fetch 6, Search for a Punk by Number

    PunkByNumber = (id) => fetch(this.api + `/punks/${id}`).then(response => response.json())


}

