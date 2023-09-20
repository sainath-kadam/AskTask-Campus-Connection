

// import { useState } from 'react';
// import './QuestionsSet.css';

// const questions = [
//   {
//     id: 1,
//     text: 'What is React?',
//     answer:
//       'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
//   },
//   {
//     id: 2,
//     text: 'What are the key features of React?',
//     answer:
//       'React provides a virtual DOM, which allows for efficient updates and rendering of components. It also supports server-side rendering, one-way data binding, and a declarative programming model.',
//   },
//   {
//     id: 3,
//     text: 'What is JSX?',
//     answer:
//       'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to create and manage React components, as you can include HTML-like tags and attributes directly in your code.',
//   },
// ];

// function RquestionsSet() {
//   const [expandedId, setExpandedId] = useState(null);

//   const handleClick = (panelId) => {
//     if (expandedId === panelId) {
//       setExpandedId(null);
//     } else {
//       setExpandedId(panelId);
//     }
//   };

//   return (
//     <div className="accordion-container">
//       {questions.map((question) => (
//         <div className="accordion" key={question.id}>
//           <div className="accordion-header" onClick={() => handleClick(question.id)}>
//             <span className="accordion-header-icon">{expandedId === question.id ? '-' : '+'}</span>
//             <h2 className="accordion-header-text">{question.text}</h2>
//           </div>
//           {expandedId === question.id && (
//             <div className="accordion-body">
//               <p>{question.answer}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RquestionsSet;

import { useState } from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './QuestionsSet.css';

