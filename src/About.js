import React from 'react'
import TechIcons from './common/TechIcons'

// * Our basic home page

const About = () => (
  <section data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" className="about-page-wrap">

    <div className="home-about-wrap">
      <h1 data-aos="zoom-in-up" className="about-h1">About</h1>
    </div>

    <div className="home-about-text-wrap">
      <p className="home-about-text">
        I have recently made a career change by enrolling in General Assembly’s Software Engineering Immersive course.</p>
      <br />
      <p className="home-about-text">
        I was first introduced to programming through my partner. Seeing how ever-evolving it is and the endless possibilities of what I could create, intrigued and excited me. What I love most about  my previous career in photography/art is the process of concept to creation. To me programming follows the same process.
          </p>
      <br />
      <p className="home-about-text">
        I am excited about the prospect of combining my creative background with software development. This includes the collaborative nature of fashion, my eye for aesthetics, detail and trends..</p>
      <br />
      <p className="home-about-text">
        My goal is to find a role where I can be a part of a team and continue to learn, expand and develop my skills as a Junior Software Engineer.</p>

      <TechIcons />
    </div>



  </section>
)

export default About