import React from 'react'

import Slideshow from './common/Slideshow'

//! project one - FLAREON FROGGER
import one from './images/ponee.png'
import oneplay from './images/poneplay.png'
import onewin from './images/ponewin.png'
import oneover from './images/poneover.png'

//! project four - FAM
import famLogin from './images/fam-login.png'
import famHome from './images/fam-home.png'
import famShow from './images/fam-show.png'
import famRegister from './images/fam-register.png'

//! project three - PLNTIFY
import three from './images/pthreee.png'
import plntifyIndex from './images/plntify-index.png'
import plntifyMap from './images/plntify-map.png'
import plntifyShow from './images/plntify-show.png'

//! project two - SORTING HAT
import two from './images/ptwoo.png'
import quiz from './images/quiz.png'
import getresult from './images/getresult.png'
import result from './images/result.png'

const Portfolio = () => (
  <>
  <section className="portfolio-page-wrap">
    <div className="projects-wrap">

      <div className="projects-header-wrap">
        <h1 className="portfolio-page-projects-h1">Projects</h1>
      </div>

      <div className="projects-one-section-div">
        <div className="projects-image-title-wrap">
          <h1 className="portfolio-page-project-title-project-one">Flareon Frogger</h1>
        </div>
        <div className="project-one-wrap">
          <div className="project-one-column-one">
            <img className="project-image" src={one} alt="one" />
            <img className="project-image" src={onewin} alt="one win" />
            <h3 className="project-one-h3-big-screen">HTML5, CSS3, Javascript (ES6)</h3>
          </div>
          <div className="project-one-column-two">
            <img className="project-image" src={oneplay} alt="one play" />
            <img className="project-image" src={oneover} alt="one over" />
            <h3 className="project-one-h3-small-screen">HTML5, CSS3, Javascript (ES6)</h3>
          </div>
        </div>
      </div>

    </div>

  </section>

  <div className="projects-header-wrap">
    <h1 className="project-title-project-four">FAM</h1>
  </div>

  <div className="project-four-section-div">

    <div className="project-four-column-one">
      <img className="project-four-image" src={famLogin} alt="four login" />
      <img className="project-four-image" src={famHome} alt="four home" />
    </div>

    <div className="project-four-column-two">
      <img className="project-four-image" src={famRegister} alt="four register" />
      <img className="project-four-image" src={famShow} alt="four show" />
      <h3 className="project-four-lang">Python, Django, SQL, Postgres, React, React Hooks, Sass</h3>
    </div>

  </div>

  <div className="project-three-and-two-wrap">

    <div>

      <div className="projects-header-wrap">
        <h1 className="project-title-project-three">plntify</h1>
      </div>

      <div className="project-three-section-div">

        <div className="project-three-column-one">
          <img className="project-image" src={three} alt="three" />
          <img className="project-image" src={plntifyIndex} alt="three index" />
        </div>

        <div className="project-three-column-two">
          <img className="project-image" src={plntifyMap} alt="three map" />
          <img className="project-image" src={plntifyShow} alt="three show" />
          <h3>React, Express, Node.js, MongoDB, Sass</h3>
        </div>

      </div>

      <div>

        <div className="projects-header-wrap">
          <h1 className="project-title-project-two">Sorting Hat</h1>
        </div>

        <div className="project-two-section-div">

          <div className="project-two-column-one">
            <img className="project-image" src={two} alt="two" />
            <img className="project-image" src={quiz} alt="two quiz" />
          </div>

          <div className="project-two-column-two">
            <img className="project-image" src={getresult} alt="two get result" />
            <img className="project-image" src={result} alt="two result" />
            <h3>React, Sass, Express, Node.js</h3>
          </div>

        </div>

      </div>

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

export default Portfolio

