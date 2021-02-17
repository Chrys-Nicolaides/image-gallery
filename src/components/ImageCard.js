import React from "react";
import SearchIcon from "./searchIcon.svg";
import ViewIcon from "./viewIcon.svg";

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
              <svg
                className="text-gray-400"
                width="15px"
                height="15px"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              <strong className="ml-1.5 "></strong>
              {image.views}
              <strong className="font-normal ml-1.5 ">views</strong>
            </li>
          </div>
          {/* <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li> */}
          <div className="-ml-20 text-gray-500">
            <li className="flex items-center">
              <svg
                className="text-gray-400"
                width="15px"
                height="15px"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              <strong className="ml-1.5"></strong>
              {image.likes}
              <strong className="font-normal ml-1.5">likes</strong>
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
