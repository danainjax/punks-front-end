class User {
    static all = [];
    constructor(data){
      console.log(data)
        this.data = data,
        this.comments = data.comments
        this.constructor.all.push(this)
    }


    static handleUsernameSubmit(e) {
        e.preventDefault();
        modal.close()
        api.findOrCreateUser(e.target.username.value).then((data) => {
        console.log(data)
          user = data
          new User(data)
          console.log(User.all)
          modal.main.innerHTML = ""
          clear();
          Ticker.getTicker()
          Punk.getPunks()
          User.greetUser()
          
        });
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
              let comments = user.comments.map(comment => {
                modal.main.innerHTML += `
                <p>${comment.text}</p>
                `
              
              })
            modal.main.innerHTML += `<h1> My punks </h1>`
            //  modal.close()
            } else {
              showLoginForm()
            }
            
          }

          

        }




