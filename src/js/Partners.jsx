import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Partners = () => {
    return (
        <div className="partners-container">
            <h1 className="text-center mt-5">Our Partners</h1>
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <div className="partner">
                        <img src="Andersen.jpg" alt="Andersen" />
                        <div className="partner-info">
                            <p>
                                Andersen is a leading manufacturer of windows and doors, known for their quality craftsmanship and innovative designs. With a wide range of products to choose from, Andersen offers solutions for every style and budget.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <div className="partner">
                        <img src="Marvin.jpg" alt="Marvin" />
                        <div className="partner-info">
                            <p>
                                Marvin is a premier manufacturer of windows and doors, renowned for their dedication to craftsmanship, innovation, and sustainability. From traditional to contemporary designs, Marvin offers products that enhance any home.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <div className="partner">
                        <img src="Kolbe.jpg" alt="Kolbe" />
                        <div className="partner-info">
                            <p>
                                Kolbe offers a wide range of windows and doors designed to inspire creativity and elevate any space. With customizable options and high-quality materials, Kolbe products are built to last and make a lasting impression.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Partners;