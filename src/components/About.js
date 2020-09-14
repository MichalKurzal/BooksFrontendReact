import React from 'react';
import Card from 'react-bootstrap/Card';
import BookImg from '../study.png';
import '../App.css';

function About() {
  return (
    <div className="books">
      <Card className="cardAbout">
        <Card.Img className="cardIMG" variant="top" src={BookImg} />
        <Card.Body>
          <Card.Title>Books React Frontend</Card.Title>
          <Card.Title>Autor : Michal Kurzal</Card.Title>
          <Card.Title>Erscheinungsjahr : 2020</Card.Title>
          <Card.Text>
            In order to run this App you have to start booksAPI. Icons made by Freepik.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
