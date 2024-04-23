// Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation({ onItemClick }) {
    const location = useLocation()
    const handleItemClick = () => {
    // Call the parent component's function to close the navigation menu
    onItemClick();
    };

    return (
    <Nav className="ml-auto">
        <Nav.Item>
        <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} onClick={handleItemClick}>
            Home
            {location.pathname === '/home' && <div className="active-line4"></div>}
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={handleItemClick}>
            Services
            {location.pathname === '/services' && <div className="active-line1"></div>}
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/partners" className={`nav-link ${location.pathname === '/partners' ? 'active' : ''}`} onClick={handleItemClick}>
            Our Partners
            {location.pathname === '/partners' && <div className="active-line4"></div>}
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} onClick={handleItemClick}>
            Gallery
            {location.pathname === '/gallery' && <div className="active-line2"></div>}
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/reviews" className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`} onClick={handleItemClick}>
            Reviews
            {location.pathname === '/reviews' && <div className="active-line4"></div>}
        </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={handleItemClick}>
            About Us
            {location.pathname === '/about' && <div className="active-line3"></div>}
        </Link>
        </Nav.Item>
    </Nav>
    );
}

export default Navigation;