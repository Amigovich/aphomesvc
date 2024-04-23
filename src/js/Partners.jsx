import React from 'react';

const Partners = () => {
  return (
    <div className="partners-container">
      <h2>Our Partners</h2>
      <div className="partner">
        <img src="placeholder_image_url" alt="Andersen" />
        <div className="partner-info">
          <h3>Andersen</h3>
          <p>
            Andersen is a leading manufacturer of windows and doors, known for their quality craftsmanship and innovative designs. With a wide range of products to choose from, Andersen offers solutions for every style and budget.
          </p>
        </div>
      </div>
      <div className="partner">
        <img src="placeholder_image_url" alt="Marvin" />
        <div className="partner-info">
          <h3>Marvin</h3>
          <p>
            Marvin is a premier manufacturer of windows and doors, renowned for their dedication to craftsmanship, innovation, and sustainability. From traditional to contemporary designs, Marvin offers products that enhance any home.
          </p>
        </div>
      </div>
      <div className="partner">
        <img src="placeholder_image_url" alt="Kolbe" />
        <div className="partner-info">
          <h3>Kolbe</h3>
          <p>
            Kolbe offers a wide range of windows and doors designed to inspire creativity and elevate any space. With customizable options and high-quality materials, Kolbe products are built to last and make a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partners;