import React from "react";
import "./card.css"

// const Card = ({containerWidth = "100%", containerHeight = "100%", backgroundColor = "rgba(255, 255, 255, 1)", positionType = "relative", gradientBorder = false, children}) => {
//   return( <div className={`card-container ${gradientBorder ? "gradient-border" : ""}`}  style={{width: containerWidth, height: containerHeight, background: backgroundColor, position: positionType}}> 
//     {children}
//   </div>);
// };


// export default Card;
 
const Card = ({ 
  containerWidth = "100%", 
  containerHeight = "100%", 
  backgroundColor = "rgba(255, 255, 255, 1)", 
  positionType = "relative", 
  gradientBorder = false, 
  borderRadius = "12px",
  children 
}) => {
  const backgroundStyle = gradientBorder 
      ? { background: 'linear-gradient(45deg, #EC7BCF, #FFD57A)' } 
      : { background: backgroundColor };

  return ( 
      <div 
          className={`card-container ${gradientBorder ? "gradient-border" : ""}`}  
          style={{ width: containerWidth, height: containerHeight, position: positionType, borderRadius, ...backgroundStyle }}
      > 
          {children}
      </div>
  );
};

export default Card;
