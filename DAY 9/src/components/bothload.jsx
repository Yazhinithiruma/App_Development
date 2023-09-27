// SignupPage.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-web';
import animationadminlogin from '../assests/css/lotties/adminlogin.json';
import animationuserlogin from '../assests/css/lotties/userlogin.json';
import '../assests/css/bothload.css';

const Bothload = () => {
  const containAdmin = useRef(null); // Use a separate ref for admin animation
  const containUser = useRef(null); // Use a separate ref for user animation

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containAdmin.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationadminlogin,
    });
    return () => {
        anim.destroy();
};
  
    
  }, []);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containUser.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationuserlogin,
    });
    return () => {
        anim.destroy();
};
  
  }, []);

  return (
    <>
      <div className="bothload-page">
        <h2>CHOOSE YOUR SIGNUP TYPE</h2>
        <div className='animation-container-adminlogin'>
          <div ref={containAdmin} className='animcon'></div>
        </div>
        <div className='animation-container-userlogin'>
          <div ref={containUser} className='animcon'></div>
        </div>
        <div className="bothload-page-options-admin">
          <Link to="/adminsignup">
            <span className='bothload-page-options-admin1'>Artesians</span></Link>
          </div>
          <div className="bothload-page-options-user">
          <Link to="/signup">
            <span className='bothload-page-options-admin2'>User</span></Link>
        </div>
      </div>
    </>
  );
};

export default Bothload;
