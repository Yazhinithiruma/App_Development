import React, { useState } from 'react';
import '../assests/css/signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', { firstName, lastName, email, password });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const containsSpecialCharacter = (str) => {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
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
      <div className="containerlog">
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="lheads">
              <label htmlFor="username">SIGNUP</label>
            </div>
            <div className="input-container">
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                className="ftext"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="input-container">
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                className="ltext"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="llntext"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="pplntext"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div >
              <button type="submit" className="ssubmit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
