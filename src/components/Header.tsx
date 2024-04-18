// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  onToggleLanguage: () => void;  // Function to toggle language
}

const Header: React.FC<HeaderProps> = ({ onToggleLanguage }) => {
  return (
    <header className="header bg-blue-500 text-white p-4">
      <h1 className="text-3xl font-bold">Canales en Costa Rica – Your Next Investment Destination</h1>
      <p className="text-xl">Un proyecto único en la costa pacífico-central de Costa Rica</p>
      <nav>
        <ul className="flex justify-end space-x-4">
          <li><a href="#project-details">Project Details</a></li>
          <li><a href="#investments">Investment Opportunities</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <button onClick={onToggleLanguage}>EN/ES</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
