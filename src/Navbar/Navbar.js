import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='title'>Title Goes Here</div>
      <a href='/' className='toggle-button' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
