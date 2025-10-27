import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  inline?: boolean; // when true, place button in normal flow to avoid overlap
}

const BackButton: React.FC<BackButtonProps> = ({ inline = false }) => {
  const navigate = useNavigate();

  const baseClasses = "px-4 py-2 font-mono text-sm text-[#64ffda] border border-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300 flex items-center gap-2";
  const fixedPos = "fixed top-28 right-4 sm:right-6 lg:right-12 z-50";
  const inlinePos = "relative ml-auto mb-4"; // sits at top of container without overlapping

  return (
    <button
      onClick={() => navigate(-1)}
      className={`${inline ? inlinePos : fixedPos} ${baseClasses}`}
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