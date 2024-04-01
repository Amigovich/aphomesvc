import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <section id="about" className="about-content">
      <Container>
        <h2 className="text-center">About Us</h2>
        <Row>
          <Col xs={12} md={4}>
            <img />
          </Col>
          <Col className="about-container" xs={8} md={12}>
            <p className="p1">
              Welcome to AP Home Services, your trusted partner in construction and home improvement. With a commitment to excellence and a focus on customer satisfaction, we bring your vision to life. Our dedicated team of professionals is here to make your dream home a reality.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;