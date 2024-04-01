import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <section id="about" className="about-content">
      <Container>
        <h2 className="text-center">About Me</h2>
        <Row>
          <Col xs={12} md={4}>
          <img />
          </Col>
          <Col className="about-container" xs={12} md={4}>
            <p className="p1">
              Hello World</p>
            <p className="p2">
              What excites me most about tech?</p>
            <p className="p3">
              Everything <a href="" target="_blank" rel="noopener noreferrer">here</a>.
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
