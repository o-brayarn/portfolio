import React from "react";
import './skills.css';

const Skills = () => {
  return (
    <>
      <div className="portfolio__skills" id="skills">
        <h1 className='gradient__text'>My Skills</h1>
        <div className="skills__container">
          <div className="development__skills">
            <h2 className="title__text">Development Skills</h2>
            <div className="portfolio__skills-box">
              <span className="title">FRONTEND</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage frontend">
                  <span className="skills__tooltip">85%</span>
                </span>
              </div>
            </div>

            <div className="portfolio__skills-box">
              <span className="title">BACKEND</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage backend">
                  <span className="skills__tooltip">90%</span>
                </span>
              </div>
            </div>

            <div className="portfolio__skills-box">
              <span className="title">REACT(JAVASCRIPT)</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage react">
                  <span className="skills__tooltip">87%</span>
                </span>
              </div>
            </div>

            <div className="portfolio__skills-box">
              <span className="title">RUBY ON RAILS(RUBY)</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage ror">
                  <span className="skills__tooltip">86%</span>
                </span>
              </div>
            </div>

            <div className="portfolio__skills-box">
              <span className="title">POSTGRES/MYSQL</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage db">
                  <span className="skills__tooltip">93%</span>
                </span>
              </div>
            </div>

            <div className="portfolio__skills-box">
              <span className="title">TYPESCRIPT</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage typescript">
                  <span className="skills__tooltip">60%</span>
                </span>
              </div>
            </div>
          </div>


          <div className="design__skills">
            <h2 className="title__text">Design Skills</h2>
            <div className="portfolio__skills-box">
              <span className="title">FIGMA</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage figma">
                  <span className="skills__tooltip">70%</span>
                </span>
              </div>
            </div>

            <div className="portfolio__skills-box">
              <span className="title">DESIGN</span>
              <div className="portfolio__skills-bar">
                <span className="skills__percentage design">
                  <span className="skills__tooltip">80%</span>
                </span>
              </div>
            </div>

          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Skills

