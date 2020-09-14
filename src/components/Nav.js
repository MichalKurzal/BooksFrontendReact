import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function Nav() {
  return (
    <nav>
      <ul className="ul-nav">
        <h3>Books React Frontend</h3>
        <Link className="Link" to="/about">
          <li>About</li>
        </Link>
        <Link className="Link" to="/books">
          <li>Books</li>
        </Link>
        <a className="a" href="https://github.com/MichalKurzal/booksAPI">
          Books API
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
