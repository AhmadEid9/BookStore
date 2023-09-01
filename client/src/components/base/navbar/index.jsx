import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from'./book.png';


const Navbar = () => {
    
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img className="navbar-logo" src={Logo} alt="Logo"/></Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
      <div>
        {false ? 
            <Link to="/profile" className="navbar-link">Profile</Link>
            : 
            <Link to="/login" className="navbar-link">Login</Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;