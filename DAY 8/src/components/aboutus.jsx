import React, { useState } from 'react';
import '../assests/css/aboutus.css'; 
import aboutimage from '../assests/css/about.jpg';
import { Link } from 'react-router-dom';

function AboutUs() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopUp = () => {
    setShowPopup(true);
  };

  const closePopUp = () => {
    setShowPopup(false);
  };

  const contactDetails = {
    name: 'Homemade Crafts',
    products: ['Handmade Jewelry', 'Unique Home Decor', 'Personalized Gifts'],
    ratings: 4.8, // Assuming an average rating
    phoneNumber: '+1234567890',
    address: '123 Main Street, City, Country',
  };

  return (
    <div className='aboutus-page'>
      <div className='about-img-container' onClick={openPopUp}>
        <img src={aboutimage} alt="aboutimage" />
        {/* Contact Information Pop-up */}
        {showPopup && (
          <div className="contact-popup">
            <div className="contact-popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="contact-popup-close" onClick={closePopUp}>
                &times;
              </span>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or need assistance, please feel free to reach out to us at:
                <br />
                Phone: {contactDetails.phoneNumber}
                <br />
                Address: {contactDetails.address}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="aboutus-container">
        <h2 className="aboutus-title">About Us</h2>
        <p className="aboutus-text">
          Welcome to {contactDetails.name}! We are passionate about crafting and believe in the beauty of handmade products.
          Our mission is to provide a platform for talented artisans and craft enthusiasts to showcase their creations.
        </p>
        <p className="aboutus-text">
          Our diverse range of homemade crafts includes:
          <ul>
            {contactDetails.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </p>
        <p className="aboutus-text">
          Average Ratings: {contactDetails.ratings} stars
        </p>
        <p className="aboutus-text">
          Phone Number: {contactDetails.phoneNumber}
        </p>
        <p className="aboutus-text">
          Address: {contactDetails.address}
        </p>
        <Link to="/userdashboard" className="dashboard-link-button">Back</Link>

      </div>
    </div>
  );
}

export default AboutUs;
