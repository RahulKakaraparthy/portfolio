import React from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer – DevOps",
    company: "FIS Global",
    period: "Feb 2022 – Present",
    achievements: [
      "Designed and maintained CI/CD pipelines using Jenkins (Groovy DSL), ArgoCD, and Helm for automated microservice deployments",
      "Managed build processes with image scanning, signing, and versioned releases using Nexus and ACR",
      "Automated provisioning of Azure and AWS resources via Terraform with Ansible integration",
      "Integrated HashiCorp Vault for secure secret management and certificate rotation",
      "Developed Helm charts for environment-specific Kubernetes deployments",
      "Built Python automation tools for CI/CD pipeline health monitoring",
      "Set up centralized logging with ELK, Prometheus, and Dynatrace",
      "Mentored junior engineers and achieved 40% faster deployments"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Fidelity Investments",
    period: "Mar 2019 – Feb 2022",
    achievements: [
      "Built AWS-based CI/CD frameworks with Jenkins, Terraform, and Ansible",
      "Implemented GitOps workflows using ArgoCD for continuous delivery",
      "Automated infrastructure provisioning using Terraform modules",
      "Enhanced infrastructure compliance via IAM governance and monitoring",
      "Configured SAML/OIDC authentication with Okta",
      "Reduced release cycle time by 50% through pipeline automation"
    ]
  },
  {
    title: "Cloud Engineer",
    company: "Accenture",
    period: "Aug 2016 – Jan 2019",
    achievements: [
      "Migrated and automated enterprise infrastructure using Terraform, Jenkins, and Ansible",
      "Developed scripts for IAM audits and S3 lifecycle automation",
      "Created CloudFormation templates for EC2, RDS, and VPC provisioning",
      "Implemented application monitoring via CloudWatch and SNS alerting",
      "Supported hybrid identity federation using Keycloak and Okta integrations"
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-xl text-gray-400">{exp.company}</p>
                </div>
                <p className="text-lg text-blue-400">{exp.period}</p>
              </div>
              
              <ul className="list-disc list-inside space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;