import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const currentPath = useLocation().pathname;
    return (
        <nav className="navbar">
            <div className="nikzt-logo">
                nikzt.<span className="highlight-text">art</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className={currentPath === "/" && "on-link-page"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/commissions" className={currentPath === "/commissions" && "on-link-page"}>
                        Commissions
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" className={currentPath === "/gallery" && "on-link-page"}>
                        Gallery
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;