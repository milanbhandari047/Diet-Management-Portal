// Input.js
import React from "react";

const Input = ({ id, placeholder, type = "text" }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
