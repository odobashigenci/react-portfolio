import React from "react";

const ImageCard = ({ src, alt }) => {
  return (
    <div className="col-md-4">
      <div className="image-card-wrapper">
        <img src={src} alt={alt} className="img-fluid" />
      </div>
    </div>
  );
};

export default ImageCard;
