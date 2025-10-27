import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-slate-800/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-[#64ffda] font-mono text-xl font-bold tracking-wider">RK</Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link to="/" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Home</Link>
            <Link to="/experience" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Experience</Link>
            <Link to="/skills" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Skills</Link>
            <Link to="/projects" className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300">Projects</Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-[#64ffda] hover:bg-slate-800/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a192f] focus:ring-[#64ffda]"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon */}
            <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile panel */}
      <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} md:hidden border-t border-slate-800/40 bg-[#0a192f]/95 backdrop-blur-md`}>
        <div className="px-4 sm:px-6 py-4 space-y-3">
          <Link onClick={() => setOpen(false)} to="/" className="block font-mono text-sm text-slate-300 hover:text-[#64ffda]">Home</Link>
          <Link onClick={() => setOpen(false)} to="/experience" className="block font-mono text-sm text-slate-300 hover:text-[#64ffda]">Experience</Link>
          <Link onClick={() => setOpen(false)} to="/skills" className="block font-mono text-sm text-slate-300 hover:text-[#64ffda]">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/projects" className="block font-mono text-sm text-slate-300 hover:text-[#64ffda]">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
