// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'; // Importing global styles
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig'; // Make sure to export your config properly

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
