import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <footer className="footer">
            <Navbar>
                <Nav className="mr-auto">
                    <Nav.Link href="tel:952-212-7499" style={{ textDecoration: 'none', color: 'white' }}>Phone: 952-212-7499</Nav.Link>
                    <Nav.Link href="mailto:info@aphomesvc.com" style={{ textDecoration: 'none', color: 'white' }}>Email: info@aphomesvc.com</Nav.Link>
                </Nav>
                <Navbar.Text className="ml-auto" style={{ textDecoration: 'none', color: 'white' }}>&copy; {new Date().getFullYear()} AP Home Services. All rights reserved.</Navbar.Text>
            </Navbar>
        </footer>
    );
}

export default Footer;
