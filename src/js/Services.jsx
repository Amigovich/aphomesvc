import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Services = () => {
  // Sample data for services
  const services = [
    { id: 1, title: 'Kitchen Remodeling', description: 'Upgrade your kitchen with our remodeling services.' },
    { id: 2, title: 'Bathroom Renovation', description: 'Transform your bathroom into a luxurious space.' },
    { id: 3, title: 'Flooring Installation', description: 'Install high-quality flooring for your home.' },
    { id: 4, title: 'Painting Services', description: 'Refresh your home with professional painting services.' },
  ];

  return (
    <Container className="mt-5">
      <h1>Our Services</h1>
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;