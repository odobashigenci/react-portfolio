import React from "react";
import ImageRow from "../components/ImageRow";
import firebasePreview from "../assets/firebasePreview.png";
import mongoPreview from "../assets/mongoPreview.png";
import nodeXpressPreview from "../assets/nodeXpressPreview.png";
import reactPreview from "../assets/reactPreview.png";
import tailwindPreview from "../assets/tailwindPreview.png";
import bootstrapPreview from "../assets/bootstrapPreview.png";
import Buttons from "../components/Buttons";

function handleDownloadResume() {
  const url = "/Resume.docx";
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
    <div className="resume">
      
      <h3>Find more about my skills and career</h3>
      <hr className="divider" />

      {/* Download button */}
      <Buttons
        variant="primary"
        className="submit-data"
        onClick={handleDownloadResume}
      >
        Download Resume
      </Buttons>

      {/* First row of images */}
      <ImageRow images={firstRowImages} className="firstRow" />

{/* Second row of images */}
<ImageRow images={secondRowImages} className="secondRow" />
    </div>
  );
}

export default Resume;
