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
    // Toggle the expanded state
    setExpanded(!expanded);
    // Update the showNavLinks state based on the new expanded state
    setShowNavLinks(!expanded);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than or equal to 992px
      if (window.innerWidth <= 992) {
        // If true, hide nav links when toggler is not expanded
        setShowNavLinks(expanded);
      } else {
        // If false, always show nav links
        setShowNavLinks(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
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
          style={{ backgroundColor: 'gray' }}
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleClick} // Use custom handler for toggler click
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
