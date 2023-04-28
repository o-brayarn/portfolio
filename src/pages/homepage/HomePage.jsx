import React from 'react';
import { RotatingText } from '../../components';
import './homepage.css'

export default function HomePage() {
  return (
    <div className="portfolio__home" id='home'>
      <div className='portfolio__home-header'>
        <h1>Hi, I'm Brayarn</h1>
        <RotatingText />
      </div>
    </div>
  )
}
