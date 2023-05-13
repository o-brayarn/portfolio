import {Card} from 'react-bootstrap';
import React from 'react'
import './services.css'

const Services = () => {
  const cardContent =
    [
      {
        title: "Web App Development",
        text: "Need a website for your business? I develop market-defining web apps, both backend and frontend, that meet client specifications and consumer needs."
      },
       {
        title: "Restful API Design & Integration",
        text:  "I can develop highly secure, fast, reliable, and scalable Restful API, as well as integrate it with your web application."
      },
        {
        title: "Project Management",
        text:  "I can manage a team of developers to accomplish tasks, meet deadlines, and achieve project goals."
      }
    ]
  return (
    <div className='main__services' id='services'>
      <h1 className='gradient__text'>What I do</h1>
      <div className="card-group" >
     {cardContent.map((context) => (
      <div className='card' key={context.title}>
        <div className='card-body'>
          <Card.Title className="card-title" >{context.title}</Card.Title>
          <p className='card-text'>
            {context.text}
          </p>
        </div>
      </div>
      ))}
      </div>
      <hr />
    </div>
    
  );
}

export default Services