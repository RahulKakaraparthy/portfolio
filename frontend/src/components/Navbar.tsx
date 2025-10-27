import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-slate-800/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-[#64ffda] font-mono text-xl font-bold tracking-wider">RK</Link>
          <div className="flex items-center space-x-10">
            <Link to="/" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Home</Link>
            <Link to="/experience" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Experience</Link>
            <Link to="/skills" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Skills</Link>
            <Link to="/projects" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
