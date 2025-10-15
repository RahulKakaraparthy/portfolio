import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image?: string;
}

const projects: Project[] = [
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
  {
    title: "CI/CD Pipeline Optimization",
    description: "Redesigned CI/CD pipelines with advanced caching and parallelization strategies for improved build times.",
    technologies: ["CircleCI", "Docker", "Node.js", "Python", "AWS"],
    achievements: [
      "70% reduction in build times",
      "Automated test environment provisioning",
      "Custom CircleCI orb development",
      "Integrated security scanning"
    ]
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Developed enterprise-scale Terraform modules and custom providers for standardized infrastructure deployment.",
    technologies: ["Terraform", "AWS", "Python", "Go", "GitOps"],
    achievements: [
      "50+ teams using custom modules",
      "Standardized infrastructure patterns",
      "Automated compliance checks",
      "Infrastructure drift detection"
    ]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
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
          ))}
        </div>

        {/* GitHub Portfolio Link */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/RahulKakaraparthy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;