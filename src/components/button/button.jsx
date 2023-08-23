import React from "react";
import "./button.css";

const Button = ({
  containerWidth,
  containerHeight,
  variant,
  onClick,
  disabled = false,
  className = "",
  children
}) => {
  const getButtonClass = () => {
    if (disabled) return "disabled-button";

    switch (variant) {
      case "gray":
        return "gray-button";
      case "green":
        return "green-button";
      case "transparent":
        return "transparent-button";
      default:
        return "colorful-button";
    }
  };

  return (
    <div
      // className={`button-container ${getButtonClass()}`}
      className={`button-container ${getButtonClass()} ${className}`}
      style={{ width: containerWidth, height: containerHeight}}
      onClick={disabled ? null : onClick}
    >
      <div className="button-text">{children}</div>
    </div>
  );
};

export default Button;
