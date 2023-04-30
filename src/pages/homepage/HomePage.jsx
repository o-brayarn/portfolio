import React from 'react';
import { RotatingText } from '../../components';
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
        <p>
        A dedicated Software Engineer. Building Web applications with React, TypeScript, Ruby on Rails, JavaScript, MySQL/Postgres, among other frameworks and libraries.
        </p>
        </div>
      </div>

      <div className='portfolio__home-image'>
        <img src={placeholder} alt="grad" />
      </div>
     
      
    </div>
  )
}
