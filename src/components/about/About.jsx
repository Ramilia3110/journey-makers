// About.jsx
import "./About.scss";
import images from "./../../constants/images";
import { AiOutlineSafetyCertificate, AiOutlineTrophy } from "react-icons/ai";
import { PiConfettiLight } from "react-icons/pi";
import { motion } from "framer-motion";

const upVariants = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      y: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeIn",
      duration: 1,
    },
  },
};
const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeIn",
      duration: 1,
    },
  },
};
const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeIn",
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <div className="about" id="about">
      <motion.h1
        className="top-heading"
        initial="hidden"
        whileInView="show"
        variants={upVariants}
      >
        During the trip We guarantee!
      </motion.h1>
      <div className="about__top">
        <motion.div
          className="about__top-card"
          initial="hidden"
          whileInView="show"
          variants={leftVariants}
        >
          <AiOutlineSafetyCertificate className="about-icon" />
          <h2>Safe trip</h2>
          <p>
            psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </motion.div>
        <motion.div
          className="about__top-card"
          initial="hidden"
          animate="show"
          variants={upVariants}
        >
          <AiOutlineTrophy className="about-icon" />
          <h2>The best hotels</h2>
          <p>
            psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </motion.div>
        <motion.div
          className="about__top-card"
          initial="hidden"
          whileInView="show"
          variants={rightVariants}
        >
          <PiConfettiLight className="about-icon" />
          <h2>The best entertainment </h2>
          <p>
            psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </motion.div>
      </div>

      <div className="about-bottom">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="show"
            variants={leftVariants}
          >
            <h2>Welcome to our website</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="btn">Learn more</button>
          </motion.div>
          <motion.div
            className="about-img"
            initial="hidden"
            whileInView="show"
            variants={rightVariants}
          >
            <img src={images.a1} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
