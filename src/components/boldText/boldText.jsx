import React from "react";
import "./boldText.css"

const BoldText = ({text, containerWidth}) => {
  return <div className="BoldText-container" style={{width: containerWidth}}>
      {text}
    </div>;
};


export default BoldText;
