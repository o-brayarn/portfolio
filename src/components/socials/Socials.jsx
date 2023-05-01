import React from 'react';
import './socials.css';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter} from "react-icons/ai"

export default function Socials() {
  return (
    <>
      <div className='socials__container'>
        <div className='socials__github'>
          <a href="https://github.com/o-brayarn">
          <AiFillGithub />
          </a>
        </div>

        <div className='socials__linkedin'>
          <a href="https://www.linkedin.com/in/brayarn">
            <AiFillLinkedin />
          </a>
        </div>

        <div className='socials__gmail'>
          <a href="brayarnogeda@gmail.com">
          <AiOutlineMail />
          </a>
        </div>

        <div className='socials__twitter'>
            <a href="https://twitter.com/o_brayarn">
              <AiOutlineTwitter />
            </a>
        </div>
      </div>
    </>
  )
}
