import React from "react";
import "./../index.css";

const Contact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <div className="color_border_2">
      <div className="profile-image">

</div>
      </div>
      
      <h1 className="heading text-gradient">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div style={{margin:"1rem"}} className="color_border">
        <div className="cards">
          <div className="contact-icons">
          <a style={{color:"#fff",textDecoration:"none"}} rel="noopener noreferrer" target="_blank" href="mailto:rishikesh8821@gmail.com"><i className="fas fa-envelope"></i></a>
          
          </div>
          <div className="contact-text">
          Send email
          </div>
          <div className="contact-links">
          <a style={{color:"#fff",textDecoration:"none"}} rel="noopener noreferrer" target="_blank" href="mailto:rishikesh8821@gmail.com">
          <span>rishikesh8821@gmail.com</span> </a>
          </div>
        </div>
          </div>
       
        {/* Card 2 - Social Media */}
        <div style={{margin:"1rem"}} className="color_border">
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="social_icon"
              href="https://github.com/Rishk3/"
            >
              <i style={{fontSize:"25px",color:"#fff"}} className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* facebook */}
            <a
             className="social_icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/anchalesh10/"
            >
              <i style={{fontSize:"25px",color:"blue",backgroundColor:"#fff",borderRadius:"50%"}} className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a>

            {/* Instagram */}
            <a
            className="social_icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/rishk3_an/"
            >
              <i style={{fontSize:"25px",color:"#fff",backgroundColor:"#bc2a8d",borderRadius:"50%"}}
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a>
           
            <a
            className="social_icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+918423766435&text=Hey, I Saw your Portfolio"
            >
              <i style={{fontSize:"25px",color:"#fff",backgroundColor:"#25D366",borderRadius:"50%"}}
                className="fab fa-whatsapp"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
        </div>
        </div>


        {/* Card 3 - Phone */}
        <div style={{margin:"1rem"}} className="color_border">
        <div className="cards">
          <div className="contact-icons">
          <a href="tel:+917355608802"><span>  <i className="fas fa-phone"></i></span></a> 
          
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
          <a style={{color:"#fff"}} href="tel:+917355608802"><span>(+91) 7355608802</span></a> 
          </div>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;
