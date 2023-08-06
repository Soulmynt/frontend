import React from "react";
import "./button.css"

const Button = ({text, containerWidth}) => {
  return <div className="button-container" style = {{width: containerWidth}}>
    <div className = "button-text">
      {text}
    </div>
    
    </div>;
};


export default Button;
