import React from "react";
import './footer.css';
import logo from "../../assets/logo.png";


export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <section className="portfolio__footer">
         <div className="main__footer">
            <div className="portfolio__brand">
              <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="BO: Bringing your ideas to life!"
              />
              <h5>Bringing your ideas to life</h5>
            </div>
          
            {/* <div className="footer__links">
              <h5>Links</h5>
              <ul>
                <li> <a href="#home">Home</a></li>
                <li> <a href="#about">About Me</a></li>
                <li> <a href="#services">Services</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#contact">Contact</a></li>
              </ul>
            </div> */}

            {/* <div className="footer__socials">
              <h5>Find me on:</h5>
              <ul className="socials__links">
                <li><a href="https://github.com/o-brayarn" target="_blank"  rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/brayarn" target="_blank"  rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto: brayarnogeda@gmail.com" target="_blank"  rel="noopener noreferrer">Email</a></li>
                <li><a href="https://twitter.com/o_brayarn" target="_blank"  rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div> */}
          
          </div>
      
          <div className="footer__copyright">
              <p>
              Copyright &copy; {year}. All rights reserved by{" "}
              <span>
                <a href="https://brayarn.vercel.app/">brayarn &trade;</a>
              </span>
            </p>
          </div>
       
      </section>
    </>
  );
}
