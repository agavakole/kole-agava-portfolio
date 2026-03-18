import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Send } from "lucide-react";
import { Scene3D } from "../components/Scene3D";
import { TypeWriterOnView } from "../components/TypeWriter";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import profileImage from "../../assets/profile.png";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";

export function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_v6aojec",
        "template_lvu3via",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "Yfzlqfv0z7ZpCpwVX",
        },
      )
      .then(() => {
        alert("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert(
          "Something went wrong. Please email me directly at agavakole@gmail.com",
        );
      });
  };
  // Animation variants
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
      {/* Refined grid overlay - subtle */}
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

      {/* Subtle glow effect */}
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

      {/* Background noise texture */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
            {/* Left: Text content */}
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Available for work
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="text-primary">{">"}</span>{" "}
                  <TypeWriterOnView
                    text="Cloud & IT Infrastructure Engineer"
                    speed={70}
                    showCursor={true}
                  />
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  <span className="text-primary">$</span> Building cloud-native
                  solutions and full-stack applications. Currently pursuing my
                  Master's in Computer Science at Northeastern University.
                </p>
              </motion.div>

              {/* Social links */}
              <motion.div variants={fadeInUp} className="flex gap-4">
                <a
                  href="https://github.com/agavakole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-card/30 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/kole-agava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-card/30 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-12 h-12 rounded-full border border-border bg-card/30 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: 3D Canvas */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square w-full max-w-lg mx-auto rounded-3xl border border-border bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
                <Scene3D />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16 sm:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left: Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-primary">//</span> About Me
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm Kole Agava, a software developer based in Vancouver, BC,
                  currently pursuing my Master's in Computer Science at
                  Northeastern University.My focus is in cloud infrastructure,
                  DevOps, full-stack development, and networking.
                </p>
                <p>
                  I have hands-on experience deploying cloud-native applications
                  on AWS, building secure VPC architectures, configuring load
                  balancers, automating CI/CD pipelines with GitHub Actions, and
                  running containerized applications with Docker.
                </p>
                <p>
                  Through my coursework I have developed a strong foundation in
                  networking, including raw socket programming, TCP/IP and UDP
                  protocols, DNS, subnetting, and network security. I am
                  actively seeking roles in software development, cloud
                  infrastructure, DevOps, or networking where I can apply both
                  my development and networking skills.
                </p>
              </div>
            </motion.div>

            {/* Right: Card with image and quick facts */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 space-y-6 shadow-xl shadow-primary/5 hover:border-primary/30 transition-all duration-500">
                <div className="aspect-square w-48 h-48 mx-auto rounded-2xl overflow-hidden border border-border">
                  <img
                    src={profileImage}
                    alt="Kole Agava"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 text-center">
                  <h3 className="text-2xl font-bold">
                    <TypeWriterOnView
                      text="Kole Agava"
                      speed={80}
                      showCursor={true}
                    />
                  </h3>
                  <p className="text-muted-foreground">Vancouver, BC, Canada</p>

                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-t border-border/50">
                      <span className="text-muted-foreground">Education</span>
                      <span className="font-medium">
                        <TypeWriterOnView
                          text="MS Computer Science"
                          speed={60}
                          delay={800}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-border/50">
                      <span className="text-muted-foreground">University</span>
                      <span className="font-medium">
                        <TypeWriterOnView
                          text="Northeastern"
                          speed={60}
                          delay={1600}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-border/50">
                      <span className="text-muted-foreground">Focus</span>
                      <span className="font-medium">
                        <TypeWriterOnView
                          text="Cloud & Networking"
                          speed={60}
                          delay={2200}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16 sm:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-8 sm:space-y-12">
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-primary">{"<"}</span>Featured Projects
                <span className="text-primary">{"/>"}</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                A selection of work that showcases my skills in cloud
                infrastructure, full-stack development, and system design.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Project 1: PythonBuddy */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-lg bg-primary/20 rotate-45" />
                </div>

                <div className="space-y-3 flex-grow mt-6">
                  <h3 className="text-2xl font-bold">PythonBuddy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cloud-native Python code execution platform deployed on AWS
                    with secure VPC architecture, Docker isolation, and CI/CD
                    automation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    AWS
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    Docker
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    Python
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    GitHub Actions
                  </span>
                </div>

                <a
                  href="/projects/pythonbuddy"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 mt-6"
                >
                  <span>View case study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Project 2: ClassroomConnect */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-lg bg-primary/20 rotate-12" />
                </div>

                <div className="space-y-3 flex-grow mt-6">
                  <h3 className="text-2xl font-bold">ClassroomConnect</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Full-stack classroom engagement platform built with a team
                    using MVC architecture and modern development practices.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    React
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    MVC
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    GitHub
                  </span>
                </div>

                <a
                  href="/projects/classroomconnect"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 mt-6"
                >
                  <span>View case study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Project 3: IT Helpdesk */}
              <motion.div
                variants={fadeInUp}
                className="group relative rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-lg bg-primary/20" />
                </div>

                <div className="space-y-3 flex-grow mt-6">
                  <h3 className="text-2xl font-bold">SRFT Protocol</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom secure and reliable file transfer protocol built from
                    scratch over raw UDP sockets — manually constructing every
                    IPv4 and UDP header byte, with AES-GCM encryption, PSK
                    handshake, and replay protection.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    Python
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    Raw Sockets
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    AES-GCM
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    Networking
                  </span>
                </div>

                <a
                  href="/projects/srft-protocol"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 mt-6"
                >
                  <span>View case study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-24 lg:py-32">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to build modern, scalable
                applications.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Cloud & DevOps */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "AWS EC2",
                    "AWS VPC",
                    "AWS IAM",
                    "Docker",
                    "GitHub Actions",
                    "CI/CD",
                    "Linux",
                    "Cloud Architecture",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm rounded-full border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">
                  Programming
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Python", "Java", "JavaScript", "TypeScript", "SQL"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm rounded-full border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Tools & Frameworks */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">
                  Tools & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "React",
                    "Node.js",
                    "Git",
                    "REST APIs",
                    "System Design",
                    "Networking",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm rounded-full border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Left: Contact info */}
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold">
                    Let's Connect
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I'm always open to discussing new projects, opportunities,
                    or just having a chat about technology.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:agavakole@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        agavakole@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/agavakole"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground">
                        agavakole
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/kole-agava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">
                        kole-agava
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      required
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2026 Kole Agava. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
