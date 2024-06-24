import React from 'react';
import { Row, Col } from 'react-bootstrap';
import backgroundImage from '/homesimage.jpg';

const HomePage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className="home-page" style={backgroundStyle}>
            <div className="content-box" style={{ backgroundColor: '#262b3df3', padding: '20px', borderRadius: '10px', maxWidth: '800px', width: '100%' }}>
                <h1 className="text-center" style={{ color: "white" }}>Welcome to AP Home Services</h1>
                <p className="text-center" style={{ color: "lightgray" }}>
                    Your premier residential window and door replacement contractor! Ready to elevate your home with new windows and doors? Contact us today to schedule a free consultation. Our friendly and knowledgeable team is here to answer your questions, discuss your options, and provide you with a customized solution that fits your budget and lifestyle. Let's turn your house into the home of your dreams together!
                </p>
            </div>
        </div>
    );
}

export default HomePage;
