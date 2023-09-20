
import { useState } from 'react';
import './QuestionsSet.css';

const questions = [
  
    {
        id: 1,
        text: 'What is a pointer?',
        answer: 'A pointer is a variable that stores the memory address of another variable. It allows direct manipulation of memory and is often used for dynamic memory allocation and passing data structures between functions.',
      },
      {
        id: 2,
        text: 'What is the difference between pass-by-value and pass-by-reference?',
        answer: 'Pass-by-value involves making a copy of a variable and passing the copy to a function. Pass-by-reference involves passing a reference (i.e., memory address) to a variable to a function. With pass-by-reference, the function can modify the original variable directly, while with pass-by-value, any modifications made to the copy will not affect the original variable.',
      },
      {
        id: 3,
        text: 'What is a template in C++?',
        answer: 'A template is a mechanism that allows generic programming in C++. Templates allow you to write functions and classes that can work with any data type, rather than having to write separate versions for each data type.',
      },
      {
        id: 4,
        text: 'What is a virtual function in C++?',
        answer: 'A virtual function is a function that is declared in a base class and can be overridden by a derived class. When a virtual function is called, the appropriate version for the actual object being operated on is called, rather than the version in the base class.',
      },
      {
        id: 5,
        text: 'What is the difference between a struct and a class in C++?',
        answer: 'In C++, a struct is essentially the same as a class, with the exception that members are public by default in a struct, while they are private by default in a class. Structs are often used to represent simple data structures, while classes are used for more complex data structures and object-oriented programming.',
      },
      {
        id: 6,
        text: 'What is operator overloading in C++?',
        answer: 'Operator overloading is the practice of defining how an operator (such as +, -, *, /) behaves when applied to a class or struct. For example, you could define how the + operator works for a custom matrix class.',
      },
      {
        id: 7,
        text: 'What is a reference in C++?',
        answer: 'A reference is an alias for a variable. Like a pointer, a reference allows you to manipulate the value of a variable indirectly. However, references cannot be null, and they cannot be reassigned to refer to a different variable after they have been initialized.',
      },
      {
        id: 8,
        text: 'What is a const pointer in C++?',
        answer: 'A const pointer is a pointer whose value (i.e., the memory address it points to) cannot be changed. However, the value of the variable pointed to by the pointer can still be changed (unless the variable itself is also declared as const).',
      },
      {
        id: 9,
        text: 'What is the difference between a shallow copy and a deep copy in C++?',
        answer: 'A shallow copy of an object copies all of the member variables of the object, but does not create new copies of any objects pointed to by the member variables. A deep copy of an object creates new copies of all objects pointed to by the member variables, recursively.',
      },
      {
        id: 13,
        text: 'What is a reference variable in C++?',
        answer: 'A reference variable is an alias for an already existing variable. It allows you to access the same memory location using different names.',
      },
      {
        id: 14,
        text: 'What is the difference between a pointer and a reference in C++?',
        answer: 'A pointer is a variable that holds the memory address of another variable, while a reference is an alias for an already existing variable. Pointers can be re-assigned to point to different memory locations, while references cannot be re-assigned to refer to a different variable.',
      },
      {
        id: 15,
        text: 'What is operator overloading in C++?',
        answer: 'Operator overloading is the process of defining a new meaning for an existing operator. This can be done for most of the C++ operators such as +, -, *, /, etc.',
      },
      {
        id: 16,
        text: 'What is inheritance in C++?',
        answer: 'Inheritance is a feature of object-oriented programming that allows you to create a new class from an existing class. The new class, called the derived class, inherits all the properties and methods of the existing class, called the base class.',
      },
      {
        id: 17,
        text: 'What is polymorphism in C++?',
        answer: 'Polymorphism is a feature of object-oriented programming that allows objects of different types to be treated as if they are the same type. This can be achieved through function overloading, operator overloading, and virtual functions.',
      },
      {
        id: 18,
        text: 'What is a constructor in C++?',
        answer: 'A constructor is a special member function that is called automatically when an object is created. It is used to initialize the object’s data members and allocate any resources needed by the object.',
      },
      {
        id: 19,
        text: 'What is a destructor in C++?',
        answer: 'A destructor is a special member function that is called automatically when an object is destroyed. It is used to deallocate any resources allocated by the object’s constructor and perform any cleanup tasks that are necessary.',
      },
      {
        id: 20,
        text: 'What is a namespace in C++?',
        answer: 'A namespace is a way to group related declarations together in C++. It is used to avoid naming conflicts between different parts of a program.',
      },
      {
        id: 21,
        text: 'What is an abstract class in C++?',
        answer: 'An abstract class is a class that cannot be instantiated. It is used as a base class for other classes and provides a common interface for its derived classes.',
      },
      {
        id: 22,
        text: 'What is a virtual function in C++?',
        answer: 'A virtual function is a member function that is declared in a base class and can be overridden by its derived classes. It is used to achieve polymorphism in C++.',
      },
      {
        id: 23,
        text: 'What is the difference between a class and a struct in C++?',
        answer: 'In C++, a class and a struct are essentially the same, except that the default access modifier for members of a struct is public, while the default access modifier for members of a class is private.',
      },
      {
        id: 24,
        text: 'What is the difference between pass by value and pass by reference in C++?',
        answer: 'When you pass an argument to a function by value, a copy of the argument is made and used inside the function. When you pass an argument by reference, a reference to the original argument is used inside the function, and any changes made to the argument inside the function will also affect the original argument.',
      },
      {
        id: 25,
        text: 'What is a template in C++?',
        answer: 'A template is a way to write generic code in C++. It allows you to define a function or a class that can work with different types of data without having to rewrite the code for each data type.',
      }

  
  
];

function CppquestionsSet() {
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

export default CppquestionsSet;
