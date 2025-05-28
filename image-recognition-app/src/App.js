import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mockApiResponse = () => {
    // Simulate API response with mock data
    return [
      { object: "Apple", confidence: 95 },
      { object: "Banana", confidence: 87 },
      { object: "Orange", confidence: 92 },
    ];
  };

  const handleImageUpload = (imageUrl) => {
    setImage(imageUrl);
    setIsLoading(true);
    setTimeout(() => {
      setResults(mockApiResponse());
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Image Recognition App</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <ImageUpload onImageUpload={handleImageUpload} />
        <ResultsDisplay image={image} results={results} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
