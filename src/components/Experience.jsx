import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Cloud Engineer – DevEx",
      company: "PricewaterhouseCoopers (PwC)",
      period: "Dec 2025 - Present",
      location: "Hybrid",
      description: "Leading Azure cloud migration automation, policy compliance engineering, and developer experience platform integration for enterprise clients.",
      achievements: [
        "Architected and developed an end-to-end Azure Cloud Migration Automation Platform using Python, Temporal Workflow Orchestration, and Azure SDK, automating subscription migrations from legacy NGC to CloudCore across 500+ subscriptions and 57,000+ cloud resources, reducing per-subscription migration time from 3 days to under 10 seconds — a 99.9% reduction in manual effort",
        "Engineered a Policy Compliance & Exemption Engine that programmatically detects Audit-to-Deny policy shifts, auto-generates ARM-compliant Azure Policy Exemptions, and applies 184+ resource-level exemptions per migration cycle via Azure REST APIs, integrating with ServiceNow ITSM for automated RITM ticket creation and ensuring zero compliance gaps during migration",
        "Designed and implemented Temporal-based microservices workflows with multi-identity Service Principal (SPN) authentication, pre-migration tag drift validation, Management Group hierarchy traversal, and post-migration compliance verification — supporting multiple compliance boundaries (USTAX, Standard Engineering) and generating structured audit trail reports for enterprise governance review",
        "Built an automated Azure Landing Zone Registration System and Cloud Access Group (CAG) Generator that maps 47+ subnets across VNets to logical environments (Dev/QA/Stage/Prod), provisions Entra ID RBAC groups with role-mapping from legacy to approved CloudCore roles, and registers environments via the DevEx Platform API — eliminating manual onboarding and enabling scalable, repeatable infrastructure provisioning",
        "Delivered a full-stack cloud governance automation suite integrating Azure Policy Insights, Cosmos DB, Azure Key Vault, Resource Graph API, and Docker-containerized Temporal workers, processing 690+ policy differences and 98 RBAC assignments per application, with dry-run simulation models, batch parallel processing on Azure DevOps"
      ],
      technologies: ["Azure", "Python", "Temporal", "Azure SDK", "Azure REST APIs", "ServiceNow", "Cosmos DB", "Key Vault", "Resource Graph API", "Docker", "Azure DevOps", "Entra ID", "RBAC"],
      impact: "Reduced per-subscription migration time from 3 days to under 10 seconds across 500+ subscriptions and 57,000+ cloud resources"
    },
    {
      title: "Synthetic Data Engineer",
      company: "Sepal AI",
      period: "Dec 2025 - Present",
      location: "Remote",
      description: "Architecting observability evaluation infrastructure and AIOps datasets for AI-driven incident response testing and root cause analysis.",
      achievements: [
        "Architected observability evaluation infrastructure (ClickHouse, Grafana, Docker-in-Docker) with 3-tier grading system processing 200+ problem definitions across 27 real-world incidents; automated TAIGA/Jinja2/MCP workflow testing 7 incident types (network latency, JVM OOM, CPU saturation, cascading failures) with 100% deterministic accuracy and semantic similarity validation",
        "Implemented intelligent grading system with 3-tier criterion validation (deterministic matching at 100% accuracy, semantic similarity with 0.7 threshold, temporal tolerance of ±60 seconds) processing timestamp, component IDs, and root cause descriptions across 20+ problem definitions",
        "Automated end-to-end evaluation workflow using TAIGA framework, Jinja2 templates, and MCP protocol, orchestrating Docker images with custom startup commands and resource constraints (4 vCPU + 16 GiB) for scalable DevOps AI testing",
        "Delivered comprehensive RCA dataset covering 7 incident types (network latency, memory exhaustion, JVM OOM, CPU saturation, I/O bottlenecks, connection pool limits, cascading failures) with quantifiable metrics and chronological timeline analysis",
        "Engineered AIOps observability infrastructure generating 36.1M-row dataset across 72-hour simulation of 18-microservice application (Kubernetes, Helm, Chaos Mesh, Prometheus, Jaeger, MongoDB); implemented cascading failures, resource contention, and automated fault injection (wrk2) with 15-second metric granularity across logs, traces, and metrics"
      ],
      technologies: ["ClickHouse", "Grafana", "Docker", "Kubernetes", "Helm", "Chaos Mesh", "Prometheus", "Jaeger", "MongoDB", "TAIGA", "Jinja2", "MCP", "Python"],
      impact: "Generated 36.1M-row AIOps dataset with 100% deterministic accuracy across 27 real-world incident scenarios"
    },
    {
      title: "Cloud Engineer",
      company: "Strategic Business Systems",
      period: "Jul 2025 - Nov 2025",
      location: "On-Site",
      description: "Built GitOps-driven CI/CD pipelines, established cloud security frameworks, and deployed HPC infrastructure for mission-critical government applications.",
      achievements: [
        "Built and maintained GitOps-driven CI/CD pipelines (AWS CodePipeline, CodeBuild, CodeDeploy, ArgoCD, Flux) with integrated Wiz security scanning, reducing deployment time by 75% and ensuring automated compliance validation",
        "Established cloud security & compliance frameworks (CloudWatch, CloudTrail, RegScale, Netskope, Wiz), achieving 99.9% uptime and adherence to FISMA, NIST, and DoD standards",
        "Deployed AWS Parallel Cluster with Terraform and FSx for Lustre/S3, cutting HPC setup time by 60% across 10+ research pipelines, ensuring reproducible clusters via IaC",
        "Automated Slurm job scheduling with Python/Bash, reducing manual management by 70%, boosting cluster utilization by 35%, and integrating performance metrics into CloudWatch/Grafana dashboards for observability",
        "Restructured and automated 10+ VDMS/VDSS security playbooks, enabling rapid incident response and remediation across all cloud environments; playbooks were used by 15+ cloud engineers",
        "Transformed Landing Zone Accelerator (LZA) in test environments, enhancing cloud security automation, reducing configuration errors by 30%, and improving scalability through advanced configuration patterns",
        "Leveraged serverless architectures (Lambda, SAM, and EventBridge) to automate compliance workflows and monitoring, reducing manual audit tasks by 40%",
        "Designed multi-cloud integration pipelines (AWS + GCP) with Terraform and Jenkins, reducing deployment durations by 55% and cutting configuration errors by 45%"
      ],
      technologies: ["AWS", "CodePipeline", "CodeBuild", "CodeDeploy", "ArgoCD", "Flux", "Wiz", "Terraform", "Parallel Cluster", "FSx", "Slurm", "Lambda", "SAM", "EventBridge", "RegScale", "Netskope"],
      impact: "Reduced deployment time by 75%, cut HPC setup time by 60%, and ensured 99.9% uptime with full FISMA/NIST/DoD compliance"
    },
    {
      title: "AWS Cloud Engineer",
      company: "Amazon Web Services",
      period: "Jun 2022 - Nov 2024",
      location: "Remote",
      description: "Deployed self-healing infrastructure and restructured automation frameworks to optimize cloud operations and reduce incident response times.",
      achievements: [
        "Deployed self-healing infrastructure using AWS CloudFormation and CI/CD pipelines to remediate errors, decreasing mean time to repair (MTTR) by 30% and saving over 200 hours monthly",
        "Restructured a Python-driven internal automation framework with AWS CDK, CloudFormation, and CI/CD integration to auto diagnose and remediate production infrastructure, saving 200 developer-hours monthly and accelerating incident resolution by 30%",
        "Integrated AWS CloudWatch Insights and Event Bridge to detect anomalies via custom metrics and alerts, reducing mean time to recovery (MTTR) by 35%, improving system uptime to 99.95%, and cutting incident investigation by 45%",
        "Developed secure batch data pipelines integrating AWS S3, Glue ETL, and Databricks Delta Lake — implementing end-to-end encryption, scaling to process 5 TB daily, reducing ETL runtime by 45%, and boosting analytics throughput by 60%",
        "Automated Terraform-driven GCP deployment pipelines using custom Terraform modules, integrated with Jenkins and GitLab CI to automate infrastructure provisioning and application delivery, reducing deployment durations by 55%, cutting configuration errors by 45%"
      ],
      technologies: ["AWS", "CloudFormation", "CDK", "CloudWatch", "Event Bridge", "S3", "Glue ETL", "Databricks", "Terraform", "GCP", "Jenkins", "GitLab CI", "Python"],
      impact: "Saved 200+ hours monthly, improved system uptime to 99.95%, and reduced deployment durations by 55%"
    },
    {
      title: "Associate AWS Cloud Engineer",
      company: "Amazon Web Services",
      period: "Aug 2021 - May 2022",
      location: "Remote",
      description: "Engineered CloudFormation blueprints and established migration of GCP workloads to AWS with comprehensive automation and security frameworks.",
      achievements: [
        "Engineered CloudFormation, Service Catalog, and Control Tower IaC blueprints for multi-account AWS provisioning, reducing environment setup time by 40% and manual configuration errors by 70% across 500+ accounts",
        "Established migration of 150+ GCP workloads to AWS with Terraform and CloudFormation, architecting VPCs, IAM policies, and CI/CD pipelines, increasing application performance by 30%, reducing cloud spend by 20%, and enhancing resource utilization by 25%",
        "Deployed blue/green CI/CD pipelines using AWS tools; slashed deployment errors by 45% by integrating tooling with GitHub Actions and Parameter Store; boosted release frequency by 50%",
        "Upgraded secure batch data pipelines integrating AWS S3, Glue ETL, and Databricks Delta Lake implementing end-to-end encryption, scaling to process 5 TB daily, reducing ETL runtime by 45%, and boosting analytics throughput by 60%"
      ],
      technologies: ["AWS", "CloudFormation", "Service Catalog", "Control Tower", "Terraform", "VPC", "IAM", "CI/CD", "GitHub Actions", "S3", "Glue ETL", "Databricks", "GCP"],
      impact: "Reduced environment setup time by 40%, decreased cloud spend by 20%, and boosted release frequency by 50%"
    },
    {
      title: "Cloud Operations Engineer II",
      company: "TEKSystems – Arctic IT",
      period: "Jun 2021 - Jul 2021",
      location: "Plano, TX",
      description: "Orchestrated configuration management automation and integrated comprehensive CI/CD pipelines with security compliance frameworks.",
      achievements: [
        "Orchestrated configuration management automation via Puppet, Chef, and OpsWorks to standardize 80+ operational tasks, boosting team productivity by 25%, reducing configuration errors by 30%, and cutting incident triage time by 40%",
        "Integrated Terraform and Ansible automation into GitLab CI/CD pipelines, eliminating 40% of manual deployment steps, accelerating release frequency by 50%, ensuring consistent environment provisioning across staging and production, and boosting developer efficiency by 35%",
        "Collaborated with data engineering teams to integrate Databricks job monitoring into AWS CloudWatch with custom alarms and Lambda notifications, reducing failure detection time by 80%, improving pipeline reliability to 99.8%, and automating incident remediation workflows",
        "Implemented AWS CloudFormation and CDK secure deployment pipelines with integrated IAM least-privilege policies and AWS Config guardrails, achieving 100% SOC 2 and GovCloud compliance, reducing audit remediation tasks by 80% and compliance validation time by 60%"
      ],
      technologies: ["Puppet", "Chef", "OpsWorks", "Terraform", "Ansible", "GitLab CI/CD", "Databricks", "CloudWatch", "Lambda", "CloudFormation", "CDK", "IAM", "AWS Config", "SOC 2", "GovCloud"],
      impact: "Boosted team productivity by 25%, accelerated release frequency by 50%, and achieved 100% SOC 2 and GovCloud compliance"
    },
    {
      title: "AWS Cloud Infrastructure Engineer III",
      company: "TEKSystems – Bank of America",
      period: "Apr 2020 - Feb 2021",
      location: "Remote",
      description: "Streamlined cloud infrastructure workflows and automated routine tasks for enterprise-scale banking environments.",
      achievements: [
        "Streamlined cloud infrastructure workflows with Python and Bash scripts, eliminating 200+ manual hours annually and boosting team efficiency by 35%, while standardizing repeatable processes, centralizing logic in reusable modules, and enhancing operational consistency across environments",
        "Automated 75% of routine GCP infrastructure tasks using Python and Bash scripts integrated with Cloud Scheduler and Cloud Functions, leveraging Infrastructure-as-Code best practices, increasing operational efficiency by 40%, saving 250+ developer hours annually",
        "Implemented AWS Databricks workspace and notebook provisioning with Terraform and AWS SDK, leveraging modular IaC best practices, reducing provisioning time by 65%, enabling auto-scaling clusters, improving utilization by 30%, and supporting 300+ analyst deployments annually"
      ],
      technologies: ["Python", "Bash", "GCP", "Cloud Scheduler", "Cloud Functions", "AWS", "Databricks", "Terraform", "AWS SDK"],
      impact: "Eliminated 200+ manual hours annually, saved 250+ developer hours, and supported 300+ analyst deployments"
    },
    {
      title: "Cloud Infrastructure Engineer",
      company: "TEKsystems – Textron's Bell Flight",
      period: "Feb 2019 - Aug 2019",
      location: "Fort Worth, TX",
      description: "Automated container provisioning and enhanced cloud performance and reliability for aerospace and defense infrastructure.",
      achievements: [
        "Automated container provisioning and deployments using Kubernetes, Docker, AWS ECS, Helm charts, and auto-scaling groups, boosting system uptime by 35%, improving horizontal scalability by 40%, and reducing resource contention by 25%",
        "Enhanced cloud performance and reliability by 30% through Terraform IaC modules, rigorous code reviews, and redesigning AWS VPC layouts with optimized auto-scaling policies, cutting latency by 25% and eliminating single points of failure in production"
      ],
      technologies: ["Kubernetes", "Docker", "AWS ECS", "Helm", "Terraform", "AWS VPC", "Auto Scaling"],
      impact: "Boosted system uptime by 35%, improved scalability by 40%, and cut latency by 25%"
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1>EXPERIENCE</h1>
        <p className="experience-subtitle">Building the future of cloud infrastructure</p>
      </div>

      <div className="experience-content">
        <div className="experience-section">
          <h2 className="section-title">Professional Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header-card">
                <div className="experience-title-section">
                  <h3 className="job-title">{exp.title}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              
              <p className="job-description">{exp.description}</p>
              
              <div className="achievements-section">
                <h5>Achievements & Responsibilities:</h5>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      <span className="achievement-bullet">▶</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="impact-section">
                <h5>Impact:</h5>
                <p className="impact-text">{exp.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
