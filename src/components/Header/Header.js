import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  marginBottom: '20px'
};

function Header() {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation" style={headerStyle}>
      <div className="navbar-item has-text-white">
        <Link to="/" className="has-text-white">
            ReactMovies
        </Link>
      </div>
    </nav>
  );
}

export default Header;
