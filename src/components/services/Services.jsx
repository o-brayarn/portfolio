import React from 'react';
import './services.css';

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
    <>
      <div className='main__services'>
        <h1>What I do</h1>
        <div className='portfolio__services'>
              <div className='portfolio__services-frontend'>
                <h5>Web Application Development</h5>
                <hr />
                <p>Need a website for your business? I'm your guy. I develop market-defining web applications, both backend and frontend, that meet client specifications and consumer needs.</p>
              </div>

              <div className='portfolio__services-API'>
                <h5>Restful API Design & Integration</h5>
                <hr />
                <p>I can develop highly secure, fast, reliable, and scalable Restful API, as well as integrate it with your web application.</p>
              </div>
          
              <div className='portfolio__services-project'>
                <h5>Project Management</h5>
                <hr />
                <p>I can manage a team of developers to accomplish tasks, meet deadlines, and achieve project goals.</p>
              </div>
        </div>
        <hr className='services__end'/>
      </div>
      
    </>
  )
}
