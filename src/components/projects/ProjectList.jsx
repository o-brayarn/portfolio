import React from 'react'
import { braeda } from './imports';
import './projects.css';

const ProjectList = () => {
        const projectList =[
  {
    name: "My Doctor",
    image: {},
    livelink: "https://o-brayarn.github.io/my-doctor/",
    repository: "https://github.com/o-brayarn/my-doctor",
    description: "This is a project that was birthed from a gap in healthcare settings whereby patients have a negative hospital experience due to long waiting time particularly patients with minor health issues or those that require consultation services. Our project therefore creates a platform where registered users can book a virtual consultation for diverse healthcare problems.",
    languages: "HTML, JavaScript, CSS3, Python"
  },
  {
    name: "Events Plug",
    image: {},
    livelink: "https://eventplugs.vercel.app/",
    repository: "https://github.com/o-brayarn/the-events-plug",
    description: "Event Plugs provides a centralized site for listing events. It provides a platform for event organizers to publicize their upcoming events. Prospective event attendees will have the ability to view different events published based on an array of fields. In addition to viewing event details, they will also be able to add an event to favorites and book a spot to attend events after creating their account",
    languages: "HTML, JavaScript, CSS3, Ruby on Rails, Postgres"
  },
  {
    name: "Vallie's estate clone",
    image: {},
    livelink: "https://o-brayarn.github.io/vallie-s-estate/",
    repository: "https://github.com/o-brayarn/vallie-s-estate",
    description: "Vallie's estate user interface",
    languages: "HTML, CSS3"
  },
  {
    name: "Bookwarmers Shelf",
    image: {},
    livelink: "https://bookwarmers-shelf.vercel.app/",
    repository: "https://github.com/o-brayarn/bookwarmers-shelf",
    description: "Bookwarmers' Shelf is a book planner or book tracker that allows a reader to add the books they plan to read during the month, and mark them as read once they are done with them. The read books are moved to another section/page for the reader to keep track of their reading journey. In addition, they can also go back to the books for rereads.",
    languages: "HTML, CSS3, JavaScript"
  },
  {
    name: "Movie It",
    image: {},
    livelink: "https://o-brayarn.github.io/movie-it/",
    repository: "https://github.com/o-brayarn/movie-it",
    description: "MovieIt is an opensource that collects user reviews and displays them on the page to help end users know if a movie or television show will be worth their time. It also collects user's latest movie suggestions so that the movie vendor can add it to his/her repository. MovieIt can be thought of as an interface that the movie vendors(or movie shops) and users can get to know what others think about a movie, and contribute to the list of available movies.",
    languages: "HTML, CSS3, JavaScript"
  }
  
]
    return (
        <>
            <div className="portfolio__project-list">
          <div className="portfolio__project-list__image">
            <img src={braeda} alt="braeda" />
          </div>
          <div className="portfolio__project-list__details">
            <p className="portfolio__project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo quisquam facilis labore hic eaque, natus ad, ullam pariatur nobis numquam exercitationem possimus doloribus. Repudiandae sequi aliquam corrupti omnis blanditiis, quibusdam quod veniam architecto ullam earum error quaerat nemo recusandae dicta similique, debitis molestias. Suscipit sit culpa aut illum rerum.</p>
          </div>
        </div>

         <div className="portfolio__project-list1">
          <div className="portfolio__project-list__image">
            <img src={braeda} alt="braeda" />
          </div>
          <div className="portfolio__project-list__details1">
            <p className="portfolio__project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo quisquam facilis labore hic eaque, natus ad, ullam pariatur nobis numquam exercitationem possimus doloribus. Repudiandae sequi aliquam corrupti omnis blanditiis, quibusdam quod veniam architecto ullam earum error quaerat nemo recusandae dicta similique, debitis molestias. Suscipit sit culpa aut illum rerum.</p>
          </div>
        </div>

         <div className="portfolio__project-list2">
          <div className="portfolio__project-list__image">
            <img src={braeda} alt="braeda" />
          </div>
          <div className="portfolio__project-list__details">
            <p className="portfolio__project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo quisquam facilis labore hic eaque, natus ad, ullam pariatur nobis numquam exercitationem possimus doloribus. Repudiandae sequi aliquam corrupti omnis blanditiis, quibusdam quod veniam architecto ullam earum error quaerat nemo recusandae dicta similique, debitis molestias. Suscipit sit culpa aut illum rerum.</p>
          </div>
        </div>

         <div className="portfolio__project-list3">
          <div className="portfolio__project-list__image">
            <img src={braeda} alt="braeda" />
          </div>
          <div className="portfolio__project-list__details3">
            <p className="portfolio__project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo quisquam facilis labore hic eaque, natus ad, ullam pariatur nobis numquam exercitationem possimus doloribus. Repudiandae sequi aliquam corrupti omnis blanditiis, quibusdam quod veniam architecto ullam earum error quaerat nemo recusandae dicta similique, debitis molestias. Suscipit sit culpa aut illum rerum.</p>
          </div>
        </div>
        </>
        
  )
}

export default ProjectList