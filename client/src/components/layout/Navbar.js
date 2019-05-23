import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-white">
      <h1>
        <Link to="/">
          <i className="fas fa-utensils" /> The Chef Connection
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="!#">Chefs</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
