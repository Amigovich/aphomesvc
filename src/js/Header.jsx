import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '/logo.png';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);

  const handleNavItemClick = () => {
    setExpanded(false);
    setShowNavLinks(false);
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [expanded]);

  return (
    <header className="header">
      <Navbar bg="rgba(0, 0, 0, 0)" expand="lg" expanded={expanded} variant="dark" collapseOnSelect>
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
          onClick={handleNavItemClick}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {showNavLinks && (
            <Nav className="ml-auto">
              <Navigation onItemClick={handleNavItemClick} />
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      {expanded && (
        <div className="side-menu">
          <Button className="close-btn" onClick={handleNavItemClick}>X</Button>
          <Nav className="flex-column">
            <Navigation onItemClick={handleNavItemClick} />
          </Nav>
        </div>
      )}
    </header>
  );
}

export default Header;
