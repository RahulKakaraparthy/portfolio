import React, { useState } from 'react';
import Contact from './Contact';
import WorkflowDiagram from './WorkflowDiagram';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const description = "I'm a software engineer specializing in building exceptional cloud solutions and DevOps automation. Currently, I'm focused on building scalable, secure, and reliable infrastructure at Amazon Web Services.";
  return (
    <main className="min-h-screen selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      {/* Global starfield background renders via RootLayout */}
      {/* Global Navbar is rendered via the app layout */}

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
        <div className="mt-32 opacity-0 animate-[fadeIn_0.5s_ease-out_0.7s_forwards]">
          <h3 className="flex items-center text-2xl text-slate-200 font-semibold mb-4">
            <span className="font-mono text-[#64ffda] text-sm mr-2">04.</span>
            Why Hire Me?
          </h3>

          {/* Lead copy */}
          <div className="max-w-3xl mb-10">
            <h4 className="text-xl font-semibold text-[#64ffda] mb-2">A Foundation of Trust and Excellence</h4>
            <p className="text-slate-300">
              I am committed to delivering not just code, but value. My work is built on a foundation of reliability, quality,
              and a proven ability to solve complex problems with data-driven results.
            </p>
          </div>

          {/* Expandable image feature cards */}

          <WhyHireMeCards />
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

// --- WhyHireMeCards: extracted for cleaner JSX and to avoid inline hooks ---
const WhyHireMeCards: React.FC = () => {
  const [open, setOpen] = React.useState<number | null>(null);
  const cards = [
    {
      title: 'Reliability & Quality',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
      alt: 'Reliable cloud architecture',
      desc: 'Production-grade standards, clear SLOs, and robust CI/CD ensure consistent, dependable outcomes.',
      points: [
        '99.9%+ uptime track record',
        'Automated testing and deployment pipelines',
        'Continuous improvement and monitoring',
      ],
    },
    {
      title: 'Data‑Driven Results',
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop',
      alt: 'Data-driven dashboards',
      desc: 'Metrics first: measurable gains in deployment speed, incident reduction, and MTTR.',
      points: [
        '40–50% faster deployments',
        '90% fewer incidents',
        'Real-time dashboards and actionable insights',
      ],
    },
    {
      title: 'Secure, Scalable Cloud',
      img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
      alt: 'Secure and scalable cloud',
      desc: 'Defense-in-depth, IaC, and GitOps—built to scale with security as a default.',
      points: [
        'Zero-trust security model',
        'Infrastructure as Code (IaC) best practices',
        'Proactive compliance and audit readiness',
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className="group relative overflow-hidden rounded-xl bg-[#112240]/80 border border-slate-700/40 cursor-pointer transition-shadow hover:shadow-lg"
          tabIndex={0}
          onClick={() => setOpen(open === i ? null : i)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(open === i ? null : i); }}
          aria-expanded={open === i}
        >
          <div className="absolute inset-0">
            <img
              src={card.img}
              alt={card.alt}
              className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent" />
          </div>
          <div className="relative p-6 flex flex-col h-56 justify-end">
            <h5 className="text-lg font-semibold text-slate-200">{card.title}</h5>
            <p className="text-slate-400 text-sm mt-2">{card.desc}</p>
            <button
              className="mt-3 text-[#64ffda] text-xs font-mono underline underline-offset-2 focus:outline-none"
              tabIndex={-1}
              aria-label={open === i ? `Hide details for ${card.title}` : `Show details for ${card.title}`}
              onClick={e => { e.stopPropagation(); setOpen(open === i ? null : i); }}
            >
              {open === i ? 'Hide details' : 'Show details'}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={open !== i}
            >
              <ul className="pl-4 list-disc text-slate-300 text-xs space-y-2">
                {card.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;