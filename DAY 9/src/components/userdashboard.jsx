import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar'; 
import '../assests/css/userdashboard.css';
import Footer from './footer';
import Lottie from 'lottie-web';
import animationuserdashboard from '../assests/css/lotties/userdashboard.json';

const Dashboard = () => {
  const containuserdashboard = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containuserdashboard.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationuserdashboard,
    });
    return () => {
      anim.destroy();
    };
  }, []);
  return (
    <>
    <div className='animation-container-userdashboard'>
        <div ref={containuserdashboard} className='animcon'></div>
      </div>
    <div>
      <NavBar />
      {/* Add your dashboard content here */}
      <div className="userdashboard-content">
        <h1>Where creativity meets craftsmanship, </h1><h1> beautiful things happen</h1>
        <h1>Crafting is the silent language </h1><h1>of creativity</h1>
        <h1>Homemade crafts: adding a touch of </h1><h1>personality to every creation</h1>
        <h1>!!!Welcome to Shop HandMade!!!</h1>
        {/* Add more dashboard components and content here */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
