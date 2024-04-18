// src/components/CallToAction.tsx
import React from 'react';

interface CallToActionProps {
  title: string;
  buttonText: string;
  onAction: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, buttonText, onAction }) => {
  return (
    <div className="call-to-action text-center p-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
       <button onClick={onAction} className="bg-blue-500 text-white py-2 px-4 mt-3 rounded hover:bg-blue-600" {...props}>
        {buttonText}
      </button>
    </div>
  );
};

export default CallToAction;
