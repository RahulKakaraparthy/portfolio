import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import WorkflowDiagram from './WorkflowDiagram';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const description = "I'm a software engineer specializing in building exceptional cloud solutions and DevOps automation. Currently, I'm focused on building scalable, secure, and reliable infrastructure at Amazon Web Services.";
  return (
    <main className="min-h-screen bg-[#0a192f] selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      {/* Shooting stars background (non-interactive, behind content) */}
            <div className="shooting-stars">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 90}%`,
              left: '-100px',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${1 + Math.random() * 1.5}s`
            }}
          />
        ))}
      </div>
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
              {/* Connect button removed per request */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="relative flex items-start justify-between">
          {/* Text Content */}
          <div className="space-y-5 max-w-2xl">
            <div className="space-y-3">
              <h1 className="font-mono text-[#64ffda] text-sm sm:text-base">Hi, my name is</h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-slate-300">Rahul Kakaraparthy.</h2>
              <h3 className="text-4xl sm:text-7xl font-bold text-slate-500">I build things for the cloud.</h3>
            </div>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl">{description}</p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="px-7 py-4 font-mono text-sm text-[#64ffda] border border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300">
                Get In Touch
              </button>
              <PDFDownloadLink 
                document={<ResumePDF />}
                fileName="Rahul_Kakaraparthy_Resume.pdf"
                className="px-7 py-4 font-mono text-sm text-[#64ffda] border border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading...' : 'Download Resume'
                }
              </PDFDownloadLink>
            </div>
          </div>

          {/* Animation Container */}
          <div className="hidden lg:block relative w-[420px] h-[280px] rounded-lg overflow-hidden">
            <img
              src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
              alt="Developer coding animation"
              loading="lazy"
              aria-hidden="true"
              className="w-full h-full object-cover rounded-lg pointer-events-none"
            />
            {/* Overlay Screens */}
            <div className="absolute top-0 right-0 p-4 grid grid-cols-1 gap-4">
              <div className="w-32 h-24 bg-slate-800/80 backdrop-blur rounded-lg border border-slate-700/50 shadow-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
                    alt="Monitoring dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-32 h-24 bg-slate-800/80 backdrop-blur rounded-lg border border-slate-700/50 shadow-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
                    alt="Data visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-32 h-24 bg-slate-800/80 backdrop-blur rounded-lg border border-slate-700/50 shadow-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="https://media.giphy.com/media/l378c04F2fjeZ7vH2/giphy.gif"
                    alt="Cloud infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-6 lg:px-12">
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
      </section>

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