import React from 'react';
import './about.css'
import { profile } from './imports';


export default function About() {
  return (
      <div className='portfolio__about' id='about'>
        <div className='portfolio__about-header'>
          <h1>Who AM I?</h1>
        </div>

        <div className='about__content'>
          <div className='portfolio__about-image'>
            <img src={ profile} alt="coder" />
          </div>

          <div className='portfolio__about-content'>
            <p>I'm a Frontend and Backend web developer, based in Nairobi, Kenya, who finds fun in creating magical digital experiences!</p>
            <p>My unique blend of creative thinking, design-first approach, technical expertise, and ability to work in a team allows me to approach each project with a deep understanding of the end user's perspective. This, with my background in Computer Science and Software Engineering, helps me come up with highly effective, user-centred digital products.</p>
            <ul>
              <li> I'm self-driven, hardworking, and dedicated to meeting set objectives</li>
              <li>I'm always on the lookout for open source projects to contribute to</li>
            <li>I create RESTFUL APIS, responsive and minimalistic user interfaces, as well as integrate them.</li>
            <li> I'm also a technical and blockchain/crypto writer</li>
              <li><span>Fun fact</span>: I'm a badass poet.</li>
            </ul>
          <button>
            <a href="#contact">  Hire me</a>
          </button>
          </div>
        </div>
       <hr />
      </div>
  )
}
