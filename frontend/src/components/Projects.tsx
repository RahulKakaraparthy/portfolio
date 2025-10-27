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
  return (
    <PageContainer>
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