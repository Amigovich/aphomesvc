import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import entryDoorImage from '/Entry-Door.jpg';
import frenchHingedDoorImage from '/french-door.jpg';
import patioSlidingDoorImage from '/patio-door.jpg';
import stormScreenDoorImage from '/storm-doors.jpg';

const Doors = () => {
  return (
    <Container className="mt-5">
       <div className="divvy d-flex align-items-center">
        <Link to="/services" className="btn btn-primary">Back</Link>
        <h1 className="svc-title text-center">Door Replacement and Installation with AP Home Services</h1>
      </div>
      <p className="text-center">Upgrade your home's entryways with high-quality door replacement and installation solutions. Choose from a variety of door types, including Entry, French & Hinged, Patio or Sliding, and Storm & Screen doors. Our trusted partners include <a href="https://www.andersenwindows.com/windows-and-doors/doors/" target="_blank" rel="noopener noreferrer">Andersen</a>, <a href="https://www.marvin.com/products/doors" target="_blank" rel="noopener noreferrer">Marvin</a>, and <a href="https://www.kolbewindows.com/doors" target="_blank" rel="noopener noreferrer">Kolbe</a>, ensuring top-notch quality and durability.</p>
      <Row className="mb-3 mt-5 justify-content-center">
      <Col md={6} className="mb-3">
  <div className="tile text-center">
    <img src={entryDoorImage} alt="Entry Door" className="img-fluid mb-3" />
    <p><strong>Entry Door:</strong> The main entrance door to your home, available in various materials and styles to enhance curb appeal and provide security.</p>
  </div>
</Col>
<Col md={6} className="mb-3">
  <div className="tile text-center">
    <img src={frenchHingedDoorImage} alt="French & Hinged Door" className="img-fluid mb-3" />
    <p><strong>French & Hinged Door:</strong> Double doors that swing inward or outward, adding elegance and functionality to your home's interior or exterior.</p>
  </div>
</Col>
<Col md={6} className="mb-3">
  <div className="tile text-center">
    <img src={patioSlidingDoorImage} alt="Patio or Sliding Door" className="img-fluid mb-3" />
    <p><strong>Patio or Sliding Door:</strong> Large glass doors that slide open horizontally, seamlessly connecting indoor and outdoor spaces while maximizing natural light.</p>
  </div>
</Col>
<Col md={6} className="mb-3">
  <div className="tile text-center">
    <img src={stormScreenDoorImage} alt="Storm & Screen Door" className="img-fluid mb-3" />
    <p><strong>Storm & Screen Door:</strong> Exterior doors installed in front of entry doors to provide additional protection against the elements and insects while allowing ventilation.</p>
  </div>
</Col>
      </Row>

      <h2 className="mb-5 text-center">Benefits:</h2>
      <ul className="mb-5 benefits">
        <li><strong>Enhanced Security:</strong> Keep your home safe and secure with sturdy and reliable door options.</li>
        <li><strong>Improved Energy Efficiency:</strong> Reduce energy costs and maintain indoor comfort with properly insulated doors.</li>
        <li><strong>Enhanced Aesthetics:</strong> Boost curb appeal and add style to your home with elegant and customizable door designs.</li>
        <li><strong>Increased Natural Light:</strong> Brighten up your living space and enjoy scenic views with doors featuring large glass panels.</li>
        <li><strong>Easy Maintenance:</strong> Choose low-maintenance door materials and finishes for hassle-free upkeep.</li>
      </ul>

      <p className="mb-5 text-center">Ready to upgrade your home's doors? Contact AP Home Services today for a consultation and start enjoying the benefits of beautiful, functional, and secure entryways.</p>
    </Container>
  );
};

export default Doors;