import React from "react";
import "./../index.css";
import { motion } from "framer-motion";


const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Achievements = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="achievements"
      id="achievements"
    >
      <h1 className="heading text-gradient-purple">Achievements</h1>
      <div className="projects-container">
        {/* Project 1 - React Basic */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.hackerrank.com/certificates/7f9ab2e73a0c"
          >
            <div className="project-images" id="problem"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Problem Solving (HackerRank)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/certificates/7f9ab2e73a0c"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - HTML5 */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.hackerrank.com/certificates/ebc9e358a8fb"
          >
            <div className="project-images" id="python"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Pyhton (HackerRank)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/certificates/ebc9e358a8fb"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Cisco Python */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href="https://www.hackerrank.com/certificates/b64e0269afdc">
            <div className="project-images" id="java"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Java (HackerRank)</h3>
            </div>
            <div className="icons">
              <a rel="noopener noreferrer" href="https://www.hackerrank.com/certificates/b64e0269afdc" target="_blank">
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
