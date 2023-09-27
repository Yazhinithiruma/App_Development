import React, { useEffect, useRef, useState } from 'react';
import '../assests/css/adminlogin.css';
import { useDispatch } from 'react-redux';
import { login } from './redux/UserSlice';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-web';
import animationadminlogin from '../assests/css/lotties/adminlogin2.json';
import { Link } from 'react-router-dom';

function AdminLogin() {
  const containAdminlogin = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containAdminlogin.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationadminlogin,
    });
    return () => {
      anim.destroy();
    };
  }, []);

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
    console.log('Username:', username);
    console.log('Password:', password);

    // Assuming you have an 'isAdmin' check here.
    //if (isAdmin(email, username, password)) {
      // If admin credentials are valid, dispatch the login action and navigate to the admin dashboard.
      //dispatch(login(username));
      navigate('/adminnavbar');
    //} else {
      // Display an error message if admin login fails.
      //alert('Admin login failed. Please check your credentials.');
    //}
  };

  const isAdmin = (email, username, password) => {
    // You can implement your admin validation logic here.
    // For example, check if the email, username, and password match admin credentials in your database.
    // Return true if admin credentials are valid, otherwise return false.
    // Replace this with your actual admin validation logic.
    return false; // Replace with your logic.
  };

  return (
    <>
      <div className='animation-container-adminlogin'>
        <div ref={containAdminlogin} className='animcon'></div>
      </div>
      <div className="adminlogincontainerlog">
        <div className="adminloginbody">
          <form onSubmit={handleSubmit}>
            <div className="adminloginheads">
              <label htmlFor="username">ADMIN LOGIN</label>
            </div>
            <div className="adminlogininput-container">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="adminloginemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorEmail && <p className="error">{errorEmail}</p>}
            </div>
            <div className="adminlogininput-container">
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                className="adminloginusername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errorUsername && <p className="error">{errorUsername}</p>}
            </div>

            <div className="adminlogininput-container">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="adminloginpass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errorPassword && <p className="error">{errorPassword}</p>}
            </div>

            <div>
              <button type="submit" className="adminloginsubmit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div className='adminlogin-link-haveanaccount'>
          <Link to='/forgetpass'>
            <p style={{ color: "#014352", marginLeft: "80px" }}>
              Forget Password!!!
            </p>
          </Link>
          <p>
            Don't have an account? Create Account{' '}
            <Link to="/adminsignup" style={{ color: "#014352" }}>
              <span className='artesianadminloginpage'>Artesians???&nbsp;</span>
            </Link>
            {/* <Link to="/signup" style={{ color: "#014352" }}>
              <span className='userloginpage'>User???</span>
            </Link> */}
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
