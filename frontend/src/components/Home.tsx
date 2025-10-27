import React from 'react';
import { Link } from 'react-router-dom';

import { ThemeToggle } from './ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-slate-400 transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed w-full z-10 bg-light-primary/90 dark:bg-dark-primary/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-[#64ffda] font-mono text-xl">RK</Link>
            <div className="flex items-center space-x-8">
              <Link to="/experience" className="font-mono text-sm hover:text-[#64ffda] transition-colors">
                <span className="text-[#64ffda]">01.</span> Experience
              </Link>
              <Link to="/skills" className="font-mono text-sm hover:text-[#64ffda] transition-colors">
                <span className="text-[#64ffda]">02.</span> Skills
              </Link>
              <Link to="/projects" className="font-mono text-sm hover:text-[#64ffda] transition-colors">
                <span className="text-[#64ffda]">03.</span> Projects
              </Link>
              <a href="https://linkedin.com/in/rahul-kakaraparthy" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>

      <ThemeToggle />

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="font-mono text-[#64ffda] mb-5 text-sm">Hi, my name is</div>
          <h1 className="text-7xl font-bold text-slate-200 mb-4">Rahul Kakaraparthy.</h1>
          <h2 className="text-6xl font-bold text-slate-400 mb-8">I build reliable cloud infrastructure.</h2>
          
          <div className="max-w-xl mb-12">
            <p className="text-lg leading-relaxed">
              I'm a DevOps Engineer specializing in building and scaling cloud infrastructure. 
              With 8+ years of experience, I focus on Kubernetes orchestration, AWS architecture, 
              and implementing robust GitOps practices.</p>
          </div>

          {/* Featured Section */}
          <div className="space-y-20">
            <section>
              <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
                <span className="font-mono text-[#64ffda] text-sm mr-2">01.</span>
                Featured Experience
              </h3>
              <div className="grid gap-6 relative">
                <div className="relative bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-slate-200">Senior DevOps Engineer</h4>
                    <span className="text-[#64ffda] font-mono text-sm">2021 — Present</span>
                  </div>
                  <p className="mb-4">Led cloud infrastructure and DevOps initiatives for large-scale microservices architecture:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Architected and managed AWS infrastructure supporting 200+ microservices
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Implemented GitOps practices reducing deployment time by 60%
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Achieved 90% reduction in production incidents through automated testing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
                <span className="font-mono text-[#64ffda] text-sm mr-2">02.</span>
                Core Technologies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Kubernetes / EKS
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      AWS Cloud Infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Terraform / Infrastructure as Code
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      ArgoCD / GitOps
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Docker / Containerization
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      Python / Go / Shell Scripting
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
                <span className="font-mono text-[#64ffda] text-sm mr-2">03.</span>
                Get In Touch
              </h3>
              <div className="max-w-xl">
                <p className="mb-8">
                  I'm always interested in new opportunities and collaborations. Whether you have a question
                  or just want to say hello, feel free to reach out!
                </p>
                <a href="mailto:rahulganesh.kakaraparthy@gmail.com"
                   className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono
                            hover:bg-[#64ffda]/10 transition-colors">
                  Say Hello
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;