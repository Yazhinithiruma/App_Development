import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/adminNavBar.css'; // Ensure the correct path to your CSS
import Header from './header';
import 'material-icons/iconfont/material-icons.css';
import Footer from './footer';
import Lottie from 'lottie-web';
import animationadminnavbar from '../assests/css/lotties/admindashboard.json';
import animationadmindashnew from '../assests/css/lotties/admindashnew.json';



const AdminNavBar = () => {
  const containadminnavbar = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containadminnavbar.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationadminnavbar,
    });
    return () => {
      anim.destroy();
    };
  }, []);
  const containadmindashnew = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containadmindashnew.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationadmindashnew,
    });
    return () => {
      anim.destroy();
    };
  }, []);
  return (
    <>
    <div className='animation-container-adminnavbar'>
        <div ref={containadminnavbar} className='animcon'></div>
      </div>
      <div className='animation-container-admindashnew'>
        <div ref={containadmindashnew} className='animcon'></div>
      </div>
    <Header/>
      <nav className="adminnavbar">
        <ul className="adminnav-links">
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
            <Link to="/productcart">
              <i className="material-icons">shopping_cart</i> Product Listing
            </Link>
          </li>
          <li>
            <Link to="/forgetpass">
              <i className="material-icons">settings</i> Reset Password
            </Link>
          </li>
          <li>
            <Link to="/ProductTracking">
              <i className="material-icons">track_changes</i> Order Tracking
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <i className="material-icons">person</i> User Profile
            </Link>
          </li>
          <li>
            <Link to="/productdetails">
              <i className="material-icons">add_box</i> Update or Add Crafts
            </Link>
          </li>
        </ul>
      </nav>
      <Footer/>
    </>
  );
};

export default AdminNavBar;
