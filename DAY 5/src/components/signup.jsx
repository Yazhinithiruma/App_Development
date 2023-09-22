import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../assests/css/signup.css';
import signupimage from '../assests/css/signup.jpg';
import { Link } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validation for First Name
    if (!firstName.trim()) {
      validationErrors.firstName = 'Please enter your first name.';
    }

    // Validation for Last Name
    if (!lastName.trim()) {
      validationErrors.lastName = 'Please enter your last name.';
    }

    // Validation for Email
    if (!email.trim()) {
      validationErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    // Validation for Password
    if (!password.trim()) {
      validationErrors.password = 'Please enter your password.';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long.';
    } else if (!containsSpecialCharacter(password)) {
      validationErrors.password = 'Password must contain at least one special character.';
    } else if (!containsUpperCase(password)) {
      validationErrors.password = 'Password must contain at least one uppercase letter.';
    } else if (!containsLowerCase(password)) {
      validationErrors.password = 'Password must contain at least one lowercase letter.';
    }else if (password.length < 8 && password !== confirmPassword) {
      validationErrors.password = 'Password must be at least 8 characters long and match the confirmation.';
    }

    // Validation for Confirmation Password
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', { firstName, lastName, email, password });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
      navigate('/login');
    }
  
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const containsSpecialCharacter = (str) => {
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialChars.test(str);
  };

  const containsUpperCase = (str) => {
    return /[A-Z]/.test(str);
  };

  const containsLowerCase = (str) => {
    return /[a-z]/.test(str);
  };

  

  return (
    <>
     <div className='signupimage'>
      <img src={signupimage} alt="signupimage"/>
    </div>
      <div className="signupcontainerlog">
        <div className="signupbody">
          <form onSubmit={handleSubmit}>
            <div className="signupheads">
              <label htmlFor="username">SIGNUP</label>
            </div>
            <div className="signupinput-container">
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                className="signupfname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="signupinput-container">
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                className="signuplname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="signupinput-container">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="signupemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="signupinput-container">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="signuppass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="signupinput-container">
              <input
                type="password"
                name="confirmPassword"
                placeholder="CONFIRM PASSWORD"
                className="signupconpass"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <div>
              <button type="submit" className="signupsubmitbutton">
                SUBMIT
              </button>
            </div>
          </form>
         
        </div>
        <p style={{marginLeft:"250px",marginTop:"520px",color:"#014352"}}>Already have an account? <Link to="/login" style={{color:"#014352"}}>LOGIN</Link></p>
            {/* Use onClick to navigate to ForgetPassword */}
           
          </div>
    </>
  );
}

export default Signup;
