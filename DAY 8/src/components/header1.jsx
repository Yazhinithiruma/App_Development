import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assests/css/header1.css';
import logo from '../assests/css/logo.jpg';

const Header1 = () => {
  return (
    <>
    <header className="header1">
      <div className='logoimage2'>
        <img src={logo} alt="logo" />
      </div>
      <div className="shop-name1">
        <h1>SHOP HANDMADE</h1>
      </div>
      <nav className="header-links1">
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/userdashboard">
              <i className="material-icons">home</i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header1;
