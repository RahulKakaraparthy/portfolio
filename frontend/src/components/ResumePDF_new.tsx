import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: 'white',
    fontSize: 8,
    lineHeight: 1.2,
    fontFamily: 'Helvetica',
  },
  // Cover Letter Page Styles
  coverHeader: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  coverName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  coverContact: {
    fontSize: 9,
    marginBottom: 1,
  },
  coverDate: {
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 9,
  },
  coverSalutation: {
    marginBottom: 10,
    fontSize: 9,
  },
  coverParagraph: {
    fontSize: 9,
    lineHeight: 1.4,
    marginBottom: 10,
    textAlign: 'justify',
  },
  coverClosing: {
    marginTop: 20,
    fontSize: 9,
  },
  signature: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 15,
  },
  
  // Resume Pages Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 8,
  },
  headerLeft: {
    flex: 2,
  },
  headerRight: {
    flex: 1,
    textAlign: 'right',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  title: {
    fontSize: 10,
    marginBottom: 4,
    fontStyle: 'italic',
  },
  contact: {
    fontSize: 7,
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: 10,
    marginBottom: 3,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 2,
    marginTop: 6,
  },
  paragraph: {
    fontSize: 7,
    lineHeight: 1.3,
    marginBottom: 4,
    textAlign: 'justify',
  },
  subsectionTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 3,
  },
  jobTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  company: {
    fontSize: 7,
    marginBottom: 1,
    fontStyle: 'italic',
  },
  period: {
    fontSize: 7,
    marginBottom: 2,
    color: '#666',
  },
  bullet: {
    fontSize: 7,
    marginBottom: 1,
    marginLeft: 6,
    lineHeight: 1.2,
  },
  skillCategory: {
    fontSize: 7,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  skillList: {
    fontSize: 7,
    marginBottom: 2,
    marginLeft: 6,
  },
  education: {
    fontSize: 7,
    marginBottom: 1,
  },
  highlight: {
    fontSize: 7,
    marginBottom: 1,
    marginLeft: 6,
  },
  experienceItem: {
    marginBottom: 6,
  },
  section: {
    marginBottom: 5,
  },
  projectItem: {
    marginBottom: 4,
  },
  certificationItem: {
    fontSize: 7,
    marginBottom: 1,
    marginLeft: 6,
  },
});

