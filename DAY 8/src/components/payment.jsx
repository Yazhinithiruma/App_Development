import React, { useState } from 'react';
import '../assests/css/payment.css';
import { Link, useNavigate} from 'react-router-dom';
import Header1 from './header1';
import Footer from './footer';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [country, setCountry] = useState('');
  const [isCardNumberValid, setIsCardNumberValid] = useState(true); // State for card number validation
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // State for payment success
  

  const handlePayment = (e) => {
    e.preventDefault();

    // Simple card number validation (you can customize this as needed)
    const cardNumberRegex = /^[0-9]{16}$/; // Assuming 16-digit card numbers
    const isValid = cardNumberRegex.test(cardNumber);
    
    if (isValid) {
      // Implement payment processing logic with a payment gateway here
      // Example: Stripe integration
      setIsPaymentSuccessful(true); // Set the payment success state to show the pop-up
    } else {
      // Card number is invalid
      setIsCardNumberValid(false);
    }
  };
  const navigate = useNavigate();
  const closePopup = () => {
    navigate("/userdashboard")
  };

  return (
    <>
    <Header1/>
    <div className="payment-container">
      <Link to="/productdetails">Back To Cart</Link>
      <h2 className="payment-title">Payment Details</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <div className="payment-group">
          <label htmlFor="card-number" className="payment-label">Card Number</label>
          <input
            type="text"
            id="card-number"
            className={`payment-input ${!isCardNumberValid ? 'invalid' : ''}`} // Add 'invalid' class for styling
            placeholder="Enter your card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          {!isCardNumberValid && (
            <p className="payerror-message">Please enter a valid 16-digit card number.</p>
          )}
        </div>
        <div className="payment-group">
          <label htmlFor="expiry" className="payment-label">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            className="payment-input"
            placeholder="MM/YYYY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>
        <div className="payment-group">
          <label htmlFor="cvv" className="payment-label">CVV</label>
          <input
            type="number"
            id="cvv"
            className="payment-input"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />
        </div>
        <div className="payment-group">
          <label htmlFor="card-holder" className="payment-label">Cardholder Name</label>
          <input
            type="text"
            id="card-holder"
            className="payment-input"
            placeholder="Cardholder name"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>
        <div className="payment-group">
          <label htmlFor="country" className="payment-label">Country</label>
          <select
            id="country"
            className="payment-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="" disabled selected>Select your country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="tn">Tamil Nadu</option>
            <option value="fr">France</option>
            <option value="ch">China</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="payment-button">
          Pay Now
        </button>
      </form>

      {/* Payment Success Pop-up */}
      {isPaymentSuccessful && (
        <div className="custom-popup">
          <h2>Payment Successful</h2>
          <p>Your payment has been processed successfully.</p>
          <button onClick={closePopup}>Close</button>
          
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default PaymentPage;
