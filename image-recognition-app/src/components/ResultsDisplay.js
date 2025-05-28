import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function ResultsDisplay({ image, results, isLoading, error }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image && results && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        results.forEach((result, index) => {
          ctx.strokeStyle = "#3B82F6";
          ctx.lineWidth = 2;
          ctx.strokeRect(50 + index * 100, 50, 100, 100);
          ctx.fillStyle = "#3B82F6";
          ctx.font = "16px Arial";
          ctx.fillText(
            `${result.object} (${result.confidence}%)`,
            50 + index * 100,
            40
          );
        });
      };
    }
  }, [image, results]);

  return (
    <div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {isLoading && <p className="text-gray-500">Processing...</p>}
      {image && (
        <div className="mb-4">
          <canvas ref={canvasRef} className="w-full h-auto rounded" />
        </div>
      )}
      {results && !isLoading && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Recognition Results</h2>
          <ul className="list-disc pl-5 mb-4">
            {results.map((result, index) => (
              <li key={index}>
                {result.object}: {result.confidence}% confidence
              </li>
            ))}
          </ul>
          <Bar
            data={{
              labels: results.map((result) => result.object),
              datasets: [
                {
                  label: "Confidence (%)",
                  data: results.map((result) => result.confidence),
                  backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
                  borderColor: ["#1E40AF", "#047857", "#B45309"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  title: { display: true, text: "Confidence (%)" },
                },
                x: { title: { display: true, text: "Detected Objects" } },
              },
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;
