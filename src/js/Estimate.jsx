import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import backgroundImage from '/homesimage.jpg';

export const Estimate = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            'service_2xk6x8h', 
            'template_dew9ghk', 
            form.current, 
            'TaE4PcgrDpJIVqZv6'
        ).then(
            () => {
                console.log('Email sent successfully!');
                e.target.reset();
                setShowAlert(true);

                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            },
            (error) => {
                console.error('Error sending email:', error);
            }
        ).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="home-page" style={backgroundStyle}>
            <div className="mid-box">
                <section id="estimate" className="content">
                    <h1 className="mt-5" style={{ color: "white" }}>Contact Us</h1>
                    <p style={{ color: "lightgray" }}>Ready to start your construction project with AP Home Services?</p>
                    <p style={{ color: "lightgray" }}>Interested in financing a project?</p>
                    <p style={{ color: "lightgray" }}>Contact us for a personalized consultation and a free quote today.</p>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group controlId="name">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Name:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Name" name="user_name" required autoComplete="name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="email">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Email:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="email" placeholder="Email" name="user_email" required autoComplete="email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group controlId="phone">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Phone:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Phone number" name="user_phone" required autoComplete="tel" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="address">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Address:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Address" name="user_address" required autoComplete="street-address" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group controlId="services">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Services Requested:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} as="select" name="user_services" required autoComplete="off">
                                        <option value="">Select One</option>
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
                                    <Form.Label style={{ width: '130%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Details and/or Additional Services:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Enter additional services" name="additional_services" autoComplete="off" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10}>
                                <Button type="submit" className="sendbtn mt-5" style={{ width: '100%' }}>
                                    {isSubmitting ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span style={{ fontFamily: 'Cuprum', fontSize: '25px' }}>Send Quote Request</span>
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
            </div>
        </div>
    );
};

export default Estimate;
