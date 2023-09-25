import React, { useState } from 'react';
import '../assests/css/forgetpass.css';
import forget from '../assests/css/forget.jpg';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({}); // Track validation errors

  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    // Reset errors
    setErrors({});

    // Validation
    const validationErrors = {};

    // Email Validation
    if (!email.trim()) {
      validationErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    // New Password Validation
    if (!newPassword.trim()) {
      validationErrors.newPassword = 'Please enter a new password.';
    } else if (newPassword.length < 8) {
      validationErrors.newPassword = 'Password must be at least 8 characters long.';
    }

    // Confirm Password Validation
    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = 'Please confirm your password.';
    } else if (newPassword !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }

    // If there are validation errors, set them
    setErrors(validationErrors);

    // Dynamically adjust the container height based on the number of errors
    const container = document.querySelector('.forget-password-container');
    if (container) {
      const errorCount = Object.keys(validationErrors).length;
      container.style.height = errorCount > 0 ? `${350 + errorCount * 50}px` : '350px';
    }

    // If there are no errors, proceed
    if (Object.keys(validationErrors).length === 0) {
      // Handle password reset logic here (navigate, etc.)
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      navigate('/login');
    }
  };

  const isValidEmail = (email) => {
    // You can use your email validation regex here
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="forget-password-page">
      <div className='forget-img'>
        <img src={forget} alt="forget" />
      </div>
      <div className="forget-password-container">
        <h2 className="forget-password-heading">Forgot Password???</h2>
        <div className="forget-password-form">
          <input
            type="email"
            placeholder="Email"
            className="forget-password-input1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="forgeterror">{errors.email}</p>}
          <input
            type="password"
            placeholder="New Password"
            className="forget-password-input3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errors.newPassword && <p className="forgeterror">{errors.newPassword}</p>}
          <input
            type="password"
            placeholder="Confirm Password"
            className="forget-password-input2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="forgeterror">{errors.confirmPassword}</p>}
          <button
            className="forget-password-button"
            onClick={handleResetPasswordClick}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
