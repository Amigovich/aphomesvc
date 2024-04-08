import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com';

function Estimate() {
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const address = event.target.elements.address.value;
        const services = event.target.elements.services.value;
        const additionalServices = event.target.elements.additionalServices.value;

        if (!name || !email || !phone || !address || !services || !additionalServices) {
            return;
        }

        setIsSubmitting(true);

        emailjs
        .send(
            //emailjs stuff//
            {
                from_name: name,
                from_email: email,
                message: message,
            }, //emailjs//
        )
        .then(() => {
            console.log('Email sent successfully!');
            event.target.reset();
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        })
        .catch((error) => {
            console.error('Error sending email:', error, 'Please try calling us instead at: ()-');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    }

    return (
        <section id="estimate" className="content">
            <h1>Contact Us</h1>
            <p>Ready to start your construction project with AP Home Services? Interested in financing a project? Contact us for a personalized consultation and a free quote today.</p>
            <Form id="contactForm" onSubmit={handleSubmit}>
    <Row>
        <Col md={6}>
        <Form.Group controlId="name">
            <Form.Label style={{ width: '100%' }}>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="email">
            <Form.Label style={{ width: '100%' }}>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
        <Form.Group controlId="phone">
            <Form.Label style={{ width: '100%' }}>Phone:</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number" required />
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="address">
            <Form.Label style={{ width: '100%' }}>Address:</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
        <Form.Group controlId="services">
            <Form.Label style={{ width: '100%' }}>Services Requested:</Form.Label>
            <Form.Control as="select" required>
            <option value="windows">Select One</option>
            <option value="windows">Windows</option>
            <option value="roofing">Roofing</option>
            <option value="siding">Siding</option>
            <option value="gutters">Gutters</option>
            <option value="doors">Doors</option>
            <option value="general">General</option>
            </Form.Control>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="additionalServices">
            <Form.Label style={{ width: '130%' }}>Details and/or Additional Services:</Form.Label>
            <Form.Control type="text" placeholder="Enter additional services" />
        </Form.Group>
        </Col>
    </Row>
    <Row>
  <Col md={9}> {/* 9 out of 12 columns, i.e., 75% */}
    <Button variant="primary" type="submit" style={{ width: '100%' }}>
        {isSubmitting ? (
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ) : (
        'Send Quote Request'
        )}
    </Button>
    </Col>
</Row>
    {showAlert && (
        <div className="alert-box alert-success mt-3" role="alert">
        Message sent successfully!
        </div>
    )}
    </Form>
        </section>
    );
}

export default Estimate;