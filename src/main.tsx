
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error handler function
const errorHandler = (error: Error) => {
  console.error("React error:", error);
  // You could add more error reporting functionality here
};

// Safe render function with error handling
const safeRender = () => {
  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("Root element not found");
      return;
    }
    
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    errorHandler(error as Error);
  }
};

// Import React to handle errors safely
import React from 'react';

// Execute the render function
safeRender();
