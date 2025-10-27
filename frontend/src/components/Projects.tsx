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
      </div>
    </div>
  );
};

export default Projects;