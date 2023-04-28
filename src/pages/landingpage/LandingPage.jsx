import React from 'react';
import { RotatingText } from '../../components';
import './landingpage.css'

export default function LandingPage() {
  return (
    <div className="portfolio__home" id='home'>
      <div className='portfolio__home-header'>
        <h1>Hi, I'm Brayarn</h1>
        <RotatingText />
      </div>
    </div>
  )
}
