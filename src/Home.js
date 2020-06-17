import React from 'react'

import one from './images/ponee.png'
import two from './images/ptwoo.png'
import three from './images/pthreee.png'
import four from './images/pfourr.png'

import Slideshow from './common/Slideshow'

const Home = () => (
  <>
    <section className="wrapper">

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

        <div className="projects-images">
          <div className="projects-images-row">
          <div className="projects-image-title-wrap">
            <h1 className="project-title">Flareon Frogger</h1>
            <img className="project-image" src={one} alt="one" />
            </div>
            <div className="projects-image-title-wrap">
            <h1 className="project-title">FAM</h1>
            <img className="project-image" src={four} alt="four" />
            </div>
          </div>
          <div className="projects-images-row">
            <div className="projects-image-title-wrap">
          <h1 className="project-title">plntify</h1>
            <img className="project-image" src={three} alt="three" />
            </div>
            <div className="projects-image-title-wrap">
            <h1 className="project-title">Sorting Hat</h1>
            <img className="project-image" src={two} alt="two" />
            </div>
          </div>
        </div>

      </div>

    </section>

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