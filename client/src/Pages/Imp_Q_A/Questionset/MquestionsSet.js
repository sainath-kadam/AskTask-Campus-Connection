
import { useState } from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './QuestionsSet.css';

const questions = [
  {
    id: 1,
    text: 'What is MongoDB?',
    answer:
      'MongoDB is a document-oriented NoSQL database that uses JSON-like documents with optional schemas. It is designed to scale horizontally across multiple servers and provide high availability with automated sharding.',
  },
  {
    id: 2,
    text: 'What is a document in MongoDB?',
    answer:
      'A document in MongoDB is a data structure composed of field-value pairs. The values can be various data types, including other documents, arrays, and embedded documents. Documents are similar to rows in a table in a traditional relational database, but with a more flexible structure.',
  },
  {
    id: 3,
    text: 'What is a collection in MongoDB?',
    answer:
      'A collection in MongoDB is a group of related documents. It is similar to a table in a traditional relational database, but with a more flexible schema. Collections can have multiple indexes to improve query performance.',
  },
  {
    id: 4,
    text: 'What is sharding in MongoDB?',
    answer:
      'Sharding in MongoDB is the process of partitioning data across multiple machines or servers. Each shard is a subset of the total data, and the system balances the data across the shards to improve scalability and performance. MongoDB provides automatic sharding, which means that the system manages the partitioning and balancing of data for you.',
  },
  {
    id: 5,
    text: 'What is replication in MongoDB?',
    answer:
      'Replication in MongoDB is the process of synchronizing data across multiple servers to provide redundancy and improve availability. MongoDB provides automatic replication, which means that data is automatically replicated to multiple servers in a replica set. If a primary server fails, one of the secondary servers can be promoted to become the new primary server.',
  },
  {
    id: 6,
    text: 'What is an index in MongoDB?',
    answer:
      'An index in MongoDB is a data structure that improves the speed of data retrieval operations. Indexes store a small portion of the collection’s data set in an easy-to-traverse form. When an index is created on a collection, MongoDB builds a separate data structure that holds the indexed values and a pointer to the location of the corresponding documents in the collection.',
  },
  {
    id: 7,
    text: 'What is the difference between a primary key and a unique key in MongoDB?',
    answer:
      'A primary key is a field that uniquely identifies each document in a collection. MongoDB automatically adds a unique _id field to each document as its primary key. A unique key is a field that must have a unique value for each document in a collection but is not necessarily the primary key. Unique keys can be created on any field or combination of fields in a collection.',
  },
  {
    id: 8,
    text: 'What is the difference between find() and findOne() in MongoDB?',
    answer:
      'The find() method in MongoDB returns a cursor to the documents that match a query. The cursor can be iterated to retrieve the matching documents. The findOne() method returns only the first document that matches a query.',
  },
  {
    id: 9,
    text: "What is MongoDB?",
    answer: "MongoDB is a document-oriented NoSQL database used for high-volume data storage, high-performance, automatic scaling, and data replication across nodes.",
  },
  {
    id: 10,
    text: "What is a document in MongoDB?",
    answer: "In MongoDB, a document is a basic unit of data, composed of a set of key-value pairs, similar to JSON objects. Documents are stored in collections, which are analogous to tables in relational databases.",
  },
  {
    id: 11,
    text: "What is a collection in MongoDB?",
    answer: "In MongoDB, a collection is a group of MongoDB documents, similar to a table in a relational database. Collections are used to store and manage data in MongoDB.",
  },
  {
    id: 12,
    text: "What is a database in MongoDB?",
    answer: "In MongoDB, a database is a physical container for collections. Each database is associated with a separate set of files on the file system. MongoDB databases are not schema-bound, meaning you can have collections with different sets of fields and documents in a single database.",
  },
  {
    id: 13,
    text: "What is sharding in MongoDB?",
    answer: "Sharding is a MongoDB technique used to horizontally partition data across multiple servers or nodes. It is used to support deployments with large data sets and high throughput operations.",
  },
  {
    id: 14,
    text: "What is replication in MongoDB?",
    answer: "Replication is a MongoDB feature that enables data redundancy by maintaining multiple copies of data across different servers or nodes in a replica set. It is used to provide high availability and automatic failover.",
  },
  {
    id: 15,
    text: "What is indexing in MongoDB?",
    answer: "Indexing is a MongoDB feature used to improve query performance by creating indexes on fields used in queries. Indexes are stored in a separate data structure, allowing for faster query processing and reduced query latency.",
  },
  {
    id: 16,
    text: "What is GridFS in MongoDB?",
    answer: "GridFS is a MongoDB specification used for storing and retrieving large binary files, such as images, videos, and audio files. GridFS stores these files in small chunks, which are then stored as separate documents.",
  },
  {
    id: 17,
    text: "What is the difference between SQL and MongoDB?",
    answer: "SQL is a relational database management system, while MongoDB is a NoSQL document-oriented database. SQL databases use tables to store data, while MongoDB uses collections of documents. SQL databases enforce a schema, while MongoDB documents are schema-less.",
  },
  {
    id: 18,
    text: "What is the role of BSON in MongoDB?",
    answer: "BSON is a binary-encoded serialization of JSON-like documents used in MongoDB. BSON is designed to be lightweight, efficient, and easy to traverse. It is used to reduce data size and improve I/O performance.",
  },
  {
    id: 19,
    text: "What is aggregation in MongoDB?",
    answer: "Aggregation is a MongoDB framework used to process data records and return computed results. It is used to perform operations on groups of data, such as grouping, filtering, sorting, and computing aggregate functions.",
  },
  {
    id: 20,
    text: 'What is MongoDB?',
    answer: 'MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.'
  },
  {
    id: 21,
    text: 'What are the advantages of using MongoDB?',
    answer: 'MongoDB offers several advantages including: dynamic schema, scalability, high availability, automatic sharding, rich query language, indexing, and document-oriented storage.'
  },
  {
    id: 22,
    text: 'What is sharding in MongoDB?',
    answer: 'Sharding is a technique used to horizontally partition data across multiple machines or nodes in a MongoDB cluster. It allows you to scale your database horizontally and handle increasing data loads by adding more nodes to the cluster.'
  },
  {
    id: 23,
    text: 'What is a replica set in MongoDB?',
    answer: 'A replica set is a group of MongoDB servers that maintain the same data set and provide redundancy and high availability. One server is the primary, which receives all write operations, while the others are secondary servers that replicate data from the primary.'
  },
  {
    id: 24,
    text: 'What is the difference between MongoDB and SQL databases?',
    answer: 'MongoDB is a document-oriented NoSQL database, while SQL databases are relational and use tables to store data. MongoDB does not use a schema, while SQL databases use a fixed schema. MongoDB is more flexible and scalable than SQL databases, but SQL databases are better for complex queries and data analysis.'
  },
  {
    id: 25,
    text: 'What is the aggregation framework in MongoDB?',
    answer: 'The aggregation framework is a set of tools used to perform data processing and analysis on data stored in MongoDB. It includes a pipeline of stages, where each stage performs a specific operation on the input data, such as filtering, sorting, grouping, and calculating aggregate values.'
  },


  
];

function MquestionsSet() {
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

export default MquestionsSet;
