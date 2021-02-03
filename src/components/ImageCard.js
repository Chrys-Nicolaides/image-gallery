import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-700 to-gray-800">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4 text-gray-500">
        <div className="font-medium text-gray-500 text-sm">Photo by</div>
        <div className="font-bold text-gray-100 text-xl mb-8">{image.user}</div>
        <div className="border-b-2 border-gray-600 mb-8"></div>
        <ul className="text-sm">
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
      <div className="px-6 py-4 flex align-center items-center">
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
