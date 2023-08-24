import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavBar.css';

function HomeNavBar() {
  return (
    <header>

      <nav className='navBar'>
        <div className="nav-links">
          <div className="nav-link">
            <Link to="/">
              <h3>YouTube</h3>
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/">
              Home
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HomeNavBar;
