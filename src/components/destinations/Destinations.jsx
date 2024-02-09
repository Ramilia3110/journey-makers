import React from "react";
import "./Destinations.scss";
import images from "./../../constants/images";
import { AiTwotoneStar } from "react-icons/ai";
import { motion } from "framer-motion";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, duration: 3 },
  },
};
const gridCardVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
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

const Destinations = () => {
  return (
    <div className="destinations" id="destinations">
      <motion.h2
        className="destinations__title"
        initial="hidden"
        whileInView="show"
        variants={upVariants}
      >
        Best trip package
      </motion.h2>

      <motion.div
        className="trip__grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
      >
        <motion.div className="trip__card" variants={gridCardVariants}>
          <div className="trip__card-img">
            <img src={images.d1} alt="trip" />
          </div>

          <div className="trip__details">
            <p>Wasserwerk Frelberg, Germany</p>
            <div className="rating">
              <AiTwotoneStar className="star" />
              4.2
            </div>
            <div className="booking__price">
              <div className="price">
                <span>From</span> $300
              </div>
              <button className="book__now">Book Now</button>
            </div>
          </div>
        </motion.div>
        <motion.div className="trip__card" variants={gridCardVariants}>
          <div className="trip__card-img">
            <img src={images.d2} alt="trip" />
          </div>
          <div className="trip__details">
            <p>Patagonia, Argentina and Chile</p>
            <div className="rating">
              <AiTwotoneStar className="star" />
              4.5
            </div>
            <div className="booking__price">
              <div className="price">
                <span>From</span> $450
              </div>
              <button className="book__now">Book Now</button>
            </div>
          </div>
        </motion.div>
        <motion.div className="trip__card" variants={gridCardVariants}>
          <div className="trip__card-img">
            <img src={images.d3} alt="trip" />
          </div>
          <div className="trip__details">
            <p>The Dolomites, Italy</p>
            <div className="rating">
              <AiTwotoneStar className="star" />
              4.7
            </div>
            <div className="booking__price">
              <div className="price">
                <span>From</span> $400
              </div>
              <button className="book__now">Book Now</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Destinations;
