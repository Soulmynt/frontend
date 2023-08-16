import React from "react";
import "./boldText.css"

const BoldText = ({text, containerWidth, size, weight, textColor= 'black'}) => {
  return <div className="BoldText-container" style={{width: containerWidth, fontSize: size, fontWeight: weight, color: textColor}}>
      {text}
    </div>;
};


export default BoldText;
