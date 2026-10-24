import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ApplyModal from '../components/ApplyModal';

/* ============================================
   Careers Page
   ============================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay },
  }),
};

const PERKS = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere. Our teams span 4 countries and multiple time zones — flexibility is built into our DNA.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    description: 'Annual learning budgets, conference sponsorships, patent filing support, and dedicated time for research and open-source contributions.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2ZM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7Z" />
      </svg>
    ),
  },
  {
    title: 'Cutting-Edge Projects',
    description: 'Work on autonomous vehicles, connected vehicle platforms, edge computing devices, and AI systems — not maintenance projects.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: 'Health & Wellbeing',
    description: 'Comprehensive health coverage, mental health support, wellness stipends, and flexible PTO that we actually encourage you to use.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78Z" />
      </svg>
    ),
  },
  {
    title: 'Equity & Growth',
    description: 'Employee stock options, transparent promotion paths, and leadership development programs for every engineer.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Team & Community',
    description: 'Quarterly team offsites, hackathons, tech talks, and an inclusive culture where diverse perspectives drive better engineering.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const DEPARTMENTS = ['All', 'Engineering', 'Cybersecurity', 'AI & Edge', 'Cloud & DevOps', 'Operations'];

const OPENINGS = [
  {
    id: 'senior-embedded-software-engineer',
    title: 'Senior Embedded Software Engineer',
    department: 'Engineering',
    location: 'Dallas, USA / Thiruvananthapuram, India (Hybrid)',
    type: 'Full-time',
    experience: '5+ Years Experience',
    posted: '2 days ago',
    techStack: ['Embedded C', 'C++17/20', 'FreeRTOS & Zephyr', 'ARM Cortex-M/A', 'CAN-FD / Ethernet', 'ISO 26262 ASIL D'],
    overview:
      'We are looking for a Senior Embedded Software Engineer to architect, build, and deploy mission-critical low-level firmware and RTOS software platforms for automotive ECUs, gateway domain controllers, and high-reliability industrial edge hardware.',
    responsibilities: [
      'Architect, develop, and optimize safety-critical bare-metal and RTOS firmware (FreeRTOS, Zephyr, QNX) on 32-bit/64-bit ARM Cortex-M/R/A and heterogeneous multi-core SoCs.',
      'Develop robust Board Support Packages (BSP), hardware abstraction layers (HAL), and low-level device drivers for CAN-FD, SPI, I2C, UART, PCIe, and Automotive Ethernet.',
      'Profile and tune software execution for microsecond deterministic response times, ultra-low latency interrupt handling, and minimal RAM/Flash footprints.',
      'Implement automotive diagnostic stacks (UDS ISO 14229, DoIP) and SOME/IP inter-ECU communication layers.',
      'Ensure strict compliance with ISO 26262 ASIL-B/D functional safety requirements and MISRA-C/C++ coding guidelines.',
      'Lead hardware bring-up in laboratory environments using digital storage oscilloscopes, logic analyzers, Lauterbach JTAG emulators, and Vector CANoe toolchains.',
      'Collaborate with systems and cloud teams to design secure bootloaders and Over-The-Air (OTA) dual-bank flash update mechanisms.',
    ],
    requirements: [
      'Bachelor’s or Master’s degree in Electrical Engineering, Computer Engineering, Computer Science, or equivalent.',
      '5+ years of professional embedded firmware development experience with deep proficiency in Embedded C and Modern C++.',
      'Extensive hands-on experience with ARM Cortex architectures (nested vectored interrupt controllers, memory protection units, DMA pipelines).',
      'Solid command of RTOS design patterns: preemptive scheduling, mutexes, semaphores, race condition mitigation, and task prioritization.',
      'Proven expertise in serial protocols (CAN-FD, SPI, I2C, UART) and high-speed bus interfaces.',
      'Comfortable conducting hardware board bring-up, schematic reading, and hardware-software integration testing.',
    ],
    niceToHave: [
      'Experience with AUTOSAR Classic / Adaptive stacks or ISO 26262 safety case documentation.',
      'Hands-on experience with hardware security modules (HSM) or secure boot implementations.',
      'Familiarity with CMake, GoogleTest/Unity, static analysis (Coverity/SonarQube), and automated CI/CD for embedded systems.',
    ],
  },
  {
    id: 'cybersecurity-lead',
    title: 'Cybersecurity Lead / Principal Security Architect',
    department: 'Cybersecurity',
    location: 'Dallas, USA / Remote',
    type: 'Full-time',
    experience: '6+ Years Experience',
    posted: 'Just now',
    techStack: ['ISO/SAE 21434', 'UNECE R155/R156', 'TARA & Threat Modeling', 'HSM & Secure Boot', 'CAN / Ethernet Security'],
    overview:
      'NEXZORA is seeking an accomplished Cybersecurity Lead to spearhead our automotive and connected vehicle cybersecurity engineering practice. You will direct threat modeling, establish cryptographic security frameworks, and guide Tier-1 and OEM clients through rigorous ISO/SAE 21434 and UNECE R155 type approvals.',
    responsibilities: [
      'Define, architect, and enforce end-to-end cybersecurity architectures across vehicle ECUs, telematics gateways, and cloud interfaces in compliance with ISO/SAE 21434.',
      'Lead comprehensive Threat Analysis and Risk Assessments (TARA), attack path modeling, and STRIDE evaluations on modern vehicle electrical/electronic (E/E) architectures.',
      'Architect robust embedded cryptographic foundations: Secure Boot, Hardware Security Module (HSM / SHE) drivers, secure key storage, and PKI certificate lifecycle management.',
      'Lead embedded penetration testing, vulnerability discovery, and protocol fuzzing across in-vehicle networks (CAN-FD, Automotive Ethernet, SOME/IP).',
      'Design and audit secure software update management systems (SUMS) adhering to UNECE WP.29 R156 compliance standards.',
      'Establish DevSecOps pipelines, automated Software Bill of Materials (SBOM) tracking, and vulnerability disclosure response playbooks.',
      'Collaborate directly with OEM and regulatory homologation authorities for cybersecurity auditing, validation, and type certification.',
    ],
    requirements: [
      'Bachelor’s or Master’s in Cybersecurity, Computer Science, Computer Engineering, or related technical field.',
      '6+ years of cybersecurity engineering experience, with at least 3+ years dedicated to automotive, embedded systems, or IoT security.',
      'Thorough expertise in ISO/SAE 21434, UNECE R155/R156, and AUTOSAR Crypto Stack (CSM, CryIf, Crypto Driver).',
      'Deep technical mastery of cryptographic primitives, TLS 1.3, SecOC (Secure Onboard Communication), and Hardware Security Modules (Infineon AURIX HSM, Renesas ICU, NXP HSE).',
      'Demonstrated experience with firmware reverse engineering, binary auditing (Ghidra, IDA Pro), and protocol analysis (Wireshark, CANalyzer).',
      'Recognized industry credentials such as CISSP, CSSLP, Certified Automotive Cybersecurity Professional (CACP), or equivalent.',
    ],
    niceToHave: [
      'Experience in automotive hardware fault-injection attacks or side-channel resistance analysis.',
      'Active participation in automotive cybersecurity working groups (Auto-ISAC, SAE, ISO).',
      'Hands-on experience configuring zero-trust network architectures for connected mobility platforms.',
    ],
  },
  {
    id: 'autosar-software-architect',
    title: 'AUTOSAR Software Architect',
    department: 'Engineering',
    location: 'Tokyo, Japan / Hybrid',
    type: 'Full-time',
    experience: '7+ Years Experience',
    posted: '3 days ago',
    techStack: ['Classic & Adaptive AUTOSAR', 'Vector DaVinci', 'SOME/IP & Ethernet', 'MCAL / BSW / RTE', 'ISO 26262 ASIL D'],
    overview:
      'Lead the architecture, configuration, and integration of Classic and Adaptive AUTOSAR stacks for next-generation zonal gateways, cockpit domain controllers, and ADAS perception ECUs across global OEM production programs.',
    responsibilities: [
      'Architect Classic and Adaptive AUTOSAR software component architectures, specifying BSW, RTE, and application layer interfaces.',
      'Configure communication clusters, diagnostic managers (Dem/Dcm), and memory stacks (NvM/Fee) using Vector DaVinci Developer and Configurator.',
      'Oversee MCAL porting and low-level driver integration on multi-core automotive microcontrollers (Infineon AURIX TC3xx/TC4xx, Renesas RH850, NXP S32G).',
      'Design inter-core communication and synchronization between real-time safety cores and high-compute POSIX/Linux partitions.',
      'Guide software teams through A-SPICE Level 3 process compliance and ISO 26262 ASIL D functional safety work products.',
    ],
    requirements: [
      '7+ years in automotive embedded software development, including 4+ years dedicated to AUTOSAR architecture and configuration.',
      'In-depth mastery of Vector DaVinci toolchains (DaVinci Configurator Pro, Developer, CANoe, CANalyzer).',
      'Solid command of Ethernet, SOME/IP, CAN-FD communication protocols and UDS diagnostic specifications.',
      'Strong knowledge of multi-core concurrency, memory protection, and ASIL D safety decomposition.',
    ],
    niceToHave: [
      'Hands-on experience with Adaptive AUTOSAR platform (ara::com, ara::exec, ara::diag).',
      'Familiarity with automotive cybersecurity integration within AUTOSAR (SecOC, Crypto stack).',
    ],
  },
  {
    id: 'lead-edge-ai-engineer',
    title: 'Lead Edge AI & Computer Vision Engineer',
    department: 'AI & Edge',
    location: 'Dallas, USA / Hybrid',
    type: 'Full-time',
    experience: '5+ Years Experience',
    posted: '1 week ago',
    techStack: ['PyTorch & ONNX', 'TensorRT & Edge TPU', 'Modern C++ & CUDA', 'Object Detection & SLAM', 'Model Quantization'],
    overview:
      'Lead the development and edge deployment of low-latency deep learning, neural perception, and computer vision models running directly on automotive-grade edge compute hardware.',
    responsibilities: [
      'Design, train, and deploy real-time convolutional neural networks (CNNs) and Vision Transformers for object detection, lane tracking, and spatial perception.',
      'Optimize, quantize, and compile models (FP32 to INT8/FP16) using TensorRT, ONNX Runtime, and OpenVINO for sub-15ms inference latency.',
      'Profile edge hardware accelerator execution on NVIDIA Jetson Orin, Qualcomm Snapdragon Ride, and ARM Ethos NPUs.',
      'Build end-to-end synthetic dataset generation, active learning, and model validation testbenches.',
    ],
    requirements: [
      '5+ years of experience training and successfully deploying production computer vision models on embedded edge devices.',
      'Advanced programming skills in Modern C++ (C++17/20) and Python.',
      'Deep understanding of model quantization techniques (PTQ, QAT), pruning, and memory bandwidth optimization.',
    ],
    niceToHave: [
      'Experience with ROS 2, LiDAR point-cloud processing, or sensor fusion pipelines.',
      'Track record of technical publications or patents in edge machine learning.',
    ],
  },
  {
    id: 'senior-cloud-devops-architect',
    title: 'Senior Cloud & DevOps Solutions Architect',
    department: 'Cloud & DevOps',
    location: 'Remote',
    type: 'Full-time',
    experience: '6+ Years Experience',
    posted: '2 weeks ago',
    techStack: ['AWS & Azure Cloud', 'Kubernetes & Helm', 'Terraform & GitOps', 'Apache Kafka', 'Go / Python'],
    overview:
      'Design resilient, high-throughput cloud infrastructure and GitOps automation pipelines supporting millions of connected vehicle telemetry streams and mission-critical enterprise backends.',
    responsibilities: [
      'Architect multi-region, fault-tolerant cloud backends on AWS and Azure capable of ingesting high-throughput real-time telemetry.',
      'Develop distributed streaming pipelines using Apache Kafka, RabbitMQ, and microservices written in Go.',
      'Automate cloud infrastructure provisioning using Terraform, Helm, and GitOps workflows via ArgoCD and GitHub Actions.',
      'Implement enterprise zero-trust access, centralized observability (Prometheus/Grafana), and SOC 2 Type II compliance controls.',
    ],
    requirements: [
      '6+ years of cloud architecture and infrastructure engineering experience.',
      'Strong hands-on mastery of Kubernetes container orchestration, service meshes, and Docker.',
      'Deep fluency with Infrastructure as Code (Terraform) and CI/CD automation.',
      'Certified AWS Solutions Architect or Azure Solutions Architect Expert.',
    ],
    niceToHave: [
      'Experience handling IoT / Telematics MQTT payloads at scale.',
      'Experience with security compliance frameworks (SOC 2, ISO 27001).',
    ],
  },
  {
    id: 'technical-recruiter',
    title: 'Technical Recruiter — Global Engineering',
    department: 'Operations',
    location: 'Thiruvananthapuram, India / Hybrid',
    type: 'Full-time',
    experience: '4+ Years Experience',
    posted: '3 weeks ago',
    techStack: ['Technical Sourcing', 'Engineering Screening', 'ATS Management', 'Global Talent Acquisition'],
    overview:
      'Partner directly with technical leadership to identify, attract, and hire world-class embedded, automotive, and cloud engineering talent across our Dallas, Thiruvananthapuram, and Tokyo centers.',
    responsibilities: [
      'Manage full-lifecycle recruitment for high-demand engineering positions across embedded firmware, cybersecurity, and cloud systems.',
      'Sustain a proactive pipeline of top-tier passive candidates through targeted LinkedIn sourcing, technical networks, and referrals.',
      'Conduct rigorous candidate screenings to evaluate technical alignment, communication skills, and culture contribution.',
      'Orchestrate a seamless candidate experience from initial outreach through offer negotiation and onboarding.',
    ],
    requirements: [
      '4+ years of technical recruiting experience specializing in software, embedded systems, or automotive engineering.',
      'Familiarity with modern engineering disciplines, tools, and technical terminologies.',
      'Superb interpersonal, verbal, and written communication skills with international hiring experience.',
    ],
    niceToHave: [
      'Experience working in high-growth engineering services or R&D environments.',
      'Familiarity with immigration and international relocation protocols.',
    ],
  },
];

const CULTURE_STATS = [
  { number: '500+', label: 'Engineers Worldwide' },
  { number: '3', label: 'Global Offices' },
  { number: '15+', label: 'Nationalities' },
  { number: '92%', label: 'Employee Retention' },
];

export default function Careers() {
  const [filter, setFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleOpenApply = (job = null) => {
    setSelectedJob(job);
    setIsApplyOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyOpen(false);
    setSelectedJob(null);
  };

  const filtered = filter === 'All'
    ? OPENINGS
    : OPENINGS.filter((job) => job.department === filter);

  return (
    <>
      <PageHero
        label="Careers"
        title="Build What Matters"
        subtitle="Join a global team of engineers solving the hardest problems in automotive, cybersecurity, AI, and cloud — with real ownership from day one."
      />

      {/* ── Culture Stats (Hidden for early stage — re-enable later) ── */}
      {/*
      <section className="py-12 lg:py-14 bg-navy-950">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CULTURE_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="text-center"
              >
                <span className="block text-[clamp(2rem,4vw,3rem)] font-black text-zenith leading-none mb-1">
                  {stat.number}
                </span>
                <span className="text-[13px] font-medium text-white/50 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ── Why Join Us ── */}
      <section className="py-16 lg:py-20 bg-surface" id="culture">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Why NEXZORA
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              What Makes Us Different
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.05 }}
                className="group p-6 rounded-lg border border-navy-100 bg-white hover:border-zenith/30 hover:shadow-[0_8px_32px_rgba(4,30,66,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-950/5 flex items-center justify-center text-navy-950/50 group-hover:bg-zenith/10 group-hover:text-zenith transition-colors duration-300 mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2">{perk.title}</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-16 lg:py-20 bg-surface-alt" id="openings">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Open Positions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              Find Your Role
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  filter === dept
                    ? 'bg-navy-950 text-white'
                    : 'bg-white border border-navy-100 text-text-secondary hover:border-navy-300 hover:text-navy-900'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job listings */}
          <div className="space-y-3 max-w-[860px] mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((job, i) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <motion.div
                    key={job.id || job.title}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.03 }}
                    className={`rounded-xl border transition-all duration-300 bg-white overflow-hidden ${
                      isExpanded
                        ? 'border-zenith/40 shadow-[0_8px_30px_rgba(4,30,66,0.08)] ring-1 ring-zenith/20'
                        : 'border-navy-100 hover:border-zenith/30 hover:shadow-[0_4px_16px_rgba(4,30,66,0.04)]'
                    }`}
                  >
                    {/* Main Summary Header */}
                    <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-[11.5px] font-semibold text-zenith bg-zenith/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {job.department}
                          </span>
                          {job.experience && (
                            <span className="text-[12px] font-medium text-navy-800 bg-navy-50 px-2.5 py-0.5 rounded-full border border-navy-100">
                              {job.experience}
                            </span>
                          )}
                          <span className="text-[12px] text-text-tertiary/70 ml-auto sm:ml-0">
                            {job.posted}
                          </span>
                        </div>

                        <h3
                          onClick={() => toggleExpand(job.id)}
                          className="text-[16px] sm:text-[17px] font-bold text-navy-950 hover:text-zenith transition-colors duration-200 cursor-pointer"
                        >
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[13px] text-text-secondary">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-zenith/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0Z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-navy-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            {job.type}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-navy-100/60">
                        <button
                          type="button"
                          onClick={() => toggleExpand(job.id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[12.5px] font-semibold text-navy-800 bg-surface-alt hover:bg-navy-100/70 rounded-lg transition-colors cursor-pointer"
                        >
                          {isExpanded ? 'Hide Details' : 'View Job Description'}
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenApply(job)}
                          className="inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold text-white bg-zenith hover:bg-zenith-600 rounded-lg transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                        >
                          Apply
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Expandable Full Job Description */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="border-t border-navy-100 bg-navy-50/40 px-5 sm:px-7 py-6 space-y-6"
                        >
                          {/* Role Overview */}
                          {job.overview && (
                            <div>
                              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-zenith mb-2">
                                About the Role
                              </h4>
                              <p className="text-[14px] leading-relaxed text-text-primary">
                                {job.overview}
                              </p>
                            </div>
                          )}

                          {/* Tech Stack Badges */}
                          {job.techStack && job.techStack.length > 0 && (
                            <div>
                              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-navy-950 mb-2.5">
                                Primary Technical Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-[12px] font-semibold text-navy-900 bg-white border border-navy-200/80 px-3 py-1 rounded-md shadow-2xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Responsibilities */}
                          {job.responsibilities && job.responsibilities.length > 0 && (
                            <div>
                              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-navy-950 mb-2.5">
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-2 text-[13.5px] text-text-secondary leading-relaxed">
                                {job.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zenith shrink-0 mt-2" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Requirements */}
                          {job.requirements && job.requirements.length > 0 && (
                            <div>
                              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-navy-950 mb-2.5">
                                What We Look For
                              </h4>
                              <ul className="space-y-2 text-[13.5px] text-text-secondary leading-relaxed">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Preferred / Nice to Have */}
                          {job.niceToHave && job.niceToHave.length > 0 && (
                            <div>
                              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-navy-950 mb-2.5">
                                Nice to Have
                              </h4>
                              <ul className="space-y-1.5 text-[13px] text-text-tertiary leading-relaxed">
                                {job.niceToHave.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <span className="text-navy-400 font-bold">+</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Bottom Apply Action Bar */}
                          <div className="pt-4 border-t border-navy-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => handleOpenApply(job)}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-zenith hover:bg-zenith-600 text-white text-[13.5px] font-bold rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
                              >
                                Apply for this Position
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={() => toggleExpand(job.id)}
                                className="text-[13px] font-medium text-text-secondary hover:text-navy-950 transition-colors cursor-pointer"
                              >
                                Collapse
                              </button>
                            </div>

                            <p className="text-[12px] text-text-tertiary">
                              Submissions delivered to <a href="mailto:info@nexzora.com" className="text-zenith font-medium hover:underline">info@nexzora.com</a>
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[15px] text-text-secondary">No openings in this department right now. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section className="py-16 lg:py-20 bg-surface" id="process">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-zenith mb-3"
            >
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-display text-navy-950 leading-tight"
            >
              How We Hire
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[960px] mx-auto">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application with your resume. We review every single one.' },
              { step: '02', title: 'Technical Screen', description: 'A 45-minute call with an engineer to discuss your experience and a focused technical topic.' },
              { step: '03', title: 'Deep Dive', description: 'A hands-on technical round — system design, coding, or domain-specific problem solving.' },
              { step: '04', title: 'Team Match', description: 'Meet your potential team lead and discuss projects, culture fit, and growth expectations.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: i * 0.06 }}
                className="relative text-center p-6"
              >
                <span className="text-[40px] font-black text-navy-950/[0.05] leading-none block mb-2">{item.step}</span>
                <h3 className="text-[16px] font-semibold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-text-secondary">{item.description}</p>
                {/* Connector arrow (not on last) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-navy-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        label="Join Us"
        title="Don't See Your Role?"
        subtitle="We're always looking for exceptional engineers. Send us your resume and we'll reach out when there's a match."
        primaryText="Send Your Resume"
        onPrimaryClick={() =>
          handleOpenApply({
            isGeneral: true,
            title: 'General Application / Talent Pool',
            department: 'Engineering & Operations',
            location: 'Global / Remote',
          })
        }
        secondaryText="View Company"
        secondaryHref="/company"
      />

      {/* ── Job Application Modal ── */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={handleCloseApply}
        job={selectedJob}
      />
    </>
  );
}
