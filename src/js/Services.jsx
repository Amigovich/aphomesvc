import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Services = () => {
  // Sample data for services
  const services = [
    { id: 1, title: 'Roofing', description: 'We offer professional roofing services to protect your home from the elements.' },
    { id: 2, title: 'Siding', description: 'Enhance the appearance and durability of your home with our siding solutions.' },
    { id: 4, title: 'Gutters', description: 'Keep your home safe from water damage with our gutter installation and repair services.' },
    { id: 5, title: 'General Contracting', description: 'Get comprehensive construction services for your home projects.' },
    { id: 6, title: 'Replacement Windows', description: 'Upgrade your home with energy-efficient replacement windows.' },
    { id: 7, title: 'Replacement Doors', description: 'Enhance the security and style of your home with replacement doors.' },
  ];

  return (
    <Container className="mt-5">
      <h1>Our Services</h1>
      <p>We offer a range of construction services, including roofing, siding, windows, gutters, general contracting. Our skilled team is committed to delivering top-notch craftsmanship and exceeding customer expectations. Your home is our priority, and we take pride in making your construction experience seamless and enjoyable.</p>
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className='h5stuff'>{service.title}</Card.Title>
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