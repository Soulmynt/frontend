// import React from "react";
// import "./textbox.css";
// // import { useState } from 'react';

// const Textbox = ({ text, containerWidth, containerHeight, type = "text", value, onChange, additionalClass = '', isFocused = false, handleInputFocus, handleInputBlur, isRequired=false }) => {

//   return (
//     <div className={`textbox-container ${isFocused ? additionalClass : ''}`} style={{ width: containerWidth, height: containerHeight }}>
//       <input 
//         type={type} 
//         value={value} 
//         onChange={onChange} 
//         placeholder={text} 
//         className="textbox-input" 
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         required={isRequired}
//       />
//     </div>
//   );
// };
// export default Textbox;

import React from "react";
import "./textbox.css";

const Textbox = ({ 
    text, 
    containerWidth, 
    containerHeight, 
    type = "text", 
    value, 
    onChange, 
    additionalClass = '', 
    isFocused = false, 
    handleInputFocus, 
    handleInputBlur, 
    isRequired=false,
    multiline = false  // <-- New prop
}) => {
  return (
    <div className={`textbox-container ${isFocused ? additionalClass : ''}`} style={{ width: containerWidth, height: containerHeight }}>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={text}
          className="textbox-input"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required={isRequired}
          style={{ height: '100%', resize: 'none' }} 
          type = {type}
        />
      ) : (
        <input 
          type={type} 
          value={value} 
          onChange={onChange} 
          placeholder={text} 
          className="textbox-input" 
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required={isRequired}
         
        />
      )}
    </div>
  );
};

export default Textbox;