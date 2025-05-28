// App.js (unchanged, just verifying key parts)
import React, { useState, useEffect } from "react";
import ImageUpload from "./components/ImageUpload";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockApiResponse = (fileName) => {
    const lowerName = fileName ? fileName.toLowerCase() : "default";
    console.log(`lowerName: ${lowerName}`);
    if (lowerName.includes("fruit") || lowerName.includes("apple")) {
      return [
        { object: "Apple", confidence: 95 },
        { object: "Banana", confidence: 87 },
        { object: "Orange", confidence: 92 },
      ];
    } else if (lowerName.includes("car")) {
      return [
        { object: "Car", confidence: 90 },
        { object: "Wheel", confidence: 85 },
      ];
    } else {
      return [{ object: "Unknown", confidence: 50 }];
    }
  };

  const handleImageUpload = (imageUrl, fileName, errorMsg) => {
    if (errorMsg) {
      setError(errorMsg);
      setImage(null);
      setResults(null);
      return;
    }
    setError(null);
    setImage(imageUrl);
    setIsLoading(true);
    setTimeout(() => {
      setResults(mockApiResponse(fileName));
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    if (image) {
      URL.revokeObjectURL(image);
    }
    setImage(null);
    setResults(null);
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  useEffect(() => {
    if (results !== null) {
      const resultsObj = JSON.stringify(results);
      console.log(`results: ${resultsObj}`);
    }
  }, [results]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Image Recognition App</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <ImageUpload onImageUpload={handleImageUpload} />
        {(image || results || error) && (
          <button
            onClick={handleReset}
            className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Reset
          </button>
        )}
        <ResultsDisplay
          image={image}
          results={results}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
