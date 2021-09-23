Project build notes

1. Work on finding a punk by number
    Grabbing the punkID, creating a new Punk object on the front end, calling getPunks to render the punk on the index page, but the number parsing in the h1 is now breaking, need to find a way to parse the ID without it breaking when the number goes over 100. 
    
    Also need to handle how to save the find a punk past page refresh. Maybe save all the Find A Punks in to the index as well? Currently limiting to 25, But would need to add that punk to the Punk.all.limit(25). Maybe an if statement? or concatenate?

    *IN my DB the punks are stored from id 1 to id 10000, in the api I am seeding the db with, they are stored from 000 - 9999. Need to solve for that.*

2. Move comments to a modal 
3. Add a contract
4. Display the user account page, work on user model
5. Get likes working 'counter cache'

MODAL

Use a modal to [1] Add a comment
Use a modal to [2] Add a contract


[ ] When comments are added, instead of adding to bottom of show page, pop a modal or some other html element

[ ] When you add the comments to the show view, flip the card over.
[ ] Don't let the comment box appear more than once, check what event we are listening for

[ ] Build a log out // Determine if login persists beyond page refresh


*Fetch calls:


[X] 1. R - Read, Punks displaying on page, fetch to localhost:3000/punks/index

        api.fetchPunks()

[X]   2. C - create a new comment
    Create a comment object on submit of button, pass the object to the fetch POST to the backend, then show the updated Punk card with comments

        api.createComment(newComment)

[X]  Need to fetch the punks info from db again after creating a new comment, info not updating unless page refreshes 
    Note, it was working, just wasn't clearing out the Punk.all [] and was viewing the incorrect data. Solved by clearing innerHTML of the div and then clearing static all before calling Punk.getPunks()

[X]  3. Create a User

    api.findOrCreateUser(e.target.username.value)



[ ]    Create a like 

[ ]    Create a Contract/Sale

[X]    4. R - Read, Find PunkByNumber, fetch to localhost:3000/punks/id
    Coded the backend so that the json is rendered to punks/id
    Send to show page. Create new punk if it does not exist in the database, render it, if it does.

    api.PunkByNumber(punkId)

    5. U - update/edit a comment, like, or sale?
    6. D - delete a comment, like

B. Decide on a second model, (likes, comments, etc. - pick 1 to start)
    [X] a.  ***Comments - currently working on Comments
    [X] b. User 
    [ ] c. Like
    [ ] d. Buy/Sell/Trade/Contract
    

[X] C. Build an adpater/service class to handle the api calls.
    ApiService.js
[X] D. Hit MVP asap, then refactor and branch to add each new feature. One at a time.
[X]Add a Navbar
[X] Add API data to show current crypto prices, ETH, bitcoin, etc with graphic and #
G. Add info pages, to show what CryptoPunks are and why they are important, define what a NFT is, etc. (Christie's article, NY Times article)


HTML
[ ]  1. Modal - working on implementing with Comments and Contract
[ ] 2. Flip card - need to solve for ability to flip when I want, not just all the time
[ ] 3. Background animation - optional
[X] 4. Nav bar

Requirements:

[X] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[X] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.
    Users has_many :comments
    Punks has_many :comments
    Comments belong to :user, :punk

[X] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

    *See Fetch calls above

JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[X] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).