import React from 'react';
import './projects.css';
import { braeda } from './imports';

export default function Projects() {
  return (
    <div className='portfolio__projects' id="projects">
      <div className="portfolio__projects-heading">
        <h1 className="gradient__text">My Works</h1>
      </div>
      <div className="portfolio__projects-content">
        <div className="portfolio__project-list">
          <div className="portfolio__project-list__image">
            <img src={braeda} alt="braeda" />
          </div>
          <div className="portfolio__project-list__details">
            <p className="portfolio__project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo quisquam facilis labore hic eaque, natus ad, ullam pariatur nobis numquam exercitationem possimus doloribus. Repudiandae sequi aliquam corrupti omnis blanditiis, quibusdam quod veniam architecto ullam earum error quaerat nemo recusandae dicta similique, debitis molestias. Suscipit sit culpa aut illum rerum.</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
