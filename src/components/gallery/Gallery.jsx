import { useState } from "react";
import "./Gallery.scss";
import images from "./../../constants/images";
import { IoClose } from "react-icons/io5";

const galleryArray = [
  { id: "sunflowers", img: images.g2 },
  { id: "greenfield", img: images.g4 },
  { id: "soldier", img: images.g1 },

  { id: "boy", img: images.g3 },
  { id: "beach", img: images.g8 },
  { id: "yard", img: images.g6 },
  { id: "building", img: images.g7 },
];

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div className="model-img">
          <img src={tempImg} />
        </div>
        <IoClose
          className="model-close"
          onClick={() => {
            setModel(false);
          }}
        />
      </div>
      <div className="gallery">
        <div className="gallery-container">
          {galleryArray.map((item) => {
            return (
              <div
                className="gallery-box"
                key={item.id}
                onClick={() => getImg(item.img)}
              >
                <div className="pics">
                  <img src={item.img} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
