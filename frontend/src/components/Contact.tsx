import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/rahul-kakaraparthy-782437138",
      label: "Connect on LinkedIn"
    },
    {
      icon: <BsTelephoneFill className="w-5 h-5" />,
      text: "+1 647-739-5277",
      url: "tel:+16477395277",
      label: "Call me"
    },
    {
      icon: <MdEmail className="w-6 h-6" />,
      text: "rahulganesh.kakaraparthy@gmail.com",
      url: "mailto:rahulganesh.kakaraparthy@gmail.com",
      label: "Send me an email"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
         onClick={onClose}>
      <div className="bg-[#112240] rounded-lg p-6 w-full max-w-md mx-4"
           onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-slate-200 mb-6 font-mono">Let's Connect</h2>
        
        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-4 p-4 rounded-lg bg-[#1b2d4d] hover:bg-[#233554] 
                       transition-all duration-300 group"
              aria-label={link.label}
            >
              <div className="text-[#64ffda] group-hover:text-[#64ffda]/80 transition-colors duration-300">
                {link.icon}
              </div>
              <span className="text-slate-300 group-hover:text-[#64ffda] transition-colors duration-300">
                {link.text}
              </span>
            </a>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 w-full px-6 py-3 border-[1.5px] border-[#64ffda] text-[#64ffda] 
                   rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Contact;