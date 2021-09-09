Project build notes


Fetch calls:


[X] 1. R - Read, Punks displaying on page, fetch to localhost:3000/punks/index

    2. C - create a new comment
    Create a comment object on submit of button, pass the object to the fetch POST to the backend, then show the updated Punk card with comments

    Create a User

    Create a like 

    Create a Contract/Sale

    3. R - Read, Punks show page, fetch to localhost:3000/punks/id
    Coded the backend so that the json is rendered to punks/id
    Need to display the punk in a modal or some other manner so it takes center-stage

    4. U - update a comment, like, or sale?
    5. D - delete a comment, like

B. Decide on a second model, (likes, comments, etc. - pick 1 to start)
    a.  ***Comments - currently working on Comments

    b. User 
    c. Like
    d. Buy/Sell/Trade/Contract
    

C. Build an adpater/service class to handle the api calls.
D. Hit MVP asap, then refactor and branch to add each new feature. One at a time.
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

[ ] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[ ] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

[ ] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).