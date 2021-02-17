import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("");

  console.log(process.env.REACT_APP_PIXABAY_API_KEY);

  useEffect(() => {
    fetch(
      `/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const functionToUpdateSearchText = (text) => {
    setIsLoading(true);
    setTerm(text);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 overflow-x-hidden z-0">
      <div className="scrollbar-container bg-transparent m-4 z-0">
        <div className="container mx-auto">
          <ImageSearch searchText={functionToUpdateSearchText} />

          {isLoading ? (
            <div className="second-container bg-gray-700 rounded-3xl shadow-sm mx-40 mb-20">
              <h1 className="text-3xl text-center text-gray-300 p-24">
                Loading...
              </h1>
            </div>
          ) : images.length > 0 ? (
            <div className="second-container bg-gray-700 rounded-3xl shadow-sm mx-40 mb-20">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-11 px-16 py-16">
                {images.map((image) => (
                  <ImageCard key={image.id} image={image} />
                ))}
              </div>
            </div>
          ) : (
            <div className="second-container bg-gray-700 rounded-3xl shadow-sm mx-40 mb-20">
              <h1 className="text-3xl text-center text-gray-300 p-24">
                No images found :(
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
