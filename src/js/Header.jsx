import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Navbar } from 'react-bootstrap';
import logo from '/logo.png'; 

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <header className="header">
        <Navbar bg="rgba(0, 0, 0, 0)" expand="lg" expanded={expanded} variant="dark" collapseOnSelect>
        <Navbar.Brand as={Link} to="/about" className="logo-container">
          <img
            src={logo}
            width="180px"
            height="141px"
            className="d-inline-block align-top logo"
            alt="AP Home Services Logo"
          />
        </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: 'gray' }}
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Navigation onItemClick={handleNavItemClick} />
          </Navbar.Collapse>
        </Navbar>
    </header>
  );
}

export default Header;