import React from "react";
import './footer.css';

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div>
      <p>
        Copyright &copy; {year}. All rights reserved by{" "}
        <span>
          <a href="https://brayarn.vercel.app/">brayarn ogeda</a>
        </span>
      </p>
    </div>
  );
}
