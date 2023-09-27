import React, { useState } from 'react';
import '../assests/css/FeedbackPage.css';
import feedbackimage from '../assests/css/feedback.jpg';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [ratings, setRatings] = useState(0);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Feedback:', feedback);
    console.log('Ratings:', ratings);
    
  };

  return (
    <>
      <div className='feedback-container'>
        <div className='feedback-img'>
          <img src={feedbackimage} alt="feedbackimage" />
        </div>
        <div className='feedback-form-container'>
          <h2>Feedback and Review</h2>
          <form onSubmit={handleSubmit}>
            
              <div className="form-group">
                <label htmlFor="ratings">Ratings:</label>
                <Rating
                  name="simple-controlled"
                  value={ratings} // Use the ratings state to control the value
                  onChange={(event, newValue) => {
                    setRatings(newValue); // Update the ratings state when the value changes
                  }}
                />
              </div>
            
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={handleFeedbackChange}
                rows="4"
                placeholder="Write your feedback here..."
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <Link to="/userdashboard" className="dashboard-link-button">Back</Link>
        </div>
      </div>
    </>
  );
}

export default FeedbackPage;
