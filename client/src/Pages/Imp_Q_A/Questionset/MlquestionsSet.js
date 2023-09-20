
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
    id: 1,
    text: 'What is Machine Learning?',
    answer: 'Machine Learning is a subset of Artificial Intelligence (AI) that involves building algorithms that can automatically learn from data and make predictions or decisions based on that data.'
  },
  {
    id: 2,
    text: 'What are the different types of Machine Learning?',
    answer: 'The three main types of Machine Learning are supervised learning, unsupervised learning, and reinforcement learning.'
  },
  {
    id: 3,
    text: 'What is supervised learning?',
    answer: 'Supervised learning is a type of Machine Learning where the model is trained on a labeled dataset, where the inputs are paired with their corresponding outputs, with the goal of predicting the output for new, unseen inputs.'
  },
  {
    id: 4,
    text: 'What is unsupervised learning?',
    answer: 'Unsupervised learning is a type of Machine Learning where the model is trained on an unlabeled dataset, where the inputs do not have corresponding outputs, with the goal of finding patterns or relationships in the data.'
  },
  {
    id: 5,
    text: 'What is reinforcement learning?',
    answer: 'Reinforcement learning is a type of Machine Learning where an agent learns to make decisions in an environment by performing actions and receiving rewards or punishments based on those actions.'
  },
  {
    id: 6,
    text: 'What are some popular Machine Learning algorithms?',
    answer: 'Some popular Machine Learning algorithms include Linear Regression, Logistic Regression, Decision Trees, Random Forests, Support Vector Machines (SVMs), and Neural Networks.'
  },
  {
    id: 7,
    text: 'What is overfitting in Machine Learning?',
    answer: 'Overfitting occurs when a Machine Learning model is trained too well on the training data and starts to fit the noise in the data instead of the underlying pattern, leading to poor performance on new, unseen data.'
  },
  {
    id: 8,
    text: 'What is underfitting in Machine Learning?',
    answer: 'Underfitting occurs when a Machine Learning model is too simple to capture the underlying pattern in the data, leading to poor performance on both the training data and new, unseen data.'
  },
  {
    id: 9,
    text: 'What is cross-validation in Machine Learning?',
    answer: 'Cross-validation is a technique used in Machine Learning to assess the performance of a model by splitting the data into multiple subsets, training the model on some subsets and testing it on the others, and then averaging the results.'
  },
  {
    id: 10,
    text: 'What is feature engineering in Machine Learning?',
    answer: 'Feature engineering is the process of selecting and transforming the raw data to create features that can be used as inputs for a Machine Learning model, with the goal of improving the model performance.'
  },
  {
    id: 11,
    text: 'What is a confusion matrix in Machine Learning?',
    answer: 'A confusion matrix is a table used to evaluate the performance of a classification model by comparing the predicted labels with the true labels, and counting the number of true positives, true negatives, false positives, and false negatives.'
  },
  {
    id: 12,
    text: 'What is machine learning?',
    answer: 'Machine learning is a branch of artificial intelligence that allows software applications to learn from the data and become more accurate at predicting outcomes without human intervention.',
  },
  {
    id: 13,
    text: 'What are the three types of machine learning?',
    answer: 'The three types of machine learning are supervised learning, unsupervised learning, and reinforcement learning.',
  },
  {
    id: 14,
    text: 'What is supervised learning?',
    answer: 'Supervised learning is a machine learning technique where a model is trained on labeled data, and then used to make predictions on new, unlabeled data.',
  },
  {
    id: 15,
    text: 'What is unsupervised learning?',
    answer: 'Unsupervised learning is a machine learning technique where a model is trained on unlabeled data, and the model must discover patterns or structure in the data.',
  },
  {
    id: 16,
    text: 'What is reinforcement learning?',
    answer: 'Reinforcement learning is a machine learning technique where a model learns by interacting with an environment. The model receives rewards for certain actions, and learns to maximize its rewards over time.',
  },
  {
    id: 17,
    text: 'What is overfitting in machine learning?',
    answer: 'Overfitting occurs when a model is too complex, and fits the training data too closely. This can lead to poor performance on new, unseen data.',
  },
  {
    id: 18,
    text: 'What is underfitting in machine learning?',
    answer: 'Underfitting occurs when a model is too simple, and is not able to capture the underlying patterns in the data. This can lead to poor performance on both the training and test data.',
  },
  {
    id: 19,
    text: 'What is a decision tree?',
    answer: 'A decision tree is a tree-like model that is used for decision-making in machine learning. Each node represents a decision or attribute, and each branch represents a possible outcome.',
  },
  {
    id: 20,
    text: 'What is a neural network?',
    answer: 'A neural network is a machine learning model that is inspired by the structure and function of the human brain. It consists of layers of interconnected nodes, and is used for tasks such as image and speech recognition.',
  },
  {
    id: 21,
    text: 'What is deep learning?',
    answer: 'Deep learning is a subfield of machine learning that uses neural networks with many layers. It is used for tasks such as image and speech recognition, and natural language processing.',
  },
  {
    id: 22,
    text: 'What is data preprocessing?',
    answer: 'Data preprocessing is the process of cleaning and transforming raw data before it is used for machine learning. This can include tasks such as data cleaning, normalization, and feature engineering.',
  },
  {
    id: 23,
    text: 'What is cross-validation?',
    answer: 'Cross-validation is a technique used for evaluating the performance of machine learning models. It involves splitting the data into multiple folds, training the model on one fold, and evaluating its performance on the other folds.',
  },

];

function MlquestionsSet() {
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

export default MlquestionsSet;
