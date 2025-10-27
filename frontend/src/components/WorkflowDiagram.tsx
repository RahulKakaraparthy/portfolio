import React from 'react';
import { FaAws, FaDocker, FaGithub, FaJenkins, FaLinux, FaCloud } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiGrafana, SiPrometheus, SiElasticsearch, SiArgo, SiVault } from 'react-icons/si';

const WorkflowDiagram = () => {
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
                  <div 
                    key={toolIdx}
                    className="flex flex-col items-center justify-center p-4 bg-[#1b2d4d] rounded-lg
                             hover:bg-[#233554] transition-all duration-300 group"
                  >
                    <div className="text-4xl text-[#64ffda] group-hover:text-[#64ffda]/80 mb-3 transition-colors duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-slate-300 text-sm font-mono group-hover:text-[#64ffda] transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
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
    </div>
  );
};

export default WorkflowDiagram;