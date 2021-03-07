import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import { myprojects } from "../data/projectsData";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

function NumberList(props) {
  const listItems = myprojects.map((project) => (
    <motion.div
      className="projects"
      variants={boxVariants}
      whileHover="hover"
      key={project.id}
    >
      <a rel="noopener noreferrer" target="_blank" href={project.liveLink}>
        <div className="project-images" id={project.id}></div>
      </a>

      <div className="project-links">
        <div className="text">
          <h3>{project.title}</h3>
        </div>
        <div className="icons">
          <a rel="noopener noreferrer" target="_blank" href={project.gitLink}>
            <i className="fab fa-github" title="github repo" id="github">
              {" "}
            </i>
          </a>
          <a rel="noopener noreferrer" href={project.liveLink} target="_blank">
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
  ));
  return (
    <section
      data-aos="zoom-in"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      {" "}
      <h1 className="heading text-gradient">Projects I have Built</h1>
      <div className="flex">{listItems}</div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Rishk3"
        className="button-link"
      >
        <button className="button">Want to See some More Projects ?</button>
      </a>
    </section>
  );
}

const Portfolio = () => {
  return (
    <>
      <NumberList />
    </>
  );
};

export default Portfolio;
