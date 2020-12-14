import React from "react";
import "./../index.css";

const Skills = () => {
  return (
    <section
    data-aos="flip-left"
    data-aos-easing="linear"
    data-aos-duration="2000"
      className="skills-container"
      style={{marginTop:"3rem"}}
      name="skills"
    
      id="skills"
    >
      <h1  className="heading text-gradient-purple">What I Am Good At &nbsp;?</h1>
<div className="skill_border">
<div className="techs" >
        <li>
          <i className="fab html fa-html5"></i> <p>HTML5</p>
        </li>
        <li>
          <i className="fab css fa-css3"></i>
          <p>CSS3</p>
        </li>
        <li>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li>
        <li>
        <i style={{color:"#3C873A"}} class="fab fa-node"></i>
          <p>Node js</p>
        </li>
        <li>
          <i className="fab fa-github"></i>
          <p>Github</p>
        </li>
        <li>
        <i className="fab fa-android" style={{color:"#3DDC84"}}></i>
          <p>Android</p>
        </li>
      </div>

</div>
        </section>
  );
};

export default Skills;
