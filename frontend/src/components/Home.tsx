import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-400">
      {/* Navigation */}
      <nav className="fixed w-full z-10 bg-[#0a192f]/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-[#64ffda] font-mono text-xl font-bold">RK</Link>
            <div className="flex items-center space-x-8">
              <Link to="/experience" className="font-mono text-sm hover:text-[#64ffda] transition-colors group">
                <span className="text-[#64ffda] mr-1 font-normal">01.</span>
                <span className="group-hover:text-[#64ffda]">Experience</span>
              </Link>
              <Link to="/skills" className="font-mono text-sm hover:text-[#64ffda] transition-colors group">
                <span className="text-[#64ffda] mr-1 font-normal">02.</span>
                <span className="group-hover:text-[#64ffda]">Skills</span>
              </Link>
              <Link to="/projects" className="font-mono text-sm hover:text-[#64ffda] transition-colors group">
                <span className="text-[#64ffda] mr-1 font-normal">03.</span>
                <span className="group-hover:text-[#64ffda]">Projects</span>
              </Link>
              <a href="https://linkedin.com/in/rahul-kakaraparthy" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono text-sm 
                          hover:bg-[#64ffda]/10 transition-all duration-300 ease-in-out">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>

      <ThemeToggle />

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-40 pb-32">
        <div className="max-w-4xl animate-fadeIn">
          <h5 className="font-mono text-[#64ffda] mb-5 text-sm">Hi, my name is</h5>
          <h1 className="text-7xl font-bold text-slate-200 mb-4">Rahul Kakaraparthy.</h1>
          <h2 className="text-6xl font-bold text-slate-400 mb-8">I build reliable cloud infrastructure.</h2>
          
          <div className="max-w-xl mb-12">
            <p className="text-lg leading-relaxed text-slate-400">
              I'm a Senior DevOps Engineer specializing in building and scaling cloud infrastructure. 
              Currently focused on architecting robust Kubernetes platforms and implementing GitOps practices
              to streamline deployments and enhance system reliability.
            </p>
          </div>

          <a href="mailto:rahulganesh.kakaraparthy@gmail.com"
             className="inline-block px-7 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono text-sm
                        hover:bg-[#64ffda]/10 transition-all duration-300 ease-in-out">
            Get In Touch
          </a>
        </div>

        {/* Featured Section */}
        <div className="mt-32 max-w-4xl">
          <h3 className="flex items-center text-2xl text-slate-200 font-bold mb-8">
            <span className="font-mono text-[#64ffda] text-sm mr-2">01.</span>
            Featured Experience
          </h3>
          <div className="grid gap-6">
            <div className="p-8 bg-[#112240] rounded-lg hover:translate-y-[-4px] transition-all duration-300">
              <h4 className="text-xl font-bold text-slate-200 mb-2">Senior DevOps Engineer</h4>
              <p className="text-slate-400 mb-4">Led cloud infrastructure and DevOps initiatives for large-scale microservices architecture.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>Architected and managed AWS infrastructure supporting 200+ microservices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>Implemented GitOps practices reducing deployment time by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>Achieved 90% reduction in production incidents through automated testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 max-w-4xl">
          <h3 className="flex items-center text-2xl text-slate-200 font-bold mb-8">
            <span className="font-mono text-[#64ffda] text-sm mr-2">02.</span>
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>Kubernetes / EKS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>AWS Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>Terraform / IaC</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>ArgoCD / GitOps</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>Docker / Containers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>Python / Go / Shell</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-6">
        <p className="font-mono text-sm text-slate-400">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Home;