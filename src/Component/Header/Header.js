import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='site-name'>
                <h1>Code-krieg</h1>
            </div>
            <div className='links-container'>
                <Link to='home'>Home</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='blog'>Blog</Link>
                <Link to='about'>About</Link>
            </div>


        </nav>
    );
};

export default Header;