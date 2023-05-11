import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Socials from '../../components/socials/Socials'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h1 className="contact__me-heading">Contact Me</h1>
      
      <div className="contact__me-details">
        <div className="contact__me-info">
          <h5>Get in touch:</h5>
          <p> <span> Email: {" "}</span>brayarnogeda@gmail.com</p>
          <p><span> Phone:{" "}</span>+254741280129</p>
          <p>Open for fulltime and freelance opportunities. Let's connect and build something awesome together!</p>
          <div className='contact__me-socials'>
            <p>Find me on:</p>
            <Socials />
          </div>
        </div>

        <div className="contact__me-form">
           <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea type="text" name="message" />
              <input type="submit" value="Send Message" className='form__btn'/>
            </form>
        </div>
      </div>
      <hr />
    </section>
  )
}