const ResumePDF = () => (
  <Document>
    {/* Page 1: Cover Letter */}
    <Page size="A4" style={styles.page}>
      <View style={styles.coverHeader}>
        <Text style={styles.coverName}>Rahul Kakaraparthy</Text>
        <Text style={styles.coverContact}>Senior DevOps Engineer</Text>
        <Text style={styles.coverContact}>Toronto, Ontario | +1 647-739-5277</Text>
        <Text style={styles.coverContact}>rahulganesh.kakaraparthy@gmail.com</Text>
        <Text style={styles.coverContact}>LinkedIn: www.linkedin.com/in/rahul-kakaraparthy-782437138</Text>
        <Text style={styles.coverContact}>GitHub Portfolio: https://rahulkakaraparthy.github.io/portfolio/</Text>
      </View>

      <Text style={styles.coverDate}>
        {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </Text>

      <Text style={styles.coverSalutation}>Dear Hiring Manager,</Text>

      <Text style={styles.coverParagraph}>
        I am writing to express my strong interest in the Senior DevOps Engineer position at your organization. 
        With over 8 years of progressive experience in cloud infrastructure, automation, and CI/CD pipeline 
        development, I am excited about the opportunity to contribute to your team's success.
      </Text>

      <Text style={styles.coverParagraph}>
        In my current role as Senior Software Engineer – DevOps at FIS Global, I have successfully designed 
        and maintained enterprise-grade CI/CD pipelines using Jenkins, ArgoCD, and Helm, managing deployments 
        across Kubernetes and OpenShift clusters. My expertise spans across multiple cloud platforms including 
        Azure and AWS, where I have automated infrastructure provisioning using Terraform and Ansible. 
        I have integrated HashiCorp Vault for secure secret management and implemented comprehensive monitoring 
        solutions using ELK Stack, Prometheus, and Dynatrace.
      </Text>

      <Text style={styles.coverParagraph}>
        What sets me apart is my ability to bridge the gap between development and operations teams while 
        maintaining a strong focus on security, scalability, and reliability. At Fidelity Investments, 
        I reduced release cycle times by 50% through automation and implemented GitOps workflows that 
        significantly improved deployment consistency. My experience with Infrastructure as Code (IaC) 
        practices has enabled organizations to achieve 99.99% uptime across critical financial systems.
      </Text>

      <Text style={styles.coverParagraph}>
        I am particularly drawn to your organization's commitment to innovation and technical excellence. 
        My hands-on experience with containerization technologies, microservices architecture, and 
        cloud-native solutions aligns perfectly with the evolving needs of modern DevOps practices. 
        I am eager to bring my passion for automation, continuous improvement, and collaborative 
        problem-solving to your team.
      </Text>

      <Text style={styles.coverParagraph}>
        Thank you for considering my application. I would welcome the opportunity to discuss how my 
        technical expertise and proven track record can contribute to your organization's continued 
        success. I look forward to hearing from you soon.
      </Text>

      <Text style={styles.coverClosing}>Sincerely,</Text>
      <Text style={styles.signature}>Rahul Kakaraparthy</Text>
    </Page>

    {/* Page 2: Professional Summary and Core Skills */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>Rahul Kakaraparthy</Text>
          <Text style={styles.title}>Senior DevOps Engineer</Text>
          <Text style={styles.contact}>Location: Toronto, Ontario</Text>
          <Text style={styles.contact}>Phone: +1 647-739-5277</Text>
          <Text style={styles.contact}>Email: rahulganesh.kakaraparthy@gmail.com</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.contact}>LinkedIn: www.linkedin.com/in/rahul-kakaraparthy-782437138</Text>
          <Text style={styles.contact}>Portfolio: https://rahulkakaraparthy.github.io/portfolio/</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Senior DevOps Engineer with 8+ years of experience designing, automating, and optimizing enterprise cloud 
          infrastructure and CI/CD ecosystems across Azure and AWS. Skilled in Kubernetes, OpenShift, Jenkins, ArgoCD 
          (GitOps), Ansible, Helm, and HashiCorp Vault. Proven expertise in implementing infrastructure-as-code (IaC) 
          with Terraform, enhancing security with Vault integrations, and building automated, scalable CI/CD pipelines for 
          cloud-native applications. Demonstrated ability to deliver 99.99% uptime across financial SaaS systems while 
          reducing deployment cycles by 40% through GitOps-driven automation.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Technical Skills</Text>
        
        <Text style={styles.skillCategory}>Cloud Platforms & Services:</Text>
        <Text style={styles.skillList}>• Azure: AKS, Container Registry, Key Vault, Monitor, Active Directory, Resource Manager</Text>
        <Text style={styles.skillList}>• AWS: EC2, VPC, S3, IAM, RDS, Lambda, CloudWatch, EKS, CloudFormation</Text>
        <Text style={styles.skillList}>• Multi-cloud architecture design and migration strategies</Text>

        <Text style={styles.skillCategory}>CI/CD & DevOps Tools:</Text>
        <Text style={styles.skillList}>• Jenkins (Groovy DSL, Pipeline as Code, Blue Ocean)</Text>
        <Text style={styles.skillList}>• GitLab CI/CD, GitHub Actions, Azure DevOps</Text>
        <Text style={styles.skillList}>• ArgoCD (GitOps), Helm Charts, Nexus Repository Manager</Text>
        <Text style={styles.skillList}>• SonarQube, Checkmarx, Veracode (Security Scanning)</Text>

        <Text style={styles.skillCategory}>Infrastructure as Code & Automation:</Text>
        <Text style={styles.skillList}>• Terraform (Modules, State Management, Workspace)</Text>
        <Text style={styles.skillList}>• Ansible (Playbooks, Roles, Vault)</Text>
        <Text style={styles.skillList}>• CloudFormation, ARM Templates</Text>
        <Text style={styles.skillList}>• Bash, Python, PowerShell scripting</Text>

        <Text style={styles.skillCategory}>Container & Orchestration:</Text>
        <Text style={styles.skillList}>• Docker (Multi-stage builds, Security best practices)</Text>
        <Text style={styles.skillList}>• Kubernetes (Deployments, Services, Ingress, RBAC, Operators)</Text>
        <Text style={styles.skillList}>• OpenShift (Container Platform, Operators, Routes)</Text>
        <Text style={styles.skillList}>• Helm (Chart development, Templating, Dependency management)</Text>

        <Text style={styles.skillCategory}>Monitoring & Observability:</Text>
        <Text style={styles.skillList}>• ELK Stack (Elasticsearch, Logstash, Kibana)</Text>
        <Text style={styles.skillList}>• Prometheus, Grafana (Custom dashboards, Alerting)</Text>
        <Text style={styles.skillList}>• Dynatrace, New Relic, AppDynamics</Text>
        <Text style={styles.skillList}>• Azure Monitor, CloudWatch, Splunk</Text>

        <Text style={styles.skillCategory}>Security & Identity Management:</Text>
        <Text style={styles.skillList}>• HashiCorp Vault (Secret management, Certificate rotation)</Text>
        <Text style={styles.skillList}>• Okta, Azure AD, SAML, OIDC integration</Text>
        <Text style={styles.skillList}>• RBAC implementation, Security policy enforcement</Text>
        <Text style={styles.skillList}>• Container image scanning, Vulnerability management</Text>

        <Text style={styles.skillCategory}>Development & Collaboration:</Text>
        <Text style={styles.skillList}>• Git (GitHub, GitLab, Bitbucket), Git Flow workflows</Text>
        <Text style={styles.skillList}>• Jira, Confluence (Agile/Scrum methodologies)</Text>
        <Text style={styles.skillList}>• Code review processes, Quality gates</Text>
        <Text style={styles.skillList}>• Documentation and knowledge sharing practices</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.education}>Bachelor of Technology – Computer Science Engineering</Text>
        <Text style={styles.education}>Jawaharlal Nehru Technological University (JNTU) – Hyderabad, India</Text>
        <Text style={styles.education}>Graduated: 2015 | CGPA: 7.2/10</Text>
      </View>
    </Page>

    {/* Page 3: Professional Experience */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Senior Software Engineer – DevOps</Text>
          <Text style={styles.company}>FIS Global | Remote, Canada</Text>
          <Text style={styles.period}>February 2022 – Present (2+ years)</Text>
          
          <Text style={styles.bullet}>• Architected and maintained enterprise CI/CD pipelines using Jenkins (Groovy DSL), ArgoCD, and Helm for automated microservice deployments across Kubernetes/OpenShift clusters serving 50+ applications</Text>
          <Text style={styles.bullet}>• Implemented comprehensive build and packaging processes for containerized applications with integrated security scanning, image signing, and versioned releases using Nexus and Azure Container Registry</Text>
          <Text style={styles.bullet}>• Automated infrastructure provisioning across Azure and AWS using Terraform modules with integrated Ansible playbooks for configuration management, reducing manual deployment time by 80%</Text>
          <Text style={styles.bullet}>• Integrated HashiCorp Vault for centralized secret management and automated certificate rotation, enhancing security posture across all environments</Text>
          <Text style={styles.bullet}>• Developed and maintained 30+ Helm charts for environment-specific Kubernetes deployments with advanced templating and dependency management</Text>
          <Text style={styles.bullet}>• Established centralized logging and monitoring infrastructure using ELK Stack, Prometheus, and Dynatrace with custom dashboards and proactive alerting</Text>
          <Text style={styles.bullet}>• Collaborated with development teams to implement GitOps workflows, reducing deployment errors by 60% and enabling automated rollbacks</Text>
          <Text style={styles.bullet}>• Led migration of legacy applications to cloud-native architecture, improving scalability and reducing infrastructure costs by 35%</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>DevOps Engineer</Text>
          <Text style={styles.company}>Fidelity Investments | Toronto, Canada</Text>
          <Text style={styles.period}>March 2019 – February 2022 (3 years)</Text>
          
          <Text style={styles.bullet}>• Built robust AWS-based CI/CD frameworks integrating Jenkins, Terraform, and Ansible for automated application lifecycle management across multiple environments</Text>
          <Text style={styles.bullet}>• Implemented GitOps workflows using ArgoCD for continuous delivery, enabling automated deployments with approval gates and rollback capabilities</Text>
          <Text style={styles.bullet}>• Designed and deployed reusable Terraform modules for AWS infrastructure provisioning with standardized patterns for VPC, EC2, RDS, and S3 configurations</Text>
          <Text style={styles.bullet}>• Enhanced infrastructure compliance through comprehensive IAM governance, automated security audits, and real-time monitoring dashboards</Text>
          <Text style={styles.bullet}>• Reduced application release cycle time by 50% through pipeline automation and elimination of manual deployment processes</Text>
          <Text style={styles.bullet}>• Implemented blue-green deployment strategies for zero-downtime releases of critical financial applications</Text>
          <Text style={styles.bullet}>• Established disaster recovery procedures and automated backup strategies ensuring 99.9% data availability</Text>
          <Text style={styles.bullet}>• Mentored junior team members on DevOps best practices and conducted knowledge sharing sessions</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Cloud Engineer</Text>
          <Text style={styles.company}>Accenture | Hyderabad, India</Text>
          <Text style={styles.period}>August 2016 – January 2019 (2.5 years)</Text>
          
          <Text style={styles.bullet}>• Migrated and automated enterprise infrastructure using Terraform, Jenkins, and Ansible for multiple client environments reducing operational overhead by 40%</Text>
          <Text style={styles.bullet}>• Developed comprehensive Bash and Python scripts for IAM audits, compliance enforcement, and automated resource management across AWS accounts</Text>
          <Text style={styles.bullet}>• Created standardized CloudFormation templates for EC2, RDS, and VPC provisioning enabling consistent infrastructure deployment</Text>
          <Text style={styles.bullet}>• Implemented comprehensive application monitoring using CloudWatch, SNS alerting, and custom metrics for proactive issue resolution</Text>
          <Text style={styles.bullet}>• Participated in 24/7 on-call rotation providing critical support for production environments</Text>
          <Text style={styles.bullet}>• Collaborated with cross-functional teams to establish DevOps practices and improve deployment frequency</Text>
          <Text style={styles.bullet}>• Documented operational procedures and created runbooks for common troubleshooting scenarios</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Projects & Achievements</Text>
        
        <View style={styles.projectItem}>
          <Text style={styles.subsectionTitle}>FIS Global - Microservices Platform Modernization</Text>
          <Text style={styles.bullet}>• Led the migration of 50+ legacy applications to containerized microservices architecture</Text>
          <Text style={styles.bullet}>• Implemented automated CI/CD pipelines reducing deployment time from hours to minutes</Text>
          <Text style={styles.bullet}>• Achieved 99.99% uptime across all production services through robust monitoring and automated scaling</Text>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.subsectionTitle}>Fidelity - Multi-Cloud Infrastructure Automation</Text>
          <Text style={styles.bullet}>• Designed Terraform modules supporting both AWS and Azure deployments</Text>
          <Text style={styles.bullet}>• Implemented cross-cloud networking and security policies</Text>
          <Text style={styles.bullet}>• Reduced infrastructure provisioning time by 70% through automation</Text>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.subsectionTitle}>Accenture - Enterprise Cloud Migration</Text>
          <Text style={styles.bullet}>• Successfully migrated 200+ virtual machines to AWS EC2 with zero data loss</Text>
          <Text style={styles.bullet}>• Implemented automated backup and disaster recovery solutions</Text>
          <Text style={styles.bullet}>• Achieved 30% cost reduction through right-sizing and reserved instance optimization</Text>
        </View>
      </View>
    </Page>

    {/* Page 4: Certifications, Achievements & Additional Information */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Certifications</Text>
        <Text style={styles.certificationItem}>• AWS Certified Solutions Architect – Associate (In Progress)</Text>
        <Text style={styles.certificationItem}>• Microsoft Azure Fundamentals (AZ-900) (Planned)</Text>
        <Text style={styles.certificationItem}>• Certified Kubernetes Administrator (CKA) (Planned)</Text>
        <Text style={styles.certificationItem}>• HashiCorp Terraform Associate (Planned)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notable Achievements & Recognition</Text>
        <Text style={styles.highlight}>• Delivered 99.99% uptime across critical financial SaaS systems serving millions of users</Text>
        <Text style={styles.highlight}>• Reduced deployment cycles by 40% through implementation of GitOps-driven ArgoCD pipelines</Text>
        <Text style={styles.highlight}>• Championed Infrastructure as Code practices leading to 80% reduction in manual configuration errors</Text>
        <Text style={styles.highlight}>• Successfully automated database lifecycle processes reducing operational overhead by 60%</Text>
        <Text style={styles.highlight}>• Implemented zero-downtime deployment strategies for mission-critical financial applications</Text>
        <Text style={styles.highlight}>• Led cross-functional teams in adopting DevOps best practices and modern tooling</Text>
        <Text style={styles.highlight}>• Recognized as Subject Matter Expert (SME) for Kubernetes and container orchestration</Text>
        <Text style={styles.highlight}>• Contributed to open-source projects related to CI/CD automation and monitoring</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Leadership & Mentoring</Text>
        <Text style={styles.highlight}>• Mentored 8+ junior engineers in DevOps practices and cloud technologies</Text>
        <Text style={styles.highlight}>• Conducted technical interviews and assessment for DevOps engineering candidates</Text>
        <Text style={styles.highlight}>• Developed and delivered training programs on Kubernetes, Docker, and CI/CD best practices</Text>
        <Text style={styles.highlight}>• Created comprehensive documentation and knowledge base for team onboarding</Text>
        <Text style={styles.highlight}>• Established center of excellence for DevOps practices across multiple teams</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Development & Continuous Learning</Text>
        <Text style={styles.highlight}>• Active participant in DevOps and Cloud Native Computing Foundation (CNCF) communities</Text>
        <Text style={styles.highlight}>• Regular attendee of KubeCon, DockerCon, and AWS re:Invent conferences</Text>
        <Text style={styles.highlight}>• Contributor to technical blogs and internal knowledge sharing sessions</Text>
        <Text style={styles.highlight}>• Pursuing advanced certifications in cloud platforms and container orchestration</Text>
        <Text style={styles.highlight}>• Engaged in continuous learning through online courses and hands-on experimentation</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Industry Knowledge & Domains</Text>
        <Text style={styles.highlight}>• Financial Services: Payment processing, regulatory compliance, high-availability systems</Text>
        <Text style={styles.highlight}>• Enterprise Software: SaaS platforms, multi-tenant architecture, scalability design</Text>
        <Text style={styles.highlight}>• Security & Compliance: SOC 2, PCI DSS, GDPR compliance in cloud environments</Text>
        <Text style={styles.highlight}>• Agile Methodologies: Scrum, Kanban, SAFe framework implementation</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages & Communication</Text>
        <Text style={styles.highlight}>• English: Native/Fluent (Professional working proficiency)</Text>
        <Text style={styles.highlight}>• Telugu: Native speaker</Text>
        <Text style={styles.highlight}>• Hindi: Conversational proficiency</Text>
        <Text style={styles.highlight}>• Strong technical writing and documentation skills</Text>
        <Text style={styles.highlight}>• Experience presenting to technical and non-technical stakeholders</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        <Text style={styles.highlight}>• Authorized to work in Canada (Permanent Resident)</Text>
        <Text style={styles.highlight}>• Available for relocation and remote work opportunities</Text>
        <Text style={styles.highlight}>• Passionate about automation, continuous improvement, and team collaboration</Text>
        <Text style={styles.highlight}>• Strong problem-solving abilities and analytical thinking</Text>
        <Text style={styles.highlight}>• Excellent time management and ability to work under pressure</Text>
      </View>

      <View style={{ marginTop: 20, textAlign: 'center', borderTopWidth: 1, borderTopColor: '#ccc', paddingTop: 10 }}>
        <Text style={{ fontSize: 8, fontStyle: 'italic' }}>
          References available upon request | Portfolio: https://rahulkakaraparthy.github.io/portfolio/
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;