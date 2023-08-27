import React from "react";
import ImageCard from "./ImageCard";

const ImageRow = ({ images }) => {
  return (
    <div className="imageRows d-flex justify-content-center space-between mx-5 my-5 row">
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>

    
  );
};

export default ImageRow;
