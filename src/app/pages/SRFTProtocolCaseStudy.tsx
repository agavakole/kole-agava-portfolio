import { motion } from 'motion/react';
import { ArrowLeft, Github, Shield, Lock, Layers, Wifi, Terminal, CheckCircle, AlertTriangle, TrendingUp, Code, Network, FileCode, Server, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import type { Variants } from "motion/react";

export default function SRFTProtocolCaseStudy() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
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
          backgroundSize: '80px 80px',
        }}
      />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 65, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
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

        {/* Hero section */}
        <motion.div
          className="space-y-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">SRFT Protocol</h1>
              <p className="text-muted-foreground mt-1">Secure Reliable File Transfer</p>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
            A custom secure and reliable file transfer protocol built from scratch over raw UDP sockets in Python. This project implements the full Internet protocol stack manually — including IPv4 headers, UDP headers, checksums, and a custom application-layer security protocol — without relying on any OS networking abstractions.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">Python</span>
            <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">Raw Sockets</span>
            <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">AES-GCM</span>
            <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">HKDF</span>
            <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">Networking</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <a
              href="https://github.com/agavakole/srft-raw-socket-file-transfer"
              target="_blank"
              rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/50 border border-border text-foreground hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Main content */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section 1: Project Overview */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Project Overview</h2>
            </div>
            
            <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Standard UDP provides no reliability or security. This project builds both from scratch by implementing a custom protocol that manually constructs every byte of the network stack, from the IPv4 layer up through application-layer encryption and reliability mechanisms.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Phase 1:</span> Reliable file transfer over raw UDP with checksums, sequence numbers, cumulative ACKs, retransmission, and MD5 verification
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Phase 2:</span> Secure file transfer with PSK handshake, AES-GCM encryption, replay protection, and SHA-256 end-to-end verification
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Architecture */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">System Architecture</h2>
            </div>

            <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8">
              <div className="font-mono text-sm space-y-1 text-muted-foreground">
                <div className="border border-border/50 rounded-lg p-4">
                  <div className="text-primary">┌─────────────────────────────────────────┐</div>
                  <div className="text-primary">│           Application Layer             │</div>
                  <div className="text-foreground">│     SRFT Protocol (custom packets)      │</div>
                  <div className="text-foreground">│   AES-GCM encryption, HMAC handshake   │</div>
                  <div className="text-primary">├─────────────────────────────────────────┤</div>
                  <div className="text-primary">│         Transport Layer (manual)        │</div>
                  <div className="text-foreground">│      UDP header built from scratch      │</div>
                  <div className="text-foreground">│     Checksum computed via RFC 768       │</div>
                  <div className="text-primary">├─────────────────────────────────────────┤</div>
                  <div className="text-primary">│          Network Layer (manual)         │</div>
                  <div className="text-foreground">│      IPv4 header built from scratch     │</div>
                  <div className="text-foreground">│     Checksum computed via RFC 791       │</div>
                  <div className="text-primary">├─────────────────────────────────────────┤</div>
                  <div className="text-primary">│              SOCK_RAW                   │</div>
                  <div className="text-foreground">│     Raw socket — OS bypassed entirely   │</div>
                  <div className="text-primary">└─────────────────────────────────────────┘</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Key Features */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Key Features</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Reliability Features */}
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Reliability Layer</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Manual IPv4 and UDP header construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>RFC-compliant Internet checksums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sliding window protocol with configurable size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cumulative ACKs with batching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Automatic retransmission on timeout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Out-of-order packet buffering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>MD5 file verification</span>
                  </li>
                </ul>
              </div>

              {/* Security Features */}
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Security Layer</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pre-shared key (PSK) authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>ClientHello/ServerHello handshake with HMAC-SHA256</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>HKDF key derivation for per-session keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>AES-GCM authenticated encryption on all data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sequence number replay protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SHA-256 end-to-end file integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Built-in attack testing modes</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Technical Implementation */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Technical Implementation</h2>
            </div>

            <div className="space-y-6">
              {/* Raw Sockets */}
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Network className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-xl">Raw Socket Programming</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Using <code className="px-2 py-1 rounded bg-primary/10 text-primary text-sm">SOCK_RAW</code> with <code className="px-2 py-1 rounded bg-primary/10 text-primary text-sm">IPPROTO_RAW</code> for sending and <code className="px-2 py-1 rounded bg-primary/10 text-primary text-sm">IPPROTO_UDP</code> for receiving, the protocol bypasses the operating system's networking stack entirely. Every IPv4 header field (version, IHL, TOS, total length, identification, flags, TTL, protocol, checksum, source IP, destination IP) and UDP header field (source port, destination port, length, checksum) is manually constructed byte-by-byte according to RFC specifications.
                </p>
              </div>

              {/* Checksums */}
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-xl">Internet Checksum Algorithm</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Implements the RFC 1071 one's complement checksum algorithm for both IPv4 headers (RFC 791) and UDP headers (RFC 768). The checksum is computed over the pseudo-header (source IP, dest IP, protocol, UDP length) plus the UDP header and payload, ensuring end-to-end data integrity at the transport layer before application-layer security is applied.
                </p>
              </div>

              {/* Cryptography */}
              <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-xl">Cryptographic Security</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The security handshake uses HMAC-SHA256 to authenticate ClientHello and ServerHello messages, proving both parties know the pre-shared key without transmitting it. HKDF-SHA256 derives a unique per-session encryption key from the PSK combined with client and server nonces. Each data packet is encrypted with AES-GCM, providing both confidentiality and authenticity in a single operation (AEAD). Sequence numbers prevent replay attacks, and a SHA-256 digest of the entire file ensures end-to-end integrity.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Security Testing */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">05</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Security Test Plan</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h4 className="font-bold">Baseline Secure Transfer</h4>
                </div>
                <p className="text-sm text-muted-foreground">Handshake success, AEAD failures = 0, SHA-256 match</p>
              </div>

              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <h4 className="font-bold">Wrong PSK Test</h4>
                </div>
                <p className="text-sm text-muted-foreground">Handshake failure, connection rejected, no file output</p>
              </div>

              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h4 className="font-bold">Tamper Detection</h4>
                </div>
                <p className="text-sm text-muted-foreground">AEAD failures = 1, retransmission recovers, SHA-256 match</p>
              </div>

              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  <h4 className="font-bold">Replay Protection</h4>
                </div>
                <p className="text-sm text-muted-foreground">Replay drops = 1, SHA-256 match, file integrity preserved</p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Technical Challenges */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Technical Challenges</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  Platform-Specific Raw Socket Restrictions
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Windows blocks raw socket loopback testing due to security restrictions, requiring Linux or WSL2 for development. Permissions management (requiring root for raw sockets) and understanding kernel-level networking differences across platforms were critical learning experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Byte-Level Protocol Construction
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manually packing and unpacking binary data structures for IPv4 and UDP headers requires precise understanding of network byte order, header field sizes, and bit manipulation. Debugging checksum mismatches and header field alignment issues taught deep lessons about low-level networking protocols.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  Reliability Without TCP
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building reliable transfer on unreliable UDP meant implementing sequence numbers, duplicate detection, out-of-order buffering, retransmission timers, and cumulative acknowledgments from scratch. Balancing throughput (sliding window size) with reliability (ACK frequency, RTO tuning) required extensive testing and performance analysis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Results & Learnings */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Results & Key Learnings</h2>
            </div>

            <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">File Integrity Verified</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground">AEAD Failures (Baseline)</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">Full</div>
                  <div className="text-sm text-muted-foreground">Stack Implementation</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 space-y-3">
                <h4 className="font-bold">What I Learned:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>How IPv4 and UDP headers are structured at the byte level and why each field exists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>How the Internet checksum algorithm works using one's complement addition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Why AES-GCM provides both encryption and authentication in a single operation (AEAD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Why HKDF is used instead of using a PSK directly as an encryption key</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>How cumulative ACKs reduce network overhead compared to per-packet ACKs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>How sliding window protocols improve throughput over stop-and-wait</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>The practical challenges of building reliable protocols — duplicate detection, out-of-order buffering, retransmission timers</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Tech Stack */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Tech Stack & Tools</h2>
            </div>

            <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-primary" />
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Python 3.12</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">SOCK_RAW</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Linux/WSL2</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Threading</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Cryptography
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">AES-GCM</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">HKDF-SHA256</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">HMAC-SHA256</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">SHA-256</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold flex items-center gap-2">
                    <Network className="w-5 h-5 text-primary" />
                    Protocols
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">IPv4 (RFC 791)</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">UDP (RFC 768)</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Custom SRFT</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Git</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">GitHub</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">JSON Config</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center"
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
        </motion.div>
      </div>
    </div>
  );
}