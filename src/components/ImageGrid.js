import React from "react";
import "./ImageGrid.css";

import Modalopener1 from "../assets/Modalopener1.png";
import Modalopener2 from "../assets/Modalopener2.png";
import Modalopener3 from "../assets/Modalopener3.png";
import Modalopener4 from "../assets/Modalopener4.png";
import Modalopener5 from "../assets/Modalopener5.png";
import Modalopener6 from "../assets/Modalopener6.png";
import Modalopener7 from "../assets/Modalopener7.png";

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <img src={Modalopener1} alt="Modalopener1" />
      <img src={Modalopener2} alt="Modalopener2" />
      <img src={Modalopener3} className="full" alt="Modalopener3" />
      <img src={Modalopener4} alt="Modalopener4" />
      <img src={Modalopener5} alt="Modalopener5" />
      <img src={Modalopener6} alt="Modalopener6" />
      <img src={Modalopener7} alt="Modalopener7" />
    </div>
  );
};

export default ImageGrid;
