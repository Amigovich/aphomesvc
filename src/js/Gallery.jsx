import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const Gallery = () => {
  // Sample data for images
  const images = [
    { id: 1, src: 'APnetfirst-web/IMG_20231207_105942947_HDR.jpg'},
    { id: 2, src: 'APnetfirst-web/IMG_20231207_133443881_HDR.jpg'},
    { id: 3, src: 'APnetfirst-web/IMG_20231208_151631126.jpg'},
    { id: 4, src: 'APnetfirst-web/IMG_20231208_151618797.jpg'},
    { id: 5, src: 'APnetfirst-web/IMG_20240403_110802047.jpg'},
    { id: 6, src: 'APnetfirst-web/IMG_20240403_144233779.jpg'},
    { id: 7, src: 'APnetfirst-web/IMG_20240403_164521667.jpg'},
    { id: 8, src: 'APnetfirst-web/IMG_20240403_165137768.jpg'},
    { id: 9, src: 'APnetfirst-web/IMG_20240312_203206572.jpg'},
    { id: 10, src: 'APnetfirst-web/IMG_20240320_143232538.jpg'},
    { id: 11, src: 'APnetfirst-web/IMG_20240404_114335101.jpg'},
    { id: 12, src: 'APnetfirst-web/IMG_20240404_180136697.jpg'},
    { id: 13, src: 'APnetfirst-web/IMG_20240405_102835075.jpg'},
    { id: 14, src: 'APnetfirst-web/IMG_20231206_143205000_HDR.jpg'},
    { id: 15, src: 'APnetfirst-web/IMG_20231205_213909652.jpg'},
    { id: 16, src: 'APnetfirst-web/IMG_20231017_171044785.jpg'},
    { id: 17, src: 'APnetfirst-web/IMG_20231017_171113847_HDR.jpg'},
    { id: 18, src: 'APnetfirst-web/IMG_20231020_141828432_HDR.jpg'},
    { id: 19, src: 'APnetfirst-web/IMG_20231030_163804288.jpg'},
    { id: 20, src: 'APnetfirst-web/IMG_20240405_134954491.jpg'},
  ];

  // Sample data for client reviews
  const clientReviews = [
    { id: 1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
    { id: 2, name: 'Jane Doe', review: 'Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.' },
    { id: 3, name: 'Alice Smith', review: 'Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' },
  ];

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }


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