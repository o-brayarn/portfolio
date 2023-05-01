import React from 'react';
import './socials.css';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter} from "react-icons/ai"

export default function Socials() {
  return (
    <>
      <div className='socials__container'>
        <div className='socials__github'>
          <a href="https://github.com/o-brayarn" target="_blank"  rel="noopener noreferrer">
          <AiFillGithub color="#083344"/>
          </a>
        </div>

        <div className='socials__linkedin'>
          <a href="https://www.linkedin.com/in/brayarn" target="_blank"  rel="noopener noreferrer">
            <AiFillLinkedin color="#083344"/>
          </a>
        </div>

        <div className='socials__gmail'>
          <a href="mailto: brayarnogeda@gmail.com" target="_blank"  rel="noopener noreferrer">
          <AiOutlineMail color="#083344"/>
          </a>
        </div>

        <div className='socials__twitter'>
            <a href="https://twitter.com/o_brayarn" target="_blank"  rel="noopener noreferrer">
              <AiOutlineTwitter color="#083344"/>
            </a>
        </div>
      </div>
    </>
  )
}
