import React from 'react';
import '../assests/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/PrivacyPolicy">Privacy Policy</a>
        <a href="/TermsandConditions">Terms and Conditions</a>
        <a href="/faq">FAQ</a>
        <a href="/contactus">Contact Us</a>
      </div>
      <p>&copy; {new Date().getFullYear()} SHOP HOMEMADE</p>
    </footer>
  );
};

export default Footer;
