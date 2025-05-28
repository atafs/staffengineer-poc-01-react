import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import ResultsDisplay from "./ResultsDisplay";

function MainContent() {
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

  // Define sections, with Section 1 containing the image recognition UI
  const sections = [
    {
      title: "Section 1: Image Recognition App",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-6">Plugin</h1>
          <div className="w-full max-w-md bg-blue-200 p-6 rounded-lg shadow-md mb-8">
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
        </>
      ),
    },
    {
      title: "Section 2: Feature Overview",
      content: "Overview of the image recognition features and capabilities.",
    },
    {
      title: "Section 3: Technical Details",
      content: "Details about the mock API and React architecture.",
    },
    {
      title: "Section 4: Use Cases",
      content:
        "Potential use cases for image recognition in real-world applications.",
    },
    {
      title: "Section 5: Future Enhancements",
      content:
        "Planned improvements, such as real API integration and advanced UI.",
    },
    {
      title: "Section 6: Feedback",
      content: "How to provide feedback for this PoC.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Render all sections */}
      <div className="w-full max-w-2xl">
        {sections.map((section, index) => (
          <section
            key={index}
            className="mb-6 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            {typeof section.content === "string" ? (
              <p className="text-gray-700">{section.content}</p>
            ) : (
              section.content
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
