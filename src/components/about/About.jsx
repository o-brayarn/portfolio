import React from 'react';
import './about.css'
import illustration from "../../assets/illustration.png";


export default function About() {
  return (
    <>
      <div className='portfolio__about'>
        <div className='portfolio-about-header'>
          <h1>Who AM I?</h1>
        </div>

        <div className='about__content'>
          <div className='portfolio__about-image'>
            <img src={ illustration } alt="coder" />
          </div>

          <div className='portfolio__about-content'>
            <p>
              I am a Full Stack Web developer based in Nairobi, Kenya.
            </p>
            <p>
              I have comprehensive skills in both front-end and back-end development. I am a self-driven, hard-working, and dedicated individual. I am also always on the lookout to learn new technologies, skills, and frameworks to improve my competency.
            </p>
            <ul>
              <li>I create RESTFUL APIs</li>
              <li>I do integration with third-party services like AWS</li>
            </ul>
          </div>
        </div>
       
      </div>
    </>
  )
}
