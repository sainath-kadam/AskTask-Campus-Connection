
import { useState } from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './QuestionsSet.css';

const questions = [
  {
    id: 1,
    text: 'What is Express.js?',
    answer:
      'Express.js is a popular web application framework for Node.js. It provides a set of features for building web and mobile applications with Node.js, including routing, middleware, and templating.',
  },
  {
    id: 2,
    text: 'How do you install Express.js?',
    answer:
      'You can install Express.js using npm, the package manager for Node.js. Simply run the command "npm install express" in your project directory.',
  },
  {
    id: 3,
    text: 'What is routing in Express.js?',
    answer:
      'Routing is the process of determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method. In Express.js, routing is handled using the built-in app.get(), app.post(), app.put(), app.delete(), and other similar methods.',
  },
  {
    id: 4,
    text: 'What is middleware in Express.js?',
    answer:
      'Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform tasks such as parsing the request body, logging requests, and adding headers to the response. In Express.js, middleware is added using the app.use() method.',
  },
  {
    id: 5,
    text: 'What is the purpose of the static middleware in Express.js?',
    answer:
      'The static middleware in Express.js is used to serve static files, such as images, CSS, and JavaScript files. It is added using the app.use() method with the express.static() function, which specifies the directory where the static files are located.',
  },
  {
    id: 6,
    text: 'What is templating in Express.js?',
    answer:
      'Templating in Express.js is the process of dynamically generating HTML pages using a template engine. Popular template engines for Express.js include EJS, Handlebars, and Pug (formerly Jade).',
  },
  {
    id: 7,
    text: 'What is middleware chaining in Express.js?',
    answer:
      'Middleware chaining in Express.js is the process of calling multiple middleware functions in sequence for a single route. Middleware functions are called in the order that they are added using the app.use() method. Middleware chaining is useful for adding functionality such as authentication and error handling to routes.',
  },
  {
    id: 8,
    text: 'What is the difference between app.get() and app.post() in Express.js?',
    answer:
      'app.get() and app.post() are two of the most commonly used routing methods in Express.js. app.get() is used to handle GET requests, which retrieve data from the server, while app.post() is used to handle POST requests, which submit data to the server. GET requests are typically used for retrieving data, while POST requests are used for creating or updating data on the server.',
  },
  {
    id: 9,
    text: 'What is the purpose of the body-parser middleware in Express.js?',
    answer:
      'The body-parser middleware in Express.js is used to parse the request body, which is often sent in JSON or URL-encoded format. It is added using the app.use() method and provides middleware functions for parsing JSON and URL-encoded request bodies. Without the body-parser middleware, you would need to manually parse the request body using the built-in Node.js "querystring" module.',
  },
  {
    id: 10,
    text: 'What is middleware in Express?',
    answer:
      'Middleware is a function that has access to the request and response objects and can perform actions on them. Middleware functions can be chained together and are executed in the order they are defined. They can be used for tasks such as logging, authentication, error handling, and more.',
  },
  {
    id: 11,
    text: 'What is routing in Express?',
    answer:
      'Routing refers to the process of determining which function or handler to execute for a given HTTP request. In Express, you can define routes using the app.get(), app.post(), app.put(), and app.delete() methods, among others.',
  },
  {
    id: 12,
    text: 'What is a route parameter in Express?',
    answer:
      'A route parameter is a dynamic value that is part of the URL path for a particular route. Route parameters are defined in the route path using a colon (:) followed by a parameter name. They can be accessed in the request object using the req.params object.',
  },
  {
    id: 13,
    text: 'What is the use of the next() function in Express middleware?',
    answer:
      'The next() function is used to pass control to the next middleware function in the chain. If next() is not called within a middleware function, the request will be left hanging and the client will not receive a response.',
  },
  {
    id: 14,
    text: 'What is the difference between app.route() and router.route() in Express?',
    answer:
      'app.route() creates a chainable route handler for a single route, while router.route() creates a chainable route handler for a group of routes that share a common prefix.',
  },
  {
    id: 15,
    text: 'What is the difference between app.use() and app.all() in Express?',
    answer:
      'app.use() is used to specify middleware functions that will be executed for every incoming request, regardless of the HTTP method. app.all() is used to specify middleware functions that will be executed for any HTTP method on a particular route.',
  },
  {
    id: 16,
    text: 'What is the purpose of the res.locals object in Express?',
    answer:
      'The res.locals object is used to pass data between middleware functions and view templates. It is an object that exists only for the current request/response cycle and is not shared between requests. Data can be added to res.locals in one middleware function and accessed in another.',
  },
  {
    id: 17,
    text: 'What is the difference between res.send() and res.json() in Express?',
    answer:
      'res.send() is used to send a response with a plain text message or an HTML page, while res.json() is used to send a response with a JSON object. res.json() automatically sets the Content-Type header to application/json, while res.send() requires you to set the Content-Type header manually if you are sending JSON data.',
  },
  {
    id: 18,
    text: 'What is the purpose of the app.locals object in Express?',
    answer:
      'The app.locals object is used to store application-level data that is available throughout the life of the application. This data can be accessed in any middleware function or route handler using the req.app.locals object.',
  },
  {
    id: 19,
    text: 'What is middleware in Express?',
    answer:
      'Middleware refers to functions that are executed during the request-response cycle of an Express application. They can be used to modify the request and response objects, terminate the request-response cycle, or call the next middleware function in the stack.',
  },
  {
    id: 20,
    text: 'What are route parameters in Express?',
    answer:
      'Route parameters are values that are part of the URL path in an Express route. They are identified by a colon followed by a parameter name, and can be accessed in the route handler function via the request object.',
  },
  {
    id: 21,
    text: 'What is the purpose of Express router?',
    answer:
      'The Express router is used to create modular, mountable route handlers for an Express application. It allows you to break your routes into smaller, more manageable chunks, and provides a way to organize your application logic.',
  },
  {
    id: 22,
    text: 'What is a view engine in Express?',
    answer:
      'A view engine is a templating language that is used to generate HTML markup in an Express application. Some popular view engines for Express include EJS, Handlebars, and Pug.',
  },
  {
    id: 23,
    text: 'What is the purpose of the Express static middleware?',
    answer:
      'The Express static middleware is used to serve static assets, such as HTML files, images, and stylesheets, from a directory. It can be used to serve a single file or an entire directory, and can be configured with options such as the root directory and cache control headers.',
  },
  {
    id: 24,
    text: 'What is error handling middleware in Express?',
    answer:
      'Error handling middleware in Express is used to catch errors that occur during the request-response cycle and handle them appropriately. It can be used to log errors, return custom error messages to clients, or terminate the request-response cycle with an error status code.',
  },
  {
    id: 25,
    text: 'What is the difference between app.get() and app.use() in Express?',
    answer:
      'app.get() is used to define a route handler for GET requests on a specific route, while app.use() is used to define middleware functions that are executed for all requests. app.use() can be used to mount middleware at a specific path, or to mount middleware globally for all requests.',
  },
];

function EquestionsSet() {
  const [expandedId, setExpandedId] = useState(null);

  const handleClick = (panelId) => {
    if (expandedId === panelId) {
      setExpandedId(null);
    } else {
      setExpandedId(panelId);
    }
  };

  return (
    <div className='container'>
    <div className="accordion-container">
      {questions.map((question) => (
        <div className="accordion" key={question.id}>
          <div className="accordion-header" onClick={() => handleClick(question.id)}>
            <span className="accordion-header-icon">{expandedId === question.id ? '-' : '+'}</span>
            <h2 className="accordion-header-text" style={{fontSize: '18px', fontWeight: 'bold'}}>{question.text}</h2>
          </div>
          {expandedId === question.id && (
            <div className="accordion-body" style={{textAlign: 'center'}}>
              <p style={{fontSize: '16px'}}>{question.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default EquestionsSet;
