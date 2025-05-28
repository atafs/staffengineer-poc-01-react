import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import ResultsDisplay from "./ResultsDisplay";

function Home() {
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

  // Define sections for navigation (excluding Section 1, which stays on Home)
  const navSections = [
    { title: "Section 2: Feature Overview", path: "/separador2" },
    { title: "Section 3: Technical Details", path: "/separador3" },
    { title: "Section 4: Use Cases", path: "/separador4" },
    { title: "Section 5: Future Enhancements", path: "/separador5" },
    { title: "Section 6: Feedback", path: "/separador6" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Section 1: Image Recognition App */}
        <section className="mb-6 bg-white p-6 rounded-lg shadow-md w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Section 1: Image Recognition App
          </h2>
          <h1 className="text-3xl font-bold mb-6 text-center">Plugin</h1>
          <div className="w-full max-w-md bg-blue-200 p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
            <div className="w-full flex justify-center">
              <ImageUpload onImageUpload={handleImageUpload} />
            </div>
            {(image || results || error) && (
              <button
                onClick={handleReset}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-auto"
              >
                Reset
              </button>
            )}
            <div className="w-full flex justify-center">
              <ResultsDisplay
                image={image}
                results={results}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        </section>

        {/* Navigation Links for Other Sections */}
        <section className="mb-6 bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Explore More
          </h2>
          <ul className="space-y-2 flex flex-col items-center">
            {navSections.map((section, index) => (
              <li key={index}>
                <NavLink
                  to={section.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 underline text-center"
                      : "text-blue-500 hover:text-blue-700 text-center"
                  }
                >
                  {section.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
