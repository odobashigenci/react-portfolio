import React from "react";
import ImageCard from "./ImageCard";

const ImageRow = ({ images, direction }) => {
  return (
    <div className={`d-flex justify-content-center space-between mx-5 my-5 row ${direction}`}>
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
  );
};

export default ImageRow;
