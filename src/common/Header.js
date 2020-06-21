import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// * Our basic home page

const Header = () => (
  <div data-aos="fade-in" className="portfolio-title-wrap">
    <h1 className="portfolio-title">Yarden Lawson</h1>
  </div>
)

export default Header