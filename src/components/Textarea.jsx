import React from "react";

const Textarea = ({ id, name, placeholder, value, onChange }) => {
  return (
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
