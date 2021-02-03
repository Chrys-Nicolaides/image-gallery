import React, { useState } from "react";
import Icon from "./icon.svg";

const ImageSearch = (props) => {
  const [text, setText] = useState("");

  console.log(props);

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchText(text);
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <div>
      <h2
        className="text-gray-700 text-opacity-50 text-9xl font-bold -my-6 px-100 text-right tracking-wider
      "
      >
        Media Gallery.
      </h2>
      <div className="flex justify-center">
        <div className="w-80 h-20 bg-gradient-to-r from-purple-800 to-red-400 opacity-50"></div>
      </div>
      <h1 className="text-white justify-center display-flex text-8xl font-bold text-center -my-6">
        Media Gallery.
      </h1>
      <div className="pt-10 mb-10 text-white grid grid-cols-3 gap-4">
        <form
          onSubmit={onSubmit}
          className="col-start-2 ml-8 border-4 border-gray-600 rounded-full"
        >
          <div className="text-gray-300 py-2 flex justify-center align-enter">
            <input
              onChange={handleChange}
              className="mx-8 text-base font-medium placeholder-gray-100 appearance-none bg-transparent border-none w-full font-normal text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Images Here"
            />
            <div className="flex align-center mx-8">
              <svg
                width="25px"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
