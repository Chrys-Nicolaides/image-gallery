import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto text-white">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-indigo-600 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="placeholder-indigo-100 appearance-none bg-transparent border-none w-full font-normal text-indigo-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image"
          />
          <button
            className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 focus:outline-none text-sm text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
