import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-white">
      <h1>
        <a href="dashboard.html">
          <i className="fas fa-utensils" /> The Chef Connection
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Chefs</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
