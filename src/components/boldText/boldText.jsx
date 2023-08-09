import React from "react";
import "./boldText.css"

const BoldText = ({text, containerWidth, size}) => {
  return <div className="BoldText-container" style={{width: containerWidth, fontSize: size}}>
      {text}
    </div>;
};


export default BoldText;