const questions = [
  {
  id: 1,
  text: 'What is React?',
  answer:
  'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
  },
  {
  id: 2,
  text: 'What are the key features of React?',
  answer:
  'React provides a virtual DOM, which allows for efficient updates and rendering of components. It also supports server-side rendering, one-way data binding, and a declarative programming model.',
  },
  {
  id: 3,
  text: 'What is JSX?',
  answer:
  'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to create and manage React components, as you can include HTML-like tags and attributes directly in your code.',
  },
  {
  id: 4,
  text: 'What is the difference between a controlled and uncontrolled component in React?',
  answer:
  'A controlled component is a component that renders form elements whose values are controlled by React. The state of the form element is managed by React and is updated when the user types or selects a value. An uncontrolled component, on the other hand, is a component that renders form elements whose values are not controlled by React. The state of the form element is managed by the DOM itself.',
  },
  {
  id: 5,
  text: 'What is the difference between props and state in React?',
  answer:
  'Props are read-only data that are passed to a component by its parent. They are used to customize the behavior of a component. State, on the other hand, is mutable data that is managed by the component itself. It represents the current state of the component and can change over time in response to user actions or other events.',
  },
  {
  id: 6,
  text: 'What is the difference between a functional component and a class component in React?',
  answer:
  'A functional component is a JavaScript function that returns a React element. It is simpler and easier to read than a class component, and it does not have its own state. A class component, on the other hand, is a JavaScript class that extends the React.Component class. It has its own state and can define its own methods.',
  },
  {
  id: 7,
  text: 'What is the virtual DOM in React?',
  answer:
  'The virtual DOM is a lightweight copy of the actual DOM that React uses to keep track of changes to the user interface. When the state of a component changes, React compares the current virtual DOM with the previous one, and updates only the parts of the actual DOM that need to be changed. This approach is more efficient than updating the entire DOM every time the state of a component changes.',
  },
  {
  id: 8,
  text: 'What is the purpose of keys in React?',
  answer:
  'Keys are used by React to identify which items in a list have changed, been added, or been removed. They help React to update the list efficiently by only changing the parts of the list that have actually changed.',
  },
  {
    id: 11,
    text: 'What is the difference between state and props in React?',
    answer:
      'State is used to manage the internal state of a component and is private to that component. Props are used to pass data from a parent component to a child component.',
  },
  {
    id: 12,
    text: 'What is the significance of the "key" prop in React?',
    answer:
      'The "key" prop is used by React to identify which items in a list have changed, been added, or been removed. It helps React to optimize the rendering of lists by reducing the number of DOM manipulations that are required.',
  },
  {
    id: 13,
    text: 'What is the purpose of React Router?',
    answer:
      'React Router is a library that allows you to handle routing and navigation in a React application. It allows you to create a single-page application that has multiple views, and to manage the state of your application as the user navigates between those views.',
  },
  {
    id: 14,
    text: 'What is the role of Redux in a React application?',
    answer:
      'Redux is a state management library that is often used in conjunction with React. It allows you to manage the state of your application in a predictable and centralized way, making it easier to debug and test your code.',
  },
  {
    id: 15,
    text: 'What is the difference between a controlled component and an uncontrolled component in React?',
    answer:
      'A controlled component is one where the value of an input element is controlled by the React component, and is stored in state. An uncontrolled component is one where the value of an input element is handled by the browser, and is not stored in state.',
  },
  {
    id: 16,
    text: 'What is the purpose of the shouldComponentUpdate() lifecycle method in React?',
    answer:
      'The shouldComponentUpdate() method is used to optimize the rendering of a component by indicating whether the component needs to be re-rendered or not. By default, React will re-render a component whenever its props or state change, but shouldComponentUpdate() allows you to override this behavior.',
  },
  {
    id: 17,
    text: 'What is the difference between a functional component and a class component in React?',
    answer:
      'A functional component is a simpler way of creating a component in React, and is written as a function that returns JSX. A class component is a more complex way of creating a component, and is written as a JavaScript class that extends the React.Component class.',
  },
  {
    id: 18,
    text: 'What is the purpose of the componentDidMount() lifecycle method in React?',
    answer:
      'The componentDidMount() method is called immediately after a component is mounted (inserted into the tree). It is often used to fetch data from a server, or to set up event listeners and timers.',
  },
  {
    id: 19,
    text: 'What is the purpose of the componentDidUpdate() lifecycle method in React?',
    answer:
      'The componentDidUpdate() method is called immediately after a component is updated (when its props or state change). It is often used to update the state of the component based on the new props, or to update the DOM based on the new state.',
  },
  {
    id: 20,
    text: 'What is the difference between state and props?',
    answer:
      'State is a data structure that represents the current state of a component, and can only be updated using the setState() method. Props, on the other hand, are passed down to a component from its parent and cannot be changed by the component itself.',
  },
  {
    id: 21,
    text: 'What is the role of the virtual DOM in React?',
    answer:
      'The virtual DOM is a lightweight representation of the actual DOM, and React uses it to minimize the number of changes that need to be made to the actual DOM. This makes rendering faster and more efficient.',
  },
  {
    id: 22,
    text: 'What is the significance of the key prop in React?',
    answer:
      'The key prop is used by React to identify which elements in a list have changed, been added, or been removed. It is important for performance optimization and should be unique for each item in the list.',
  },
  {
    id: 23,
    text: 'What is the purpose of refs in React?',
    answer:
      'Refs provide a way to access the DOM nodes or components that are rendered by a React component. They are useful for handling focus, animations, and other imperative tasks that cannot be achieved with a declarative approach.',
  },
  {
    id: 24,
    text: 'What is the difference between controlled and uncontrolled components?',
    answer:
      'Controlled components are those where the value of the component is controlled by React through its state, and changes to the value are handled through callbacks. Uncontrolled components, on the other hand, allow the DOM to control the value of the component, and are typically used when handling user input.',
  },
  {
    id: 25,
    text: 'What is the role of React Router?',
    answer:
      'React Router is a popular library used for client-side routing in React applications. It allows you to map different URLs to different components, and provides a way to handle navigation and URL parameters in a declarative manner.',
  },
  {
    id: 26,
    text: 'What is Redux, and how does it relate to React?',
    answer:
      'Redux is a state management library that provides a centralized store for managing application state. It can be used with any JavaScript framework, but is often used in conjunction with React for complex applications. Redux provides a predictable and maintainable way to manage application state, and works well with React due to its one-way data flow model.',
  },
];

function RquestionsSet() {
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

export default RquestionsSet;
