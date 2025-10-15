import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Rahul Kakaraparthy</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Senior DevOps Engineer / Platform Engineer / SRE</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl mb-8">
            <p className="text-gray-300 text-lg">
              Experienced DevOps engineer specializing in AWS, Kubernetes, and CI/CD pipelines.
              Building scalable infrastructure and automating deployment processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Cloud & Infrastructure</h3>
              <p className="text-gray-300">AWS, Azure, Kubernetes, Docker</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">CI/CD & Automation</h3>
              <p className="text-gray-300">Jenkins, GitLab CI/CD, ArgoCD</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Monitoring & Security</h3>
              <p className="text-gray-300">ELK Stack, Prometheus, Grafana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;