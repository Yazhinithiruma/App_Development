import React, { useEffect, useRef } from 'react';
import Header from './header1'; 
import Footer from './footer'; 
import '../assests/css/contactus.css';
import Lottie from 'lottie-web';
import animationcontactus from '../assests/css/lotties/contact us.json';


const ContactUs = () => {
  const containcontactus = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containcontactus.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationcontactus,
    });
    return () => {
      anim.destroy();
    };
  }, []);
    return (
        <>
        <div className='animation-container-contactus'>
        <div ref={containcontactus} className='animcon'></div>
      </div>
      <div className='contactuh'>
      <Header />
    <div className="contact-us">
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions or inquiries, feel free to contact us using the form above or through the following:</p>
        <p>Email: contact@shophandmade.com</p>
        <p>Phone: (91) 9645632792</p>
        <p>Address: 123 Craft Street,Chennai</p>
      </section>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>


    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
