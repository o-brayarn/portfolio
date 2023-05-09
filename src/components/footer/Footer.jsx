import React from "react";
import Socials from "../socials/Socials";
import './footer.css';

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="portfolio__footer">
        <div className="footer__links">
          <h5>Important Links</h5>
          <ul>
            <li> <a href="#home">Home</a></li>
            <li> <a href="#about">About Me</a></li>
            <li> <a href="#services">Services</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="#contact">Contact</a></li>
          </ul>
        
        </div>

        <div className="footer__socials">
          <h5>Get in touch:</h5>
         <Socials /> 
        </div>
        <div className="footer__content">
            <p>
            Copyright &copy; {year}. All rights reserved by{" "}
            <span>
              <a href="https://brayarn.vercel.app/">brayarn &trade;</a>
            </span>
          </p>
        </div>
       
      </div>
    </>
  );
}
