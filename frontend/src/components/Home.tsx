import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-white font-bold text-xl">RK</Link>
            <div className="flex space-x-4">
              <Link to="/experience" className="text-gray-300 hover:text-white px-3 py-2">Experience</Link>
              <Link to="/skills" className="text-gray-300 hover:text-white px-3 py-2">Skills</Link>
              <Link to="/projects" className="text-gray-300 hover:text-white px-3 py-2">Projects</Link>
              <a href="https://linkedin.com/in/rahul-kakaraparthy" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white px-3 py-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Rahul Kakaraparthy</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Senior DevOps Engineer / Platform Engineer / SRE</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              Results-driven DevOps Engineer with 8+ years of experience architecting and operating large-scale production systems. 
              Specialized in Kubernetes orchestration, AWS cloud infrastructure, and GitOps methodologies.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-300">Microservices Managed</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Incident Reduction</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Teams Supported</div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Cloud Architecture</h3>
              <p className="text-gray-300">Advanced AWS infrastructure design focusing on HA, security, and cost optimization</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Container Orchestration</h3>
              <p className="text-gray-300">EKS management, multi-tenant architectures, and custom controllers</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">GitOps & CI/CD</h3>
              <p className="text-gray-300">ArgoCD implementation, automated deployments, and quality gates</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Email: <a href="mailto:rahulganesh.kakaraparthy@gmail.com" className="text-blue-400 hover:text-blue-300">
                rahulganesh.kakaraparthy@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              Phone: <a href="tel:6477395277" className="text-blue-400 hover:text-blue-300">
                647-739-5277
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export default Home;