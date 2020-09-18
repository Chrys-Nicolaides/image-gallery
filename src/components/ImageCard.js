import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg mt-8 ml-8 bg-gray-900">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4 text-gray-500">
        <div className="font-bold text-gray-100 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 m-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
