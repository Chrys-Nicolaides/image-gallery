import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    setTerm(text);
  };

  return (
    <div className=" bg-gray-800">
      <div className="container mx-auto">
        <ImageSearch searchText={functionToUpdateSearchText} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-4xl text-center text-gray-900 mx-auto">
            No Images Found :(
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-4xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
