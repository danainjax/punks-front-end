class ApiService {
    constructor(api) {
        this.api = api;
    }


    fetchPunks = () => fetch(this.api + "/punks").then(response => response.json())

    soloPunk = () => fetch(this.api + "/punks/${id}").then(response => response.json())


}