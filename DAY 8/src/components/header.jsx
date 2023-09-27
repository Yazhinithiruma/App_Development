import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/css/logo.jpg';
import { Link } from 'react-router-dom';
import '../assests/css/header.css';

const Header = () => {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Implement your logout logic here
    // For example, clear user session and navigate to the login page
    navigate('/login');
  };

  return (
    <div className="header">
      <div className='logoimage1'>
        <img src={logo} alt="logo" />
      </div>
      <div className="shop-name">
        <h1>SHOP HANDMADE</h1>
      </div>
      <ul className="header-links">
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/bothload">Sign Up</Link>
        </li>
      </ul>
      <div className="user-section">
        <p>Welcome, {username}!</p>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
