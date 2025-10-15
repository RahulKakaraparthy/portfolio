import React from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior DevOps Engineer",
    company: "Leading Technology Company",
    period: "2022 - Present",
    achievements: [
      "Architected and managed large-scale Kubernetes (EKS) clusters supporting 200+ microservices",
      "Led the implementation of GitOps practices using ArgoCD, reducing deployment incidents by 90%",
      "Designed and implemented automated CI/CD pipelines in CircleCI with advanced caching and parallelization",
      "Established enterprise-wide observability standards using Datadog and OpenTelemetry",
      "Created custom Terraform modules and providers used by 50+ engineering teams",
      "Implemented automated canary deployments with metric-based rollback capabilities"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Technology Firm",
    period: "2019 - 2022",
    achievements: [
      "Migrated legacy applications to containerized microservices architecture on EKS",
      "Built comprehensive monitoring and alerting infrastructure using Datadog",
      "Developed automated environment provisioning reducing setup time from days to hours",
      "Implemented infrastructure as code practices using Terraform and AWS CloudFormation",
      "Created custom Kubernetes operators for automated application lifecycle management"
    ]
  },
  {
    title: "Systems Engineer",
    company: "Tech Solutions Inc",
    period: "2017 - 2019",
    achievements: [
      "Managed and optimized AWS infrastructure including EC2, RDS, and S3 services",
      "Implemented automated backup and disaster recovery procedures",
      "Developed monitoring solutions using CloudWatch and custom metrics",
      "Created automated deployment pipelines for web applications"
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