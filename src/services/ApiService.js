class ApiService {
    constructor(api) {
        this.api = api;
    }


    fetchPunks = () => fetch(this.api + "/punks").then(response => response.json())

    PunkByNumber = (id) => fetch(this.api + `/punks/${id}`).then(response => response.json())


}