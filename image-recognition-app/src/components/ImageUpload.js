import React, { useState } from "react";

function ImageUpload({ onImageUpload }) {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        console.log("file properties:", {
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: new Date(file.lastModified).toISOString(),
        });

        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
        setFileName(file.name);
      } else {
        onImageUpload(
          null,
          null,
          "Please upload a valid image file (e.g., PNG, JPG)."
        );
        setPreview(null);
        setFileName(null);
      }
    }
  };

  const handleConfirm = () => {
    if (preview && fileName) {
      onImageUpload(preview, fileName);
      setPreview(null);
      setFileName(null);
      // Removed URL.revokeObjectURL(preview) to keep the blob URL valid for App.js
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border rounded mb-2"
      />
      {preview && (
        <div className="mb-2">
          <img src={preview} alt="Preview" className="w-full h-auto rounded" />
          <button
            onClick={handleConfirm}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Confirm Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
