import React from "react";
import "./colorfulText.css"

const ColorfulText = ({text, containerWidth, weight}) => {
  return <div className="ColorfulText-container" style={{width: containerWidth, fontWeight: weight}}>
      {text}
    </div>;
};


export default ColorfulText;
