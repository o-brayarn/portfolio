import React from 'react';
import {ProjectList} from '../../components';

export default function Projects() {
  
  return (
    <div className='portfolio__projects' id="projects">
      <div className="portfolio__projects-heading">
        <h1 className="gradient__text">My Works</h1>
      </div>
      <div className="portfolio__projects-content">
        <ProjectList />
      </div>
      <hr />
    </div>
  )
}
