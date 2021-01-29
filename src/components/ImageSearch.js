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
    <div className="pt-10 mb-10 text-white grid grid-cols-3 gap-4">
      <h1 className="text-white justify-center display-flex text-8xl">
        Media Gallery.
      </h1>
      <form onSubmit={onSubmit} className="col-start-3 ml-8">
        <div className=" border-b-2 border-indigo-600 py-2 flex justify-end">
          <input
            onChange={handleChange}
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
