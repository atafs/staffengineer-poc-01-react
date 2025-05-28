import React from "react";

function ImageUpload({ onImageUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      onImageUpload(imageUrl);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default ImageUpload;
