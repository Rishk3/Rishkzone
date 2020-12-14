import React, { useState, useEffect } from "react";
import "./../index.css";
import man from "./../images/man.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne===true&&showHeadingThree===false&&showHeadingTwo===false) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
        
        console.log("setting1");
      } 
      if (showHeadingTwo===true&&showHeadingOne===false&&showHeadingThree===false) {
     
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
        console.log("setting2");
      } 
      if (showHeadingThree===true&&showHeadingOne===false&&showHeadingTwo===false) {
     
        setShowHeadingThree(false);
        setShowHeadingOne(true);
        console.log("setting3");
      } 
      
    }, 4000);
  }, [showHeadingOne,showHeadingTwo,showHeadingThree]);

  return (
    <section className="home-container" id="home" name="home">
       <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={man} alt="" />
      </motion.div>
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h4 className="welcome-content">WELCOME TO RISHK-ZONE</h4>
        <br />
        <h1 className="main-content text-gradient">
          Hi, I’m RISHIKESH KUMAR
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 2 }}
          >
            <span role="img" aria-label="Hand waving">
              👋
            </span>
          </motion.span>{" "}
        </h1>
        {/* Animate Skill Content */}

        <div className="skill-animation ">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content text-gradient-purple"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Web Developer |  React Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content text-gradient-purple"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
               Student by day, Developer by night
              </motion.h2>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showHeadingThree && (
              <motion.h2
                className="skill-content text-gradient-purple"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
               Love to create Web experiences for Next generation
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        {/* // */}

        <h1 className="india">
          {" "}
          From INDIA{" "}
          <span>
           
          </span>
        </h1>

        <button className="button" onClick={() => scroll.scrollToBottom()}>
          Contact Me
        </button>
      </motion.div>

     
    </section>
  );
};

export default Home;
