import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <h1 className="title has-text-primary is-size-4 has-text-weight-bold">GREENPATH</h1>
          </figure>
        </Link>
      </div>
      {/*
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      */}


      <div className="navbar-end">
        <a className="navbar-item button is-medium is-primary is-rounded" href="mailto:info@greenpathus.com" target="_blank" rel="noopener noreferrer">
          Get in touch
        </a>
      </div>

    </div>
  </nav>
);

export default Navbar;
