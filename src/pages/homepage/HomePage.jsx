import React from 'react';
import { RotatingText, Socials } from '../../components';
import './homepage.css'
import { placeholder } from './imports';

export default function HomePage() {
  return (
    <div className="portfolio__home" id='home' href="#home">
      <div className='portfolio__home-content'>
         <div className='portfolio__header'>
            <h1>Hi, I'm <span>Brayarn</span> </h1>
            <RotatingText />
        </div>

        <div className='portfolio__home-content__details'>
          <p>Dedicated software engineer with a passion about cutting-edge technology, beautifully crafted interfaces, and curating intuitive UX. I build web applications with React, TypeScript, Ruby on Rails, JavaScript, MySQL/Postgres, among other cool libraries and frameworks.</p>
        </div>

        <div className='portfolio__buttons'>
          <div className='resume__btn'>
            <button type='button'>
              <a href="https://docs.google.com/document/d/1SO2GqK0zZdbawB-l4kiCpDmmAQGCUABn1_J-aAHbfsU/edit?usp=sharing" target="_blank"  rel="noopener noreferrer">View Resume</a>
            </button>
          </div>
          
          <div className='contact__me-btn'>
            <input type="button" value="Contact Me" />
          </div>
        </div>
        <div className='social__icons'>
          <Socials/>
        </div>
      </div>

      <div className='portfolio__home-image'>
        <img src={placeholder} alt="my profile" />
      </div>
     
      
    </div>
  )
}
