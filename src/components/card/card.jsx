import React from "react";
import "./card.css"

const Card = ({containerWidth = "100%", containerHeight = "100%", backgroundColor = "rgba(255, 255, 255, 1)", positionType = "relative", children}) => {
  return( <div className="card-container" style={{width: containerWidth, height: containerHeight, background: backgroundColor, position: positionType}}> 
    {children}
  </div>);
};


export default Card;
 