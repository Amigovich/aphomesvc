import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Reviews = () => {
  // Sample data for client reviews
    const clientReviews = [
    { id: 1, name: 'John D.', review: "I recently had AP Home Services replace all the windows in my home, and I couldn't be happier with the results. The team was professional, efficient, and the quality of workmanship exceeded my expectations. Highly recommend!" },
    { id: 2, name: 'Jane S.', review: "From start to finish, AP Home Services made the window replacement process seamless. Their attention to detail and commitment to customer satisfaction truly set them apart. I'll definitely be using their services again!" },
    { id: 3, name: 'David J.', review: "I had AP Home Services install a new patio door, and I couldn't be happier with the outcome. Not only does the door look fantastic, but the team was professional, courteous, and completed the job on time. Highly recommend!" },
    ];

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
    <h1 className="mt-5">Client Reviews</h1>
        <Row>
        {clientReviews.map((review) => (
            <Col key={review.id} xs={12} className="mb-3">
            <Card>
                <Card.Body>
                <Card.Title className='moreh5'>{review.name}</Card.Title>
                <Card.Text style={{ fontStyle:"italic" }}>"{review.review}"</Card.Text>
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
    style={{ width: '200px', fontSize: '20px', backgroundColor: 'darkblue', color: 'white', display: 'flex', justifyContent: 'center' }}>
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

export default Reviews;