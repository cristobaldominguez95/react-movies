import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-item has-text-white">
        <Link to="/" className="has-text-white">
            ReactMovies
        </Link>
      </div>
    </nav>
  );
}

export default Header;
