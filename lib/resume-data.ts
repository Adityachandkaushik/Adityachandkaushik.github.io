// Single source of truth — transcribed exactly from Aditya's resume PDF.
// Every section of the site pulls from this file. No invented content.

export const profile = {
  name: "Aditya Kaushik",
  role: "DevOps Engineer",
  location: "Noida, India",
  phone: "+91-9519829937",
  phoneHref: "tel:+919519829937",
  email: "adityachandkaushik1234@gmail.com",
  emailHref: "mailto:adityachandkaushik1234@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditya-kaushik-11b39b276/",
  linkedinLabel: "linkedin.com/in/aditya-kaushik",
  github: "https://github.com/Adityachandkaushik",
  githubLabel: "github.com/Adityachandkaushik",
  githubUsername: "Adityachandkaushik",
  currentTitle: "DevOps Engineer @ MetConnect Infotech",
  summary:
    "DevOps Engineer with hands-on experience in deploying, configuring, and maintaining production-grade web applications on Linux and AWS environments. Skilled in application deployment on EC2, Nginx reverse proxy configuration, SSL/HTTPS setup, PM2 process management, Jenkins CI/CD pipelines, and secure credential handling. Experienced in resolving production issues related to API routing, domain and DNS configuration, MIME type errors, mixed content issues, and live media streaming, with a strong focus on reliability, uptime, and smooth release delivery.",
  focusAreas: [
    "Linux",
    "AWS",
    "Docker",
    "CI/CD",
    "Infrastructure Automation",
    "Production Deployments",
  ],
  taglines: [
    "Building Scalable Cloud Infrastructure",
    "Automating Production Deployments",
    "DevOps Engineer @ MetConnect Infotech",
  ],
  resumeFile: "/resume/Aditya_Kaushik_Resume.pdf",
};

export const education = {
  school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  degree: "B.Tech – Computer Science and Engineering (CGPA: 8.0)",
  location: "Uttar Pradesh",
  period: "2022 – 2026",
};

export const experience = [
  {
    id: "metconnect",
    company: "MetConnect Infotech Private Limited",
    role: "DevOps Engineer",
    stack: "AWS, Nginx, CI/CD, Linux",
    location: "India",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Deployed and managed The Brilliant Bihar web application on AWS EC2 instances.",
      "Configured Nginx reverse proxy for frontend-backend communication, API routing, and domain mapping.",
      "Set up and maintained SSL/HTTPS for secure application access.",
      "Managed backend services using PM2 to ensure process stability and uptime.",
      "Created and configured Jenkins CI/CD pipelines for automated build and deployment workflows.",
      "Integrated GitHub credentials, SSH deploy keys, and secure access configuration for deployment automation.",
      "Troubleshot and resolved production issues including 404 errors, MIME type issues, mixed content errors, and backend connectivity failures.",
      "Worked with AWS services such as EC2, S3, CloudWatch, and DNS/domain configuration for deployment and monitoring.",
      "Supported live streaming and media delivery setup, including debugging HLS (.m3u8) playback issues.",
    ],
  },
  {
    id: "bytecode",
    company: "BYTE CODE IT Solutions",
    role: "DevOps Engineer Intern",
    stack: "Docker, Jenkins, Linux",
    location: "Kanpur, India",
    period: "Jan 2025 – May 2025",
    current: false,
    bullets: [
      "Assisted in setting up basic CI/CD pipelines using Jenkins and Docker for application deployment.",
      "Worked on Docker containerization and deployment of applications in a Linux environment.",
      "Supported server setup, debugging, and deployment tasks, gaining hands-on experience in real-world workflows.",
    ],
  },
];

