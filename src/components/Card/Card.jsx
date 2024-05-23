import React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({
  icon,
  image,
  showImage,
  title,
  description,
  listItems,
  buttonText,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {showImage && image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {<FontAwesomeIcon icon={icon} className="text-blue-600 mr-2" />}
          {title}
        </div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <ul className="text-gray-600">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 fill-current text-blue-500"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 001.414 0L15 8.414V10a1 1 0 102 0V7a1 1 0 00-1-1h-4a1 1 0 100 2h1.586l-5.293 5.293a1 1 0 000 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 py-4">
        <Button onClick={onClick} text={buttonText} />
      </div>
    </div>
  );
};

export default Card;
