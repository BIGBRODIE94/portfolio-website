import './Resume.css'
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Affan_Chowdhury_Resume.pdf'
    link.download = 'Affan_Chowdhury_Cloud_Engineer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handleView = () => {
    window.open('/Affan_Chowdhury_Resume.pdf', '_blank')
  }

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>
          <span className="terminal-prompt">$ cat resume.json |</span> jq
        </h1>
        <div className="resume-actions">
          <button className="download-btn view-btn" onClick={handleView}>
            📄 View PDF
          </button>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload /> Download PDF
          </button>
        </div>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <h2><FaBriefcase /> Professional Experience</h2>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Sr. Cloud Engineer – DevEx</h3>
              <span className="date">Dec 2025 - Present</span>
            </div>
            <h4>PricewaterhouseCoopers (PwC)</h4>
            <ul className="exp-list">
              <li>Architected end-to-end Azure Cloud Migration Automation Platform using Python, Temporal, and Azure SDK — automating migrations across 500+ subscriptions and 57,000+ cloud resources, reducing per-subscription migration time from 3 days to under 10 seconds</li>
              <li>Engineered Policy Compliance & Exemption Engine applying 184+ resource-level exemptions per migration cycle via Azure REST APIs, integrating with ServiceNow ITSM for automated RITM ticket creation</li>
              <li>Designed Temporal-based microservices workflows with multi-identity SPN authentication, tag drift validation, Management Group traversal, and post-migration compliance verification</li>
              <li>Built automated Azure Landing Zone Registration System and CAG Generator mapping 47+ subnets across VNets to logical environments (Dev/QA/Stage/Prod) with Entra ID RBAC provisioning</li>
              <li>Delivered full-stack cloud governance suite integrating Azure Policy Insights, Cosmos DB, Key Vault, Resource Graph API, and Docker-containerized Temporal workers — processing 690+ policy differences and 98 RBAC assignments per application</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Synthetic Data Engineer</h3>
              <span className="date">Dec 2025 - Present</span>
            </div>
            <h4>Sepal AI</h4>
            <ul className="exp-list">
              <li>Architected observability evaluation infrastructure (ClickHouse, Grafana, Docker-in-Docker) with 3-tier grading system processing 200+ problem definitions across 27 real-world incidents; automated TAIGA/Jinja2/MCP workflow testing 7 incident types (network latency, JVM OOM, CPU saturation, cascading failures) with 100% deterministic accuracy and semantic similarity validation</li>
              <li>Implemented intelligent grading system with 3-tier criterion validation (deterministic matching at 100% accuracy, semantic similarity with 0.7 threshold, temporal tolerance of ±60 seconds) processing timestamp, component IDs, and root cause descriptions across 20+ problem definitions</li>
              <li>Automated end-to-end evaluation workflow using TAIGA framework, Jinja2 templates, and MCP protocol, orchestrating Docker images with custom startup commands and resource constraints (4 vCPU + 16 GiB) for scalable DevOps AI testing</li>
              <li>Delivered comprehensive RCA dataset covering 7 incident types (network latency, memory exhaustion, JVM OOM, CPU saturation, I/O bottlenecks, connection pool limits, cascading failures) with quantifiable metrics and chronological timeline analysis</li>
              <li>Engineered AIOps observability infrastructure generating 36.1M-row dataset across 72-hour simulation of 18-microservice application (Kubernetes, Helm, Chaos Mesh, Prometheus, Jaeger, MongoDB); implemented cascading failures, resource contention, and automated fault injection (wrk2) with 15-second metric granularity across logs, traces, and metrics</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Cloud Engineer</h3>
              <span className="date">Jul 2025 - Nov 2025</span>
            </div>
            <h4>Strategic Business Systems</h4>
            <ul className="exp-list">
              <li>Built and maintained GitOps-driven CI/CD pipelines (AWS CodePipeline, CodeBuild, CodeDeploy, ArgoCD, Flux) with integrated Wiz security scanning, reducing deployment time by 75% and ensuring automated compliance validation</li>
              <li>Established cloud security & compliance frameworks (CloudWatch, CloudTrail, RegScale, Netskope, Wiz), achieving 99.9% uptime and adherence to FISMA, NIST, and DoD standards</li>
              <li>Deployed AWS Parallel Cluster with Terraform and FSx for Lustre/S3, cutting HPC setup time by 60% across 10+ research pipelines, ensuring reproducible clusters via IaC</li>
              <li>Automated Slurm job scheduling with Python/Bash, reducing manual management by 70%, boosting cluster utilization by 35%, and integrating performance metrics into CloudWatch/Grafana dashboards for observability</li>
              <li>Restructured and automated 10+ VDMS/VDSS security playbooks, enabling rapid incident response and remediation across all cloud environments; playbooks were used by 15+ cloud engineers</li>
              <li>Transformed Landing Zone Accelerator (LZA) in test environments, enhancing cloud security automation, reducing configuration errors by 30%, and improving scalability through advanced configuration patterns</li>
              <li>Leveraged serverless architectures (Lambda, SAM, and EventBridge) to automate compliance workflows and monitoring, reducing manual audit tasks by 40%</li>
              <li>Designed multi-cloud integration pipelines (AWS + GCP) with Terraform and Jenkins, reducing deployment durations by 55% and cutting configuration errors by 45%</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>AWS Cloud Engineer</h3>
              <span className="date">Jun 2022 - Nov 2024</span>
            </div>
            <h4>Amazon Web Services</h4>
            <ul className="exp-list">
              <li>Deployed self-healing infrastructure using AWS CloudFormation and CI/CD pipelines, decreasing MTTR by 30% and saving over 200 hours monthly</li>
              <li>Restructured Python-driven automation framework with AWS CDK, saving 200 developer-hours monthly and accelerating incident resolution by 30%</li>
              <li>Integrated CloudWatch Insights and Event Bridge for anomaly detection, improving system uptime to 99.95% and cutting incident investigation by 45%</li>
              <li>Developed secure batch data pipelines (S3, Glue ETL, Databricks Delta Lake) scaling to 5 TB daily, reducing ETL runtime by 45%</li>
              <li>Automated Terraform-driven GCP deployment pipelines with Jenkins and GitLab CI, reducing deployment durations by 55%</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Associate AWS Cloud Engineer</h3>
              <span className="date">Aug 2021 - May 2022</span>
            </div>
            <h4>Amazon Web Services</h4>
            <ul className="exp-list">
              <li>Engineered CloudFormation, Service Catalog, and Control Tower IaC blueprints for multi-account AWS provisioning, reducing environment setup time by 40% and manual configuration errors by 70% across 500+ accounts</li>
              <li>Established migration of 150+ GCP workloads to AWS with Terraform and CloudFormation, architecting VPCs, IAM policies, and CI/CD pipelines, increasing application performance by 30%, reducing cloud spend by 20%, and enhancing resource utilization by 25%</li>
              <li>Deployed blue/green CI/CD pipelines using AWS tools; slashed deployment errors by 45% by integrating tooling with GitHub Actions and Parameter Store; boosted release frequency by 50%</li>
              <li>Upgraded secure batch data pipelines integrating AWS S3, Glue ETL, and Databricks Delta Lake implementing end-to-end encryption, scaling to process 5 TB daily, reducing ETL runtime by 45%, and boosting analytics throughput by 60%</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Cloud Operations Engineer II</h3>
              <span className="date">Jun 2021 - Jul 2021</span>
            </div>
            <h4>TEKSystems – Arctic IT</h4>
            <ul className="exp-list">
              <li>Orchestrated configuration management automation via Puppet, Chef, and OpsWorks to standardize 80+ operational tasks, boosting team productivity by 25%, reducing configuration errors by 30%, and cutting incident triage time by 40%</li>
              <li>Integrated Terraform and Ansible automation into GitLab CI/CD pipelines, eliminating 40% of manual deployment steps, accelerating release frequency by 50%, ensuring consistent environment provisioning across staging and production, and boosting developer efficiency by 35%</li>
              <li>Collaborated with data engineering teams to integrate Databricks job monitoring into AWS CloudWatch with custom alarms and Lambda notifications, reducing failure detection time by 80%, improving pipeline reliability to 99.8%, and automating incident remediation workflows</li>
              <li>Implemented AWS CloudFormation and CDK secure deployment pipelines with integrated IAM least-privilege policies and AWS Config guardrails, achieving 100% SOC 2 and GovCloud compliance, reducing audit remediation tasks by 80% and compliance validation time by 60%</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>AWS Cloud Infrastructure Engineer III</h3>
              <span className="date">Apr 2020 - Feb 2021</span>
            </div>
            <h4>TEKSystems – Bank of America</h4>
            <ul className="exp-list">
              <li>Streamlined cloud infrastructure workflows with Python and Bash, eliminating 200+ manual hours annually and boosting efficiency by 35%</li>
              <li>Automated 75% of routine GCP infrastructure tasks using Cloud Scheduler and Cloud Functions, saving 250+ developer hours annually</li>
              <li>Implemented Databricks workspace provisioning with Terraform, reducing provisioning time by 65% and supporting 300+ analyst deployments</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Cloud Infrastructure Engineer</h3>
              <span className="date">Feb 2019 - Aug 2019</span>
            </div>
            <h4>TEKsystems – Textron's Bell Flight</h4>
            <ul className="exp-list">
              <li>Automated container provisioning using Kubernetes, Docker, AWS ECS, and Helm charts, boosting system uptime by 35% and scalability by 40%</li>
              <li>Enhanced cloud performance by 30% through Terraform IaC modules and redesigned AWS VPC layouts, cutting latency by 25%</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2><FaGraduationCap /> Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of Texas at Dallas</p>
            <span className="date">Richardson, TX</span>
          </div>
        </section>

        <section className="resume-section">
          <h2><FaCertificate /> Certifications</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-badge aws">AWS</div>
              <h4>AWS Certified Solutions Architect</h4>
              <p>Professional Level</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge aws">AWS</div>
              <h4>AWS Certified DevOps Engineer</h4>
              <p>Professional Level</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge k8s">K8S</div>
              <h4>Certified Kubernetes Administrator</h4>
              <p>CNCF</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge terraform">HC</div>
              <h4>HashiCorp Certified: Terraform</h4>
              <p>Associate</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>💻 Technical Skills</h2>
          <div className="skills-matrix">
            <div className="skill-row">
              <span className="skill-label">Cloud Platforms:</span>
              <div className="skill-bars">
                <div className="skill-bar aws-bar">AWS (Advanced) | Azure (Advanced) | GCP</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Containers:</span>
              <div className="skill-bars">
                <div className="skill-bar docker-bar">Docker, Kubernetes, ECS, EKS, AKS, Helm, Tanzu, Rancher</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">IaC & Config:</span>
              <div className="skill-bars">
                <div className="skill-bar iac-bar">Terraform, CloudFormation, CDK, SAM, Ansible, Puppet, Chef</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Languages:</span>
              <div className="skill-bars">
                <div className="skill-bar lang-bar">Python, Bash, JavaScript, TypeScript, C, C#, C++, Java, Go</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">CI/CD:</span>
              <div className="skill-bars">
                <div className="skill-bar cicd-bar">Jenkins, GitLab CI, GitHub Actions, AWS CodePipeline, ArgoCD, Azure DevOps</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Monitoring:</span>
              <div className="skill-bars">
                <div className="skill-bar monitor-bar">CloudWatch, Prometheus, Grafana, Datadog, Dynatrace, Splunk, Jaeger</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Data & AI:</span>
              <div className="skill-bars">
                <div className="skill-bar lang-bar">Databricks, Glue ETL, Kafka, Spark, Bedrock, SageMaker, ClickHouse</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
