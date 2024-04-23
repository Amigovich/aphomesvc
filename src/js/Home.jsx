import React from 'react';

const HomePage = () => {
    return (
    <div className="home-page">
        <div className="left-content">
        <h2>Welcome to AP Home Services</h2>
        <p>
            Your premier residential window and door replacement contractor! Ready to elevate your home with new windows and doors? Contact us today to schedule a free consultation. Our friendly and knowledgeable team is here to answer your questions, discuss your options, and provide you with a customized solution that fits your budget and lifestyle. Let's turn your house into the home of your dreams together!
        </p>
        </div>
        <div className="right-content">
        <h2>Need a Free Estimate?</h2>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
                <label htmlFor="zipcode">Zipcode:</label>
                <input type="text" id="zipcode" name="zipcode" required />
            </div>
            <div className="form-group">
                <label htmlFor="service">Type of Service Needed:</label>
                <select id="service" name="service">
                    <option value="window-replacement">Window Replacement</option>
                    <option value="door-installation">Door Installation</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="how">How did you hear about us?</label>
                <textarea id="how" name="how" rows="3"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
}

export default HomePage;