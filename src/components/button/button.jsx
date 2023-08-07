import React from "react";
import "./button.css"

const Button = ({text, containerWidth, disabled}) => {
  return (
    <div 
        className={`button-container ${disabled ? 'disabled-button' : ''}`} 
        style={{width: containerWidth}}
    >
        <div className="button-text">
            {text}
        </div>
    </div>
  );
};

export default Button;
