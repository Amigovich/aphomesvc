import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Partners = () => {
    return (
        <div className="partners-container">
            <h1 className="text-center mt-5">Our Partners</h1>
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={6} lg={4} className="partner-col1 mb-3">
                    <div className="partner d-flex flex-column align-items-center">
                        <a href="https://www.andersenwindows.com/" target="_blank" rel="noopener noreferrer">
                            <img src="Andersen.jpg" alt="Andersen" width="350px" height="250px" className="img1"/>
                        </a>
                    </div>
                    <div>
                        <p className="partner-info1 text-center">
                            Andersen is a leading manufacturer of windows and doors, known for their quality craftsmanship and innovative designs. With a wide range of products to choose from, Andersen offers solutions for every style and budget.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className=" mb-3">
                    <div className="partner d-flex flex-column align-items-center">
                        <a href="https://www.marvin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="Marvin.jpg" alt="Marvin" width="450px" height="300px" className="img2"/>
                        </a>
                    </div>
                    <div>
                        <p className="partner-info2 text-center">
                            Marvin is a premier manufacturer of windows and doors, renowned for their dedication to craftsmanship, innovation, and sustainability. From traditional to contemporary designs, Marvin offers products that enhance any home.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="partner-col3 mb-3">
                    <div className="partner d-flex flex-column align-items-center">
                        <a href="https://www.kolbewindows.com/" target="_blank" rel="noopener noreferrer">
                            <img src="Kolbe.jpg" alt="Kolbe" width="300px" height="180px" className="img3"/>
                        </a>
                    </div>
                    <div>
                        <p className="partner-info3 text-center">
                            Kolbe offers a wide range of windows and doors designed to inspire creativity and elevate any space. With customizable options and high-quality materials, Kolbe products are built to last and make a lasting impression.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Partners;