// "Production Challenges Solved" — used in both the Experience section and
// as the dedicated hero-project deep dive. Root-caused, resume-accurate.
export const productionChallenges = [
  {
    id: "404",
    title: "404 Errors",
    problem:
      "Users and API clients intermittently hit 404 Not Found on routes that existed and worked locally.",
    rootCause:
      "Nginx location blocks and reverse-proxy routing were not aligned with the frontend build's client-side routes and the backend's API prefix, so requests fell through to the wrong upstream.",
    solution:
      "Rewrote Nginx location and try_files rules, separated API routing from static asset routing, and validated every route against the deployed build on EC2.",
    impact: "Eliminated route-not-found errors across the production app and API.",
  },
  {
    id: "mime",
    title: "MIME Type Errors",
    problem:
      "Browsers refused to execute JS/CSS assets, throwing MIME type errors after deployment.",
    rootCause:
      "Static assets were being served with incorrect or missing Content-Type headers due to Nginx path/location mismatches after build output changed.",
    solution:
      "Corrected Nginx static file locations and headers so JS, CSS, and font assets served with proper MIME types.",
    impact: "Removed render-blocking MIME errors and restored a clean production build.",
  },
  {
    id: "mixed-content",
    title: "Mixed Content Issues",
    problem:
      "Pages served over HTTPS were blocking HTTP sub-resources, breaking parts of the UI in production.",
    rootCause:
      "Some backend/API calls and asset references were hard-coded to HTTP while the app was served over HTTPS post SSL setup.",
    solution:
      "Standardized all internal calls and asset URLs to HTTPS behind the Nginx reverse proxy and enforced secure headers.",
    impact: "Fully secure page loads with no blocked mixed-content resources.",
  },
  {
    id: "ssl",
    title: "SSL/HTTPS Configuration",
    problem:
      "The application needed to be served securely on a custom domain without downtime.",
    rootCause: "No SSL/HTTPS termination existed for the mapped production domain.",
    solution: "Set up and maintained SSL/HTTPS termination at the Nginx layer for the production domain.",
    impact: "Secure, trusted access to the application with no certificate-related warnings.",
  },
  {
    id: "dns",
    title: "Domain & DNS Mapping",
    problem: "The production build needed to resolve reliably under the company's domain.",
    rootCause:
      "Domain and DNS configuration had to be tied to the EC2-hosted app and kept in sync with Route53.",
    solution:
      "Configured domain mapping and DNS records via Route53, aligned with the Nginx server_name and SSL certificate.",
    impact: "Stable domain resolution to the correct production instance at all times.",
  },
  {
    id: "reverse-proxy",
    title: "Reverse Proxy Configuration",
    problem: "Frontend and backend services needed to be reachable through a single, secure entry point.",
    rootCause: "Frontend and backend ran as separate processes on the same EC2 instance without a unified routing layer.",
    solution:
      "Configured Nginx as a reverse proxy in front of both services, routing by path and upgrading connections where required.",
    impact: "Clean single-origin access for users with correct frontend/backend separation.",
  },
  {
    id: "api-routing",
    title: "Backend API Routing",
    problem: "Frontend requests to backend API endpoints failed or connected to the wrong service.",
    rootCause: "API path prefixes were not consistently proxied, causing frontend-backend connectivity failures.",
    solution: "Defined explicit Nginx location blocks for API prefixes and validated frontend-backend connectivity end to end.",
    impact: "Reliable frontend-backend communication with no dropped API calls.",
  },
  {
    id: "pm2",
    title: "PM2 Process Recovery",
    problem: "Backend processes could crash or stop, risking downtime for the production app.",
    rootCause: "No persistent process manager was guaranteeing uptime or automatic restarts for backend services.",
    solution: "Managed backend services using PM2 for process stability, auto-restart, and uptime monitoring.",
    impact: "Consistent backend uptime and fast recovery from process failures.",
  },
  {
    id: "hls",
    title: "HLS (.m3u8) Streaming Issues",
    problem: "Live streaming and media delivery had playback issues in production.",
    rootCause:
      "HLS (.m3u8) manifests and segments needed correct proxying, headers, and routing to play reliably through the reverse proxy.",
    solution: "Debugged and fixed HLS (.m3u8) playback issues as part of supporting live streaming and media delivery.",
    impact: "Reliable live streaming and media playback for end users.",
  },
  {
    id: "deploy-failures",
    title: "Deployment Failures",
    problem: "Manual deployment steps were slow and error-prone, increasing the risk of failed releases.",
    rootCause: "Builds and deploys depended on manual SSH steps rather than an automated, repeatable pipeline.",
    solution:
      "Built a Jenkins CI/CD pipeline with GitHub integration, credentials, and SSH deploy keys to automate builds and deployments.",
    impact: "Reduced manual deployment effort by 50%.",
  },
  {
    id: "jenkins-debug",
    title: "Jenkins Pipeline Debugging",
    problem: "CI/CD pipeline runs needed to be secure, repeatable, and free of credential leakage.",
    rootCause:
      "Deployment automation required secure GitHub credentials and SSH deploy key handling inside Jenkins jobs.",
    solution:
      "Created and configured Jenkins CI/CD pipelines with secure credential handling and SSH deploy key integration for automated build and deployment workflows.",
    impact: "Repeatable, secure automated deployments from GitHub to production.",
  },
  {
    id: "static-assets",
    title: "Static Asset Issues",
    problem: "Some static assets failed to load or resolved incorrectly after deployment.",
    rootCause: "Static asset paths and Nginx serving rules didn't match the frontend's production build output.",
    solution: "Reconfigured Nginx for correct frontend hosting, static asset paths, and domain binding as part of the production server setup.",
    impact: "Consistently loading static assets across the deployed frontend.",
  },
];

