import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Gallery = () => {
  // Sample data for images
  const images = [
    { id: 1, src: 'https://via.placeholder.com/300', title: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/300', title: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/300', title: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/300', title: 'Image 4' },
  ];

  // Sample data for client reviews
  const clientReviews = [
    { id: 1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
    { id: 2, name: 'Jane Doe', review: 'Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.' },
    { id: 3, name: 'Alice Smith', review: 'Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' },
  ];

  // Link to Google reviews
  const googleReviewsLink = 'https://www.google.com/';

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
      <h1 className="mt-5">Client Reviews</h1>
      <Row>
        {clientReviews.map((review) => (
          <Col key={review.id} xs={12} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="gallery-button">
            Google Reviews
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;