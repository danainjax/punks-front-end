class User {
    static all = [];
    constructor(data){
      
        this.data = data,
        this.comments = data.comments
        this.likes = data.likes
        this.punks = data.punks
        this.constructor.all.push(this)
    }

    static handleUsernameSubmit(e) {
        e.preventDefault();
        modal.close()
        
          api.findOrCreateUser(e.target.username.value).then((data) => {
              user = data
              new User(data)
              modal.main.innerHTML = ""
              clear();
              Ticker.getTicker()
              Punk.getPunks()
              User.greetUser()
              
            })
        } 
        
        
      

      static greetUser = () => {
        modal.open()
          modal.main.innerHTML = `<p id="greet-user">Welcome, ${user.username}! </p>`
          modal.addCloseEventListener()
          User.renderProfile()
          }


          static renderProfile()  {
            if (user.username != undefined){
              modal.main.innerHTML += `
              <img src="https://www.larvalabs.com/cryptopunks/cryptopunk100.png"\>
              <h1> My comments </h1>`
              let comments = user.comments.forEach(comment => {
                modal.main.innerHTML += `
                <p>${comment.text}</p>
                `
              })
              modal.main.innerHTML += `<h1> My punks </h1>
              `
                let punks = user.punks.forEach(punk => {
                 if (user.username != "Larva Labs"){
                  modal.main.innerHTML += `
                  <p>${punk.id}</p>
                  `
                }
                 } )
                 
                modal.main.innerHTML += `<h1> My likes </h1>
                `
              
            
            //  modal.close()
            } else {
              showLoginForm()
            }
            
          }

          

        }




