class ApiService {
    constructor(api) {
        this.api = api;
    }

//fetch 1 , Punks Index // Read
    fetchPunks = () => fetch(this.api + "/punks").then(response => response.json())

//fetch 2, Create a Comment, POST to db, Create
    createComment = (newComment) => {
        return fetch(this.api + "/comments",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        })
        .then(response => response.json())
    }

//fetch 3, Delete a comment, Destroy in db, Delete
    deleteComent = (comment) => {
        return fetch(this.api + `/comments/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json()) // or res.json()
        .then(data => console.log(data))
        }
        
    


//fetch 4, 

    PunkByNumber = (id) => fetch(this.api + `/punks/${id}`).then(response => response.json())


}