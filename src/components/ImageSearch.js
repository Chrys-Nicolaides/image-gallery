import React, { useState } from "react";

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
        className="text-gray-700 text-opacity-50 text-10xl font-bold -my-10 ml-44 text-right min-w-max z-50 overflow-visible
      "
      >
        Media Gallery
      </h2>
      <div className="flex justify-center flex-nowrap align-center self-center -mt-28">
        <div className="linear-gradient flex justify-center h-24 min-w-min mb-4 px-1">
          <h1 className="text-white flex justify-center text-8xl font-bold text-center opacity-100 -mt-1">
            Media Gallery.
          </h1>
        </div>
      </div>
      <div className="mt-24 mb-20 grid grid-cols-3 gap-4">
        <form
          onSubmit={onSubmit}
          className="col-start-2 ml-8 border-4 border-gray-600 rounded-full hover:border-gray-500 hover:bg-gray-800"
        >
          <div className="text-gray-500 py-2 flex justify-center align-enter">
            <input
              onChange={handleChange}
              className="mx-8 text-base font-medium placeholder-gray-400 hover:text-gray-300 text-gray-300 appearance-none bg-transparent border-none w-full font-normal mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search images here"
            />
            <div className="flex align-center mx-8 mt-1">
              <svg
                width="22px"
                height="22px"
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
