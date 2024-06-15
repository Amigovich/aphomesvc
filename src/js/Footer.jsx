import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Footer() {
    return (
        <footer className="footer">
            <Navbar className="footerpadding">
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
                    <Nav.Link as={Link} to="/ContactUs" className="foot-cont" style={{ textDecoration: 'none', color: 'white' }}>
                        Contact Us
                    </Nav.Link>
                </Nav>
                <Navbar.Text className="ml-auto foot-right" style={{ textDecoration: 'none', color: 'white' }}>
                    {new Date().getFullYear()} AP Home Services.&nbsp;&nbsp; All rights reserved.&nbsp;&nbsp; MN License #BC807818
                </Navbar.Text>
            </Navbar>
        </footer>
    );
}

export default Footer;
