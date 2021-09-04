class Punk {
    static all = []
    constructor(punk) {
        this.punktype = punk.punktype;
        this.image = punk.image;
        this.accessories = punk.accessories;
        this.id = punk.id;
        Punk.all.push(this);
    }

     static getPunks() {

        return fetch('http://localhost:3000/punks')
        .then(response => response.json())
        .then(punks => {
            console.log(punks)
             })
            }
  











}