Project build notes

Before review:

2. Back button is not refreshing the comments, need to make the back button work the same as Punks event listener

3. Don't let the comment box appear more than once, check what event we are listening for


[ ] Update Readmes on both repos for assessment
[ ] Another blog post
[ ] Updated Video of development work since submitted

<!-- #FIND A PUNK
    For further development, save to User account as a favorite. -->


<!-- #COMMENTS-
 For further development:
        Pseudo CODE:
        COMMENTS currently appear below the Punk info, move them to another HTML element after using a modal to enter a comment. Either use the back of the card or some element that slides out.
[ ] When comments are added, instead of adding to bottom of show page, pop a modal or some other html element
[ ] When you add the comments to the show view, flip the card over. -->


#LIKES-
[x] Increment likes based on click
[ ] User can like a punk only once
[x] Punk can have many likes. Show the total number of likes 
[X] Make the heart stay filled in when navigating to another view.


*Fetch calls:


[X] 1. R - Read, Punks displaying on page, fetch to localhost:3000/punks/index

    api.fetchPunks()

[X] 2. C - create a new comment
    Create a comment object on submit of button, pass the object to the fetch POST to the backend, then show the updated Punk card with comments

    api.createComment(newComment)

        [X]  Need to fetch the punks info from db again after creating a new comment, info not updating unless page refreshes 
            Note, it was working, just wasn't clearing out the Punk.all [] and was viewing the incorrect data. Solved by clearing innerHTML of the div and then clearing static all before calling Punk.getPunks()

[X] 3. Create a User

    api.findOrCreateUser(e.target.username.value)

[X] 4. Create a like 
    
    api.createLike(newLike)

[X] 5. R - Read, Find PunkByNumber, fetch to localhost:3000/punks/id
    Coded the backend so that the json is rendered to punks/id
    Send to show page. Create new punk if it does not exist in the database, render it, if it does.

    api.PunkByNumber(punkId)

[X] 6. D - delete a comment
    api.deleteComment(deleteId)

 [X]   7. R- Punk with the Most Likes 
    api.mostLikes()

<!-- For Further Development:
[ ]    Create a Contract/Sale -->

B. MODELS
    [X] a.  ***Comments - currently working on Comments
    [X] b. User 
    [X] c. Like
    [X] d. Ticker
    [X] e. Modal
    [X] f. Punk
    <!-- [ ] d. Buy/Sell/Trade/Contract -->
    

[X] C. Build an adpater/service class to handle the api calls.
    ApiService.js
[X] D. Hit MVP asap, then refactor and branch to add each new feature. One at a time.
[X] E. Add a Navbar
[X] F. Add API data to show current crypto prices, ETH, bitcoin, etc with graphic and #
<!-- [ ] G. Add info pages, to show what CryptoPunks are and why they are important, define what a NFT is, etc. (Christie's article, NY Times article) -->


Requirements:

[X] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[X] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.
    [X] User has_many :comments
    [X] Punk has_many :comments
    Punk has_many :likes
    [X] Comments belong to :user, :punk
    User has_many :likes
    Like belongs to :user, :punk

[X] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

    *See Fetch calls above (Create Like, Create User, Read Punk, Create Comment, Read PunkById, Delete Comment)

JavaScript
[X] Use classes and functions to organize your code into reusable pieces.
[X] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[X] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).