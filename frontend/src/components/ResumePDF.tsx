import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 18,
    backgroundColor: 'white',
    fontSize: 7,
    lineHeight: 1.2,
    fontFamily: 'Helvetica',
  },
  // Cover Letter Page Styles
  coverHeader: {
    textAlign: 'center',
    marginBottom: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 8,
  },
  coverName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  coverTitle: {
    fontSize: 11,
    marginBottom: 3,
    fontStyle: 'italic',
  },
  coverContact: {
    fontSize: 8,
    marginBottom: 1,
  },
  coverDate: {
    textAlign: 'right',
    marginBottom: 12,
    fontSize: 8,
  },
  coverSalutation: {
    marginBottom: 8,
    fontSize: 8,
    fontWeight: 'bold',
  },
  coverParagraph: {
    fontSize: 8,
    lineHeight: 1.4,
    marginBottom: 8,
    textAlign: 'justify',
  },
  coverClosing: {
    marginTop: 15,
    fontSize: 8,
    fontWeight: 'bold',
  },
  signature: {
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 10,
  },
  
  // Resume Pages Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 6,
  },
  headerLeft: {
    flex: 2,
  },
  headerRight: {
    flex: 1,
    textAlign: 'right',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  title: {
    fontSize: 9,
    marginBottom: 3,
    fontStyle: 'italic',
  },
  contact: {
    fontSize: 6,
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: 9,
    marginBottom: 3,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 2,
    marginTop: 5,
  },
  paragraph: {
    fontSize: 6,
    lineHeight: 1.3,
    marginBottom: 3,
    textAlign: 'justify',
  },
  subsectionTitle: {
    fontSize: 7,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: 2,
  },
  jobTitle: {
    fontSize: 7,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  company: {
    fontSize: 6,
    marginBottom: 1,
    fontStyle: 'italic',
  },
  period: {
    fontSize: 6,
    marginBottom: 1,
    color: '#666',
  },
  bullet: {
    fontSize: 6,
    marginBottom: 1,
    marginLeft: 5,
    lineHeight: 1.2,
  },
  skillCategory: {
    fontSize: 6,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  skillList: {
    fontSize: 6,
    marginBottom: 1,
    marginLeft: 5,
  },
  education: {
    fontSize: 6,
    marginBottom: 1,
  },
  highlight: {
    fontSize: 6,
    marginBottom: 1,
    marginLeft: 5,
  },
  experienceItem: {
    marginBottom: 5,
  },
  section: {
    marginBottom: 4,
  },
  projectItem: {
    marginBottom: 3,
  },
  achievementItem: {
    fontSize: 6,
    marginBottom: 1,
    marginLeft: 5,
  },
});

const ResumePDF = () => (
  <Document>
    {/* Page 1: Cover Letter */}
    <Page size="A4" style={styles.page}>
      <View style={styles.coverHeader}>
        <Text style={styles.coverName}>Rahul Kakaraparthy</Text>
        <Text style={styles.coverTitle}>Senior DevOps Engineer | Cloud Infrastructure Architect</Text>
        <Text style={styles.coverContact}>📧 rahulganesh.kakaraparthy@gmail.com | 📱 +1 647-739-5277 | 📍 Toronto, Ontario, M3C0C6</Text>
        <Text style={styles.coverContact}>🌐 LinkedIn: www.linkedin.com/in/rahul-kakaraparthy-782437138</Text>
        <Text style={styles.coverContact}>💼 Portfolio: https://rahulkakaraparthy.github.io/portfolio/</Text>
      </View>

      <Text style={styles.coverDate}>October 31, 2025</Text>

      <Text style={styles.coverSalutation}>Dear Hiring Manager,</Text>

      <Text style={styles.coverParagraph}>
        I am writing to express my strong interest in the DevOps Engineer / Senior Software Engineer position within 
        your organization. With over 8 years of comprehensive experience designing, automating, and optimizing 
        cloud-based infrastructure and CI/CD pipelines, I have consistently driven innovation, efficiency, and 
        reliability across enterprise environments in the financial services and consulting industries.
      </Text>

      <Text style={styles.coverParagraph}>
        In my current role as Senior Software Engineer – DevOps at FIS, I lead the architectural design and 
        implementation of automated CI/CD pipelines using Jenkins with Groovy scripting and Argo CD, successfully 
        reducing deployment cycle times by 40% while maintaining 99.99% system uptime. I manage and scale cloud 
        infrastructure across Azure using Terraform for Infrastructure as Code, enforce governance policies, and 
        champion DevOps best practices across 15+ engineering teams.
      </Text>

      <Text style={styles.coverParagraph}>
        My expertise includes container orchestration with Docker and Kubernetes on AKS, comprehensive monitoring 
        with Azure Monitor and Application Insights, and implementing security automation with integrated SAST/DAST 
        scanning tools. My previous experience at Fidelity Investments provided me with deep expertise in AWS cloud 
        architecture, where I designed and deployed fault-tolerant systems using EC2, VPC, S3, Step Functions, 
        and Route53.
      </Text>

      <Text style={styles.coverParagraph}>
        What excites me most about this opportunity is the chance to bring my comprehensive expertise in both Azure 
        and AWS cloud platforms, along with my proven track record in DevOps automation, Infrastructure as Code, 
        and security integration, to an organization that values technical innovation, collaborative engineering 
        culture, and continuous improvement.
      </Text>

      <Text style={styles.coverParagraph}>
        I am particularly passionate about implementing security-first DevOps practices, having integrated tools 
        like Veracode, Checkmarx, and Trivy into automated pipelines, and establishing comprehensive observability 
        solutions that process terabytes of data daily. My experience in mentoring engineering teams, establishing 
        automation-first cultures, and leading enterprise-wide DevOps transformations has consistently resulted in 
        improved developer productivity, reduced operational overhead, and enhanced system reliability.
      </Text>

      <Text style={styles.coverParagraph}>
        I would welcome the opportunity to discuss in detail how my background in enterprise DevOps transformation, 
        multi-cloud architecture, and automation engineering aligns with your technical needs and organizational goals. 
        Thank you for your time and consideration.
      </Text>

      <Text style={styles.coverClosing}>Sincerely,</Text>
      <Text style={styles.signature}>Rahul Kakaraparthy</Text>
    </Page>

    {/* Page 2: Professional Summary and Technical Skills */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>Rahul Kakaraparthy</Text>
          <Text style={styles.title}>Senior DevOps Engineer | Cloud Infrastructure Architect</Text>
          <Text style={styles.contact}>📧 rahulganesh.kakaraparthy@gmail.com | 📱 +1 647-739-5277</Text>
          <Text style={styles.contact}>📍 Toronto, Ontario, M3C0C6</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.contact}>🌐 www.linkedin.com/in/rahul-kakaraparthy-782437138</Text>
          <Text style={styles.contact}>💼 https://rahulkakaraparthy.github.io/portfolio/</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Senior Software Engineer (DevOps) with 8+ years of experience driving automation, cloud transformation, 
          and CI/CD excellence across financial services and consulting industries. Proven expertise in Azure, AWS, 
          Terraform, Jenkins, Argo CD, Docker, and Kubernetes, with a strong background in building scalable cloud 
          infrastructure and release automation pipelines. Recognized for bridging development and operations, 
          optimizing delivery lifecycles, and ensuring secure, high-availability deployments.
        </Text>
        <Text style={styles.paragraph}>
          Technical Leadership: Led cross-functional teams in implementing Infrastructure as Code (IaC), reducing 
          deployment cycle time by 40% while achieving 99.99% uptime across production environments.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        
        <Text style={styles.skillCategory}>Azure Cloud Services</Text>
        <Text style={styles.skillList}>• Azure Platform: AKS (Azure Kubernetes Service), ACR (Azure Container Registry), Key Vault, Azure Monitor</Text>
        <Text style={styles.skillList}>• Azure DevOps Suite: Azure Pipelines, Azure Repos, Azure Boards</Text>
        <Text style={styles.skillList}>• Security: Azure Key Vault, Azure Security Center, Azure Sentinel</Text>

        <Text style={styles.skillCategory}>Cloud Platforms & Infrastructure</Text>
        <Text style={styles.skillList}>• AWS: EC2, S3, Route53, VPC, IAM, CloudWatch, Step Functions, Lambda, RDS</Text>
        <Text style={styles.skillList}>• Azure: AKS, Azure DevOps, App Service, Azure Functions, Storage Accounts</Text>
        <Text style={styles.skillList}>• Infrastructure as Code: Terraform, CloudFormation, ARM Templates</Text>

        <Text style={styles.skillCategory}>CI/CD & Automation</Text>
        <Text style={styles.skillList}>• CI/CD Pipelines: Jenkins (Groovy scripting), Azure Pipelines, Argo CD, GitHub Actions</Text>
        <Text style={styles.skillList}>• Build & Artifact Management: Nexus Repository Manager, Azure Artifacts</Text>
        <Text style={styles.skillList}>• Configuration Management: Ansible, Terraform, Infrastructure automation</Text>

        <Text style={styles.skillCategory}>Containerization & Orchestration</Text>
        <Text style={styles.skillList}>• Container Technologies: Docker, Container Registry management (ACR)</Text>
        <Text style={styles.skillList}>• Orchestration: Kubernetes, AKS, Container orchestration at scale</Text>
        <Text style={styles.skillList}>• GitOps: Argo CD for continuous deployment and GitOps workflows</Text>

        <Text style={styles.skillCategory}>Programming & Scripting</Text>
        <Text style={styles.skillList}>• Scripting Languages: Groovy (Jenkins pipelines), Shell/Bash, Python, PowerShell</Text>
        <Text style={styles.skillList}>• Configuration: YAML, JSON, configuration management</Text>
        <Text style={styles.skillList}>• API Integration: REST APIs, Azure Resource Manager APIs</Text>

        <Text style={styles.skillCategory}>Security & Compliance</Text>
        <Text style={styles.skillList}>• Security Scanning: Veracode, Checkmarx, CXOne (CheckMarx One), Trivy</Text>
        <Text style={styles.skillList}>• Vulnerability Management: SAST/DAST integration, security pipeline automation</Text>
        <Text style={styles.skillList}>• Secrets Management: Azure Key Vault, AWS Secrets Manager</Text>

        <Text style={styles.skillCategory}>Monitoring & Observability</Text>
        <Text style={styles.skillList}>• Azure Monitoring: Azure Monitor, Application Insights, Log Analytics</Text>
        <Text style={styles.skillList}>• AWS Monitoring: CloudWatch, AWS Config, Systems Manager</Text>
        <Text style={styles.skillList}>• Log Management: Centralized logging, log analysis and correlation</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.education}>Bachelor of Technology – Computer Science Engineering</Text>
        <Text style={styles.education}>Jawaharlal Nehru Technological University (JNTU), India | 2015</Text>
        <Text style={styles.education}>Relevant Coursework: Distributed Systems, Database Design, Network Security</Text>
      </View>
    </Page>

    {/* Page 3: Professional Experience */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Senior Software Engineer – DevOps</Text>
          <Text style={styles.company}>FIS | Remote, Canada</Text>
          <Text style={styles.period}>Feb 2022 – Present</Text>
          
          <Text style={styles.subsectionTitle}>CI/CD Pipeline Architecture & Automation</Text>
          <Text style={styles.bullet}>• Lead design and implementation of automated CI/CD pipelines using Jenkins with Groovy scripting and Argo CD, reducing deployment cycle time by 40%</Text>
          <Text style={styles.bullet}>• Architected GitOps workflows with Argo CD for Kubernetes deployments, enabling continuous delivery and configuration drift detection</Text>
          <Text style={styles.bullet}>• Integrated Nexus Repository Manager for artifact management and dependency caching, improving build performance by 50%</Text>
          
          <Text style={styles.subsectionTitle}>Azure Cloud Infrastructure Management</Text>
          <Text style={styles.bullet}>• Manage and scale cloud infrastructure in Azure using Terraform, enforcing Infrastructure-as-Code across 100+ resources</Text>
          <Text style={styles.bullet}>• Implemented Azure monitoring solutions using Azure Monitor and Application Insights for comprehensive observability</Text>
          <Text style={styles.bullet}>• Designed resilient containerized deployments using Docker and Kubernetes on AKS, ensuring high availability</Text>
          
          <Text style={styles.subsectionTitle}>Technical Achievements</Text>
          <Text style={styles.bullet}>• Achieved 99.99% system uptime across all production environments through robust infrastructure design</Text>
          <Text style={styles.bullet}>• Reduced manual deployment errors by 85% through comprehensive CI/CD automation</Text>
          <Text style={styles.bullet}>• Mentored junior engineers on DevOps best practices, cloud technologies, and automation frameworks</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>DevOps Engineer</Text>
          <Text style={styles.company}>Fidelity Investments | Canada</Text>
          <Text style={styles.period}>Mar 2019 – Feb 2022</Text>
          
          <Text style={styles.subsectionTitle}>AWS Cloud Architecture & Infrastructure</Text>
          <Text style={styles.bullet}>• Designed and deployed scalable, fault-tolerant systems on AWS including EC2, VPC, S3, and Step Functions serving 50,000+ users</Text>
          <Text style={styles.bullet}>• Built highly available VPCs from scratch, applying enterprise-grade security via IAM policies and Security Groups</Text>
          <Text style={styles.bullet}>• Configured DNS failover and health checks with Route53 to ensure 99.9% availability of customer-facing applications</Text>
          
          <Text style={styles.subsectionTitle}>Infrastructure Automation & Monitoring</Text>
          <Text style={styles.bullet}>• Automated infrastructure provisioning with Terraform, improving delivery consistency and reducing manual errors by 70%</Text>
          <Text style={styles.bullet}>• Developed comprehensive CI/CD pipelines integrating Jenkins, Nexus, and Ansible for seamless application delivery</Text>
          <Text style={styles.bullet}>• Spearheaded monitoring and alerting implementation with CloudWatch, improving incident response times from hours to minutes</Text>
          
          <Text style={styles.subsectionTitle}>Key Projects</Text>
          <Text style={styles.bullet}>• Successfully migrated 25+ enterprise applications from on-premises to AWS with zero data loss</Text>
          <Text style={styles.bullet}>• Implemented automated compliance reporting system reducing audit preparation time from weeks to days</Text>
          <Text style={styles.bullet}>• Led cloud migration initiatives reducing infrastructure costs by 45% while improving performance</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Cloud Engineer</Text>
          <Text style={styles.company}>Accenture | Hyderabad, India</Text>
          <Text style={styles.period}>Aug 2016 – Jan 2019</Text>
          
          <Text style={styles.bullet}>• Created and managed virtualized environments using VMware and VirtualBox for development and testing purposes</Text>
          <Text style={styles.bullet}>• Automated AWS infrastructure provisioning reducing deployment time from days to hours using scripted solutions</Text>
          <Text style={styles.bullet}>• Developed bash and Python automation scripts, reducing routine manual tasks by 50%</Text>
          <Text style={styles.bullet}>• Configured comprehensive CloudWatch alerts and SNS notifications, enabling proactive monitoring</Text>
          <Text style={styles.bullet}>• Contributed to large-scale cloud transformation projects enabling $2M+ annual cost savings</Text>
          <Text style={styles.bullet}>• Managed Linux/Unix server environments supporting mission-critical applications for Fortune 500 clients</Text>
        </View>
      </View>
    </Page>

    {/* Page 4: Projects, Achievements & Leadership */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notable Technical Projects</Text>
        
        <View style={styles.projectItem}>
          <Text style={styles.subsectionTitle}>Enterprise DevOps Platform Transformation</Text>
          <Text style={styles.bullet}>Technologies: Jenkins, Groovy, Argo CD, Azure AKS, Terraform</Text>
          <Text style={styles.bullet}>• Led complete DevOps platform transformation at FIS supporting 200+ developers across multiple teams</Text>
          <Text style={styles.bullet}>• Implemented GitOps workflows with Argo CD reducing deployment time by 40% and improving reliability to 99.99%</Text>
          <Text style={styles.bullet}>• Achieved company-wide adoption of Infrastructure as Code practices using Terraform</Text>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.subsectionTitle}>Multi-Cloud Infrastructure Automation</Text>
          <Text style={styles.bullet}>Technologies: Terraform, AWS, Azure, CloudWatch, Jenkins, Python</Text>
          <Text style={styles.bullet}>• Designed multi-cloud infrastructure spanning AWS and Azure for disaster recovery and load distribution</Text>
          <Text style={styles.bullet}>• Created standardized Terraform modules reducing setup time by 75%</Text>
          <Text style={styles.bullet}>• Built automated monitoring systems processing 10GB+ of logs daily with real-time notifications</Text>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.subsectionTitle}>Financial Services Cloud Migration</Text>
          <Text style={styles.bullet}>Technologies: AWS, Route53, VPC, IAM, CloudWatch, Ansible</Text>
          <Text style={styles.bullet}>• Successfully migrated critical financial applications serving 100,000+ daily users</Text>
          <Text style={styles.bullet}>• Designed highly available, fault-tolerant architecture with multi-AZ deployment and automated failover</Text>
          <Text style={styles.bullet}>• Reduced infrastructure costs by 45% while improving application performance and scalability</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Leadership & Mentoring</Text>
        <Text style={styles.highlight}>• DevOps Transformation Leader: Spearheaded organization-wide adoption of DevOps practices and cloud-native technologies</Text>
        <Text style={styles.highlight}>• Infrastructure Modernization: Led teams in migrating legacy applications to modern cloud-native architectures</Text>
        <Text style={styles.highlight}>• Automation Champion: Established automation-first culture reducing manual operations by 80% across teams</Text>
        <Text style={styles.highlight}>• Knowledge Sharing: Created comprehensive documentation, training materials, and best practices guidelines</Text>
        <Text style={styles.highlight}>• Team Mentoring: Mentored 12+ engineers in cloud technologies, DevOps practices, and automation frameworks</Text>
        <Text style={styles.highlight}>• Process Innovation: Designed automated workflows improving developer productivity by 60%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Achievements & Metrics</Text>
        <Text style={styles.achievementItem}>🏆 Infrastructure Reliability: Delivered 99.99% uptime for production systems through resilient cloud infrastructure design</Text>
        <Text style={styles.achievementItem}>🚀 Deployment Excellence: Improved deployment speed by 40% and reduced manual errors through comprehensive CI/CD automation</Text>
        <Text style={styles.achievementItem}>💰 Cost Optimization: Achieved infrastructure cost savings of $2M+ annually through rightsizing and automation</Text>
        <Text style={styles.achievementItem}>🔒 Security Excellence: Maintained zero critical security incidents through proactive monitoring and automated remediation</Text>
        <Text style={styles.achievementItem}>📈 Performance Enhancement: Led enterprise DevOps adoption enhancing release efficiency and developer productivity by 60%</Text>
        <Text style={styles.achievementItem}>🌐 Cloud Transformation: Successfully completed cloud migration projects for 50+ applications with zero data loss</Text>
        <Text style={styles.achievementItem}>👥 Team Development: Trained and mentored 15+ engineers in modern DevOps practices and cloud technologies</Text>
        <Text style={styles.achievementItem}>🛠️ Automation Impact: Reduced routine manual tasks by 70% through comprehensive automation and scripting solutions</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Certifications & Development</Text>
        <Text style={styles.highlight}>• AWS Certified Solutions Architect – Associate (In Progress)</Text>
        <Text style={styles.highlight}>• Microsoft Azure Fundamentals (AZ-900) (Planned)</Text>
        <Text style={styles.highlight}>• Certified Kubernetes Administrator (CKA) (Planned)</Text>
        <Text style={styles.highlight}>• HashiCorp Terraform Associate (Planned)</Text>
        <Text style={styles.highlight}>• Active participant in DevOps and Cloud Native Computing Foundation (CNCF) communities</Text>
        <Text style={styles.highlight}>• Regular attendee of KubeCon, DockerCon, and AWS re:Invent conferences</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        <Text style={styles.highlight}>• Authorized to work in Canada (Permanent Resident)</Text>
        <Text style={styles.highlight}>• Available for relocation and remote work opportunities</Text>
        <Text style={styles.highlight}>• Languages: English (Fluent), Telugu (Native), Hindi (Conversational)</Text>
        <Text style={styles.highlight}>• Strong technical writing and documentation skills</Text>
        <Text style={styles.highlight}>• Experience presenting to technical and non-technical stakeholders</Text>
      </View>

      <View style={{ marginTop: 15, textAlign: 'center', borderTopWidth: 1, borderTopColor: '#ccc', paddingTop: 8 }}>
        <Text style={{ fontSize: 7, fontStyle: 'italic' }}>
          References available upon request | Portfolio: https://rahulkakaraparthy.github.io/portfolio/
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;