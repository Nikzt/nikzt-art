import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="nikzt-logo">
                nikzt.<span className="highlight-text">art</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/commissions">Commissions</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;