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
import photo12 from '../photography/photo12.jpg'
import photo13 from '../photography/photo13.jpg'
import photo14 from '../photography/photo14.jpg'
import photo15 from '../photography/photo15.jpg'
import photo16 from '../photography/photo16.jpg'
import photo17 from '../photography/photo17.jpg'
import photo18 from '../photography/photo18.jpg'
import photo19 from '../photography/photo19.jpg'
import photo20 from '../photography/photo20.jpg'
import photo21 from '../photography/photo21.jpg'
import photo22 from '../photography/photo22.jpg'
import photo23 from '../photography/photo23.jpg'

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

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo12} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo13} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo14} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo15} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo16} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo17} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo18} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo19} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo20} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo21} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo22} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo23} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

      </Fade>
    </div>
  )
}

export default Slideshow