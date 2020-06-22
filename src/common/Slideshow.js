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
import photo24 from '../photography/photo24.jpg'
import photo25 from '../photography/photo25.jpg'
import photo26 from '../photography/photo26.jpg'
import photo27 from '../photography/photo27.jpg'
import photo28 from '../photography/photo28.jpg'
import photo29 from '../photography/photo29.jpg'
import photo30 from '../photography/photo30.jpg'
import photo31 from '../photography/photo31.jpg'
import photo32 from '../photography/photo32.jpg'
import photo33 from '../photography/photo33.jpg'
import photo34 from '../photography/photo34.jpg'
import photo35 from '../photography/photo35.jpg'
import photo36 from '../photography/photo36.jpg'
import photo37 from '../photography/photo37.jpg'
import photo39 from '../photography/photo39.jpg'
import photo41 from '../photography/photo41.jpg'
import photo42 from '../photography/photo42.jpg'
import photo43 from '../photography/photo43.jpg'
import photo44 from '../photography/photo44.jpg'
import photo45 from '../photography/photo45.jpg'
import photo46 from '../photography/photo46.jpg'
import photo47 from '../photography/photo47.jpg'
import photo48 from '../photography/photo48.jpg'
import photo49 from '../photography/photo49.jpg'
import photo50 from '../photography/photo50.jpg'
import photo51 from '../photography/photo51.jpg'
import photo52 from '../photography/photo52.jpg'
import photo53 from '../photography/photo53.jpg'
import photo54 from '../photography/photo54.jpg'
import photo55 from '../photography/photo55.jpg'
import photo56 from '../photography/photo56.jpg'
import photo57 from '../photography/photo57.jpg'
import photo58 from '../photography/photo58.jpg'
import photo59 from '../photography/photo59.jpg'
import photo60 from '../photography/photo60.jpg'
import photo61 from '../photography/photo61.jpg'
import photo62 from '../photography/photo62.jpg'
import photo63 from '../photography/photo63.jpg'
import photo64 from '../photography/photo64.jpg'
import photo65 from '../photography/photo65.jpg'
import photo66 from '../photography/photo66.jpg'
import photo67 from '../photography/photo67.jpg'
import photo68 from '../photography/photo68.jpg'
import photo70 from '../photography/photo70.jpg'
import photo71 from '../photography/photo71.jpg'
import photo72 from '../photography/photo72.jpg'
import photo73 from '../photography/photo73.jpg'
import photo74 from '../photography/photo74.jpg'
import photo75 from '../photography/photo75.jpg'
import photo76 from '../photography/photo76.jpg'
import photo77 from '../photography/photo77.jpg'
import photo78 from '../photography/photo78.jpg'
import photo79 from '../photography/photo79.jpg'
import photo80 from '../photography/photo80.jpg'
import photo81 from '../photography/photo81.jpg'
import photo82 from '../photography/photo82.jpg'
import photo84 from '../photography/photo84.jpg'
import photo85 from '../photography/photo85.jpg'
import photo86 from '../photography/photo86.jpg'
import photo87 from '../photography/photo87.jpg'
import photo88 from '../photography/photo88.jpg'
import photo89 from '../photography/photo89.jpg'
import photo90 from '../photography/photo90.jpg'
import photo91 from '../photography/photo91.jpg'
import photo92 from '../photography/photo92.jpg'
import photo93 from '../photography/photo93.jpg'
import photo94 from '../photography/photo94.jpg'
import photo95 from '../photography/photo95.jpg'
import photo96 from '../photography/photo96.jpg'
import photo97 from '../photography/photo97.jpg'
import photo98 from '../photography/photo98.jpg'
import photo99 from '../photography/photo99.jpg'
import photo100 from '../photography/photo100.jpg'
import photo101 from '../photography/photo101.jpg'
import photo102 from '../photography/photo102.jpg'
import photo103 from '../photography/photo103.jpg'
import photo104 from '../photography/photo104.jpg'
import photo105 from '../photography/photo105.jpg'
import photo106 from '../photography/photo106.jpg'
import photo107 from '../photography/photo107.jpg'
import photo108 from '../photography/photo108.jpg'
import photo109 from '../photography/photo109.jpg'
import photo110 from '../photography/photo110.jpg'
import photo111 from '../photography/photo111.jpg'
import photo112 from '../photography/photo112.jpg'
import photo113 from '../photography/photo113.jpg'
import photo114 from '../photography/photo114.jpg'
import photo115 from '../photography/photo115.jpg'
import photo116 from '../photography/photo116.jpg'
import photo117 from '../photography/photo117.jpg'
import photo118 from '../photography/photo118.jpg'
import photo119 from '../photography/photo119.jpg'
import photo120 from '../photography/photo120.jpg'
import photo121 from '../photography/photo121.jpg'
import photo122 from '../photography/photo122.jpg'

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

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo24} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo25} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lily Hutchinson</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo26} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo27} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo28} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo29} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Edie Rae</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo30} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Oli Marcinkiewicz, Lucas Cotty, Alistair Waterfield</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo31} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lucas Cotty, Alistair Waterfield</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo32} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lucas Cotty, Alistair Waterfield</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo33} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Oli Marcinkiewicz, Lucas Cotty</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo34} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Alistair Waterfield</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo35} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Alistair Waterfield, Oli Marcinkiewicz</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo36} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Oli Marcinkiewicz</h2>
          </div>
        </div>


        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo37} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Lucas Cotty</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo39} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Alistair Waterfield, Oli Marcinkiewicz</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo41} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Oli Marcinkiewicz, Lucas Cotty, Alistair Waterfield</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo42} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jordi Van Spanje</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo43} alt="fadImages" />
          </div>
          <div className="photo-title">
          {/* <h2 className="slideshow-h2">Jordi Van Spanje</h2> */}
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo44} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hero Fiennes-Tiffin</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo45} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo46} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Alice Stoner</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo47} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Timur Muharemovic</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo48} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo49} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo50} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Victoria</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo51} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo52} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jordi Van Spanje</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo53} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jordi Van Spanje</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo54} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo55} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jordi Van Spanje</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo56} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo57} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jordi Van Spanje</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo58} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jordi Van Spanje</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo59} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo60} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo61} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo62} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo63} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo64} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Hang Zhao</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo65} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jonas Nutter</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo66} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jonas Nutter</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo67} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jonas Nutter</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo68} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jonas Nutter</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo70} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Antonia</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo71} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Antonia</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo72} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Antonia</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo73} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Antonia</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo74} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Antonia</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo75} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo76} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo77} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo78} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo79} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo80} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo81} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo82} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo84} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Cynthia Wrobel</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo85} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo86} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo87} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo88} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo89} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo90} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo91} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo92} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Jos Schenk</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo93} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Mark Vanderloo</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo94} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Mark Vanderloo</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo95} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Mark Vanderloo</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo96} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Mark Vanderloo</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo97} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Mark Vanderloo</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo98} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Mark Vanderloo</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo99} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Aneita Moore</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo100} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Aneita Moore</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo101} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Aneita Moore</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo102} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Timur Muharemovic</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo103} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Loch Lomond</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo104} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Bridge of Angels</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo105} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Venice</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo106} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Venice</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo107} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Boboli Gardens</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo108} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Shi</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo109} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Venice</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo110} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Orchid I</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo111} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo112} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo113} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo114} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo115} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo116} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo117} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair, Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo118} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo119} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Orchid II</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo120} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2"> Nicholas Sinclair</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo121} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Ricardo Dines</h2>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <img className="slide-image" src={photo122} alt="fadImages" />
          </div>
          <div className="photo-title">
          <h2 className="slideshow-h2">Ricardo Dines</h2>
          </div>
        </div>
        


      </Fade>
    </div>
  )
}

export default Slideshow