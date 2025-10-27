import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import WorkflowDiagram from './WorkflowDiagram';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#0a192f] selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      {/* Navigation */}
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
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-5 py-2.5 border-[1.5px] border-[#64ffda] text-[#64ffda] rounded font-mono text-sm 
                         hover:bg-[#64ffda]/10 transition-all duration-300 ease-in-out"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-12 pt-40 pb-32">
        <div className="max-w-5xl opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]">
          <p className="font-mono text-[#64ffda] mb-6 text-sm tracking-wider">Hi, my name is</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-slate-200 mb-4 leading-tight">
            Rahul Kakaraparthy.
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-400 mb-8 leading-tight">
            I build reliable cloud infrastructure.
          </h2>
          
          <div className="max-w-xl mb-12">
            <p className="text-lg text-slate-400 leading-relaxed">
              I'm a Senior DevOps Engineer specializing in building and scaling cloud infrastructure. 
              Currently focused on architecting robust Kubernetes platforms and implementing GitOps practices
              to streamline deployments and enhance system reliability.
            </p>
          </div>

          <a href="mailto:rahulganesh.kakaraparthy@gmail.com"
             className="inline-flex items-center px-8 py-4 border-[1.5px] border-[#64ffda] text-[#64ffda] 
                        rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-all duration-300 ease-in-out">
            Get In Touch
          </a>
        </div>

        {/* Featured Section */}
        <div className="mt-32 max-w-4xl opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
          <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
            <span className="font-mono text-[#64ffda] text-sm mr-2">01.</span>
            Featured Experience
          </h3>
          <div className="grid gap-6">
            <div className="p-8 bg-[#112240] rounded-lg hover:translate-y-[-4px] transition-all duration-300">
              <h4 className="text-xl font-semibold text-slate-200 mb-3">Senior DevOps Engineer</h4>
              <p className="text-slate-400 mb-6">Led cloud infrastructure and DevOps initiatives for large-scale microservices architecture.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">Architected and managed AWS infrastructure supporting 200+ microservices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">Implemented GitOps practices reducing deployment time by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">Achieved 90% reduction in production incidents through automated testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 max-w-4xl opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">
          <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
            <span className="font-mono text-[#64ffda] text-sm mr-2">02.</span>
            Core Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-xl">
            <div className="flex items-center">
              <span className="text-[#64ffda] mr-3">▹</span>
              <span className="text-slate-300">Kubernetes / EKS</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#64ffda] mr-3">▹</span>
              <span className="text-slate-300">AWS Infrastructure</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#64ffda] mr-3">▹</span>
              <span className="text-slate-300">Terraform / IaC</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#64ffda] mr-3">▹</span>
              <span className="text-slate-300">ArgoCD / GitOps</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#64ffda] mr-3">▹</span>
              <span className="text-slate-300">Docker / Containers</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#64ffda] mr-3">▹</span>
              <span className="text-slate-300">Python / Go / Shell</span>
            </div>
          </div>
        </div>

        {/* Tool Stack & Workflow Section */}
        <div className="mt-32 opacity-0 animate-[fadeIn_0.5s_ease-out_0.7s_forwards]">
          <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
            <span className="font-mono text-[#64ffda] text-sm mr-2">03.</span>
            Tool Stack & Workflow
          </h3>
          <WorkflowDiagram />
        </div>

        {/* Why Hire Me Section */}
        <div className="mt-32 max-w-4xl opacity-0 animate-[fadeIn_0.5s_ease-out_0.7s_forwards]">
          <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-8">
            <span className="font-mono text-[#64ffda] text-sm mr-2">04.</span>
            Why Hire Me
          </h3>
          
          <div className="space-y-6">
            <div className="bg-[#112240] rounded-lg p-8">
              <h4 className="text-xl font-semibold text-[#64ffda] mb-4">Technical Excellence & Innovation</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">
                    Expert in cloud-native architecture with deep expertise in Azure/AWS ecosystems, implementing scalable solutions using AKS/EKS, containerization, and microservices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">
                    Advanced security implementation experience with Veracode, Checkmarx, and CXOne for vulnerability scanning, alongside Azure Key Vault and HashiCorp Vault for secrets management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">
                    Proven track record of optimizing CI/CD pipelines, reducing deployment times by 40-50% through automation and GitOps practices
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#112240] rounded-lg p-8">
              <h4 className="text-xl font-semibold text-[#64ffda] mb-4">Leadership & Problem Solving</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">
                    Successfully led infrastructure modernization initiatives, mentored junior engineers, and implemented best practices across teams
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">
                    Demonstrated ability to design and implement complex cloud architectures while maintaining high availability and security standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64ffda] mr-3 pt-1">▹</span>
                  <span className="text-slate-300">
                    Strong focus on infrastructure security, compliance, and cost optimization through automated governance and monitoring
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.7s_forwards]">
        <p className="font-mono text-sm text-slate-400">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </main>
  );
};

export default Home;