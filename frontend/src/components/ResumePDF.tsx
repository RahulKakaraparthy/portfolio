import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register custom fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf' },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: '#4a5568',
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2d3748',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 4,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 11,
    color: '#4a5568',
    marginBottom: 4,
  },
  period: {
    fontSize: 10,
    color: '#718096',
    marginBottom: 4,
  },
  achievement: {
    fontSize: 10,
    marginBottom: 3,
    marginLeft: 15,
  },
  bullet: {
    marginRight: 5,
  },
  skillSection: {
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  skillItem: {
    fontSize: 10,
    color: '#4a5568',
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Rahul Kakaraparthy</Text>
        <Text style={styles.contact}>Location: Toronto, Ontario</Text>
        <Text style={styles.contact}>Phone: +1 647-739-5277</Text>
        <Text style={styles.contact}>Email: rahulganesh.kakaraparthy@gmail.com</Text>
        <Text style={styles.contact}>LinkedIn: www.linkedin.com/in/rahul-kakaraparthy-782437138</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.skillItem}>
          Senior DevOps Engineer with 8+ years of experience in cloud infrastructure, CI/CD, and DevOps practices. 
          Expertise in Azure/AWS, Kubernetes, and infrastructure automation.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Senior Software Engineer – DevOps</Text>
          <Text style={styles.company}>FIS Global</Text>
          <Text style={styles.period}>Feb 2022 – Present</Text>
          <Text style={styles.achievement}>• Designed and maintained CI/CD pipelines using Azure DevOps and Jenkins</Text>
          <Text style={styles.achievement}>• Implemented security scanning with Veracode, Checkmarx, and CXOne</Text>
          <Text style={styles.achievement}>• Managed AKS clusters and Azure Container Registry</Text>
          <Text style={styles.achievement}>• Automated Azure infrastructure using Terraform and ARM templates</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>DevOps Engineer</Text>
          <Text style={styles.company}>Fidelity Investments</Text>
          <Text style={styles.period}>Mar 2019 – Feb 2022</Text>
          <Text style={styles.achievement}>• Built AWS-based CI/CD frameworks with Jenkins and Terraform</Text>
          <Text style={styles.achievement}>• Implemented GitOps workflows using ArgoCD</Text>
          <Text style={styles.achievement}>• Reduced release cycle time by 50% through automation</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Cloud Engineer</Text>
          <Text style={styles.company}>Accenture</Text>
          <Text style={styles.period}>Aug 2016 – Jan 2019</Text>
          <Text style={styles.achievement}>• Migrated infrastructure to AWS using Terraform and Ansible</Text>
          <Text style={styles.achievement}>• Developed IAM automation and CloudFormation templates</Text>
          <Text style={styles.achievement}>• Implemented monitoring solutions with CloudWatch</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        
        <View style={styles.skillSection}>
          <Text style={styles.skillCategory}>Cloud Platforms</Text>
          <Text style={styles.skillItem}>Azure (AKS, ACR, Functions, App Services), AWS (EC2, EKS, S3, RDS)</Text>
        </View>
        
        <View style={styles.skillSection}>
          <Text style={styles.skillCategory}>DevOps & CI/CD</Text>
          <Text style={styles.skillItem}>Azure DevOps, Jenkins, ArgoCD, Docker, Kubernetes, Helm</Text>
        </View>
        
        <View style={styles.skillSection}>
          <Text style={styles.skillCategory}>Infrastructure as Code</Text>
          <Text style={styles.skillItem}>Terraform, ARM Templates, Ansible, CloudFormation</Text>
        </View>
        
        <View style={styles.skillSection}>
          <Text style={styles.skillCategory}>Security & Monitoring</Text>
          <Text style={styles.skillItem}>Veracode, Checkmarx, Azure Monitor, App Insights, ELK Stack</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Bachelor of Technology – Computer Science Engineering</Text>
        <Text style={styles.company}>JNTU – India, 2015</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;