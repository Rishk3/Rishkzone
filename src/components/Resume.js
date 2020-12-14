import React from 'react'
import "./../index.css";
function Resume() {
    return (
        <div data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1200"
         style={{textAlign:"center",display:"flex",justifyContent:"center",margin:"3rem"}}>
           <a target="_blank" rel="noopener noreferrer" href="https://rishk3.github.io/resume/"  style={{textDecoration:"none"}} >
                <p style={{fontSize:"32px"}} >
                    <span className="text-gradient-purple">
                    Download Resume  </span><i style={{color:"#fff"}} className="fa fa-download" aria-hidden="true"></i></p>
           
                
            </a>
        </div>
    )
}

export default Resume
