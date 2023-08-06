import React from "react";
import "./colorfulText.css"

const ColorfulText = ({text, containerWidth}) => {
  return <div className="ColorfulText-container" style={{width: containerWidth}}>
      {text}
    </div>;
};


export default ColorfulText;
