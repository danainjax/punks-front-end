Project build notes

Merged branch- refactor for MVP

[ ] When you add the comments to the show view, flip the card over.
[ ] Don't let the comment box appear more than once, check what event we are listening for
[ ] Remove call to login event listener when we re-render the punks
[ ] Build a log out // Determine if login persists beyond page refresh


*Fetch calls:


[X] 1. R - Read, Punks displaying on page, fetch to localhost:3000/punks/index

        ApiService.fetchPunks()

[X]   2. C - create a new comment
    Create a comment object on submit of button, pass the object to the fetch POST to the backend, then show the updated Punk card with comments

        ApiService.createComment()

[ ]  Need to fetch the punks info from db again after creating a new comment, info not updating unless page refreshes

[X]  3. Create a User

    ApiService.findOrCreateUser()



[ ]    Create a like 

[ ]    Create a Contract/Sale

    3. R - Read, Find PunkByNumber, fetch to localhost:3000/punks/id
    Coded the backend so that the json is rendered to punks/id
    Send to show page. Create new punk if it does not exist in the database, render it, if it does.

    4. U - update/edit a comment, like, or sale?
    5. D - delete a comment, like

B. Decide on a second model, (likes, comments, etc. - pick 1 to start)
    [X] a.  ***Comments - currently working on Comments
    [X] b. User 
    [ ] c. Like
    [ ] d. Buy/Sell/Trade/Contract
    

[X] C. Build an adpater/service class to handle the api calls.
    ApiService.js
[X] D. Hit MVP asap, then refactor and branch to add each new feature. One at a time.
E. Add a Navbar
F. Add API data to show current crypto prices, ETH, bitcoin, etc with graphic and #
G. Add info pages, to show what CryptoPunks are and why they are important, define what a NFT is, etc. (Christie's article, NY Times article)


HTML
    1. Modal
    2. Flip card
    3. Background animation
    4. Nav bar

Requirements:

[ ] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[X] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.
    Users has_many :comments
    Punks has_many :comments
    Comments belong to :user, :punk

[X] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

    *See Fetch calls above

JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).