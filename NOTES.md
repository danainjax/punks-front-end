Project build notes

1. Diagram the 3 fetch calls needed
2. Decide on a second model, (likes, comments, etc. - pick 1 to start)
3. Code the second model to implement the has-many relationship
4. Build an adpater/service class to handle the api calls.
5. Hit MVP asap, then refactor and branch to add each new feature. One at a time.

Requirements:

[ ] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[ ] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[ ] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

[ ] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).