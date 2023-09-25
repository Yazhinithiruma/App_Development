import React, { useState } from 'react';
import '../assests/css/Profile.css';
import profileimage from '../assests/css/profile.jpg';
import { Link } from 'react-router-dom';
import Header1 from './header1';
import Footer from './footer';


function Profile() {
  // State to manage the visibility of the profile information pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle the visibility of the pop-up
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    <Header1/>
      <div className="profile-image" onClick={togglePopup}>
        <img src={profileimage} alt="profileimage" />
      </div>

      {/* Profile Information Pop-up */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h2>Profile Information</h2>
            <p>
              <strong>Name:</strong> Yazhini
            </p>
            <p>
              <strong>Email:</strong> 727821tucs257@skct.edu.in
            </p>
            <p>
              <strong>Location:</strong> Yamaga showroom backside, Pudukkottai
            </p>
            <p>
              <strong>About Me:</strong> I enjoy crafting and DIY projects in my free time.
            </p>
          </div>
        </div>
      )}

      {/* <div className="word">
        <h1>Welcome!!!</h1>
      </div>

      <section className="my-crafts">
        <h2>My Crafts</h2>
        <ul>
          <li>
            <Link to="/">Craft 1</Link>
          </li>
          <li>
            <Link to="/">Craft 2</Link>
          </li>
          <li>
            <Link to="/">Craft 3</Link>
          </li>
        </ul> */}
      {/* </></section> */}
      <Footer/>
    </>
  );
}

export default Profile;
