import React from "react";
import "./textbox.css";
// import { useState } from 'react';

const Textbox = ({ text, containerWidth, type = "text", value, onChange, additionalClass = '', isFocused = false, handleInputFocus, handleInputBlur }) => {

  return (
    <div className={`textbox-container ${isFocused ? additionalClass : ''}`} style={{ width: containerWidth }}>
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={text} 
        className="textbox-input" 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};
export default Textbox;