import React from 'react'

//! project one - FLAREON FROGGER
import one from './images/ponee.png'
import oneplay from './images/poneplay.png'
import onewin from './images/ponewin.png'
import oneover from './images/poneover.png'

//! project four - FAM
import famLogin from './images/fam-login.png'
import famHome from './images/fam-home.png'
import famIndex from './images/fam-index.png'
import famShow from './images/fam-show.png'
import famRegister from './images/fam-register.png'



import two from './images/ptwoo.png'
import three from './images/pthreee.png'
// import four from './images/pfourr.png'

import Slideshow from './common/Slideshow'

const Home = () => (
  <>
    <section className="about-project-one-wrapper">

      <div className="about-wrap">
        <div className="home-about-wrap">
          <h1 className="about-h1">About</h1>
        </div>

        <div className="home-about-text-wrap">
          <p className="home-about-text">
            What I love most about photography/art is being able to create things by conceptualising and then bringing those concepts to life. Programming is another conduit through which I will be able to do the same.</p>
          <br />
          <p className="home-about-text">
            I am excited about the prospect of combining my creative background with front-end development. This includes the collaborative nature of fashion, my eye for aesthetics, detail and trends.</p>
          <br />
          <p className="home-about-text">
            My goal is to find a role where I can be a part of a team and continue to learn, expand and develop my skills as a Junior Software Engineer.</p>
        </div>
      </div>

      <div className="projects-wrap">

        <div className="projects-header-wrap">
          <h1 className="projects-h1">Projects</h1>
        </div>

        <div className="projects-one-section-div">
          <div className="projects-image-title-wrap">
            <h1 className="project-title-project-one">Flareon Frogger</h1>
          </div>
          <div className="project-one-wrap">
            <div className="project-one-column-one">
              <img className="project-image" src={one} alt="one" />
              <img className="project-image" src={onewin} alt="one win" />
              <h3>HTML5, CSS3, Javascript (ES6)</h3>
            </div>
            <div className="project-one-column-two">
              <img className="project-image" src={oneplay} alt="one play" />
              <img className="project-image" src={oneover} alt="one over" />
            </div>
          </div>
        </div>

      </div>

    </section>

    <div className="projects-four-section-div">
        {/* <div className="projects-image-title-wrap"> */}
          <h1 className="project-title-project-four">FAM</h1>
          <img className="project-image" src={famLogin} alt="four login" />
          <img className="project-image" src={famHome} alt="four home" />
          <img className="project-image" src={famIndex} alt="four index" />
          <img className="project-image" src={famShow} alt="four show" />
          <img className="project-image" src={famRegister} alt="four register" />
          <h3>Python, Django, SQL, Postgres, React, React Hooks, Sass</h3>
        {/* </div> */}
        </div>

        <div className="projects-images-row">
          <div className="projects-image-title-wrap">
            <h1 className="project-title">plntify</h1>
            <img className="project-image" src={three} alt="three" />
            <h3>React, Express, Node.js, MongoDB, Sass</h3>
          </div>
          <div className="projects-image-title-wrap">
            <h1 className="project-title">Sorting Hat</h1>
            <img className="project-image" src={two} alt="two" />
            <h3>React, Sass, Express, Node.js</h3>
          </div>
        </div>

    <section className="photography-section">
      <div className="photography-header-wrap">
        <h1 className="photography-h1">Photography</h1>
      </div>
      <div className="photography-images-row">
        <Slideshow />
      </div>
    </section>

  </>
)

export default Home