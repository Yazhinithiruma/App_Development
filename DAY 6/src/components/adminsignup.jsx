import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/adminsignup.css';
import Lottie from 'lottie-web';
import animationadminsignup from '../assests/css/lotties/adminsign.json';




function AdminSignup() {
  const containAdminsignup = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containAdminsignup.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationadminsignup,
 });
 return () => {
  anim.destroy();
};

},[]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    socialMediaLinks: '',
    contactNumber: '',
    businessDescription: '', // Added Business Description field
    businessAddress: '', // Added Business Address field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validation for First Name
    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'Please enter your first name.';
    }

    // Validation for Last Name
    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Please enter your last name.';
    }

    // Validation for Email
    if (!formData.email.trim()) {
      validationErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    // Validation for Password
    if (!formData.password.trim()) {
      validationErrors.password = 'Please enter your password.';
    } else if (formData.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long.';
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.password = 'Passwords do not match.';
    }

    // Validation for Business Name
    if (!formData.businessName.trim()) {
      validationErrors.businessName = 'Please enter your business name.';
    }

    // Validation for Contact Number
    if (!formData.contactNumber.trim()) {
      validationErrors.contactNumber = 'Please enter your contact number.';
    } else if (!isValidContactNumber(formData.contactNumber)) {
      validationErrors.contactNumber = 'Please enter a valid contact number.';
    }

    // Validation for Business Description
    if (!formData.businessDescription.trim()) {
      validationErrors.businessDescription = 'Please enter your business description.';
    }

    // Validation for Business Address
    if (!formData.businessAddress.trim()) {
      validationErrors.businessAddress = 'Please enter your business address.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      // Clear the form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        socialMediaLinks: '',
        contactNumber: '',
        businessDescription: '',
        businessAddress: '',
      });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidContactNumber = (contactNumber) => {
    // You can add validation rules for contact number here
    // For example, you can check if it's a valid phone number format
    // You can use regex or other methods for this validation
    // For simplicity, we're just checking if it's not empty in this example
    return contactNumber.trim() !== '';
  };

  return (
    <div className="admin-signup-container">
       <div className='animation-container-adminsignup'>
          <div ref={containAdminsignup} className='animcon'></div>
        </div>
      <h2>Artesians Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
          />
          {errors.businessName && <p className="error">{errors.businessName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="socialMediaLinks">Social Media Links</label>
          <input
            type="text"
            id="socialMediaLinks"
            name="socialMediaLinks"
            value={formData.socialMediaLinks}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="businessDescription">Business Description</label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            value={formData.businessDescription}
            onChange={handleChange}
          />
          {errors.businessDescription && (
            <p className="error">{errors.businessDescription}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="businessAddress">Business Address</label>
          <textarea
            id="businessAddress"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
          />
          {errors.businessAddress && (
            <p className="error">{errors.businessAddress}</p>
          )}
        </div>
        <button type="submit">Signup</button>
        <p className='adminlogin-account'>
        Already have an account? <Link to="/adminlogin">Login</Link>
      </p>
      </form>
      
    </div>
  );
}

export default AdminSignup;
