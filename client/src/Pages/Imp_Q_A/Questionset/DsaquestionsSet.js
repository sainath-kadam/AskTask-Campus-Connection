
import { useState } from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './QuestionsSet.css';

const questions = [
    {
        id: 1,
        text: 'What is a data structure?',
        answer: 'A data structure is a way of organizing and storing data in a computer program so that it can be accessed and used efficiently.',
      },
      {
        id: 2,
        text: 'What is an algorithm?',
        answer: 'An algorithm is a step-by-step procedure for solving a problem or accomplishing a task.',
      },
      {
        id: 3,
        text: 'What is the time complexity of an algorithm?',
        answer: 'The time complexity of an algorithm is a measure of how much time it takes to run as the input size grows.',
      },
      {
        id: 4,
        text: 'What is a linked list?',
        answer: 'A linked list is a data structure that consists of a sequence of nodes, each of which contains a value and a reference to the next node in the sequence.',
      },
      {
        id: 5,
        text: 'What is a stack?',
        answer: 'A stack is a data structure that stores a collection of elements and operates on them according to a last-in, first-out (LIFO) policy.',
      },
      {
        id: 6,
        text: 'What is a queue?',
        answer: 'A queue is a data structure that stores a collection of elements and operates on them according to a first-in, first-out (FIFO) policy.',
      },
      {
        id: 7,
        text: 'What is a binary tree?',
        answer: 'A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.',
      },
      {
        id: 8,
        text: 'What is a hash table?',
        answer: 'A hash table is a data structure that stores a collection of key-value pairs and operates on them according to a hash function, which maps each key to a unique index in an array.',
      },
      {
        id: 9,
        text: 'What is a graph?',
        answer: 'A graph is a data structure that consists of a set of vertices (or nodes) and a set of edges connecting those vertices.',
      },
      {
        id: 10,
        text: 'What is the difference between a breadth-first search and a depth-first search?',
        answer: 'A breadth-first search visits all the vertices at a given depth in a graph before moving on to vertices at the next depth, while a depth-first search explores as far as possible along each branch before backtracking.',
      },
      {
        id: 11,
        text: 'What is a binary search?',
        answer: 'A binary search is a search algorithm that works on sorted arrays. It begins by comparing the middle element of the array with the target value. If the middle element is not equal to the target value, the search continues in the lower or upper half of the array, depending on whether the target value is less than or greater than the middle element.',
      },
      {
        id: 12,
        text: 'What is a heap?',
        answer: 'A heap is a data structure that is typically implemented as a binary tree. It has two main properties: (1) the value of each node is greater than or equal to the value of its children (for a max heap) or less than or equal to the value of its children (for a min heap), and (2) the tree is complete, meaning that all levels of the tree are filled except possibly for the last one, which is filled from left to right.',
      },
      {
        id: 13,
        text: 'What is a trie?',
        answer: 'A trie is a tree data structure used to store a collection of strings. Each node in the trie represents a prefix or complete string. The edges represent the characters that connect the nodes, and each node stores a boolean value to indicate whether it represents a complete string or not.',
      },
      {
        id: 14,
        text: 'What is dynamic programming?',
        answer: 'Dynamic programming is a technique for solving problems by breaking them down into smaller subproblems and solving each subproblem only once. The solutions to the subproblems are then combined to solve the original problem.',
      },
      {
        id: 15,
        text: 'What is a sorting algorithm?',
        answer: 'A sorting algorithm is an algorithm that puts elements of a list in a certain order. Common sorting algorithms include bubble sort, insertion sort, selection sort, merge sort, and quicksort.',
      },
      {
        id: 16,
        text: 'What is a searching algorithm?',
        answer: 'A searching algorithm is an algorithm that looks for a particular value in a collection of data. Common searching algorithms include linear search, binary search, and hash-based search.',
      },
      {
        id: 17,
        text: 'What is the difference between a stack and a queue?',
        answer: 'A stack is a data structure that operates on elements according to a last-in, first-out (LIFO) policy, while a queue operates on elements according to a first-in, first-out (FIFO) policy.',
      },
      {
        id: 18,
        text: 'What is a dynamic array?',
        answer: 'A dynamic array is an array that can grow or shrink in size during the execution of a program. It is implemented as a fixed-size array with a capacity parameter that determines how much space is currently available. When the capacity is reached, the array is resized and copied to a larger block of memory.',
      },
      {
        id: 19,
        text: 'What is a binary tree traversal?',
        answer: 'A binary tree traversal is a process of visiting all the nodes in a binary tree in a certain order. Common traversal algorithms include in-order traversal, pre-order traversal, and post-order traversal.',
      },
      {
        id: 21,
        text: 'What is memoization?',
        answer: 'Memoization is a technique of caching the results of expensive function calls and returning the cached result when the same inputs occur again.',
      },
      {
        id: 22,
        text: 'What is the time complexity of a binary search?',
        answer: 'The time complexity of a binary search is O(log n).',
      },
      {
        id: 23,
        text: 'What is a dynamic programming algorithm?',
        answer: 'A dynamic programming algorithm solves problems by breaking them down into smaller subproblems and solving each subproblem only once. The solutions to the subproblems are then combined to solve the original problem. Dynamic programming is often used when a problem has overlapping subproblems.',
      },
      {
        id: 24,
        text: 'What is the difference between a binary search tree and a binary heap?',
        answer: 'A binary search tree is a binary tree where the value of each node is greater than all the values in its left subtree and less than all the values in its right subtree. A binary heap is a binary tree where the value of each node is greater than or equal to the value of its children (for a max heap) or less than or equal to the value of its children (for a min heap).',
      },
      {
        id: 25,
        text: 'What is a linked list?',
        answer: 'A linked list is a data structure consisting of a sequence of nodes, where each node contains a value and a reference to the next node in the sequence. Unlike an array, a linked list does not have a fixed size, and its elements can be easily inserted or removed without reallocation or reorganization of the entire structure.',
      },

   

  
  
];

function DsaquestionsSet() {
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

export default DsaquestionsSet;
