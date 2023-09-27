import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Dashboard, Person, VpnKey, LocalShipping, People, Assessment } from '@mui/icons-material';
import '../assests/css/sidebar.css';
import Header from './header';
import Footer from './footer';

const Sidebar = () => {
  return (
    <>
    <Header/>
    <div className="sidebar">
        <div className='sidebar-inside'>
      <Link to="/userdashboard" className="sidebar-link">
        <Home /> Home
      </Link>
      <Link to="/adminnavbar" className="sidebar-link">
        <Dashboard /> Dashboard
      </Link>
      <Link to="/profile" className="sidebar-link">
        <Person /> User Profile
      </Link>
      <Link to="/forgotpass" className="sidebar-link">
        <VpnKey /> Reset Password
      </Link>
      <Link to="/ordertracking" className="sidebar-link">
        <LocalShipping /> Product Tracking
      </Link>
      <Link to="/customers" className="sidebar-link">
        <People /> Customers
      </Link>
      <Link to="/order-summary" className="sidebar-link">
        <Assessment /> Order Summary
      </Link>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Sidebar;
