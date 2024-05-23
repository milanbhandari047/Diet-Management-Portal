// Label.js
import React from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label className="block text-gray-700 font-bold mb-2" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
