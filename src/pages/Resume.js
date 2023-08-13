import React from "react";
import ImageRow from "../components/ImageRow";
import firebasePreview from "../assets/firebasePreview.png";
import mongoPreview from "../assets/mongoPreview.png";
import nodeXpressPreview from "../assets/nodeXpressPreview.png";
import reactPreview from "../assets/reactPreview.png";
import tailwindPreview from "../assets/tailwindPreview.png";
import bootstrapPreview from "../assets/bootstrapPreview.png"

function handleDownloadResume() {
  const url = "/Resume.pdf";
  window.open(url, "_blank");
}

const firstRowImages = [
  { src: firebasePreview, alt: "Firebase Preview" },
  { src: mongoPreview, alt: "MongoDB Preview" },
  { src: nodeXpressPreview, alt: "Node/Express Preview" },
];

const secondRowImages = [
  { src: reactPreview, alt: "React Preview" },
  { src: tailwindPreview, alt: "Tailwind CSS Preview" },
  { src: bootstrapPreview, alt: "Btootstratp Preview" },
];

function Resume() {
  return (
    <div>
      <h3>Find more about my skills and career</h3>
      <hr className="divider" />

      {/* First row of images */}
      <ImageRow images={firstRowImages} />

      {/* Second row of images */}
      <ImageRow images={secondRowImages} />

      {/* Download button */}
      <div className="d-flex justify-content-center mx-5 my-5">
        <div className="col-md-3 mt-5">
          <button className="resume-button" onClick={handleDownloadResume}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
