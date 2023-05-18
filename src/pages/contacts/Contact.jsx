import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Socials from '../../components/socials/Socials'
import {contacts} from "./imports"


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gtj2gy9', 'template_vpkvfjd', form.current, 'NUDmFNU_jpGegkl9u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h1 className="contact__me-heading gradient__text">Contact Me</h1>
      <div className="contact__me-details">
        <div className="contact__me-info">
          <img src={contacts} alt="contactme illustration" />
          <h5 className='gradient__text'>Get in touch</h5>
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
              <label>Name <span>*</span></label>
              <input type="text" name="user_name" required />
              <label>Email<span>*</span></label>
              <input type="email" name="user_email" required />
              <label>Phone Number<span>*</span></label>
              <input type="text" name="user_phone" required />
              <label>Message<span>*</span></label>
              <textarea type="text" name="message" required />
              <input type="submit" value="Send Message" className='form__btn'/>
            </form>
        </div>
      </div>
      <hr />
    </section>
  )
}
