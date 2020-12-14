import React from "react"
import "./../index.css"
import { motion } from "framer-motion"

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
}

const Portfolio = () => {
  return (
    <section
    data-aos="zoom-in"
    data-aos-easing="linear"
    data-aos-duration="2000"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading text-gradient">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://musing-leavitt-d95e9a.netlify.app/"
          >
            <div className="project-images" id="covid_stat"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Covid19 statistics</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Rishk3/covid19_stats"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://musing-leavitt-d95e9a.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://rishkify.web.app/"
          >
            <div className="project-images" id="rishkord"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Rishkord</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Rishk3/Rishkord"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://rishkify.web.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            onClick={()=>{
              alert("This is a private Repo you can only watch it working Live, Thanks!")
            }}
            href="https://morning-brushlands-28304.herokuapp.com"
          >
            <div className="project-images" id="webrtc"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>WebRtc Group Chat</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Rishk3"
               
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://morning-brushlands-28304.herokuapp.com"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - Explore matiari */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://rishk3-flix3.netlify.app"
          >
            <div className="project-images" id="rishkFlix"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Rishk-Flix Movies</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Rishk3/Rishk-Flix-Movies"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://rishk3-flix3.netlify.app"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 5 - Expense Tracker */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://serene-noyce-360752.netlify.app/"
          >
            <div className="project-images" id="weather"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Weather Report</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Rishk3/react-weather-report"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://serene-noyce-360752.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* prokect 6 */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://youthful-aryabhata-c56703.netlify.app/"
          >
            <div className="project-images" id="bdayWisher" ></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Birthday Wisher</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Rishk3/Rishk3_birthday_msg"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://youthful-aryabhata-c56703.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Rishk3"
        className="button-link"
      >
        <button className="button">More Projects ?</button>
      </a>
    </section>
  )
}

export default Portfolio
