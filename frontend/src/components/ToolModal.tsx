import React from 'react';

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: {
    name: string;
    description: string;
    details: string[];
  };
}

const ToolModal: React.FC<ToolModalProps> = ({ isOpen, onClose, tool }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-[#112240] rounded-lg p-8 w-full max-w-2xl mx-4 transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-[#64ffda] mb-4 font-mono">{tool.name}</h2>
        <p className="text-slate-300 mb-6">{tool.description}</p>
        
        <div className="space-y-4">
          {tool.details.map((detail, index) => (
            <div key={index} className="flex items-start">
              <span className="text-[#64ffda] mr-3 pt-1">▹</span>
              <span className="text-slate-300">{detail}</span>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="mt-8 px-6 py-3 border-[1.5px] border-[#64ffda] text-[#64ffda] rounded font-mono text-sm 
                   hover:bg-[#64ffda]/10 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ToolModal;