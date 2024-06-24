import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import entryDoorImage from '/Entry-Door.jpg';
import frenchHingedDoorImage from '/french-door.jpg';
import patioSlidingDoorImage from '/patio-door.jpg';
import stormScreenDoorImage from '/storm-doors.jpg';

const Doors = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="svc-title text-center">Door Replacement and Installation with AP Home Services</h1>
        <p className="text-center">Upgrade your home's entryways with high-quality door replacement and installation solutions. Choose from a variety of door types, including Entry, French & Hinged, Patio or Sliding, and Storm & Screen doors. Our preferred brands include industry leaders <a href="https://www.andersenwindows.com/windows-and-doors/doors/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Andersen</a>, <a href="https://www.marvin.com/products/doors" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Marvin</a>, and <a href="https://www.kolbewindows.com/doors" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Kolbe</a>, ensuring top-notch quality and durability.</p>
        <Row className="mb-3 mt-5 justify-content-center">
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={entryDoorImage} alt="Entry Door" className="img-fluid mb-3 door-image" />
              <h3><strong>Entry Door</strong></h3>
              <p>The main entrance door to your home, available in various materials and styles to enhance curb appeal and provide security.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={frenchHingedDoorImage} alt="French & Hinged Door" className="img-fluid mb-3 door-image" />
              <h3><strong>French & Hinged Door</strong></h3>
              <p>Double doors that swing inward or outward, adding elegance and functionality to your home's interior or exterior.</p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="tile text-center">
              <img src={patioSlidingDoorImage} alt="Patio or Sliding Door" className="img-fluid mb-3 door-image" />
              <h3><strong>Patio or Sliding Door</strong></h3>
              <p>Large glass doors that slide open horizontally, seamlessly connecting indoor and outdoor spaces while maximizing natural light.</p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="tile text-center">
              <img src={stormScreenDoorImage} alt="Storm & Screen Door" className="img-fluid mb-3 door-image" />
              <h3><strong>Storm & Screen Door</strong></h3>
              <p>Exterior doors installed in front of entryways to provide protection against the elements and insects while allowing ventilation.</p>
            </div>
          </Col>
        </Row>

        <h2 className="mb-4 text-center">Benefits:</h2>
        <ul className="mb-5 benefits text-center">
          <p className="benp"><strong>Enhanced Security:</strong> Keep your home safe and secure with sturdy and reliable door options.</p>
          <p className="benp"><strong>Improved Energy Efficiency:</strong> Reduce energy costs and maintain indoor comfort with properly insulated doors.</p>
          <p className="benp"><strong>Enhanced Aesthetics:</strong> Boost curb appeal and add style to your home with elegant and customizable door designs.</p>
          <p className="benp"><strong>Increased Natural Light:</strong> Brighten up your living space and enjoy scenic views with doors featuring large glass panels.</p>
          <p className="benp"><strong>Easy Maintenance:</strong> Choose low-maintenance door materials and finishes for hassle-free upkeep.</p>
        </ul>

        <p className="text-center">Ready to upgrade your home's doors?</p>
        <p className="mb-4 text-center">Contact AP Home Services today for a consultation and start enjoying the benefits of beautiful, functional, and secure entryways.</p>
      </Container>
      <div className="text-center">
      <Link to="/estimate" className="btn btn-primary mt-5 mb-3">Contact</Link>
        <Link to="/services" className="btn btn-primary mt-5 mb-3">Back</Link>
      </div>
    </div>
  );
};

export default Doors;
