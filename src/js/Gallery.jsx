import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  // Sample data for images
  const images = [
    { id: 1, src: 'https://via.placeholder.com/300', title: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/300', title: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/300', title: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/300', title: 'Image 4' },
  ];

  return (
    <Container className="mt-5">
      <h1>Gallery</h1>
      <Row>
        {images.map((image) => (
          <Col key={image.id} xs={6} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={image.src} />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;