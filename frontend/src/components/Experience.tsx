import React from 'react';
import PageContainer from './PageContainer';

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
      "Designed and maintained CI/CD pipelines using Azure DevOps, Jenkins (Groovy DSL), and ArgoCD for automated deployments",
      "Implemented comprehensive security scanning using Veracode, Checkmarx, and CXOne for vulnerability detection",
      "Managed Azure Container Registry (ACR) with Trivy container scanning, signing, and versioned releases",
      "Implemented Azure Kubernetes Service (AKS) clusters with advanced networking and security features",
      "Automated provisioning of Azure resources (VNets, App Services, Functions) via Terraform and ARM templates",
      "Integrated Azure Key Vault and HashiCorp Vault for secrets management and certificate rotation",
      "Developed Azure DevOps pipelines and Helm charts for multi-environment Kubernetes deployments",
      "Set up Azure Monitor, Application Insights, and Log Analytics for comprehensive monitoring",
      "Achieved 40% faster deployments through Azure DevOps automation and container orchestration"
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
    <PageContainer>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#112240] rounded-lg p-6 hover:bg-[#112240]/70 transition-colors duration-300">
            <div className="mb-4">
              <h3 className="text-2xl text-slate-200 font-semibold">{exp.title}</h3>
              <p className="text-[#64ffda] font-mono">{exp.company}</p>
              <p className="text-slate-400 font-mono text-sm">{exp.period}</p>
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
    </PageContainer>
  );
};

export default Experience;