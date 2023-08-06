import React from "react";
import "./textbox.css"

const Textbox = ({text, containerWidth}) => {
  return <div className="textbox-container" style={{width: containerWidth}}>
    <div className = "textbox-text">
      {text}
    </div>
    
    </div>;
};


export default Textbox;
