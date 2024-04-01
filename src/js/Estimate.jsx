import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
            <h2>Contact Us</h2>
            <p>Ready to start your construction project with AP Home Services? Contact us for a personalized consultation and a free quote today.</p>
            <Form id="contactForm" onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" required />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" required />
                </Form.Group>

                <Form.Group controlId="services">
                    <Form.Label>Services Requested:</Form.Label>
                    <Form.Control as="select" required>
                        <option value="windows">Select One</option>
                        <option value="windows">Windows</option>
                        <option value="roofing">Roofing</option>
                        <option value="siding">Siding</option>
                        <option value="gutters">Gutters</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="additionalServices">
                <Form.Label>Details and/or Additional Services:</Form.Label>
                <Form.Control type="text" placeholder="Enter additional services" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                        'Send Quote Request'
                    )}
                </Button>
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