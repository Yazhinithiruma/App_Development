import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/NavBar.css'; // Ensure the correct path to your CSS
import Header from './header';
import 'material-icons/iconfont/material-icons.css';


const NavBar = () => {
  return (
    <>
      <Header />
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/userdashboard">
              <i className="material-icons">home</i> Home
            </Link>
          </li>
          <li>
            <Link to="/adminnavbar">
              <i className="material-icons">dashboard</i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <i className="material-icons">person</i> Profile
            </Link>
          </li>
          <li>
            <Link to="/productcart">
              <i className="material-icons">shopping_cart</i> Product Listing
            </Link>
          </li>
          <li>
            <Link to="/productdetails">
              <i className="material-icons">add_shopping_cart</i> Add to Cart
            </Link>
          </li>
          <li>
            <Link to="/forgetpass">
              <i className="material-icons">settings</i> Reset Password
            </Link>
          </li>
          <li>
            <Link to="/ProductTracking">
              <i className="material-icons">track_changes</i> Product Tracking
            </Link>
          </li>
          <li>
            <Link to="/feedbackpage">
              <i className="material-icons">rate_review</i> Feedback & Reviews
            </Link>
          </li>
        </ul>
      </nav>
      
    </>
  );
};

export default NavBar;