// Deployment pipeline for The Brilliant Bihar, as described in the resume:
// EC2 + Nginx + PM2 + Jenkins/GitHub CI-CD + SSL + monitoring.
export const brilliantBiharPipeline = [
  { id: "dev", label: "Developer", detail: "Code pushed to GitHub" },
  { id: "github", label: "GitHub", detail: "Source + credentials + SSH deploy keys" },
  { id: "jenkins", label: "Jenkins CI/CD", detail: "Automated build & deploy pipeline" },
  { id: "build", label: "Build", detail: "Production build generated" },
  { id: "ec2", label: "AWS EC2", detail: "Production server environment" },
  { id: "nginx", label: "Nginx", detail: "Reverse proxy, routing, domain binding" },
  { id: "pm2", label: "PM2", detail: "Process management & uptime" },
  { id: "domain", label: "Domain / Route53", detail: "DNS + domain mapping" },
  { id: "ssl", label: "SSL/HTTPS", detail: "Secure application access" },
  { id: "live", label: "Live Production", detail: "Monitored via CloudWatch" },
];

export const brilliantBihar = {
  name: "The Brilliant Bihar",
  tagline: "Primary production deployment — AWS EC2, Nginx, Jenkins CI/CD",
  overview:
    "The Brilliant Bihar is the flagship production web application deployed and managed on AWS EC2 as part of the DevOps Engineer role at MetConnect Infotech. It is the core proof point for end-to-end production ownership — from CI/CD automation to reverse proxy configuration, SSL, monitoring, and live incident resolution.",
  infrastructure: [
    "AWS EC2",
    "Load Balancer",
    "Auto Scaling Group",
    "AMI",
    "CloudWatch",
    "Route53",
    "S3",
    "Nginx",
    "PM2",
    "GitHub",
    "Jenkins",
    "Docker",
  ],
  deploymentHighlights: [
    "Configured Nginx reverse proxy for frontend-backend communication, API routing, and domain mapping",
    "Set up and maintained SSL/HTTPS for secure application access",
    "Built a Jenkins CI/CD pipeline with GitHub integration, credentials, and SSH deploy keys",
    "Managed backend services with PM2 for process stability and uptime",
    "Enabled Load Balancer, AMI, and Auto Scaling Group for availability and scalability",
    "Configured CloudWatch alarms for monitoring and Route53 for domain/DNS",
    "Reduced manual deployment effort by 50% through pipeline automation",
    "Used Jira for task tracking throughout the deployment lifecycle",
  ],
  monitoring: [
    "CloudWatch alarms for availability and health monitoring",
    "Route53-managed DNS with domain mapping to the EC2 production instance",
    "PM2 process monitoring for backend uptime and crash recovery",
  ],
  achievements: [
    "Reduced manual deployment effort by 50% via Jenkins CI/CD automation",
    "Improved availability and scalability with Load Balancer + Auto Scaling Group + AMI",
    "Resolved production issues across routing, SSL, DNS, and streaming",
  ],
};

