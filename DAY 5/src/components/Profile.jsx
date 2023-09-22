import React, { useState } from 'react';
import '../assests/css/Profile.css';
import profileimage from '../assests/css/profile.jpg';

function Profile() {
  // State to manage the visibility of the profile information pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle the visibility of the pop-up
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
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
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Location:</strong> New York, NY
            </p>
            <p>
              <strong>About Me:</strong> I enjoy crafting and DIY projects in my free time.
            </p>
          </div>
        </div>
      )}

      <div className='word'>
        <h1>Welcome, John Doe!</h1>
     </div>

      <section className="my-crafts">
        <h2>My Crafts</h2>
        <ul>
          <li>
            <a href="#">Craft 1</a>
          </li>
          <li>
            <a href="#">Craft 2</a>
          </li>
          <li>
            <a href="#">Craft 3</a>
          </li>
        </ul>
      </section>
   </>
  );
}

export default Profile;
