import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import awningWindowsImage from '/awning-windows.jpg';
import casementWindowsImage from '/casement-windows.jpg';
import doubleSingleHungWindowsImage from '/double-hung-windows.jpg';
import glidingWindowsImage from '/gliding-windows.jpg';
import pictureWindowsImage from '/picture-window.jpg';
import bayBowWindowsImage from '/bow-bay-windows.jpg';
import specialtyWindowsImage from '/specialty-windows.jpg';

const Windows = () => {
  return (
    <div className="page-container">
      <Container className="mt-5">
        <h1 className="svc-title2 text-center">Windows Replacement And Installation with AP Home Services</h1>
        <p className="text-center">Our trusted by industry-leading partners <a href="https://www.andersenwindows.com/windows-and-doors/windows/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Andersen</a>, <a href="https://www.marvin.com/products/windows" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Marvin</a>, and <a href="https://www.kolbewindows.com/windows" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Kolbe</a>. Our team is dedicated to improving your home's comfort, style, and energy efficiency. From selecting the right windows to expert installation, we're here to make the process smooth and stress-free.</p>
        
        <Row className="mb-3 mt-5 justify-content-center">
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={awningWindowsImage} alt="Awning Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Awning Windows:</strong> Top-hinged windows that open outward from the bottom. Ideal for ventilation even during light rain. Commonly used in bedrooms, basements, and bathrooms for privacy and airflow.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={casementWindowsImage} alt="Casement Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Casement Windows:</strong> Side-hinged windows that swing outward like a door. These offer unobstructed views and excellent ventilation. They're a popular choice for living rooms and kitchens.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={doubleSingleHungWindowsImage} alt="Double & Single-Hung Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Double & Single-Hung Windows:</strong> Two vertically sliding sashes (double-hung) or one fixed upper sash with a lower operable sash (single-hung). Versatile ventilation options and easy cleaning.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={glidingWindowsImage} alt="Gliding Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Gliding Windows:</strong> Horizontal sliding windows with sashes that glide along tracks. These windows are asy to operate and perfectly suitable for rooms with limited space.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={pictureWindowsImage} alt="Picture Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Picture Windows:</strong> Fixed windows that provide expansive views and natural light. These windows are perfect for showcasing scenic views and enhancing your interior aesthetics.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={specialtyWindowsImage} alt="Specialty Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Specialty Windows:</strong> Custom-shaped windows in various designs, including arched, round, and geometric shapes. Add character to your home and complement any architectural style.</p>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="tile text-center">
              <img src={bayBowWindowsImage} alt="Bay & Bow Windows" className="img-fluid mb-3 window-image"/>
              <p><strong>Bay & Bow Windows:</strong> Bay windows protrude from the wall and consist of three or more windows set at angles. Bow windows are curved and typically include four or more windows. Both add architectural interest and create additional interior space.</p>
            </div>
          </Col>
        </Row>

        <h2 className="mb-4 text-center">Benefits:</h2>
        <ul className="mb-5 benefits text-center">
          <p className="benp"><strong>Energy Savings:</strong> Our energy-efficient windows help reduce utility bills by keeping your home cooler in summer and warmer in winter.</p>
          <p className="benp"><strong>Comfort:</strong> Say goodbye to drafts and hot spots with windows that provide consistent temperatures throughout your home. &nbsp;&nbsp; </p>
          <p className="benp"><strong>Security:</strong> Protect your loved ones and belongings with sturdy windows featuring advanced locking mechanisms for added peace of mind.</p>
          <p className="benp"><strong>Curb Appeal:</strong> Enhance the appearance of your home with stylish windows that boost its curb appeal and make a lasting impression. &nbsp;&nbsp; </p>
          <p className="benp"><strong>Noise Reduction:</strong> Enjoy a quieter indoor environment by minimizing external noise pollution with our sound-insulating windows. &nbsp;&nbsp; </p>
          <p className="benp"><strong>UV Protection:</strong> Preserve your furniture, flooring, and artwork from fading by blocking harmful UV rays with our windows' special coatings.</p>
          <p className="benp"><strong>Easy Maintenance:</strong> Spend less time cleaning and maintaining your windows thanks to durable materials and low-maintenance finishes.</p>
        </ul>

        <p className="mb-5 text-center">Ready to upgrade your home? Contact AP Home Services today for a consultation and start enjoying the benefits of beautiful, functional, and energy-efficient windows.</p>
      </Container>
      <div className="text-center mt-5">
        <Link to="/estimate" className="btn btn-primary ml-2">Contact</Link>
        <Link to="/services" className="btn btn-primary mr-2">Back</Link>
      </div>
    </div>
  );
};

export default Windows;
