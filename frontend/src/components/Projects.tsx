import React from 'react';
import PageContainer from './PageContainer';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio (This Site)",
    description: `A modern, full-stack portfolio website showcasing my skills, experience, and projects. Built with React, TypeScript, Tailwind CSS, and Node.js, it features a custom animated starfield background, interactive sections, and a CI/CD pipeline for automated deployment.\n\n**Architecture diagram available at the top of this page.**`,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Docker",
      "Nginx",
      "GitHub Actions"
    ],
    achievements: [
      "Custom animated starfield and interactive UI",
      "Modular, reusable React component architecture",
      "Automated CI/CD with GitHub Actions and Docker Compose",
      "Frontend deployed to GitHub Pages, backend containerized",
      "Responsive design and accessibility best practices",
      "Live project updates via main branch push"
    ],
    image: "https://raw.githubusercontent.com/RahulKakaraparthy/portfolio/main/README-architecture.png"
  },
  {
    title: "Enterprise Kubernetes Platform",
    description: "Designed and implemented a multi-tenant Kubernetes platform supporting 200+ microservices with advanced GitOps workflows.",
    technologies: ["EKS", "ArgoCD", "Terraform", "Istio", "Datadog"],
    achievements: [
      "90% reduction in deployment incidents",
      "Automated infrastructure provisioning",
      "Implemented comprehensive observability",
      "Custom operator development"
    ]
  },
  // ... other projects
];

const Projects = () => {
  // If the first project is the portfolio, show the architecture diagram at the top
  const portfolioProject = projects[0];
  return (
    <PageContainer>
      {portfolioProject && portfolioProject.title.includes('Portfolio') && portfolioProject.image && (
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-200 mb-4 flex items-center gap-3">
            <span>Portfolio Architecture Diagram</span>
            <span role="img" aria-label="diagram">🗂️</span>
          </h2>
          <img
            src={portfolioProject.image}
            alt="Portfolio Architecture Diagram"
            className="w-full max-w-3xl rounded-lg border border-slate-700 mx-auto shadow-lg"
            style={{ background: '#0a192f' }}
          />
        </div>
      )}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#112240] rounded-lg p-6 hover:bg-[#112240]/70 transition-colors duration-300">
            <div className="space-y-4">
              {/* Title */}
              <h3 className="text-2xl text-slate-200 font-semibold">{project.title}</h3>
              {/* Description */}
              <p className="text-slate-400" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm font-mono text-[#64ffda] bg-[#64ffda]/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Projects;