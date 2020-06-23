import React from 'react'

import TechIcons from './common/TechIcons'
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



const Home = () => (
  <>
    <section data-aos="fade-up"
      data-aos-anchor-placement="top-bottom" className="about-project-one-wrapper">

      <div data-aos="fade-up" className="about-wrap">
        <div className="home-about-wrap">
          <h1 data-aos="zoom-in" className="about-h1">About</h1>
        </div>

        <div className="home-about-text-wrap">
          <p className="home-about-text">
            I have recently made a career change by enrolling in General Assembly’s Software Engineering Immersive course.</p>
          <br />
          <p className="home-about-text">
            I was first introduced to programming through my partner. Seeing how ever-evolving it is and the endless possibilities of what I could create, intrigued and excited me. What I love most about  my previous career in photography/art is the process of concept to creation. To me programming follows the same process.
          </p>
          <br />
          <p className="home-about-text">
            I am excited about the prospect of combining my creative background with front-end development. This includes the collaborative nature of fashion, my eye for aesthetics, detail and trends.</p>
          <br />
          <p className="home-about-text">
            My goal is to find a role where I can be a part of a team and continue to learn, expand and develop my skills as a Junior Software Engineer.</p>
        </div>

        <TechIcons />

      </div>

      <div className="projects-wrap">

        <div className="projects-header-wrap">
          <h1 data-aos="zoom-in" className="projects-h1">Projects</h1>
        </div>

        <div data-aos="fade-up" className="projects-one-section-div">
          <div className="projects-image-title-wrap">
            <h1 className="project-title-project-one">Flareon Frogger</h1>
          </div>
          <div className="project-one-wrap">
            <div className="project-one-column-one">
              <img className="project-image" src={one} alt="one" />
              <img className="project-image" src={onewin} alt="one win" />
              <div className="project-one-h3-big-screen">

                <div className="link-buttons">

                  <div className="link-buttons-wrap">

                    <div class="button-container-1">
                      <span class="mas">Open Project</span>
                      <button id='work' type="button" name="Hover"><a target="flareon-frogger" href="https://ybl123.github.io/sei-project-one/">Open Project</a></button>
                    </div>

                    <div class="button-container-1">
                      <span class="mas">View On Github</span>
                      <button id='work' type="button" name="Hover"><a target="flareon-frogger" href="https://github.com/YBL123/sei-project-one">View On Github</a></button>
                    </div>

                  </div>

                  <h3 className="project-one-h3-big-screen">HTML5, CSS3, JavaScript (ES6)</h3>
                </div>

              </div>

            </div>

            <div className="project-one-column-two">
              <img className="project-image" src={oneplay} alt="one play" />
              <img className="project-image" src={oneover} alt="one over" />

              <div className="project-one-h3-small-screen">

                <div className="link-buttons">

                  <div className="link-buttons-wrap">

                    <div class="button-container-1">
                      <span class="mas">Open Project</span>
                      <button id='work' type="button" name="Hover"><a target="flareon-frogger" href="https://ybl123.github.io/sei-project-one/">Open Project</a></button>
                    </div>

                    <div class="button-container-1">
                      <span class="mas">View On Github</span>
                      <button id='work' type="button" name="Hover"><a target="flareon-frogger" href="https://github.com/YBL123/sei-project-one">View On Github</a></button>
                    </div>

                  </div>

                  <h3 className="project-one-h3-small-screen">HTML5, CSS3, JavaScript (ES6)</h3>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="flareon-about-app-text-wrap">
          <p>
          This was my first solo project at General Assembly. The brief was to render a grid-based game in the browser, design logic for winning and visually display which player won, using JavaScript for DOM manipulation. My strategy for building the game was to split the game logic into different stages of functionality and complete them one by one. The time frame was 9 days.
                  </p>
          <br />
          <p>
            The concept for my game is to guide the group of four Flareons, one by one to the other side of the board. Once the player reaches an end point, the next Flareon is spawned. The player must navigate through moving obstacles in the first section. Then in the second section, use the floats to get passed the water and on to the end points.
                  </p>
        </div>

      </div>

    </section>

    <div className="projects-header-wrap">
      <h1 className="project-title-project-four">FAM</h1>
    </div>

    <div data-aos="fade-up" className="project-four-section-div">

      <div className="project-four-column-one">
        <img className="project-four-image" src={famLogin} alt="four login" />
        <img className="project-four-image" src={famHome} alt="four home" />
      </div>

      <div className="project-four-column-two">
        <img className="project-four-image" src={famRegister} alt="four register" />
        <img className="project-four-image" src={famShow} alt="four show" />

        <div className="project-all-apart-from-one-h3">

          <div className="link-buttons-project-all-apart-from-one">

            <div className="link-buttons-wrap">

              <div class="button-container-1">
                <span class="mas">Open Project</span>
                <button id='work' type="button" name="Hover"><a target="fam" href="https://the-fam.herokuapp.com/">Open Project</a></button>
              </div>

              <div class="button-container-1">
                <span class="mas">View On Github</span>
                <button id='work' type="button" name="Hover"><a target="fam" href="https://github.com/YBL123/sei-project-4">View On Github</a></button>
              </div>

            </div>

            <h3 className="project-four-lang">Python, Django, SQL, PostgreSQL, React, React Hooks, Axios, Sass</h3>
          </div>

        </div>

      </div>

      <div className="fam-about-app-text-wrap">
        <p>
          Welcome to FAM.  This is a curated app. Each month we share ‘Our Favourites For The Month’ for film, art and music.
        </p>
        <p>
          Users can filter the posts by month in the index pages,  should they want to look at previous posts.
        </p>
        <p>
          Signing up gives users the ability to access the favourites feature. This allows them to curate their own favourites list.
        </p>
        <p>
          Once signed up they are also able to leave reviews and ratings on our curated posts.
        </p>
        <p>
          My teammate and I had 8 days to build a full stack application. We began by planning out our models’ relationships using an ERD model. We then built the foundation of our backend in Django together in pair programming.  We both wanted to work full stack on this project and so once the foundation was laid we split responsibilities. I worked full stack on the reviews and ratings. I was also responsible for building the login and register.  The rest of the front end and styling was split 50/50. We had also explored using React Hooks in some of our components as we both really loved the concept of useState and useEffect.
        </p>
      </div>

    </div>

    <div className="project-three-and-two-wrap">

      <div>

        <div className="projects-header-wrap">
          <h1 className="project-title-project-three">plntify</h1>
        </div>

        <div data-aos="fade-up" className="project-three-section-div">

          <div className="project-three-column-one">
            <img className="project-image" src={three} alt="three" />
            <img className="project-image" src={plntifyIndex} alt="three index" />
          </div>

          <div className="project-three-column-two">
            <img className="project-image" src={plntifyMap} alt="three map" />
            <img className="project-image" src={plntifyShow} alt="three show" />

            <div className="project-all-apart-from-one-h3">

              <div className="link-buttons-project-all-apart-from-one">

                <div className="link-buttons-wrap">

                  <div class="button-container-1">
                    <span class="mas">Open Project</span>
                    <button id='work' type="button" name="Hover"><a target="plntify" href="http://plntify-app.herokuapp.com/">Open Project</a></button>
                  </div>

                  <div class="button-container-1">
                    <span class="mas">View On Github</span>
                    <button id='work' type="button" name="Hover"><a target="plntify" href="https://github.com/YBL123/sei-group-project">View On Github</a></button>
                  </div>

                </div>
                <h3>React, Express, Node.js, MongoDB, Sass, Axios</h3>
              </div>

            </div>

          </div>


          <div className="plntify-about-app-text-wrap">
            <p>
              A plant trading social app. The time frame for this group project was a week. Our group was made up of 4 members.
        </p>
            <p>
              Each user has their own portfolio of plants that is diplayed on their profile page.
        </p>
            <p>
              The users are able to use the interactive map to see other plant's locations. Users are also able to add their own plant's location when they add a plant or edit their plant. A map thumbnail with a marker for the plant's location is also displayed on each plant page.
        </p>
            <p>
              There is a trade feature where users are able to offer a plant from their portfolio in exchange for another user's plant. The user who receives this offer is able to accept or decline. The user who made the offer is able to see their offer's status via their profile page.
        </p>
            <p>
              Users are able to like and comment on other user's plants, as well as being able to communicate through a private chat.
        </p>
            <p>
              My main responsibilities for this project was working full stack on the likes and comments using mongoDB and React.
              I also worked in pair programming with one of my teammates setting up our map feature using the Mapbox documentation.  We split off after this and she worked on the main interactive map feature, whilst I implemented the map thumbnail in our “plant show pages”.  Additionally I laid out some of our  foundational routing and pages in the front end.
        </p>
          </div>

        </div>

        <div>

          <div className="projects-header-wrap">
            <h1 className="project-title-project-two">Sorting Hat</h1>
          </div>

          <div data-aos="fade-up" className="project-two-section-div">

            <div className="project-two-column-one">
              <img className="project-image" src={two} alt="two" />
              <img className="project-image" src={quiz} alt="two quiz" />
            </div>

            <div className="project-two-column-two">
              <img className="project-image" src={getresult} alt="two get result" />
              <img className="project-image" src={result} alt="two result" />


              <div className="project-all-apart-from-one-h3">

                <div className="link-buttons-project-all-apart-from-one">

                  <div className="link-buttons-wrap">

                    <div class="button-container-1">
                      <span class="mas">Open Project</span>
                      <button id='work' type="button" name="Hover"><a target="plntify" href="https://harry-potter-sorting-hat.netlify.app/">Open Project</a></button>
                    </div>

                    <div class="button-container-1">
                      <span class="mas">View On Github</span>
                      <button id='work' type="button" name="Hover"><a target="plntify" href="https://github.com/YBL123/project-2">View On Github</a></button>
                    </div>

                  </div>
                  <h3>React, Sass, Express, Node.js</h3>
                </div>

              </div>

            </div>

            <div className="sorting-hat-about-app-text-wrap">
              <p>
                A quiz emulating the sorting hat from Harry Potter. 

                This project was completed in 48 hours in pair programming. This was my first time building an app in React and consuming a public API. We consumed the public potterapi API, the main quiz logic was completed in this time frame. I used the following weekend to complete the styling and the results feature. I built a function that would display the correct house image and house info according to the user’s result.
                  </p>
            </div>

          </div>

        </div>

      </div>
    </div>

    <section className="photography-section">
      <div className="photography-header-wrap">
        <h1 data-aos="zoom-in" className="photography-h1">Photography</h1>
      </div>
      <div className="photography-images-row">
        <Slideshow />
      </div>
    </section>

  </>
)

export default Home