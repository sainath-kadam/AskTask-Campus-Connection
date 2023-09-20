
import { useState } from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './QuestionsSet.css';

const questions = [
  {
    id: 1,
    text: 'What does CSS stand for?',
    answer: 'CSS stands for Cascading Style Sheets.',
  },
  {
    id: 2,
    text: 'What is the syntax for applying styles to an HTML element using CSS?',
    answer: 'To apply styles to an HTML element using CSS, you use the following syntax: \nselector {\n  property: value;\n}',
  },
  {
    id: 3,
    text: 'What is the box model in CSS?',
    answer: 'The box model is a design concept in CSS that refers to the way elements are structured and spaced within a web page. It consists of four main parts: margin, border, padding, and content.',
  },
  {
    id: 4,
    text: 'What is a CSS selector?',
    answer: 'A CSS selector is a pattern used to select one or more HTML elements for styling. It can target elements based on their tag name, class, ID, attributes, and more.',
  },
  {
    id: 5,
    text: 'What is the difference between padding and margin in CSS?',
    answer: 'Padding is the space between an element\'s content and its border, while margin is the space between an element\'s border and the surrounding elements.',
  },
  {
    id: 6,
    text: 'What is a CSS class?',
    answer: 'A CSS class is a way to apply a set of styles to one or more HTML elements. Classes are defined using a period (.) followed by a name.',
  },
  {
    id: 7,
    text: 'What is the difference between a class and an ID in CSS?',
    answer: 'A class can be applied to multiple HTML elements, while an ID can only be applied to one. IDs are defined using a pound (#) followed by a name.',
  },
  {
    id: 8,
    text: 'What is the float property in CSS?',
    answer: 'The float property is used to specify whether an element should be floated to the left or right of its container. Floated elements are removed from the normal document flow and can wrap around other elements.',
  },
  {
    id: 9,
    text: 'What is the difference between inline and block elements in CSS?',
    answer: 'Inline elements are those that flow with the text, such as links and images. Block elements, on the other hand, take up the full width of their container and create a new line after themselves.',
  },
  {
    id: 10,
    text: 'What is a pseudo-class in CSS?',
    answer: 'A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). Examples include :hover, :active, and :focus.',
  },
  {
    id: 11,
    text: 'What is the difference between the display and visibility properties in CSS?',
    answer: 'The display property controls whether an element is visible or not, and also how it flows with other elements on the page. The visibility property, on the other hand, only controls whether an element is visible or not, but does not affect layout.',
  },
  {
    id: 12,
    text: 'What is the difference between absolute and relative positioning in CSS?',
    answer: 'Relative positioning refers to positioning an element relative to its normal position in the document flow, while absolute positioning refers to positioning an element relative to its nearest positioned ancestor.',
  },
  {
    id: 13,
    text: 'What is the box model in CSS?',
    answer: 'The box model is a way of representing the layout of an HTML element in CSS, which includes the content area, padding, border, and margin.',
  },
  {
    id: 14,
    text: 'What is the difference between inline and block elements?',
    answer: 'Inline elements flow within a line of text and only take up as much width as necessary, while block elements create a new line and take up the full width available to them.',
  },
  {
    id: 15,
    text: 'What is the "float" property in CSS?',
    answer: 'The "float" property in CSS is used to move an element to the left or right of its container, allowing other elements to wrap around it.',
  },
  {
    id: 16,
    text: 'What is the "display" property in CSS?',
    answer: 'The "display" property in CSS is used to control how an HTML element should be displayed. Common values include "block", "inline", and "inline-block".',
  },
  {
    id: 17,
    text: 'What is the "position" property in CSS?',
    answer: 'The "position" property in CSS is used to control the positioning of an element on a web page. Common values include "static", "relative", "absolute", and "fixed".',
  },
  {
    id: 18,
    text: 'What is the "z-index" property in CSS?',
    answer: 'The "z-index" property in CSS is used to control the stacking order of HTML elements that overlap. Elements with a higher "z-index" value will be displayed on top of elements with a lower value.',
  },
  {
    id: 19,
    text: 'What is the "box-sizing" property in CSS?',
    answer: 'The "box-sizing" property in CSS is used to control how the total width and height of an HTML element is calculated, including its padding and border. Common values include "content-box" and "border-box".',
  },
  {
    id: 20,
    text: 'What is a CSS selector?',
    answer: 'A CSS selector is a pattern used to select one or more HTML elements based on their attributes, classes, or IDs. Examples include element selectors, class selectors, and ID selectors.',
  },
  {
    id: 21,
    text: 'What is the "cascade" in CSS?',
    answer: 'The "cascade" in CSS refers to the way that multiple stylesheets and inline styles are combined to determine the final style of an HTML element.',
  },
  {
    id: 22,
    text: 'What is the "pseudo-class" in CSS?',
    answer: 'A "pseudo-class" in CSS is a keyword that is added to a selector to specify a state or condition that an element can be in. Examples include :hover, :active, and :focus.',
  },
  {
    id: 23,
    text: 'What is a CSS framework?',
    answer: 'A CSS framework is a collection of pre-written CSS code that is designed to make it easier to create responsive and visually appealing web pages. Examples include Bootstrap, Foundation, and Bulma.',
  },


  
  
];

function CssquestionsSet() {
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

export default CssquestionsSet;
