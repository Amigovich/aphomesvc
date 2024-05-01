import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import backgroundImage from '/homesimage.jpg';

const HomePage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div className="home-page" style={backgroundStyle}>
            <Row>
                <Col className="mt-5" md={6}>
                    <div className="mt-5 left-box">
                        <div className="mt-5 left-content">
                            <h1 className="mt-5 text-center" style= {{ color:"white", paddingLeft:"10px", paddingRight:"10px" }}>Welcome to AP Home Services</h1>
                            <p className="homep text-center" style= {{ color:"lightgray" }}>
                                Your premier residential window and door replacement contractor! Ready to elevate your home with new windows and doors? Contact us today to schedule a free consultation. Our friendly and knowledgeable team is here to answer your questions, discuss your options, and provide you with a customized solution that fits your budget and lifestyle. Let's turn your house into the home of your dreams together!
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="mt-5" md={6}>
                    <div className="mt-5 right-box">
                        <div className="mt-5 right-content">
                            <h1 className="mt-5 text-center"  style= {{ color:"white" }}>Need a Free Estimate?</h1>
                            <Form className="home-form">
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="name">
                                            <Form.Control type="text" placeholder="Enter your name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="email">
                                            <Form.Control type="email" placeholder="Enter your email" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="phone">
                                            <Form.Control type="tel" placeholder="Enter your phone number" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="address">
                                            <Form.Control type="text" placeholder="Enter your address" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="city">
                                            <Form.Control type="text" placeholder="Enter your city" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="state">
                                            <Form.Control type="text" placeholder="Enter your state" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="zipcode">
                                            <Form.Control type="text" placeholder="Enter your zipcode" style={{ width: '100%', marginRight:"20px" }} required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group controlId="service">
                                            <Form.Control as="select" style={{ width: '100%' }} required>
                                                <option value="">Choose a Service</option>
                                                <option value="window-replacement">Window Replacement</option>
                                                <option value="door-installation">Door Installation</option>
                                                <option value="other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Form.Group controlId="how">
                                            <Form.Control as="textarea" rows="3" cols="48" placeholder="How Did You Hear About Us?" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col xs={3}>
                                        <button type="submit" className="btn btn-primary" style= {{ width:"200px" }}>Send</button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;