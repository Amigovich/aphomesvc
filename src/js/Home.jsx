import React, { useRef, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import backgroundImage from '/homesimage.jpg';

const HomePage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',import React, { useRef, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import backgroundImage from '/homesimage.jpg';

const HomePage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

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
            'service_2xk6x8h', // Replace with your EmailJS service ID
            'template_ivt5vg6', // Replace with your EmailJS template ID
            form.current,
            'TaE4PcgrDpJIVqZv6' // Replace with your EmailJS user ID
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
            <Row>
                <Col className="mt-5" md={6}>
                    <div className="mt-5 left-box">
                        <div className="mt-5 left-content">
                            <h1 className="mt-5 text-center" style={{ color: "white", paddingLeft: "10px", paddingRight: "10px" }}>Welcome to AP Home Services</h1>
                            <p className="homep text-center" style={{ color: "lightgray" }}>
                                Your premier residential window and door replacement contractor! Ready to elevate your home with new windows and doors? Contact us today to schedule a free consultation. Our friendly and knowledgeable team is here to answer your questions, discuss your options, and provide you with a customized solution that fits your budget and lifestyle. Let's turn your house into the home of your dreams together!
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="mt-5" md={6}>
                    <div className="mt-5 right-box">
                        <div className="mt-5 right-content">
                            <h1 className="mt-5 text-center" style={{ color: "white" }}>Need a Free Estimate?</h1>
                            <Form ref={form} onSubmit={sendEmail} className="home-form">
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="name">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Name" name="user_name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="email">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="email" placeholder="Email" name="user_email" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="phone">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="tel" placeholder="Phone number" name="user_phone" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="address">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Address" name="user_address" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="city">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="City" name="user_city" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="state">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="State" name="user_state" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="zipcode">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} type="text" placeholder="Zipcode" name="user_zipcode" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="service">
                                            <Form.Control as="select" style={{ width: '100%', fontFamily: 'Cuprum' }} name="user_service" required>
                                                <option value="">Choose a Service</option>
                                                <option value="window-replacement">Window Replacement</option>
                                                <option value="door-installation">Door Replacement</option>
                                                <option value="other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Form.Group controlId="how">
                                            <Form.Control style={{ fontFamily: 'Cuprum' }} as="textarea" rows="3" cols="48" placeholder="How Did You Hear About Us?" name="user_how" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* Hidden input to capture recipient email */}
                                <input type="hidden" name="recipient_email" value={form.current ? form.current.user_email.value : ''} />
                                <Row className="mt-5">
                                    <Col xs={3}>
                                        <button type="submit" className="sendbtn btn-primary" style={{ width: "200px", fontFamily: 'Cuprum' }}>
                                            {isSubmitting ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ) : (
                                                <span>Send Quote Request</span>
                                            )}
                                        </button>
                                    </Col>
                                </Row>
                                {showAlert && (
                                    <div className="alert-box alert-success mt-3" role="alert">
                                        Message sent successfully!
                                    </div>
                                )}
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;



export default HomePage;
