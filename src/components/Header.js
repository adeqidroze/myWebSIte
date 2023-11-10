import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyles.css'; // Import the CSS file
import userIcon from '../pngFiles/user-icon.png'; // Replace with your user icon file

const Header = () => {
    return (
        <header className="header-container">
            <div className="left-section">
                <div className="logo">Crito</div>
            </div>
            <div className="middle-section">
                <nav className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/account/123">Account</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="right-section">
                <div className="header-buttons">
                    <Link to="/login-page" className="login-button">Login</Link>
                    <Link to="/register" className="register-button">Register</Link>
                    <div className="user-icon">
                        <img src={userIcon} alt="User Icon" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;