import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 10,
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 10,
    marginBottom: 10,
    lineHeight: 1.4,
  },
  toolStack: {
    fontSize: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  company: {
    fontSize: 12,
    marginBottom: 2,
  },
  period: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 10,
    marginBottom: 2,
    marginLeft: 10,
    lineHeight: 1.4,
  },
  education: {
    fontSize: 10,
    marginBottom: 3,
  },
  highlight: {
    fontSize: 10,
    marginBottom: 3,
    marginLeft: 10,
  }
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Rahul Kakaraparthy</Text>
        <Text style={styles.contact}>Location: Toronto, Ontario</Text>
        <Text style={styles.contact}>Phone: +1 647-739-5277</Text>
        <Text style={styles.contact}>Email: rahulganesh.kakaraparthy@gmail.com</Text>
        <Text style={styles.contact}>LinkedIn: www.linkedin.com/in/rahul-kakaraparthy-782437138</Text>
        <Text style={styles.contact}>GitHub Portfolio: https://rahulkakaraparthy.github.io/portfolio/</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>
          Senior DevOps Engineer with 8+ years of experience designing, automating, and optimizing enterprise cloud
          infrastructure and CI/CD ecosystems across Azure and AWS. Skilled in Kubernetes, OpenShift, Jenkins, ArgoCD
          (GitOps), Ansible, Helm, and HashiCorp Vault. Proven expertise in implementing infrastructure-as-code (IaC)
          with Terraform, enhancing security with Vault integrations, and building automated, scalable CI/CD pipelines for
          cloud-native applications.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tool Stack Expertise</Text>
        <Text style={styles.toolStack}>• Cloud: Azure, AWS (EC2, VPC, S3, IAM, RDS, Lambda, CloudWatch)</Text>
        <Text style={styles.toolStack}>• CI/CD: Jenkins (Groovy DSL), GitLab CI/CD, ArgoCD (GitOps), Helm, Nexus</Text>
        <Text style={styles.toolStack}>• IaC & Automation: Terraform, Ansible, CloudFormation</Text>
        <Text style={styles.toolStack}>• Containers: Docker, Kubernetes, OpenShift, Operators, Ingress, RBAC</Text>
        <Text style={styles.toolStack}>• Monitoring: ELK Stack, Dynatrace, Prometheus, Grafana, Azure Monitor</Text>
        <Text style={styles.toolStack}>• Security: HashiCorp Vault, Okta, Azure AD, SAML, OIDC, RBAC</Text>
        <Text style={styles.toolStack}>• Collaboration: GitHub, GitLab, Bitbucket, Jira (Agile/Scrum)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Senior Software Engineer – DevOps</Text>
          <Text style={styles.company}>FIS Global | Remote, Canada</Text>
          <Text style={styles.period}>Feb 2022 – Present</Text>
          <Text style={styles.bullet}>• Designed and maintained CI/CD pipelines using Jenkins (Groovy DSL), ArgoCD, and Helm for automated microservice deployments across Kubernetes/OpenShift clusters.</Text>
          <Text style={styles.bullet}>• Managed build and packaging processes for containerized applications; implemented image scanning, signing, and versioned releases using Nexus and ACR.</Text>
          <Text style={styles.bullet}>• Automated provisioning of Azure and AWS resources via Terraform; integrated Ansible playbooks for configuration management.</Text>
          <Text style={styles.bullet}>• Integrated HashiCorp Vault for secure secret management and certificate rotation.</Text>
          <Text style={styles.bullet}>• Developed and maintained Helm charts for environment-specific Kubernetes deployments.</Text>
          <Text style={styles.bullet}>• Set up centralized logging and monitoring with ELK, Prometheus, and Dynatrace.</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>DevOps Engineer</Text>
          <Text style={styles.company}>Fidelity Investments | Canada</Text>
          <Text style={styles.period}>Mar 2019 – Feb 2022</Text>
          <Text style={styles.bullet}>• Built AWS-based CI/CD frameworks integrating Jenkins, Terraform, and Ansible.</Text>
          <Text style={styles.bullet}>• Implemented GitOps workflows for continuous delivery using ArgoCD.</Text>
          <Text style={styles.bullet}>• Automated infrastructure provisioning using Terraform modules with reusable patterns.</Text>
          <Text style={styles.bullet}>• Enhanced infrastructure compliance via IAM governance and monitoring dashboards.</Text>
          <Text style={styles.bullet}>• Reduced release cycle time by 50% through automation of build and deployment pipelines.</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Cloud Engineer</Text>
          <Text style={styles.company}>Accenture | Hyderabad, India</Text>
          <Text style={styles.period}>Aug 2016 – Jan 2019</Text>
          <Text style={styles.bullet}>• Migrated and automated enterprise infrastructure using Terraform, Jenkins, and Ansible.</Text>
          <Text style={styles.bullet}>• Developed Bash and Python scripts for IAM audits and compliance enforcement.</Text>
          <Text style={styles.bullet}>• Created CloudFormation templates for EC2, RDS, and VPC provisioning.</Text>
          <Text style={styles.bullet}>• Implemented application monitoring via CloudWatch and SNS alerting.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.education}>Bachelor of Technology – Computer Science Engineering</Text>
        <Text style={styles.education}>JNTU – India, 2015</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlights & Achievements</Text>
        <Text style={styles.highlight}>• Delivered 99.99% uptime across financial SaaS systems</Text>
        <Text style={styles.highlight}>• Reduced deployment cycles by 40% through GitOps-driven ArgoCD pipelines</Text>
        <Text style={styles.highlight}>• Championed Infrastructure as Code practices using Terraform and Ansible</Text>
        <Text style={styles.highlight}>• Integrated centralized monitoring solutions for proactive alerting</Text>
        <Text style={styles.highlight}>• Automated database lifecycle processes via Kubernetes and CI/CD pipelines</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;