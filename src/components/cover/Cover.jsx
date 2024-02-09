import "./Cover.scss";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import images from "./../../constants/images";
import Header from "./../header/Header";
const destinationsArray = [
  { id: "istanbul", img: images.c1, text: "From Istanbul with love!" },
  { id: "london", img: images.c2, text: "Lovely day for a walk!" },
  { id: "santorini", img: images.c3, text: "Nice music and dance, always..." },
  { id: "newyork", img: images.c4, text: "From Istanbul with love!" },
  { id: "tokio", img: images.c5, text: "Lovely day for a walk!" },
  { id: "paris", img: images.c6, text: "Nice music and dance, always..." },
  { id: "kioto", img: images.c7, text: "Lovely day for a walk!" },
  { id: "berlin", img: images.c8, text: "Nice music and dance, always..." },
];
const Cover = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinationsArray[0]
  );

  const slideLeft = () => {
    var slider = document.querySelector(".slider");
    if (slider) {
      // Check if the slider element exists
      slider.scrollLeft -= 500; // Scroll left by 500px
    }
  };
  const slideRight = () => {
    var slider = document.querySelector(".slider");
    if (slider) {
      // Check if the slider element exists
      slider.scrollLeft += 500; // Scroll left by 500px
    }
  };

  return (
    <div className="cover">
      <Header />
      <div className="cover-top">
        <div className="cover-top__img">
          <img src={selectedDestination.img} alt="" />
        </div>
        <h1 className="cover-top__title">{selectedDestination.text}</h1>
      </div>
      <div className="cover-bottom">
        <MdKeyboardArrowLeft className="arrow-icons" onClick={slideLeft} />
        <div className="slider">
          {destinationsArray.map((dest) => {
            return (
              <div
                key={dest.id}
                className="img-container"
                onClick={(e) => {
                  setSelectedDestination(dest);
                }}
              >
                <img src={dest.img} />
              </div>
            );
          })}
        </div>
        <MdKeyboardArrowRight className="arrow-icons" onClick={slideRight} />
      </div>
    </div>
  );
};

export default Cover;
