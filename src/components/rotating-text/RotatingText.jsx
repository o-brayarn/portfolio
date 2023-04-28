import React from 'react'
import './rotatingtext.css'

const RotatingText = () => {
    const ReactRotatingText = require('react-rotating-text');
  return (
      <div className='rotating__text'>
          <ReactRotatingText items={['Software Engineer','Full Stack Developer', 'Technical Writer', 'Open Source Contributor','Blockchain & Crypto Writer', 'Professional Coder']} />
    </div>
  )
}

export default RotatingText