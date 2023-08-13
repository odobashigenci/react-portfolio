import React from "react";
import ImageCard from "./ImageCard";

const ImageRow = ({ images }) => {
  return (
    <div className="d-flex justify-content-center space-between mx-5 my-5">
      <div className="row">
        {images.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
