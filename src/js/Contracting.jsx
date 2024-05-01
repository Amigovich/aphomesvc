import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contracting = () => {
  return (
    <div className="page-container">
      <Container className="mt-5">
    <h1 className="svc-title3 text-center">Contracting Services with AP Home Services</h1>
      <p className="text-center">From interior renovations to exterior improvements, AP Home Services provides comprehensive general contracting services to enhance both the inside and outside of your home.</p>
      <Row className="mb-3">
      <Col md={4} className="mb-3 cont-left">
  <h2 className="text-center mt-4 mb-4" style= {{ color:"white" }}>Our Services:</h2>
  <ul className="mb-3 text-center">
    <p className="benp1">Interior and Exterior Renovations</p>
    <p className="benp1">Home Repairs and Maintenance</p>
    <p className="benp1">Deck and Patio Installation</p>
    <p className="benp1">Room Additions</p>
    <p className="benp1">Window and Door Installation</p>
    <p className="benp1">Roofing and Siding</p>
    <p className="benp1">And More!</p>
  </ul>
</Col>
<Col md={7} className="mb-3 cont-right">
  <h2 className="text-center mt-4 mb-4" style= {{ color:"white" }}>Why Choose Us:</h2>
  <ul className="mb-3 text-center">
    <p className="benp1"><strong>Assistance with Insurance Claims:</strong> We can help guide you through the insurance claim process, making it easier to navigate and ensuring you receive the coverage you deserve.</p>
    <p className="benp1"><strong>Attention to Detail:</strong> We pay meticulous attention to detail to ensure every aspect of your project is completed to the highest standards.</p>
    <p className="benp1"><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority, and we work tirelessly to ensure you are happy with the final results.</p>
    <p className="benp1"><strong>Timely Completion:</strong> We strive to complete projects on time and within budget, minimizing disruptions to your daily life.</p>
  </ul>
</Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <p className="text-center">Whether you're looking to update the interior of your home, enhance your outdoor living space, or make repairs and improvements, AP Home Services is here to help.</p>
          <p className="text-center">Contact us today to discuss your project and schedule a consultation.</p>
        </Col>
      </Row>
      </Container>
      <div className="text-center mt-5">
        <Link to="/services" className="btn btn-primary mr-2">Back</Link>
        <Link to="/estimate" className="btn btn-primary ml-2">Contact</Link>
      </div>
    </div>
  );
};

export default Contracting;