import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import BookImg from '../study.png';
import '../App.css';

function BookDetail({ match }) {
  useEffect(() => {
    getBooks();
    console.log(match);
    // eslint-disable-next-line
  }, []);

  const [book, setbook] = useState({});

  const getBooks = async () => {
    const data = await fetch(`http://localhost:3000/books/${match.params.id}`);
    const dataJSON = await data.json();
    console.log(dataJSON);
    setbook(dataJSON);
  };

  return (
    <div className="books">
      <Card className="card">
        <Card.Img variant="top" src={BookImg} />
        <Card.Body>
          <Card.Title>{book.titel}</Card.Title>
          <Card.Title>{book.autor}</Card.Title>
          <Card.Title>Seiten : {book.seiten}</Card.Title>
          <Card.Title>Erscheinungsjahr : {book.Erscheinungsjahr}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookDetail;
