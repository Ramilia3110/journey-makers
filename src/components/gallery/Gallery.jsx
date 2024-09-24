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
          <img src={tempImg} alt="Selected" />
        </div>
        <IoClose className="model-close" onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        <div className="gallery-container">
          {galleryArray.map((item, index) => (
            <div
              className={`gallery-box ${
                index === 0 || index === 6 ? "span-two" : ""
              }`} // Apply class for spanning boxes
              key={item.id}
              onClick={() => getImg(item.img)}
            >
              <div className="pics">
                <img src={item.img} alt={item.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
