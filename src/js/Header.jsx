import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '/logo.png'; 

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const handleToggleClick = () => {
    setExpanded(!expanded);
    setShowNavLinks(!expanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setShowNavLinks(expanded);
      } else {
        setShowNavLinks(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [expanded]);

  return (
    <header className="header">
      <Navbar bg="transparent" expand="lg" expanded={expanded} variant="dark" collapseOnSelect>
        <Navbar.Brand as={Link} to="/home" className="logo-container">
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
          onClick={handleToggleClick}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {showNavLinks && (
            <Nav className="ml-auto">
              <Navigation onItemClick={handleNavItemClick} />
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
