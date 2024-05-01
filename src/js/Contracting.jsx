import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contracting = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">General Contracting Services</h1>
      <p className="text-center">From interior renovations to exterior improvements, AP Home Services provides comprehensive general contracting services to enhance both the inside and outside of your home.</p>
      
      <Row className="mb-3">
        <Col md={6} className="mb-3">
          <h2 className="text-center">Our Services:</h2>
          <ul className="benefits">
            <li>Interior and Exterior Renovations</li>
            <li>Home Repairs and Maintenance</li>
            <li>Deck and Patio Installation</li>
            <li>Room Additions</li>
            <li>Window and Door Installation</li>
            <li>Roofing and Siding</li>
            <li>And More!</li>
          </ul>
        </Col>
        <Col md={6} className="mb-3">
          <h2 className="text-center">Why Choose Us:</h2>
          <ul className="benefits">
            <li><strong>Assistance with Insurance Claims:</strong> We can help guide you through the insurance claim process, making it easier to navigate and ensuring you receive the coverage you deserve.</li>
            <li><strong>Attention to Detail:</strong> We pay meticulous attention to detail to ensure every aspect of your project is completed to the highest standards.</li>
            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority, and we work tirelessly to ensure you are happy with the final results.</li>
            <li><strong>Timely Completion:</strong> We strive to complete projects on time and within budget, minimizing disruptions to your daily life.</li>
          </ul>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <p className="text-center">Whether you're looking to update the interior of your home, enhance your outdoor living space, or make repairs and improvements, AP Home Services is here to help. Contact us today to discuss your project and schedule a consultation.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contracting;