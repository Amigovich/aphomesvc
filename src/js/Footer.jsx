import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '/logo.png'; 

function Footer() {
    return (
        <footer className="footer">
            <Navbar>
                <Nav className="mr-auto">
                    <Navbar.Brand as={Link} to="/home" className="logo-container">
                        <img
                        src={logo}
                        width="60px"
                        height="48px"
                        className="d-inline-block align-top logo"
                        alt="AP Home Services Logo"
                        />
                    </Navbar.Brand>
                </Nav>
                <Nav className="thisone">
                    <Nav.Link as={Link} to="/estimate" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Nav.Link>
                </Nav>
                <Navbar.Text className="ml-auto" style={{ textDecoration: 'none', color: 'white' }}>&copy; {new Date().getFullYear()} AP Home Services. All rights reserved. MN License #BC</Navbar.Text>
            </Navbar>
        </footer>
    );
}

export default Footer;
