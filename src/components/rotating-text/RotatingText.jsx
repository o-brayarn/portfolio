import React from 'react'
import ReactRotatingText from 'react-rotating-text'
import './rotatingtext.css'

const RotatingText = () => {
  return (
      <div className='rotating__text'>
          <ReactRotatingText items={['Software Engineer.','Full Stack Developer.', 'Technical Writer.', 'Open Source Contributor.','Blockchain & Crypto Writer.', 'Professional Coder.', 'Bringin your ideas to life!']} />
    </div>
  )
}

export default RotatingText