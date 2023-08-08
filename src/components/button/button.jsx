import React from "react";
import "./button.css";

const Button = ({
  text,
  containerWidth,
  variant,
  onClick,
  disabled = false,
}) => {
  const getButtonClass = () => {
    if (disabled) return "disabled-button";

    switch (variant) {
      case "gray":
        return "gray-button";
      case "green":
        return "green-button";
      default:
        return "colorful-button";
    }
  };

  return (
    <div
      className={`button-container ${getButtonClass()}`}
      style={{ width: containerWidth }}
      onClick={disabled ? null : onClick}
    >
      <div className="button-text">{text}</div>
    </div>
  );
};

export default Button;
