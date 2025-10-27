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
    description: `A modern, full-stack portfolio website built with a DevOps-first mindset.\n\n**DevOps Deployment Overview:**\n- Source code is managed on GitHub.\n- On every push to main, GitHub Actions CI/CD pipeline is triggered.\n- Frontend (React/Vite/Tailwind) is built and deployed to GitHub Pages (static hosting).\n- Backend (Node.js/Express) is containerized with Docker and can be deployed to any Docker-compatible server.\n- Nginx is used for static file serving and reverse proxy.\n- Docker Compose orchestrates multi-container local/prod environments.\n- All builds, tests, and deployments are automated.\n\n**See the DevOps architecture diagram below.**`,
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
      "Automated CI/CD with GitHub Actions",
      "Frontend deployed to GitHub Pages",
      "Backend containerized and ready for cloud/server deployment",
      "Infrastructure as Code with Docker Compose",
      "Zero-downtime deploys and fast rollbacks",
      "Live project updates via main branch push"
    ],
    image: "/portfolio-devops-architecture.mmd"
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
  // If the first project is the portfolio, show the DevOps architecture diagram at the top
  const portfolioProject = projects[0];
  return (
    <PageContainer>
      {portfolioProject && portfolioProject.title.includes('Portfolio') && portfolioProject.image && (
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-200 mb-4 flex items-center gap-3">
            <span>DevOps Architecture Diagram</span>
            <span role="img" aria-label="diagram">⚙️</span>
          </h2>
          {/* Mermaid diagram embed (requires mermaid.js or markdown renderer) */}
          <div className="w-full max-w-3xl mx-auto rounded-lg border border-slate-700 bg-[#0a192f] p-4 shadow-lg overflow-x-auto">
            <pre className="mermaid text-sm" style={{ background: 'none', color: '#64ffda' }}>{`
graph TD
    A[Developer Pushes to GitHub] -->|CI Trigger| B[GitHub Actions CI/CD]
    B --> C[Build Frontend (Vite/React)]
    B --> D[Build Backend (Node.js/Express)]
    C --> E[Docker Build Frontend Image]
    D --> F[Docker Build Backend Image]
    E --> G[Push Frontend Image to Registry]
    F --> H[Push Backend Image to Registry]
    G --> I[Deploy Frontend to GitHub Pages]
    H --> J[Deploy Backend to Server (Docker Compose)]
    I --> K[User Accesses Portfolio Website]
    J --> K
`}</pre>
            <div className="text-xs text-slate-400 mt-2">(If diagram does not render, view <a href="https://github.com/RahulKakaraparthy/portfolio/blob/main/frontend/public/portfolio-devops-architecture.mmd" className="underline text-[#64ffda]" target="_blank" rel="noopener noreferrer">raw diagram</a>.)</div>
          </div>
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