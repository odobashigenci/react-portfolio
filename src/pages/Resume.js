import React from "react";
import firebasePreview from "../assets/firebasePreview.png";
import mongoPreview from "../assets/mongoPreview.png";
import nodeXpressPreview from "../assets/nodeXpressPreview.png";
import reactPreview from "../assets/reactPreview.png";
import tailwindPreview from "../assets/tailwindPreview.png";

function handleDownloadResume() {
  const url = "/Resume.pdf";
  window.open(url, "_blank");
}

function Resume() {
  return (
    <div>
      <h3>Find more about my skills and career</h3>
      <hr className="divider" />

      {/* Center the first three pictures */}
      <div className="d-flex justify-content space-between mx-5">
        <div className="row">
          <div className="col-md-4">
            <img src={firebasePreview} alt="Firebase Preview" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={mongoPreview} alt="MongoDB Preview" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={nodeXpressPreview} alt="Node/Express Preview" className="img-fluid" />
          </div>
        </div>
      </div>


      

      {/* Second row of images */}
      <div className="d-flex justify-content-center space-between mx-5 my-5">
        <div className="row">
          <div className="col-md-4">
            <img src={reactPreview} alt="React Preview" className="img-fluid" />
          </div>
          <div className="col-md-3 mt-5">
          <button className="resume-button" onClick={handleDownloadResume}>
            Download Resume
          </button>
        </div>
          <div className="col-md-4">
            <img src={tailwindPreview} alt="Tailwind CSS Preview" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
