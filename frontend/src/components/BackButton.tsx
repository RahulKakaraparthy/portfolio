import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-28 left-6 lg:left-12 px-4 py-2 font-mono text-sm text-[#64ffda] border border-[#64ffda] rounded-lg 
                 hover:bg-[#64ffda]/10 transition-colors duration-300 flex items-center gap-2 z-50"
      aria-label="Go back"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transform rotate-180"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      Back
    </button>
  );
};

export default BackButton;