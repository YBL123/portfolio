import React from 'react'

// * Our basic home page

const Contact = () => (
  <section className="contact-section">

    <div className="contact-wrap">
      <h1 className="contact-h1">Contact</h1>
    </div>

    <div className="contact-button-wrap">

      <div className="email-wrap">
        <div class="button-container-1 contact-button">
          <span class="mas">yardenlawson@gmail.com</span>
          <button id='work' type="button" name="Hover"><a className="email-link"  target="email" href="mailto:yardenlawson@gmail.com">yardenlawson@gmail.com</a></button>
        </div>
      </div>

    </div>

  </section >
)

export default Contact