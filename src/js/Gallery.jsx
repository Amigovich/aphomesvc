import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const Gallery = () => {
  // Sample data for images
  const images = [
    { id: 1, src: './IMG_20231207_105942947_HDR.jpg'},
    { id: 2, src: './IMG_20231207_133443881_HDR.jpg'},
    { id: 3, src: './IMG_20231208_151631126.jpg'},
    { id: 4, src: './IMG_20231208_151618797.jpg'},
    { id: 5, src: './IMG_20240403_110802047.jpg'},
    { id: 6, src: './IMG_20240403_144233779.jpg'},
    { id: 7, src: './IMG_20240403_164521667.jpg'},
    { id: 8, src: './IMG_20240403_165137768.jpg'},
    { id: 9, src: './IMG_20240312_203206572.jpg'},
    { id: 10, src: './IMG_20240320_143232538.jpg'},
    { id: 11, src: './IMG_20240404_114335101.jpg'},
    { id: 12, src: './IMG_20240404_180136697.jpg'},
    { id: 13, src: './IMG_20240405_102835075.jpg'},
    { id: 14, src: './IMG_20231206_143205000_HDR.jpg'},
    { id: 15, src: './IMG_20231205_213909652.jpg'},
    { id: 16, src: './IMG_20231017_171044785.jpg'},
    { id: 17, src: './IMG_20231017_171113847_HDR.jpg'},
    { id: 18, src: './IMG_20231020_141828432_HDR.jpg'},
    { id: 19, src: './IMG_20231030_163804288.jpg'},
    { id: 20, src: './IMG_20240405_134954491.jpg'},
  ];

  // Sample data for client reviews
  const clientReviews = [
    { id: 1, name: 'Review Name Coming Soon', review: 'Review content coming soon' },
    { id: 2, name: 'Review Name Coming Soon', review: 'Review content coming soon' },
    { id: 3, name: 'Review Name Coming Soon', review: 'Review content coming soon' },
  ];

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }

  const letterColors = [
    '#8dc1e3', // Soft blue
    '#d44c4c', // Soft red
    '#e6e68a', // Soft yellow
    '#8dc1e3', // Soft blue
    '#79c779', // Soft green
    '#d44c4c', // Soft red
];

  // Link to Google reviews
  const googleReviewsLink = 'https://www.google.com/';

  return (
    <Container className="mt-5">
      <h1>Gallery</h1>
      <Row>
        <Col>
          <Carousel>
            {groupedImages.map((imageGroup, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {imageGroup.map((image) => (
                    <Col xs={12} md={3} key={image.id} className="mb-3">
                      <Card>
                        <Card.Img variant="top" src={image.src} style={{ width: '100%', height: '200px' }} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <h1 className="mt-5">Client Reviews</h1>
      <Row>
        {clientReviews.map((review) => (
          <Col key={review.id} xs={12} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className='moreh5'>{review.name}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-3">
    <Col xs={6} md={4}>
    <Button
    variant="outline-primary"
    href={googleReviewsLink}
    target="_blank"
    rel="noopener noreferrer"
    className="gallery-button"
    style={{ width: '60%', fontSize: '20px', backgroundColor: 'black', color: 'black', display: 'flex', justifyContent: 'center' }}>
      <span>
        {Array.from('Google').map((letter, index) => (
            <span
                key={index}
                style={{ fontFamily: 'Arial', color: (letter.toLowerCase() === 'g') ? '#007bff' : letterColors[index] || 'inherit' }}
            >
                {letter}
            </span>
        ))}
    </span>&nbsp;
    <span>
        {Array.from(' Reviews').map((letter, index) => (
            <span
                key={index}
                style={{ fontFamily: 'Arial' }}
            >
                {letter}
            </span>
        ))}
    </span>
</Button>
    </Col>
      </Row>
    </Container>
  );
};

export default Gallery;