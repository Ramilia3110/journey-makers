import "./Cover.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import images from "./../../constants/images";
import Header from "./../header/Header";
import { motion } from "framer-motion";

const destinationsArray = [
  { id: "istanbul", img: images.c1, text: "From Istanbul with love!" },
  { id: "london", img: images.c2, text: "Lovely day for a walk!" },
  { id: "santorini", img: images.c3, text: "Nice music and dance, always..." },
  { id: "newyork", img: images.c4, text: "Love,love, love!" },
  { id: "tokio", img: images.c5, text: "Lovely day for a walk!" },
  { id: "paris", img: images.c6, text: "Nice music and dance, always..." },
  { id: "kioto", img: images.c7, text: "Lovely day for a walk!" },
  { id: "berlin", img: images.c8, text: "Nice music and dance, always..." },
];

const Cover = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinationsArray[0]
  );

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

  return (
    <div className="cover">
      <Header />
      <div className="cover-container">
        {/* Cover Image and Title */}
        <motion.div
          className="cover-top__img"
          initial="hidden"
          whileInView="show"
          variants={upVariants}
        >
          <img src={selectedDestination.img} alt={selectedDestination.text} />
        </motion.div>
        <h1 className="cover-top__title">{selectedDestination.text}</h1>
      </div>

      {/* Swiper with Image Cards */}
      <div className="cover-bottom">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          onSlideChange={(swiper) => {
            const currentSlideIndex = swiper.realIndex;
            setSelectedDestination(destinationsArray[currentSlideIndex]);
          }}
        >
          {destinationsArray.map((dest) => (
            <SwiperSlide key={dest.id}>
              <div
                className="img-container"
                onClick={() => setSelectedDestination(dest)}
              >
                <img src={dest.img} alt={dest.text} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cover;
