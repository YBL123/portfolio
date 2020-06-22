import React from 'react'

import github from './images/github.png'
import linkedin from './images/linkedin.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
 // You can also use <link> for styles
// ..
AOS.init();


const Contact = () => (
  <section data-aos="fade-up"
  data-aos-anchor-placement="top-bottom" className="contact-section">

    <div className="contact-wrap">
      <h1 data-aos="zoom-in-up" className="contact-h1">Contact</h1>
    </div>

    <div className="contact-button-wrap">

    <div className="email-wrap">
        <div class="button-container-1 contact-button">
          <span class="mas">yardenlawson@gmail.com</span>
          <button id='work' type="button" name="Hover"><a className="email-link"  target="email" href="mailto:yardenlawson@gmail.com">yardenlawson@gmail.com</a></button>
        </div>
      </div>

      <div className="contact-github-icon-wrap">
      <a target="ybl123-github" href="https://github.com/YBL123"><img className="contact-github-icon" src={github} alt="github icon" /></a>
      <a target="yarden-lawson-linkedin" href="https://www.linkedin.com/in/yarden-lawson/"><img className="contact-github-icon" src={linkedin} alt="linkedin icon" /></a>
      </div>

    </div>

  </section >
)

export default Contact