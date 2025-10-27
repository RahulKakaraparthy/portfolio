import React from 'react';
import PageContainer from './PageContainer';

interface SkillCategory {
  title: string;
  skills: string[];
  icon?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    skills: [
      "Azure (Active Directory, Monitor, ACR)",
      "AWS (EC2, VPC, S3, IAM, RDS)",
      "Lambda Functions",
      "CloudWatch Monitoring",
      "Azure DevOps",
      "Cloud Security",
      "High Availability Design"
    ]
  },
  {
    title: "CI/CD & Automation",
    skills: [
      "Jenkins (Groovy DSL)",
      "GitLab CI/CD",
      "ArgoCD (GitOps)",
      "Helm Charts",
      "Nexus Repository",
      "Automated Testing",
      "Release Management"
    ]
  },
  {
    title: "Infrastructure & Tools",
    skills: [
      "Terraform",
      "Ansible",
      "CloudFormation",
      "HashiCorp Vault",
      "Infrastructure as Code",
      "Configuration Management",
      "Automation Scripts"
    ]
  },
  {
    title: "Containers & Orchestration",
    skills: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Operators",
      "Ingress Controllers",
      "RBAC",
      "Container Security"
    ]
  },
  {
    title: "Monitoring & Security",
    skills: [
      "ELK Stack",
      "Dynatrace",
      "Prometheus",
      "Grafana",
      "Azure Monitor",
      "SAML/OIDC",
      "Security Best Practices"
    ]
  },
  {
    title: "CI/CD & Release",
    skills: [
      "CircleCI optimization",
      "Artifact caching",
      "Test automation",
      "Canary deployments",
      "Pipeline metrics",
      "Custom orb development"
    ]
  },
  {
    title: "Observability",
    skills: [
      "Datadog dashboards",
      "OpenTelemetry",
      "Distributed tracing",
      "Custom metrics",
      "Alert routing",
      "Performance optimization"
    ]
  },
  {
    title: "Programming",
    skills: [
      "TypeScript/Node.js",
      "Python automation",
      "Bash scripting",
      "Go development",
      "React.js"
    ]
  }
];

const Skills = () => {
  return (
    <PageContainer>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-gray-300">Reduction in deployment time through optimized CI/CD pipelines</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
            <div className="text-gray-300">Reduction in deployment incidents with GitOps practices</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-gray-300">Reduction in MTTR with comprehensive observability</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-gray-300">Teams using custom Terraform modules and providers</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Skills;