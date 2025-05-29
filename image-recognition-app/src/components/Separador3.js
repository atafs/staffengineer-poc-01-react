import React from "react";
import { useNavigate } from "react-router-dom";

const Separador3 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <section className="mb-6 bg-white p-6 rounded-lg shadow-md w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-center">Section 3</h2>
          <p className="text-gray-700 text-center">
            Overview of the image recognition features and capabilities.
          </p>
          <button
            onClick={handleBack}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-auto"
          >
            Back to Home
          </button>
        </section>
      </div>
    </div>
  );
};

export default Separador3;
