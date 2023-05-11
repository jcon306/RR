import React from 'react' 
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='title'>Title Goes Here</div>
            <a href='/' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/Contact'>Contact</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar