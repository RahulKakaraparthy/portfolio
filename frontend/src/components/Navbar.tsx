import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-slate-800/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-[#64ffda] font-mono text-xl font-bold tracking-wider">RK</Link>
          <div className="flex items-center space-x-10">
            <Link to="/experience" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">
              <span className="text-[#64ffda] mr-2 font-normal tracking-wider">01.</span>
              <span>Experience</span>
            </Link>
            <Link to="/skills" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">
              <span className="text-[#64ffda] mr-2 font-normal tracking-wider">02.</span>
              <span>Skills</span>
            </Link>
            <Link to="/projects" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">
              <span className="text-[#64ffda] mr-2 font-normal tracking-wider">03.</span>
              <span>Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
