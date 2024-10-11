import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = ({ currentPath }) => {
    return (
        <nav>
            <div className="navbar-logo">
                <a href="/">
                    <img src="/buddy.png" alt="App Logo" className="logo" /> {/* Placeholder image path */}
                    <span className="app-name">AlwaysThere</span> {/* Your app's name */}
                </a>
            </div>
            <div className="navbar-links">
                {currentPath === '/' && (
                    <Link to="/signup">Sign Up</Link>
                )}
                {currentPath === '/signup' && (
                    <Link to="/signin">Sign In</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
