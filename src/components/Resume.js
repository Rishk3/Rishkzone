import React from "react";
import "./../index.css";
function Resume() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="600"
      name="resume"
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div whileHover="hover" className="projects">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://rishk3.github.io/resume/"
        >
          <div className="project-images" id="resumeImg"></div>
        </a>

        <div className="project-links">
          <div className="icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rishk3.github.io/resume/"
              style={{ textDecoration: "none" }}
            >
              <p style={{ fontSize: "32px" }}>
                <span className="text-gradient-purple">Download Resume </span>
                <i
                  style={{ color: "#fff" }}
                  className="fa fa-download"
                  aria-hidden="true"
                ></i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
