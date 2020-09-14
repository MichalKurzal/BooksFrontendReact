import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/about" component={About} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
