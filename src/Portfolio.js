import React from 'react'

import one from './images/pone.png'
import two from './images/ptwo.png'
import three from './images/pthree.png'
import four from './images/pfour.png'

import photo from './images/photo.jpg'

const Portfolio = () => (
  <>
    <section className="projects-page-wrap">

      <div className="projects-wrap">
        <div className="projects-header-wrap">
          <h1 className="projects-h1">Projects</h1>
        </div>

        <div className="projects-images">
          <div className="projects-images-row">
            <img className="project-image" src={one} alt="one" />
            <img className="project-image" src={four} alt="four" />
          </div>
          <div className="projects-images-row">
            <img className="project-image" src={three} alt="three" />
            <img className="project-image" src={two} alt="two" />
          </div>
        </div>
      </div>


    </section>

    <section className="photography-section">
      <div className="photography-header-wrap">
        <h1 className="photography-h1">Photography</h1>
      </div>
      <div className="photography-images-row">
        <img className="photography-image" src={photo} alt="mark vanderloo" />
      </div>
    </section>

  </>
)

export default Portfolio

