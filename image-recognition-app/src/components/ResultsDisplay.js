import React from "react";

function ResultsDisplay({ image, results, isLoading }) {
  return (
    <div>
      {image && (
        <div className="mb-4">
          <img src={image} alt="Uploaded" className="w-full h-auto rounded" />
        </div>
      )}
      {isLoading && <p className="text-gray-500">Processing...</p>}
      {results && !isLoading && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Recognition Results</h2>
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li key={index}>
                {result.object}: {result.confidence}% confidence
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;