// NOTE: "The Brilliant Bihar" is the one production project verified directly
// by the resume. The entries below explore the same skill set (Docker,
// Jenkins, Linux, Nginx, PM2) in smaller, self-directed builds, and are
// labeled as such rather than implied to be additional employer deployments.
export const projects = [
  {
    id: "brilliant-bihar",
    name: "The Brilliant Bihar",
    featured: true,
    kind: "Production deployment — MetConnect Infotech",
    description:
      "Flagship production web application deployed on AWS EC2, fronted by Nginx, process-managed with PM2, and shipped through a Jenkins CI/CD pipeline with secure GitHub/SSH integration.",
    stack: ["AWS EC2", "Nginx", "PM2", "Jenkins", "GitHub", "Route53", "S3", "CloudWatch"],
    githubHref: profile.github,
  },
  {
    id: "self-healing",
    name: "Self Healing Infrastructure",
    featured: false,
    kind: "Self-directed lab build",
    description:
      "Exploratory monitoring-to-remediation pipeline: Nginx health signals trigger an alert, a webhook fires, and a recovery script restarts the affected process — the same restart-and-verify pattern used for PM2 in production, generalized into an automated flow.",
    stack: ["Nginx", "Webhook", "Shell Scripting", "PM2"],
    pipeline: ["Nginx", "Health Check", "Alert", "Webhook", "Restart Script", "Recovered"],
    githubHref: profile.github,
  },
  {
    id: "docker-prod",
    name: "Docker Production Setup",
    featured: false,
    kind: "Self-directed lab build",
    description:
      "Containerized deployment workflow built around Docker on Linux, mirroring the containerization and Linux server patterns used during the DevOps Engineer Intern role at BYTE CODE IT Solutions.",
    stack: ["Docker", "Linux", "Jenkins"],
    githubHref: profile.github,
  },
  {
    id: "jenkins-shared-lib",
    name: "Jenkins Shared Library",
    featured: false,
    kind: "Self-directed lab build",
    description:
      "Reusable Jenkins pipeline scripts that standardize build and GitHub/SSH deploy-key steps, based on the CI/CD pipeline patterns configured for The Brilliant Bihar.",
    stack: ["Jenkins", "GitHub", "SSH"],
    githubHref: profile.github,
  },
  {
    id: "gopass-backend",
    name: "GoPass Backend",
    featured: false,
    kind: "Self-directed lab build",
    description:
      "Backend service run with the same PM2 + Nginx operational model used in production — process management, reverse proxy routing, and uptime-focused configuration.",
    stack: ["Linux", "PM2", "Nginx"],
    githubHref: profile.github,
  },
];

export const cicdPipelineStages = [
  { id: "github", label: "GitHub", state: "source" },
  { id: "jenkins", label: "Jenkins", state: "trigger" },
  { id: "build", label: "Build", state: "build" },
  { id: "sonarqube", label: "SonarQube", state: "scan" },
  { id: "trivy", label: "Trivy", state: "scan" },
  { id: "docker-build", label: "Docker Build", state: "build" },
  { id: "docker-push", label: "Docker Push", state: "ship" },
  { id: "deploy", label: "Deploy", state: "ship" },
  { id: "monitoring", label: "Monitoring", state: "watch" },
  { id: "self-healing", label: "Self Healing", state: "watch" },
];

export const skills = {
  Cloud: ["AWS EC2", "AMI", "Auto Scaling Group", "Load Balancer", "Route 53", "SNS", "CloudWatch Alarms"],
  "DevOps Tools": ["Docker", "Jenkins", "Jira"],
  "OS & Scripting": ["Linux (Ubuntu)", "Shell Scripting"],
  "Web Servers & Process Mgmt": ["Nginx", "PM2"],
};

// Only tools explicitly listed on the resume — used for hero floating badges.
export const skillIconKeys = [
  "aws",
  "docker",
  "jenkins",
  "linux",
  "nginx",
  "github",
  "pm2",
  "jira",
];
