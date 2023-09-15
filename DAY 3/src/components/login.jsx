import React, { useState } from 'react';
import '../assests/css/login.css';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    setErrorEmail('');
    setErrorPassword('');

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.trim()) {
      setErrorEmail('Please enter your email.');
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorEmail('Please enter a valid email address.');
      return;
    }

    if (!password.trim()) {
      setErrorPassword('Please enter your password.');
      return;
    }

    if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters long.');
      return;
    }

    
    console.log('Email:', email);
    console.log('Password:', password);

    
  };

  return (
    <>
      <div className="containerlog">
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="lheads">
              <label htmlFor="username">LOGIN</label>
            </div>
            <div>
            
<div className="input-container">
  <input
    type="email"
    name="email"
    placeholder="EMAIL"
    className="lntext"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  {errorEmail && <p className="error">{errorEmail}</p>}
</div>

<div className="input-container">
  <input
    type="password"
    name="password"
    placeholder="PASSWORD"
    className="plntext"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  {errorPassword && <p className="error">{errorPassword}</p>}
</div>

            </div>
            <div>
              <button type="submit" className="lsubmit">
                SUBMIT
              </button>
            </div>
            <div>
              <button type="submit" className="forgetpass">
                FORGET PASSWORD
              </button>
            </div>
            <div>
              <button
                type="button"
                className="signupbut"
                onClick={() => navigate('/signup')}
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
