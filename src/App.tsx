// src/App.tsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import './styles/main.css'; // Assuming your CSS file is located here

 const App: React.FC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
