import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Infrastructure & Cloud (AWS)",
    skills: [
      "EKS cluster architecture",
      "IAM roles and policies",
      "VPC design",
      "ECR image scanning",
      "SSM/Secrets Manager",
      "CloudWatch",
      "S3 lifecycle policies",
      "SQS/SNS messaging",
      "Lambda automation",
      "RDS/Aurora HA"
    ]
  },
  {
    title: "Container & Orchestration",
    skills: [
      "Kubernetes controllers & CRDs",
      "Pod security policies",
      "HPA with custom metrics",
      "Service mesh (Istio/Linkerd)",
      "Container optimization",
      "Helm chart development",
      "Custom admission controllers"
    ]
  },
  {
    title: "Infrastructure as Code",
    skills: [
      "Terraform modules",
      "State management",
      "Custom providers",
      "ArgoCD application sets",
      "GitOps automation",
      "Drift detection"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
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
      </div>
    </div>
  );
};

export default Skills;