import React from 'react';
import { Fade } from 'react-slideshow-image';

import photo3 from '../photography/photo3.jpg'
import photo4 from '../photography/photo4.jpg'
import photo5 from '../photography/photo5.jpg'
import photo6 from '../photography/photo6.jpg'
import photo7 from '../photography/photo7.jpg'
import photo8 from '../photography/photo8.jpg'
import photo9 from '../photography/photo9.jpg'
import photo10 from '../photography/photo10.jpg'
import photo11 from '../photography/photo11.jpg'

// const fadeImages = [
//   '{ photo3 }',
//   '{ photo4 }',
//   'images/photo.jpg'
// ];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>

        <div className="each-fade">
          <div className="image-container">
            <img className="slide-image" src={photo3} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Michael Chima</h2>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img className="slide-image" src={photo4} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Michael Chima</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo5} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Bruna Di</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo6} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Bruna Di</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo7} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Michael Chima</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo8} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Bruna Di</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo9} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Michael Chima</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo10} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Bruna Di</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo11} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Michael Chima</h2>
          </div>
        </div>

      </Fade>
    </div>
  )
}

export default Slideshow