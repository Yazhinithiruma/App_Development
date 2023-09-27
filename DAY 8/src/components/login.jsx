import React, { useState } from 'react';
import '../assests/css/login.css';
import { useDispatch } from 'react-redux';
import { login } from './redux/UserSlice';
import { useNavigate } from 'react-router';
import loginimage from '../assests/css/login.jpg';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorEmail('');
    setErrorPassword('');
    setErrorUsername('');

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

    if (!username.trim()) {
      setErrorUsername('Please enter your username.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);
    dispatch(login(username));
    navigate('/userdashboard');
  };

  const handleForgetPasswordClick = () => {
    navigate('/forgetpass');
  };

  return (
    <>
      <div className='login-img'>
        <img src={loginimage} alt="loginimage" />
      </div>
      <div className="logincontainerlog">
        <div className="loginbody">
          <form onSubmit={handleSubmit}>
            <div className="loginheads">
              <label htmlFor="username">LOGIN</label>
            </div>
            <div className="logininput-container">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="loginemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorEmail && <p className="error">{errorEmail}</p>}
            </div>
            <div className="logininput-container">
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                className="loginusername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errorUsername && <p className="error">{errorUsername}</p>}
            </div>

            <div className="logininput-container">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="loginpass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errorPassword && <p className="error">{errorPassword}</p>}
            </div>

            <div>
              <button type="submit" className="loginsubmit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className='login-para'>
          <div>
            <Link to='/forgetpass'>
              <p style={{ color: "#014352", marginLeft: "-30px" }}>
                Forget Password!!!
              </p>
            </Link>
          </div>
          <p style={{ marginLeft: "-140px" }}>
            Don't have an account? Create Account{' '}
            {/* <Link to="/adminsignup" style={{ color: "#014352" }}>
              <span className='artesianloginpage'>Artesians???&nbsp;</span>
            </Link> */}
            <Link to="/signup" style={{ color: "#014352" }}>
              <span className='userloginpage'>User???</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
