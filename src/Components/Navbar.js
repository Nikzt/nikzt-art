import React, { useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Menu } from '@material-ui/icons'

const Navbar = () => {
    const currentPath = useLocation().pathname;
    const [showDropdown, setShowDropdown] = useState(false);
    const history = useHistory();

    const onMenuButtonClick = () => {
        setShowDropdown(!showDropdown);
    }

    const getClassName = (path) => {
        return currentPath === path ? "on-link-page" : "";
    }
    const handleHomeClick = useCallback(() => {
        history.push('/');
        setShowDropdown(false);
    }, [history]);
    const handleCommissionsClick = useCallback(() => {
        history.push('/commissions');
        setShowDropdown(false);
    }, [history]);
    const handleGalleryClick = useCallback(() => {
        history.push('/gallery');
        setShowDropdown(false);
    }, [history]);

    return (
        <nav className="navbar unselectable">
            <div className="nikzt-logo"
                onClick={handleHomeClick}>
                nikzt.<span className="highlight-text">art</span>
            </div>
            <ul className={`${showDropdown ? "show-dropdown" : ""} navbar-links`}>
                <li onClick={handleHomeClick}>
                    <span className={getClassName("/")}>
                        Home
                    </span>
                </li>

                <li onClick={handleCommissionsClick}>
                    <span className={getClassName("/commissions")}>
                        Commissions
                    </span>
                </li>
                <li onClick={handleGalleryClick}>
                    <span className={getClassName("/gallery")}>
                        Gallery
                    </span>
                </li>
            </ul>
            <span className="hamburger-menu" onClick={onMenuButtonClick}>
                <Menu className="hamburger-menu-icon" />
            </span>
        </nav>
    )
}

export default Navbar;