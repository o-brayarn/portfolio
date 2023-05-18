import React from "react";
import './footer.css';


export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <section className="portfolio__footer">
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
