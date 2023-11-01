# Stack Overflow Clone

This website is a question forum and made to look like Stack Overflow.

## Technologies used:

- React js
- Node js
- Express js
- MongoDb
- Redux
- Json web token and more

## How to use?

Fork and clone the repo and follow the below steps:

- Install Node.js
- Open client and server directories in VS code
- Install Dependencies using the command

```
npm install
```

- Start App using the command

```
npm start
```







// flow of authentication 


Frontend Flow:

User Interaction: The user interacts with the frontend of your web application, such as by entering their email and password in a sign-in form and clicking a "Sign In" button.

Request to Backend: When the user submits the sign-in form, the frontend sends an HTTP POST request to the backend server. This request typically includes the user's credentials (e.g., email and password) in the request body.

Waiting for Response: The frontend waits for a response from the server.

Backend Flow:

Routing: The backend server receives the HTTP POST request and routes it to the appropriate endpoint, which corresponds to the sign-in functionality.

Controller: The request is processed by the controller responsible for user sign-in (in your case, the "login" controller).

Authentication: In the controller, the server checks if a user with the provided email exists in the database.

Password Verification: If a user with the provided email exists, the server uses the bcrypt.compare method to compare the provided password with the hashed password stored in the database.

Token Generation: If the provided password is correct, the controller generates a JSON Web Token (JWT) for the authenticated user. The JWT typically includes user information (e.g., email and user ID) and an expiration time.

Response: The controller sends a response back to the frontend. If the sign-in is successful, the response typically includes the JWT and possibly other user data.

Frontend Flow (Continued):

Token Storage: The frontend receives the response from the server. If the sign-in is successful, the JWT is typically stored securely on the client-side (e.g., in a browser's local storage or a cookie) for future use.

Authorized Requests: With the JWT in hand, the user can now make authorized requests to protected routes by including the JWT in the request headers, often in the Authorization header.

Backend Flow (Continued):

Middleware: For protected routes, the server uses authentication middleware to check the validity of the JWT included in the request's Authorization header.

Route Access Control: If the token is valid, the middleware attaches user information (e.g., user ID) to the request object, allowing the route handler to access that information.

Route Handling: The route handler for the protected route processes the request and provides the appropriate response.

This flow ensures that users can securely sign in, and once authenticated, they can access protected routes with their JWT, which is verified by the server using the middleware