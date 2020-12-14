import React from "react";
import "./../index.css";
import uiImage from "./../images/ui.svg";
import webImage from "./../images/web.svg";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading text-gradient">Services Provided By me</h1>  
      <div className="service-item services-wrapper">
      <div className="color_border">
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Web Development</p>
          </li>
        </div>
      
      </div>
      
      <div className="service-item color_border">
        <div className="services">
          <li>
            <img src={webImage} alt="" />
            <p>React Development</p>
          </li>
        </div>
      </div>
  
      </div>
    </section>
  );
};

export default Services;
