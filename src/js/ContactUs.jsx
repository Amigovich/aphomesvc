import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import backgroundImage from '/homesimage.jpg';

export const ContactUs = () => {
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
                <section id="contact" className="content">
                    <h1 className="mt-5" style={{ color: "white" }}>Contact Us</h1>
                    <p style={{ color: "lightgray" }}>Phone: (612) 208-7271</p>
                    <p style={{ color: "lightgray" }}>Email: info@aphomesvc.com</p>
                    <p style={{ color: "lightgray" }}>Use our contact form and we will get back to you shortly!</p>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group controlId="name">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Your Name (required):</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Name" name="user_name" required autoComplete="name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="email">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Your Email (required):</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} type="email" placeholder="Email" name="user_email" required autoComplete="email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={12}>
                                <Form.Group controlId="message">
                                    <Form.Label style={{ width: '100%', fontFamily: 'Cuprum', fontSize: '20px', color: "lightgray" }}>Your Message:</Form.Label>
                                    <Form.Control style={{ fontFamily: 'Cuprum' }} as="textarea" rows={8} placeholder="Enter your message" name="user_service_message" required autoComplete="off" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10}>
                                <Button type="submit" className="sendbtn mt-5" style={{ width: '100%' }}>
                                    {isSubmitting ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span style={{ fontFamily: 'Cuprum', fontSize: '25px' }}>Send Message</span>
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

export default ContactUs;
