import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  ArrowRight,
  ExternalLink,
  Users,
  Smartphone,
  Brain,
  BarChart,
  Layout,
  Shield,
  Zap,
  FileCode,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router";
import type { Variants } from "motion/react";

export default function ClassroomConnectCaseStudy() {
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
            <Layout className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Case Study — Full-Stack Project
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            ClassroomConnect
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            A full-stack classroom engagement platform built to help elementary
            students with learning needs participate in interactive teacher-led
            sessions.
          </motion.p>

          {/* Info Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4"
          >
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Role</div>
              <div className="font-semibold">Frontend Lead</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">
                Team Size
              </div>
              <div className="font-semibold">4 Developers</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Stack</div>
              <div className="font-semibold">React · TypeScript · Node.js</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Context</div>
              <div className="font-semibold text-primary">
                CS5500 Team Project
              </div>
            </div>
          </motion.div>

          {/* Tech Badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Chakra UI",
              "REST API",
              "QR Code Auth",
              "MVC Architecture",
              "GitHub Actions",
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
              href="https://github.com/agavakole/classroomconnect-frontend"
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
              What is ClassroomConnect?
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              ClassroomConnect is an educational engagement platform designed
              specifically for elementary-age students with learning needs.
              Teachers create courses, design activity sessions, and generate QR
              codes that students scan to join live sessions — no passwords
              required.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mt-4">
              Built as a semester-long team project for CS5500 (Software
              Engineering) at Northeastern University, the platform follows MVC
              architecture with a React/TypeScript frontend and a Node.js REST
              API backend.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Teacher Dashboard",
                desc: "Create courses, design activities, manage sessions, and view student responses in real time.",
              },
              {
                icon: Smartphone,
                title: "QR Code Joining",
                desc: "Students scan a QR code to join any live session instantly — designed for low-friction access.",
              },
              {
                icon: Brain,
                title: "AI Recommendations",
                desc: "Activity suggestions powered by AI to help teachers select appropriate engagement strategies.",
              },
              {
                icon: BarChart,
                title: "Session Analytics",
                desc: "Real-time dashboards showing student response data and participation metrics per session.",
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

        {/* 02 — My Role */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              02 — My Role
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Frontend Lead
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              As the sole frontend developer on the team, I was responsible for
              the entire React/TypeScript codebase — from architecture decisions
              to pixel-level implementation. The backend team built the Node.js
              API, and I integrated against it across all features.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 sm:p-12"
          >
            <h4 className="text-xl font-bold mb-6">Key Responsibilities</h4>
            <ul className="space-y-4">
              {[
                "Architected the full React Router v6 SPA with role-based routing (Teacher / Student / Guest)",
                "Built reusable component library using Chakra UI with a custom theme",
                "Implemented QR code generation, scanning flow, and session token auth",
                "Integrated all backend REST API endpoints across 15+ pages",
                "Designed responsive mobile-first layouts for student-facing pages",
                "Set up and debugged production deployment with environment-based API configs",
                "Led frontend code reviews and maintained consistent TypeScript type safety",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* 03 — Architecture */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              03 — Architecture
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              System Design
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              The frontend is a single-page application with three distinct user
              flows — teacher, student, and unauthenticated guest — each with
              protected routing and separate layout components.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 sm:p-12"
          >
            <div className="font-mono text-sm leading-relaxed space-y-2">
              <div className="text-primary font-bold">
                Frontend (React + TypeScript)
              </div>
              <div className="pl-4 text-muted-foreground">│</div>
              <div className="pl-4 text-muted-foreground">
                ├──{" "}
                <span className="text-foreground font-semibold">
                  TeacherLayout
                </span>{" "}
                ───{" "}
                <span className="text-primary">
                  RequireAuth(role="teacher")
                </span>
              </div>
              <div className="pl-8 text-muted-foreground">
                │ ├── /teacher/dashboard
              </div>
              <div className="pl-8 text-muted-foreground">
                │ ├── /teacher/courses/:id
              </div>
              <div className="pl-8 text-muted-foreground">
                │ ├── /teacher/sessions/:id/dashboard
              </div>
              <div className="pl-8 text-muted-foreground">
                │ └── /teacher/activities
              </div>
              <div className="pl-4 text-muted-foreground">│</div>
              <div className="pl-4 text-muted-foreground">
                ├──{" "}
                <span className="text-foreground font-semibold">
                  StudentLayout
                </span>{" "}
                ───{" "}
                <span className="text-primary">
                  RequireAuth(role="student")
                </span>
              </div>
              <div className="pl-8 text-muted-foreground">│ └── /student</div>
              <div className="pl-4 text-muted-foreground">│</div>
              <div className="pl-4 text-muted-foreground">
                └──{" "}
                <span className="text-foreground font-semibold">
                  Public Routes
                </span>{" "}
                ───{" "}
                <span className="text-muted-foreground">No Auth Required</span>
              </div>
              <div className="pl-12 text-muted-foreground">
                ├── /scan{" "}
                <span className="text-primary">← QR code scanner</span>
              </div>
              <div className="pl-12 text-muted-foreground">
                ├── /guest/join{" "}
                <span className="text-primary">← Guest session entry</span>
              </div>
              <div className="pl-12 text-muted-foreground">
                └── /session/run/:token{" "}
                <span className="text-primary">← Live session view</span>
              </div>
              <div className="pt-6 space-y-2">
                <div>
                  <span className="text-primary font-semibold">
                    AuthContext
                  </span>{" "}
                  → JWT token in localStorage
                </div>
                <div>
                  <span className="text-primary font-semibold">API layer</span>{" "}
                  → Axios with base URL env config
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 04 — Technical Challenges */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              04 — Technical Challenges
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Problems Solved
            </h3>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {[
              {
                challenge:
                  "Backend API wasn't finalized when frontend development started, causing mismatched types and broken integrations mid-sprint.",
                solution:
                  "Defined shared TypeScript interfaces early and built against mock data, switching to live endpoints once backend was stable.",
              },
              {
                challenge:
                  "Production deployment broke routing — direct URL access to subroutes like /teacher/dashboard returned 404s.",
                solution:
                  "Configured the hosting server to redirect all routes to index.html, enabling React Router to handle client-side navigation.",
              },
              {
                challenge:
                  "QR code sessions needed to work for non-registered users (guests) without exposing authenticated routes.",
                solution:
                  "Implemented a token-based guest flow using short-lived session tokens embedded in QR codes, decoupled from the main auth system.",
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

        {/* 05 — Results */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              05 — Results
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              What Was Delivered
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              The platform was completed and deployed for the end-of-semester
              demo. The full teacher and student workflow was functional
              end-to-end, from course creation to live session results.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { metric: "15+", label: "Pages Built", icon: Layout },
              { metric: "3", label: "User Roles", icon: Shield },
              { metric: "100%", label: "TypeScript", icon: FileCode },
              { metric: "MVC", label: "Architecture", icon: Zap },
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

        {/* 06 — Reflections */}
        <motion.section
          className="mb-16 sm:mb-24 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-primary mb-2">
              06 — Reflections
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
                Leading the frontend on a team project taught me the importance
                of{" "}
                <span className="text-foreground font-semibold">
                  contract-first API design
                </span>
                . Waiting for the backend to be "done" before connecting the
                frontend caused delays — next time, I'd establish a shared API
                spec (OpenAPI or Zod schemas) on day one.
              </p>
              <p>
                I also gained a deeper appreciation for protected routing
                patterns and how authentication state flows through a React app
                at scale. Building role-based access for three distinct user
                types required careful context design.
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
            to="/projects/srft-protocol"
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
