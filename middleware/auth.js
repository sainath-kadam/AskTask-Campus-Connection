import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;





















// // Import the `jsonwebtoken` library for working with JSON Web Tokens.
// import jwt from "jsonwebtoken";

// // Define a middleware function named `auth` that takes the request (`req`), response (`res`), and next function as parameters.
// const auth = (req, res, next) => {
//   try {
//     // Extract the JWT token from the `Authorization` header in the request by splitting the header value on space and taking the second part.
//     const token = req.headers.authorization.split(" ")[1];

//     // Verify and decode the JWT token using the provided secret key (from the environment variable `JWT_SECRET`).
//     // The result is stored in `decodeData`.
//     let decodeData = jwt.verify(token, process.env.JWT_SECRET);

//     // Set the `userId` property on the request object to the user's ID extracted from the decoded JWT data.
//     // The optional chaining operator is used to handle cases where `decodeData` may be undefined.
//     req.userId = decodeData?.id;

//     // Call the `next` function to allow the request to proceed to the next middleware or route handler.
//     // This indicates that the token was successfully validated.
//     next();
//   } catch (error) {
//     // Catch and handle any errors that occur during the verification or decoding of the JWT token.
//     // Log the error to the console for debugging.
//     console.log(error);
//   }
// };

// // Export the `auth` middleware function.
// export default auth;
