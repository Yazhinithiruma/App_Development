import React, { useEffect, useRef, useState } from 'react';
import '../assests/css/faq.css';
import Lottie from 'lottie-web';
import animationFAQ from '../assests/css/lotties/faq.json';
import {  useNavigate } from 'react-router-dom';
import Header1 from './header1';
import Footer from './footer';



const FAQPage = () => {
  const containFAQ = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containFAQ.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationFAQ,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  // Define FAQ data as an array of objects with questions and answers
  const faqData = [
    {
      question: 'What is the primary goal of our Online Marketplace project?',
      answer:
        'The primary goal of our Online Marketplace project is to create a dynamic platform that connects buyers and sellers, allowing users to buy and sell a wide range of products.',
    },
    {
      question: 'How Do I Log In to My Account?',
      answer:
        'To log in to your account, click on the "Login" or "Sign In" button located at the top-right corner of the website. Enter your registered email address and password, then click the "Log In" button. If you\'re a new user, you can also click "Register" to create an account.',
    },
    {
      question: 'How Can I Add Products to Sell and Purchase Products?',
      answer:
        'Adding products to sell is easy! After logging in, navigate to your seller dashboard. There, you can find an option to "Add New Product." Provide details about your product, including its name, description, price, and upload images. Once your product is listed, buyers can find and purchase it. To buy a product, simply search for the item you want, click on it, and select "Add to Cart." Proceed to the checkout to complete your purchase.',
    },
    {
      question: 'What is the strategy for managing user reviews and ratings, and how will these impact the user experience?',
      answer:
        'Users will be able to leave reviews and ratings for products and sellers. These ratings and reviews will contribute to an average rating displayed on product and seller profiles. It will enhance the user experience by providing valuable feedback.',
    },
    {
      question: 'Could you describe the database schema and relationships between different entities in the project?',
      answer:
        'The database schema will include tables for users, products, orders, reviews, and more. Relationships will be established, such as a one-to-many relationship between users and orders. Product and seller relationships will also be defined.',
    },
    // {
    //   question: 'How will user authentication and data privacy be ensured?',
    //   answer:
    //     'User authentication will be implemented using secure mechanisms such as JWT (JSON Web Tokens) or OAuth 2.0. Data privacy will be ensured by complying with relevant data protection regulations and implementing role-based access control.',
    // },
  ];

  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle the expansion of a FAQ item
  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  // Function to navigate to Privacy Policy
  const navigateToPrivacyPolicy = () => {
    navigate('/PrivacyPolicy');
  };

  // Function to navigate to Terms and Conditions
  const navigateToTermsandConditions = () => {
    navigate('/TermsandConditions');
  };

  // Function to navigate to FAQ
  const navigateToFAQ = () => {
    navigate('/faq');
  };

  return (
    <>
    <Header1/>
      <div className='animation-container-faq'>
        <div ref={containFAQ} className='animcon'></div>
      </div>
      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${expandedItems.includes(index) ? 'expanded' : ''}`}
              key={index}
              onClick={() => toggleItem(index)}
            >
              <div className="faq-question">{item.question}</div>
              <div className="faq-answer">{expandedItems.includes(index) ? item.answer : ''}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FAQPage;
