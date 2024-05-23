// Button.js
import React from "react";
import classNames from "classnames";

const Button = ({
  text,
  variant = "primary",
  onClick,
  className = "",
  ...props
}) => {
  const buttonClass = classNames(
    "px-4 py-2 font-semibold text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ",
    {
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
        variant === "primary",
      "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500":
        variant === "outline",
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {text}
    </button>
  );
};

export default Button;
