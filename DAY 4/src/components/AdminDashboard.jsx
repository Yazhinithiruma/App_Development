import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assests/css/AdminDashboard.css';
import logo from '../assests/css/logo.jpg';
import 'material-icons/iconfont/material-icons.css';


const AdminDashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle the "Login" button click
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <>
    <div className='logoimage'>
      <img src={logo} alt="logo"/>
    </div>
      <div className="title-bar">
        <h1>Welcome, {email}!</h1>
      </div>
      <button className="dashlogin-button" onClick={handleLoginClick}>
        LOGOUT
      </button>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="/">
                <i className="material-icons">home</i> Home
              </a>
            </li>
            <li>
              <a href="/dashboard">
                <i className="material-icons">dashboard</i> Dashboard
              </a>
            </li>
            <li>
              <a href="/profile">
                <i className="material-icons">person</i> Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <footer>
          <p>&copy; 2023 Homecrafts</p>
        </footer>
      </div>
    </>
  );
};

export default AdminDashboard;
