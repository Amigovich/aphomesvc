// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation({ onItemClick }) {
    const handleItemClick = () => {
    // Call the parent component's function to close the navigation menu
    onItemClick();
    };

    return (
    <Nav>
        <Nav.Item>
        <Link to="/about" className="nav-link" onClick={handleItemClick}>
            About
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/services" className="nav-link" onClick={handleItemClick}>
            Services
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/gallery" className="nav-link" onClick={handleItemClick}>
            Gallery
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/estimate" className="nav-link" onClick={handleItemClick}>
            Get A Free Quote
        </Link>
        </Nav.Item>
    </Nav>
    );
}

export default Navigation;