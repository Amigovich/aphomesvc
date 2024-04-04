import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/logo.png'; 

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <header className="header">
      <Navbar bg="green" expand="lg" expanded={expanded}>
        <Navbar.Brand as={Link} to="/about">
        <img
            src={logo}
            width="15%"
            height="15%"
            className="d-inline-block align-top"
            alt="AP Home Services Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: 'green' }}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation onItemClick={handleNavItemClick} />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;