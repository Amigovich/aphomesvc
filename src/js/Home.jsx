import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
                            <h1 className="mt-5 homehead" style= {{ color:"white" }}>Welcome to AP Home Services</h1>
                            <p className="homep" style= {{ color:"lightgray" }}>
                                Your premier residential window and door replacement contractor! Ready to elevate your home with new windows and doors? Contact us today to schedule a free consultation. Our friendly and knowledgeable team is here to answer your questions, discuss your options, and provide you with a customized solution that fits your budget and lifestyle. Let's turn your house into the home of your dreams together!
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="mt-5" md={6}>
                    <div className="mt-5 right-box">
                        <div className="mt-5 right-content">
                            <h1 className="mt-5 homehead"  style= {{ color:"white" }}>Need a Free Estimate?</h1>
                            <form>
                            <Row>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="text" id="address" name="address" placeholder="Enter your address" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="text" id="city" name="city" placeholder="Enter your city" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="text" id="state" name="state" placeholder="Enter your state" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <input type="text" id="zipcode" name="zipcode" placeholder="Enter your zipcode" required />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <select id="service" name="service">
                                            <option value="">Choose a Service</option>
                                            <option value="window-replacement">Window Replacement</option>
                                            <option value="door-installation">Door Installation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">
                                        <textarea id="how" name="how" rows="3" placeholder="How Did You Hear About Us?"></textarea>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <button type="submit" className="btn btn-primary" style= {{ width:"150px" }}>Send</button>
                                </Col>
                            </Row>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;