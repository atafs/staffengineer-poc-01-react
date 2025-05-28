# React Web Application

## Overview

This is a modern React web application built with Tailwind CSS for rapid, utility-first styling and React Router for multi-page navigation. The app includes a navigation bar and multiple pages (Home, Separador 2–6) as outlined in the project structure, providing a foundation for a scalable web application.

## Features

- **Tailwind CSS**: Utility-first CSS framework for fast and responsive styling.
- **React Router**: Client-side routing for seamless multi-page navigation.
- **Navigation Bar**: Links to all pages with hover effects, styled using Tailwind CSS.
- **Responsive Design**: Mobile-friendly layout using Tailwind's responsive utilities.
- **Modular Components**: Reusable React components for each page (Home, Separador 2–6).

## Project Structure

```
src/
├── components/
│   ├── Home.js          # Home page component
│   ├── Separador2.js    # Separador 2 page component
│   ├── Separador3.js    # Separador 3 page component
│   ├── Separador4.js    # Separador 4 page component
│   ├── Separador5.js    # Separador 5 page component
│   ├── Separador6.js    # Separador 6 page component
├── App.js               # Main app with routing setup
├── index.css            # Tailwind CSS imports and global styles
├── index.js             # Entry point
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Tailwind CSS**:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS**:
   Update `tailwind.config.js`:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Add to `src/index.css`:

   ```css
   @tailwind components;
   @tailwind utilities;
   ```

5. **Install React Router**:

   ```bash
   npm install react-router-dom
   ```

6. **Run the application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- Navigate to different pages using the navigation bar at the top.
- Each page (Home, Separador 2–6) is styled with Tailwind CSS and accessible via routes (`/`, `/separador2`, `/separador3`, etc.).
- Customize Tailwind classes in components or extend the theme in `tailwind.config.js` for specific styling needs.

## Development

- **Adding New Pages**: Create a new component in `src/components/`, then add a new `<Route>` in `src/App.js` and a corresponding `<Link>` in the navigation bar.
- **Styling**: Use Tailwind utility classes directly in JSX (e.g., `className="bg-gray-100 text-blue-600"`).
- **Routing**: Update routes in `src/App.js` for additional pages or nested routes.

## Deployment

To deploy the app:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build/` folder to a hosting service (e.g., Vercel, Netlify, or GitHub Pages).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
