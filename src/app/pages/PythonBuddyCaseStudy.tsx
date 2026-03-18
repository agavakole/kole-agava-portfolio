import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  ArrowLeft,
  Github,
  ArrowRight,
  ExternalLink,
  Cloud,
  Container,
  Shield,
  GitBranch,
  Lock,
  Network,
  Key,
  Zap,
  CheckCircle,
  Clock,
  Layers,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";

export default function PythonBuddyCaseStudy() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background effects */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 255, 65, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="space-y-6 mb-16 sm:mb-24"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-sm"
          >
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Case Study — Cloud Infrastructure
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            PythonBuddy
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            A cloud-native Python linter and code execution platform deployed on
            AWS with secure VPC architecture, Dockerized microservices,
            auto-scaling, and full CI/CD automation.
          </motion.p>

          {/* Info Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4"
          >
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Role</div>
              <div className="font-semibold">Cloud Architect & Developer</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Cloud</div>
              <div className="font-semibold">AWS (S3, EC2, ALB, VPC, ASG)</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Stack</div>
              <div className="font-semibold">
                React · Flask · Docker · Python
              </div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Uptime</div>
              <div className="font-semibold text-primary">
                99.9%+ Self-Healing
              </div>
            </div>
          </motion.div>

          {/* Tech Badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-2">
            {[
              "AWS",
              "Docker",
              "Python",
              "React",
              "Flask",
              "GitHub Actions",
              "VPC",
              "Auto Scaling",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* GitHub button at top */}
          <motion.div variants={fadeInUp} className="flex gap-4 pt-2">
            <a
              href="https://github.com/agavakole/pythonbuddy-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/50 border border-border text-foreground hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </motion.section>

        {/* 01 — Overview */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              01 — Overview
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              What is PythonBuddy?
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              PythonBuddy is an online Python 3 linter and code execution
              environment. Originally an open-source project by Ethan Chiu, this
              iteration extended it with production-grade AWS cloud
              infrastructure — transforming a single-machine application into a
              fault-tolerant, self-healing distributed system.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mt-4">
              The project focused on cloud architecture design, high
              availability patterns, and infrastructure automation —
              demonstrating the same patterns used in real production
              environments.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Live Code Execution",
                desc: "Run Python 3 code in the browser with real-time Pylint linting and error feedback.",
              },
              {
                icon: Cloud,
                title: "AWS High Availability",
                desc: "Multi-AZ deployment with Auto Scaling Group maintains uptime through automatic instance recovery.",
              },
              {
                icon: Container,
                title: "Docker Isolation",
                desc: "Flask backend containerized with Docker, deployed in private subnets for security isolation.",
              },
              {
                icon: GitBranch,
                title: "Zero-Touch CI/CD",
                desc: "GitHub Actions pipeline deploys frontend to S3 and backend Docker images to EC2 automatically.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              >
                <feature.icon className="w-10 h-10 text-primary mb-3" />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 02 — Architecture */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              02 — Architecture
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Cloud Design
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              The system separates concerns across distinct AWS layers —
              public-facing load balancing, static frontend hosting, and private
              backend execution — following AWS Well-Architected principles.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 sm:p-12"
          >
            <h4 className="text-xl font-bold mb-8 text-center">Traffic Flow</h4>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                  User Layer
                </div>
                <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                  <div className="font-bold mb-1">User Browser</div>
                  <div className="text-sm text-muted-foreground">
                    HTTP Request
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-primary text-2xl">↓</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                  Public Layer
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="font-bold mb-1">S3 Bucket</div>
                    <div className="text-sm text-muted-foreground">
                      React Frontend
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="font-bold mb-1">App Load Balancer</div>
                    <div className="text-sm text-muted-foreground">
                      Port 80 → 5000
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="font-bold mb-1">NAT Gateway</div>
                    <div className="text-sm text-muted-foreground">
                      Outbound only
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-primary text-2xl">↓</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                  Private Layer (Multi-AZ)
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="font-bold mb-1">EC2 + Docker</div>
                    <div className="text-sm text-muted-foreground">
                      Flask API — AZ-a
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="font-bold mb-1">EC2 + Docker</div>
                    <div className="text-sm text-muted-foreground">
                      Flask API — AZ-b
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                  <div className="font-bold text-primary">
                    Auto Scaling Group
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Min:1 Desired:2 Max:4
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 03 — Technical Challenges */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              03 — Technical Challenges
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Problems Solved
            </h3>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {[
              {
                challenge:
                  "EC2 instances in private subnets can't reach the internet directly, but Docker containers need to pull images from Docker Hub on boot.",
                solution:
                  "Configured a NAT Gateway in the public subnet, routing outbound traffic from private instances through it while blocking all inbound internet access.",
              },
              {
                challenge:
                  "Manual deployments meant updates required SSH-ing into instances and restarting containers — not scalable with an Auto Scaling Group.",
                solution:
                  "Used EC2 User Data scripts to auto-pull the latest Docker image on instance launch, combined with GitHub Actions to push new images to Docker Hub on every push.",
              },
              {
                challenge:
                  "Needed to prove the system was truly self-healing — not just configured to be, but demonstrably recovering from real failures.",
                solution:
                  "Terminated a live EC2 instance during a demo. The Auto Scaling Group detected the failure within 30 seconds and launched a replacement, with zero visible downtime to the frontend.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              >
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-primary mb-2">
                      Challenge
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary mb-2">
                      Solution
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 04 — CI/CD Pipeline */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              04 — CI/CD Pipeline
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Zero-Touch Deployment
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              Three separate GitHub Actions workflows handle frontend
              deployment, backend Docker build, and Docker Hub publishing —
              fully automated on every push to main.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 sm:p-6 font-bold text-primary">
                      Trigger
                    </th>
                    <th className="text-left p-4 sm:p-6 font-bold text-primary">
                      Steps
                    </th>
                    <th className="text-left p-4 sm:p-6 font-bold text-primary">
                      Destination
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-4 sm:p-6 text-muted-foreground">
                      Push to main
                    </td>
                    <td className="p-4 sm:p-6">Build React → npm run build</td>
                    <td className="p-4 sm:p-6 font-semibold">
                      S3 Static Hosting
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-4 sm:p-6 text-muted-foreground">
                      Push to main
                    </td>
                    <td className="p-4 sm:p-6">Docker build + tag</td>
                    <td className="p-4 sm:p-6 font-semibold">
                      Docker Hub Registry
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-4 sm:p-6 text-muted-foreground">
                      New EC2 Boot
                    </td>
                    <td className="p-4 sm:p-6">User Data pulls latest image</td>
                    <td className="p-4 sm:p-6 font-semibold">
                      EC2 Auto Deploy
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 text-muted-foreground">
                      Any push
                    </td>
                    <td className="p-4 sm:p-6">pytest — backend unit tests</td>
                    <td className="p-4 sm:p-6 font-semibold">CI Gate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* 05 — Security */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              05 — Security
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Defense in Depth
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              Multiple layers of AWS security controls ensure backend execution
              containers are never directly exposed to the internet.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Lock,
                title: "Private Subnets",
                desc: "EC2 instances have no public IP — reachable only from the load balancer.",
              },
              {
                icon: Shield,
                title: "Security Groups",
                desc: "ALB accepts HTTP from 0.0.0.0/0. EC2 accepts port 5000 only from ALB.",
              },
              {
                icon: Network,
                title: "VPC Isolation",
                desc: "All resources inside a dedicated 10.0.0.0/16 VPC, isolated from other AWS accounts.",
              },
              {
                icon: Key,
                title: "IAM Roles",
                desc: "EC2 instances use IAM roles for CloudWatch and Systems Manager — no stored credentials.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              >
                <feature.icon className="w-10 h-10 text-primary mb-3" />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 06 — Results */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              06 — Results
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              What Was Achieved
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              The platform demonstrated production-grade reliability with a live
              failure and self-healing demo. All infrastructure was provisioned
              and managed as code, with zero manual deployment steps.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { metric: "99.9%", label: "Uptime Target", icon: TrendingUp },
              { metric: "<30s", label: "Self-Heal Time", icon: Clock },
              { metric: "2 AZs", label: "Multi-AZ Deploy", icon: Layers },
              { metric: "0", label: "Manual Deploy Steps", icon: CheckCircle },
            ].map((result) => (
              <div
                key={result.label}
                className="p-8 rounded-3xl border border-border bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 text-center space-y-3"
              >
                <result.icon className="w-8 h-8 text-primary mx-auto" />
                <div className="text-4xl font-bold text-primary">
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 07 — Reflections */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              07 — Reflections
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              What I Learned
            </h3>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm p-8 sm:p-12"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This project made cloud networking concepts concrete. VPCs,
                subnets, routing tables, and NAT Gateways went from theoretical
                to something I'd configured and debugged hands-on. Understanding{" "}
                <span className="text-foreground font-semibold">why</span>{" "}
                private subnets need a NAT Gateway — not just that they do — was
                a key insight.
              </p>
              <p>
                Auto Scaling also changed how I think about reliability.
                Designing for failure recovery (not just uptime) is the more
                important mental model — assume instances will die and build
                systems that recover automatically.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Bottom navigation */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
          >
            <span>View More Projects</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/projects/classroomconnect"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card/50 border border-border text-foreground hover:border-primary/50 transition-all duration-300 group"
          >
            <span>Next Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
