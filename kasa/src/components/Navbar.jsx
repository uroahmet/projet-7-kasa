import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="logo.png" alt="Logo" width="150" />
            </div>
            <div>Accueil</div>
            <div>A propos</div>
        </nav>
    );
}

export default Navbar;
