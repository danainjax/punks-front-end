class User {
    static all = [];
    constructor(data){
        this.data = data,
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
          }

          

        }




