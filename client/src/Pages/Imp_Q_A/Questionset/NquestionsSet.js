
import { useState } from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './QuestionsSet.css';

const questions = [
  {
    id: 1,
    text: 'What is Node.js?',
    answer:
      'Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It allows you to run JavaScript code on the server-side and build scalable network applications with ease.',
  },
  {
    id: 2,
    text: 'What are some key features of Node.js?',
    answer:
      'Node.js is non-blocking and event-driven, which makes it highly efficient for handling large amounts of data and requests. It also has a rich library of modules and packages available through NPM, making it easy to build and maintain applications.',
  },
  {
    id: 3,
    text: 'How does Node.js handle asynchronous code?',
    answer:
      'Node.js uses an event loop to handle asynchronous code. It delegates blocking I/O operations to separate threads, allowing the main thread to continue running and processing other requests. When the I/O operation is complete, the event loop places the callback function in the call stack for execution.',
  },
  {
    id: 4,
    text: 'What is the purpose of NPM?',
    answer:
      'NPM (Node Package Manager) is a package manager for Node.js that allows you to easily install and manage third-party packages and libraries. It also provides a way to manage your own packages and dependencies in your projects.',
  },
  {
    id: 5,
    text: 'How can you handle errors in Node.js?',
    answer:
      'Node.js provides the built-in try-catch statement for handling synchronous errors, and the error-first callback pattern for handling asynchronous errors. You can also use external libraries like Node.js’s built-in assert module or popular error-handling libraries like Sentry or Bugsnag.',
  },
  {
    id: 6,
    text: 'What are the differences between require and import in Node.js?',
    answer:
      'Require and import are both used to include modules in Node.js, but they have different syntax and behavior. Require is a function that is used to load modules, while import is a statement that is used to declare dependencies. Import allows for more granular control over what is being imported, while require is more flexible and can load both CommonJS and ES modules.',
  },
  {
    id: 7,
    text: 'What is middleware in Node.js?',
    answer:
      'Middleware is a function that is executed in between the client request and the server response in a Node.js application. It can be used to perform tasks such as authentication, logging, and error handling. Middleware functions can be chained together to create a pipeline of operations that the request must pass through before reaching the server.',
  },
  {
    id: 8,
    text: 'What is the Event Loop in Node.js?',
    answer:
      'The Event Loop is a key feature of Node.js that allows it to handle large numbers of concurrent connections. It is a mechanism for scheduling and executing JavaScript code in an event-driven, non-blocking manner. When a new event occurs, such as a new client connection or a timer expiring, it is added to the event queue, and the Event Loop processes each event one at a time.',
  },
  {
    id: 9,
    text: 'What is the difference between callbacks and Promises in Node.js?',
    answer:
      'Both callbacks and Promises are used to handle asynchronous operations in Node.js. Callbacks are functions that are passed as arguments to other functions and are executed when the operation is complete. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation, and allow for more readable and maintainable code by using a chainable syntax. Promises also provide better error handling and the ability to handle multiple asynchronous operations in parallel.',
  },
  {
    id: 10,
    text: 'What is the purpose of the package.json file in Node.js?',
    answer:
      'The package.json file is a metadata file that contains information about a Node.js project and its dependencies. It includes information such as the project name, version, author, and license, as well as a list of dependencies that the project requires to run. The package.json file is used by the npm package manager to install, update, and manage dependencies for the project.',
  },
  {
    id: 11,
    text: 'What is NPM?',
    answer:
      'NPM (Node Package Manager) is a package manager for Node.js packages. It allows you to easily install and manage third-party packages, as well as create and manage your own packages.',
  },
  {
    id: 12,
    text: 'What is a callback function in Node.js?',
    answer:
      'A callback function in Node.js is a function that is passed as an argument to another function and is executed once that function completes its task. Callback functions are commonly used for asynchronous operations in Node.js.',
  },
  {
    id: 13,
    text: 'What is the difference between require() and import in Node.js?',
    answer:
      'require() is a function used to import modules in CommonJS format, while import is used to import modules in ECMAScript modules format. require() is synchronous, while import is asynchronous.',
  },
  {
    id: 14,
    text: 'What is the purpose of the package.json file in Node.js?',
    answer:
      'The package.json file is used to define the properties of a Node.js package, including its name, version, dependencies, and other metadata. It also allows you to define scripts to run various tasks, such as building or testing the package.',
  },
  {
    id: 15,
    text: 'What is middleware in Node.js?',
    answer:
      'Middleware in Node.js refers to functions that are executed in between the client request and the server response. It can be used for a variety of purposes, such as logging, authentication, and error handling.',
  },
  {
    id: 16,
    text: 'What is the event loop in Node.js?',
    answer:
      'The event loop in Node.js is a mechanism that allows Node.js to handle multiple requests and events concurrently. It uses an event-driven, non-blocking I/O model, which allows Node.js to be highly scalable and efficient.',
  },
  {
    id: 17,
    text: 'What is the purpose of the cluster module in Node.js?',
    answer:
      'The cluster module in Node.js allows you to run multiple Node.js processes that can share the same server port. This can improve the performance and reliability of your Node.js applications, as well as take advantage of multi-core CPUs.',
  },
  {
    id: 18,
    text: 'What is a stream in Node.js?',
    answer:
      'A stream in Node.js is an abstract interface for working with streaming data, such as reading from or writing to a file or network connection. Streams can be used for handling large amounts of data or data that is received or sent in real-time.',
  },
  {
    id: 19,
    text: 'What is the difference between EventEmitter and callback functions in Node.js?',
    answer:
      'EventEmitter is a class in Node.js that allows you to emit and handle custom events in your applications. Callback functions, on the other hand, are used for handling asynchronous operations. While both can be used for similar purposes, EventEmitter provides a more flexible and powerful way to handle events in your applications.',
  },
  {
    id: 20,
    text: 'What is the purpose of the net module in Node.js?',
    answer:
      'The net module in Node.js provides an asynchronous network API for creating TCP and UNIX domain socket servers and clients. It can be used for creating custom network protocols or for working with existing protocols, such as HTTP and WebSocket.',
  },
];

function NquestionsSet() {
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

export default NquestionsSet;
