import React, { useState } from 'react';
import { FaAws, FaDocker, FaGithub, FaJenkins, FaLinux, FaCloud } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiGrafana, SiPrometheus, SiElasticsearch, SiArgo, SiVault } from 'react-icons/si';
import ToolModal from './ToolModal';

interface Tool {
  icon: JSX.Element;
  name: string;
  description: string;
  details: string[];
}

const WorkflowDiagram = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const toolDetails: { [key: string]: { description: string; details: string[] } } = {
    "AWS": {
      description: "Amazon Web Services cloud infrastructure and services",
      details: [
        "Managed large-scale AWS infrastructure with multiple VPCs and Transit Gateways",
        "Implemented AWS Organizations for multi-account management",
        "Designed serverless architectures using Lambda and API Gateway",
        "Set up DR strategies with cross-region replication"
      ]
    },
    "Terraform": {
      description: "Infrastructure as Code automation tool",
      details: [
        "Developed reusable Terraform modules for standardized deployments",
        "Managed complex state files with remote backends and state locking",
        "Implemented custom providers for specific requirements",
        "Automated multi-cloud infrastructure provisioning"
      ]
    },
    "Ansible": {
      description: "Configuration management and automation platform",
      details: [
        "Created dynamic inventories for cloud-based infrastructure",
        "Developed custom Ansible roles for application deployment",
        "Implemented configuration management at scale",
        "Automated system patching and maintenance tasks"
      ]
    },
    "Linux": {
      description: "Core operating system and server management",
      details: [
        "Managed large-scale Linux server deployments",
        "Implemented security hardening and compliance measures",
        "Automated system maintenance and monitoring",
        "Developed shell scripts for process automation"
      ]
    },
    "Docker": {
      description: "Container platform for application packaging",
      details: [
        "Created optimized multi-stage Docker builds",
        "Implemented container security best practices",
        "Managed private container registries",
        "Developed CI/CD pipelines for container builds"
      ]
    },
    "ArgoCD": {
      description: "GitOps continuous delivery tool for Kubernetes",
      details: [
        "Implemented GitOps workflows for multiple environments",
        "Set up automated sync policies and drift detection",
        "Managed application rollouts and rollbacks",
        "Integrated with CI pipelines for automated deployments"
      ]
    },
    "Azure Repos": {
      description: "Source code management in Azure DevOps",
      details: [
        "Managed branching strategies and policies",
        "Implemented code review workflows",
        "Set up repository security and access controls",
        "Integrated with CI/CD pipelines"
      ]
    },
    "Azure Boards": {
      description: "Project management and tracking tool",
      details: [
        "Managed agile development processes",
        "Created custom dashboards and reports",
        "Integrated with CI/CD for work item tracking",
        "Automated status updates and notifications"
      ]
    },
    "Jenkins": {
      description: "Continuous Integration server",
      details: [
        "Developed complex pipelines using Groovy DSL",
        "Managed distributed build environments",
        "Implemented automated testing frameworks",
        "Created custom Jenkins plugins and shared libraries"
      ]
    },
    "CXOne": {
      description: "Security testing and vulnerability management",
      details: [
        "Integrated security scanning in CI/CD pipelines",
        "Managed vulnerability assessment workflows",
        "Generated compliance reports",
        "Implemented security gates in deployment process"
      ]
    },
    "Trivy": {
      description: "Container and filesystem vulnerability scanner",
      details: [
        "Implemented container image scanning in CI/CD",
        "Set up vulnerability databases and updates",
        "Created custom scanning policies",
        "Integrated with container registry workflows"
      ]
    },
    "Azure Monitor": {
      description: "Comprehensive monitoring solution",
      details: [
        "Set up end-to-end monitoring for cloud resources",
        "Created custom dashboards and alerts",
        "Implemented auto-scaling rules",
        "Managed log analytics and metrics collection"
      ]
    },
    "App Insights": {
      description: "Application performance monitoring",
      details: [
        "Implemented application telemetry",
        "Created custom metrics and KPIs",
        "Set up availability tests",
        "Managed performance monitoring and alerts"
      ]
    },
    "Log Analytics": {
      description: "Log management and analysis platform",
      details: [
        "Created custom log queries and workbooks",
        "Set up log collection from multiple sources",
        "Implemented log-based alerting",
        "Managed log retention and archival policies"
      ]
    },
    "Azure AD": {
      description: "Identity and access management",
      details: [
        "Implemented role-based access control",
        "Managed service principals and managed identities",
        "Set up conditional access policies",
        "Integrated with on-premises Active Directory"
      ]
    },
    "Azure": {
      description: "Primary cloud platform for enterprise infrastructure and services",
      details: [
        "Implemented complex networking with VNets, NSGs, and Azure Firewall",
        "Managed scalable App Services and Azure Functions for microservices",
        "Automated resource provisioning using ARM templates and Terraform",
        "Implemented robust security measures with Azure AD and RBAC"
      ]
    },
    "AKS": {
      description: "Azure Kubernetes Service for container orchestration",
      details: [
        "Designed and deployed multi-node AKS clusters with advanced networking",
        "Implemented pod security policies and network policies",
        "Set up cluster autoscaling and node pools optimization",
        "Managed cluster upgrades and patch management"
      ]
    },
    "ACR": {
      description: "Azure Container Registry for secure image management",
      details: [
        "Implemented vulnerability scanning for container images",
        "Set up CI/CD pipelines with automated image builds and testing",
        "Configured geo-replication for improved availability",
        "Managed access control and image signing policies"
      ]
    },
    "Key Vault": {
      description: "Centralized secrets and certificate management",
      details: [
        "Implemented automated certificate rotation and management",
        "Integrated with AKS for secure pod identity",
        "Set up disaster recovery and backup policies",
        "Managed access policies and audit logging"
      ]
    },
    "Azure Pipelines": {
      description: "CI/CD pipeline automation in Azure DevOps",
      details: [
        "Created multi-stage pipelines for build, test, and deployment",
        "Implemented infrastructure as code deployments",
        "Set up automated testing and security scanning",
        "Managed release approvals and gates"
      ]
    },
    "Veracode": {
      description: "Static and dynamic security analysis",
      details: [
        "Integrated SAST scanning in CI/CD pipelines",
        "Implemented security policy enforcement",
        "Managed vulnerability remediation workflows",
        "Generated compliance reports for audits"
      ]
    },
    "Checkmarx": {
      description: "Application security testing platform",
      details: [
        "Automated code security scanning in development lifecycle",
        "Created custom security rules and policies",
        "Integrated with Azure DevOps for issue tracking",
        "Managed false positive suppression and verification"
      ]
    },
    "Kubernetes": {
      description: "Container orchestration and management",
      details: [
        "Designed highly available cluster architectures",
        "Implemented custom controllers and operators",
        "Managed service mesh with Istio",
        "Set up GitOps workflows with ArgoCD"
      ]
    }
  };
  const tools = [
    {
      category: "Azure Cloud Services",
      items: [
        { icon: <FaCloud />, name: "Azure" },
        { icon: <SiKubernetes />, name: "AKS" },
        { icon: <FaDocker />, name: "ACR" },
        { icon: <SiVault />, name: "Key Vault" }
      ]
    },
    {
      category: "Infrastructure & Cloud",
      items: [
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <SiAnsible />, name: "Ansible" },
        { icon: <FaLinux />, name: "Linux" }
      ]
    },
    {
      category: "Containerization & Orchestration",
      items: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiArgo />, name: "ArgoCD" }
      ]
    },
    {
      category: "CI/CD & DevOps",
      items: [
        { icon: <FaCloud />, name: "Azure Pipelines" },
        { icon: <FaCloud />, name: "Azure Repos" },
        { icon: <FaCloud />, name: "Azure Boards" },
        { icon: <FaJenkins />, name: "Jenkins" }
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        { icon: <SiVault />, name: "Veracode" },
        { icon: <SiVault />, name: "Checkmarx" },
        { icon: <SiVault />, name: "CXOne" },
        { icon: <FaCloud />, name: "Trivy" }
      ]
    },
    {
      category: "Monitoring & Security",
      items: [
        { icon: <FaCloud />, name: "Azure Monitor" },
        { icon: <SiGrafana />, name: "App Insights" },
        { icon: <SiPrometheus />, name: "Log Analytics" },
        { icon: <SiVault />, name: "Azure AD" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-[#0a192f]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-slate-200 mb-12 text-center">
          DevOps Workflow & Tools
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((category, idx) => (
            <div 
              key={idx}
              className="bg-[#112240] rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-[#64ffda] font-mono text-lg mb-6">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tool, toolIdx) => (
                  <button 
                    key={toolIdx}
                    onClick={() => toolDetails[tool.name] && setSelectedTool({ ...tool, ...toolDetails[tool.name] })}
                    className="flex flex-col items-center justify-center p-4 bg-[#1b2d4d] rounded-lg w-full
                             hover:bg-[#233554] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-4xl text-[#64ffda] group-hover:text-[#64ffda]/80 mb-3 transition-colors duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-slate-300 text-sm font-mono group-hover:text-[#64ffda] transition-colors duration-300">
                      {tool.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Steps */}
        <div className="mt-16">
          <div className="relative">
            <div className="h-1 bg-[#64ffda]/20 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
            <div className="relative z-10 flex justify-between">
              {[
                "Infrastructure Planning",
                "Code & Build",
                "Test & Deploy",
                "Monitor & Scale"
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#64ffda] flex items-center justify-center mb-4">
                    <span className="text-[#0a192f] font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-slate-300 text-sm font-mono text-center px-4">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              stat: "99.99%",
              label: "Infrastructure Uptime",
            },
            {
              stat: "40%",
              label: "Faster Deployments",
            },
            {
              stat: "50%",
              label: "Cost Optimization",
            }
          ].map((achievement, idx) => (
            <div 
              key={idx}
              className="bg-[#112240] rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#64ffda] text-4xl font-bold mb-2">
                {achievement.stat}
              </div>
              <div className="text-slate-300 font-mono text-sm">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Details Modal */}
      {selectedTool && (
        <ToolModal
          isOpen={true}
          onClose={() => setSelectedTool(null)}
          tool={selectedTool}
        />
      )}
    </div>
  );
};

export default WorkflowDiagram;