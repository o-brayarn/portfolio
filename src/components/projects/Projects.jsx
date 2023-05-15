import React from 'react';
import './projects.css';

export default function Projects() {
  return (
    <div className='portfolio__projects' id="projects">
      <div className="portfolio__projects-heading">
        <h1 className="gradient__text">My Works</h1>
      </div>
      <div className="portfolio__projects-content">
        <div className="portfolio__project-list">
          <div className="portfolio__project-list__image"></div>
          <div className="portfolio_project-list__details"></div>
        </div>
      </div>
      <hr />
    </div>
  )
}
