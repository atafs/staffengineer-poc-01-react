# Image Recognition PoC

A single-page React application that simulates image recognition capabilities, allowing users to upload an image and view mock object detection results. Built as a 15-minute challenge with enhancements for improved usability and realism.

## Features

- **Image Upload**: Upload images (PNG, JPG) with validation for valid image types.
- **Image Preview**: Preview the uploaded image before confirming, enhancing user control.
- **Mock API**: Simulates object detection with dynamic results based on the uploaded file name (e.g., "fruit" or "car").
- **Results Display**: Shows detected objects with confidence percentages in a list and a bar chart.
- **Bounding Boxes**: Overlays mock bounding boxes on the image to visualize detected objects.
- **Reset Functionality**: Clears the current image and results to start over.
- **Loading State**: Displays a "Processing..." message during the mock API call.
- **Error Handling**: Alerts users if an invalid file is uploaded.

## Technologies

- **React**: Component-based UI with Create React App.
- **Tailwind CSS**: Styling via CDN for simplicity.
- **JavaScript**: Logic for mock API and state management.
- **Chart.js** (optional): For bar chart visualization of confidence levels.
- **Canvas API**: For rendering mock bounding boxes.

## Setup

1. **Prerequisites**:
   - Node.js (v16 or higher) installed.
2. **Clone the Repository** (or create a new project):
   ```bash
   npx create-react-app image-recognition-app
   cd image-recognition-app
   ```
3. **Install Chart.js (optional, for bar chart)**:
   ```bash
   npm install chart.js react-chartjs-2
   ```
4. **Add Tailwind CSS**:
   - In `public/index.html`, add:
     ```html
     <script src="https://cdn.tailwindcss.com"></script>
     ```
5. **Replace Files**:
   - Use the provided `src/App.js`, `src/components/ImageUpload.js`, and `src/components/ResultsDisplay.js` (see source code).
6. **Run the App**:
   ```bash
   npm start
   ```
   - The app runs at `http://localhost:3000`.

## Usage

1. **Upload an Image**:
   - Click "Choose File" to select an image (PNG, JPG).
   - Preview the image and click "Confirm Upload".
2. **View Results**:
   - After a 1-second "processing" delay, see mock detection results (e.g., "Apple: 95% confidence") and a bar chart.
   - Bounding boxes are drawn over the image to simulate object detection.
3. **Reset**:
   - Click the "Reset" button to clear the image and results.
4. **Error Handling**:
   - Invalid files (e.g., non-images) trigger an alert.

## File Structure

```
image-recognition-app/
├── public/
│   └── index.html          # Includes Tailwind CSS CDN
├── src/
│   ├── components/
│   │   ├── ImageUpload.js  # Image upload and preview component
│   │   └── ResultsDisplay.js # Results list, chart, and bounding boxes
│   └── App.js              # Main app with state and mock API
└── README.md               # This file
```

## Enhancements

- **Error Handling**: Validates image file types and shows user-friendly alerts.
- **Dynamic Mock API**: Varies results based on file name (e.g., "fruit" vs. "car").
- **Image Preview**: Allows users to confirm the image before processing.
- **Bar Chart**: Visualizes confidence levels using Chart.js (optional).
- **Reset Button**: Clears state for new uploads.
- **Bounding Boxes**: Draws mock bounding boxes on the image using Canvas API.

## Notes

- Built for a 15-minute challenge, with enhancements taking ~10-20 minutes each.
- No back-end or real API integration; uses mock data for simplicity.
- Chart.js requires additional installation; skip if not needed.
- Bounding box coordinates are hardcoded for the PoC.

## Future Improvements

- Integrate a real image recognition API (e.g., Neurolabs.ai).
- Add drag-and-drop image upload.
- Enhance bounding box accuracy with dynamic coordinates.
- Improve accessibility (e.g., ARIA labels, keyboard navigation).
