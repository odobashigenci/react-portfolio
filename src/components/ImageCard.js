import React from "react";

const ImageCard = ({ src, alt }) => {
  return (
    <div className="col-md-4">
      <img src={src} alt={alt} className="img-fluid" />
    </div>
  );
};

export default ImageCard;
