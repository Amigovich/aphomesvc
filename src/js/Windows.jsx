import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Windows = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Windows Replacement And Installation with AP Home Services</h1>
      <p className="text-center">Our trusted by industry-leading partners <a href="https://www.andersenwindows.com/windows-and-doors/windows/" target="_blank" rel="noreferrer">Anderson</a>, <a href="https://www.marvin.com/products/windows" target="_blank" rel="noreferrer">Marvin</a>, and <a href="https://www.kolbewindows.com/windows" target="_blank" rel="noreferrer">Kobe</a>. Our team is dedicated to improving your home's comfort, style, and energy efficiency. From selecting the right windows to expert installation, we're here to make the process smooth and stress-free.</p>
      
      <Row className="mb-3 mt-5 justify-content-center">
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Awning Windows" />
            <p><strong>Awning Windows:</strong> Top-hinged windows that open outward from the bottom. Ideal for ventilation even during light rain. Commonly used in bedrooms, basements, and bathrooms for privacy and airflow.</p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Casement Windows" />
            <p><strong>Casement Windows:</strong> Side-hinged windows that swing outward like a door. Offer unobstructed views and excellent ventilation. Popular choice for living rooms and kitchens.</p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Double & Single-Hung Windows" />
            <p><strong>Double & Single-Hung Windows:</strong> Two vertically sliding sashes (double-hung) or one fixed upper sash with a lower operable sash (single-hung). Versatile ventilation options and easy cleaning.</p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Gliding Windows" />
            <p><strong>Gliding Windows:</strong> Horizontal sliding windows with sashes that glide along tracks. Easy to operate and suitable for rooms with limited space.</p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Picture Windows" />
            <p><strong>Picture Windows:</strong> Fixed windows that provide expansive views and natural light. Perfect for showcasing scenic views and enhancing interior aesthetics.</p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Bay & Bow Windows" />
            <p><strong>Bay & Bow Windows:</strong> Bay windows protrude from the wall and consist of three or more windows set at angles. Bow windows are curved and typically include four or more windows. Both add architectural interest and create additional interior space.</p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="tile text-center">
            <img src="https://via.placeholder.com/150" alt="Specialty Windows" />
            <p><strong>Specialty Windows:</strong> Custom-shaped windows in various designs, including arched, round, and geometric shapes. Add character to your home and complement any architectural style.</p>
          </div>
        </Col>
      </Row>

      <h2 className="mb-5 text-center">Benefits:</h2>
      <ul className="mb-5 benefits">
        <li><strong>Energy Savings:</strong> Our energy-efficient windows help reduce utility bills by keeping your home cooler in summer and warmer in winter.</li>
        <li><strong>Comfort:</strong> Say goodbye to drafts and hot spots with windows that provide consistent temperatures throughout your home.</li>
        <li><strong>Security:</strong> Protect your loved ones and belongings with sturdy windows featuring advanced locking mechanisms for added peace of mind.</li>
        <li><strong>Curb Appeal:</strong> Enhance the appearance of your home with stylish windows that boost its curb appeal and make a lasting impression.</li>
        <li><strong>Noise Reduction:</strong> Enjoy a quieter indoor environment by minimizing external noise pollution with our sound-insulating windows.</li>
        <li><strong>UV Protection:</strong> Preserve your furniture, flooring, and artwork from fading by blocking harmful UV rays with our windows' special coatings.</li>
        <li><strong>Easy Maintenance:</strong> Spend less time cleaning and maintaining your windows thanks to durable materials and low-maintenance finishes.</li>
      </ul>

      <p className="mb-5 text-center">Ready to upgrade your home? Contact AP Home Services today for a consultation and start enjoying the benefits of beautiful, functional, and energy-efficient windows.</p>
    </Container>
  );
};

export default Windows;