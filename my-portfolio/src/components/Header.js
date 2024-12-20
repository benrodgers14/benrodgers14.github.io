import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>BenjaminJRodgers.com</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;