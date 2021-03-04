import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

// npm install react-icons --save

// https://react-icons.github.io/react-icons/search?q=eye

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-md bg-gradient-to-b from-gray-700 to-gray-800">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-medium text-gray-500 text-sm mt-2">Photo by</div>
        <div className="font-bold text-gray-100 text-2xl mb-8">
          {image.user}
        </div>
        <div className="border-b-2 border-gray-600 mb-8"></div>
        <ul className="text-sm flex space-x-9">
          <div className="text-gray-500">
            <li className="flex items-center">
              <AiFillEye className="text-gray-300" size={"1.5em"} />
              <strong className="text-gray-400 font-medium ml-1.5 ">
                {image.views}
              </strong>
              <strong className="text-gray-400 font-medium ml-1.5 ">
                views
              </strong>
            </li>
          </div>

          <div className="-ml-20 text-gray-500">
            <li className="flex items-center">
              <AiFillHeart className="text-gray-300" size={"1.5em"} />
              <strong className="text-gray-400 font-medium ml-1.5">
                {image.likes}
              </strong>
              <strong className="text-gray-400 font-medium ml-1.5">
                likes
              </strong>
            </li>
          </div>
        </ul>
      </div>
      <div className="px-6 py-4 mt-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gradient-to-r from-purple-400 to-purple-500 rounded-full px-3 py-1 text-sm font-medium text-white mr-2 m-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
