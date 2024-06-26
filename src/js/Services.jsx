import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <Container className="svc-cont mt-5">
      <h1 className="text-center">Our Services</h1>
      <p className="text-center">We specialize in high-quality window and door replacements, as well as new construction windows and doors. Our skilled team is dedicated to delivering top-notch craftsmanship and exceeding customer expectations. Your home is our priority, and we take pride in making your home improvement experience seamless and enjoyable.</p>
      <Row>
        <Col md={6} lg={6} className="col2 mb-3 mt-5">
          <Link to="/windows" className="text-decoration-none">
            <Card className="svc-card">
              <Card.Body className="svc-card2">
                <Card.Title className='h5stuff text-center' style= {{ color:"white" }}>Replacement Windows</Card.Title>
                <Card.Text className='text-center' style= {{ color:"lightgray" }}>Upgrade your home with energy-efficient windows that enhance curb appeal and increase comfort.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={6} lg={6} className="mb-3 mt-5">
          <Link to="/doors" className="text-decoration-none">
            <Card className="svc-card">
              <Card.Body className="svc-card2">
                <Card.Title className='h5stuff text-center' style= {{ color:"white" }}>Replacement Doors</Card.Title>
                <Card.Text className='text-center' style= {{ color:"lightgray" }}>Enhance the security and the style of your home with high-quality replacement doors.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
