class ApiService {
    constructor(api) {
        this.api = api;
    }


    fetchPunks = () => fetch(this.api + "/punks").then(response => response.json())

    soloPunk = () => fetch(this.api + `/punks/${e.target.dataset.id}`).then(response => response.json())


}