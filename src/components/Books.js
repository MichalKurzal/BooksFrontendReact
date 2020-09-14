import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import BookImg from '../study.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Books() {
  useEffect(() => {
    getBooks();
  }, []);

  const [books, setbooks] = useState([]);

  const getBooks = async () => {
    try {
      const data = await fetch('http://localhost:3000/books');
      const dataJSON = await data.json();
      console.log(dataJSON);
      setbooks(dataJSON);
    } catch {
      console.log('Error! No connection to API');
    }
  };
  return (
    <div className="books">
      {books.map((book) => (
        <React.Fragment key={book.id}>
          <Link className="cardLink" to={`/books/${book.id}`}>
            <Card className="card">
              <Card.Img variant="top" src={BookImg} />
              <Card.Body>
                <Card.Title>{book.titel}</Card.Title>
                <Card.Title>{book.autor}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Books;
