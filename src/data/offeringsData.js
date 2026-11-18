/* ============================================
   NEXZORA Technologies — Services, Solutions & Industries Catalog
   Unified single source of truth for Navigation, Hub Pages, and Subpages
   ============================================ */

export const SERVICES_DATA = [
  {
    slug: 'system-design',
    title: 'System Design & Architecture',
    shortTitle: 'System Design & Architecture',
    badge: 'Architecture & Co-Design',
    tagline:
      'End-to-end system engineering from requirements capture to hardware-software partitioning, safety concepts, and scalable platform architectures.',
    overview:
      'We architect deterministic, production-grade systems for automotive ECUs, industrial controllers, and connected embedded platforms. Our architects bridge mechanical, electrical, silicon, and software domains to eliminate integration bottlenecks early in the V-cycle.',
    metrics: [
      { value: 'ASIL D / SIL 3', label: 'Safety Readiness' },
      { value: 'HW / SW', label: 'Co-Design Rigor' },
      { value: 'ASPICE L2/L3', label: 'Process Alignment' },
      { value: '100%', label: 'Traceable Specs' },
    ],
    capabilities: [
      {
        title: 'Requirements & System Architecture',
        description:
          'Translating product and regulatory objectives into formal system architectures, logical/physical decompositions, and bi-directional traceability matrices.',
        bullets: [
          'SysML / Enterprise Architect modeling and interface specifications',
          'Centralized zonal and domain controller architecture design',
          'Mixed-criticality partitioning (QM through ASIL D)',
        ],
      },
      {
        title: 'Hardware-Software Partitioning',
        description:
          'Optimizing compute, memory, latency, and power budgets across MCUs, automotive SoCs, FPGAs, and edge accelerators.',
        bullets: [
          'Compute target selection (Infineon TriCore/Traveo, NXP S32G, Qualcomm Snapdragon, NVIDIA)',
          'Deterministic real-time scheduling and bus-load analysis',
          'High-speed Ethernet, CAN-FD, PCIe, and 10BASE-T1S network topologies',
        ],
      },
      {
        title: 'Model-Based Engineering & Simulation',
        description:
          'Validating system control logic and thermal/electrical plant behavior before target hardware availability.',
        bullets: [
          'Control algorithm modeling in MATLAB / Simulink & Simscape',
          'Cycle-accurate architectural prototyping and feasibility studies',
          'Rapid Proof-of-Concept (PoC) and functional prototype bring-up',
        ],
      },
    ],
    deliverables: [
      'System Architecture & Interface Control Specifications (ICD)',
      'Hardware-Software Partitioning & Compute Sizing Reports',
      'Functional Safety Concept & Technical Safety Requirements',
      'Executable Simulink / SystemC Reference Models',
    ],
    tools: ['SysML', 'Enterprise Architect', 'MATLAB & Simulink', 'Vector PREEvision', 'SystemC', 'DOORS / Polarion'],
    standards: ['ISO 26262', 'Automotive SPICE® V3.1', 'IEC 61508', 'ISO/SAE 21434'],
  },
  {
    slug: 'firmware-embedded',
    title: 'Firmware & Embedded Software',
    shortTitle: 'Firmware & Embedded Software',
    badge: 'RTOS & Bare-Metal',
    tagline:
      'Low-level device drivers, board support packages, bootloaders, and safety-critical RTOS firmware engineered for deterministic real-time execution.',
    overview:
      'From bare-metal microcontroller bring-up to multi-core hypervisor environments on QNX, Embedded Linux, and FreeRTOS, our embedded engineers build ultra-reliable firmware stacks designed for harsh automotive, industrial, and edge operating environments.',
    metrics: [
      { value: 'Sub-ms', label: 'Deterministic Latency' },
      { value: 'Multi-Core', label: 'MCU & SoC Bring-Up' },
      { value: 'MISRA-C', label: 'Coding Compliance' },
      { value: 'Secure Boot', label: 'Hardware Root of Trust' },
    ],
    capabilities: [
      {
        title: 'Board Bring-Up & BSP Development',
        description:
          'Complete hardware initialization, peripheral drivers, and custom Board Support Packages across automotive and industrial silicon.',
        bullets: [
          'Custom BSPs for Embedded Linux (Yocto), QNX, FreeRTOS, and Zephyr',
          'Low-level drivers for SPI, I2C, UART, CAN/CAN-FD, LIN, Ethernet, and PCIe',
          'Dual-channel MCU safety monitoring, heartbeat supervision, and safe-state logic',
        ],
      },
      {
        title: 'Hypervisor & Mixed-Criticality Platforms',
        description:
          'Consolidating multiple ECU workloads onto high-performance compute (HPC) SoCs with strict spatial and temporal isolation.',
        bullets: [
          'QNX Hypervisor and VirtIO inter-VM communication',
          'Cross-OS native services spanning QNX, Android Automotive, and AGL',
          'Time synchronization (gPTP) and multi-core IPC optimization',
        ],
      },
      {
        title: 'Secure Bootloaders & OTA Flashing',
        description:
          'Resilient firmware lifecycle mechanisms ensuring tamper-proof boot sequences and zero-brick over-the-air updates.',
        bullets: [
          'Cryptographically signed bootloaders and Hardware Security Module (HSM) integration',
          'A/B partition FOTA / OTA flashing with automatic fail-safe rollback',
          'Diagnostic stacks (UDS, DoIP, DEM/DCM/FIM, J1939)',
        ],
      },
    ],
    deliverables: [
      'Production-Ready Board Support Packages (BSP) & Device Drivers',
      'Secure Bootloader & A/B Partition OTA Flashing Stack',
      'MISRA-C / CERT-C Compliant Bare-Metal & RTOS Firmware',
      'Hardware Bring-Up & Peripheral Validation Reports',
    ],
    tools: ['C / C++', 'Rust Embedded', 'QNX', 'Yocto Linux', 'FreeRTOS / Zephyr', 'Lauterbach', 'iSYSTEM'],
    standards: ['MISRA C:2012', 'CERT C/C++', 'ISO 26262', 'IEC 61508 SIL 3'],
  },
  {
    slug: 'autosar-development',
    title: 'AUTOSAR Development (Classic & Adaptive)',
    shortTitle: 'AUTOSAR Development',
    badge: 'Classic & Adaptive',
    tagline:
      'Modular, scalable Classic and Adaptive AUTOSAR software architectures, MCAL driver development, BSW integration, and multi-core HPC deployment.',
    overview:
      'We deliver end-to-end AUTOSAR engineering for global automotive OEMs and Tier-1 suppliers—spanning Infineon TriCore/Traveo and NXP S32G microcontrollers to high-compute Qualcomm Snapdragon SoCs. Our engineers handle architecture design, BSW/MCAL configuration, CDD and SWC development, and full verification up to ASIL D.',
    metrics: [
      { value: 'Classic & Adaptive', label: 'Full Stack Mastery' },
      { value: 'ASIL D', label: 'MCAL Driver Delivery' },
      { value: 'SOME/IP & DoIP', label: 'SOA Communication' },
      { value: 'Multi-Core', label: 'HPC ECU Ready' },
    ],
    capabilities: [
      {
        title: 'Classic AUTOSAR BSW & MCAL Engineering',
        description:
          'Full lifecycle configuration, integration, and custom development of Basic Software Modules and ASIL D Microcontroller Abstraction Layers.',
        bullets: [
          'MCAL drivers for Microcontroller, Memory, Communication, and I/O (Infineon TC2x/TC3x, Traveo II, NXP S32K/S32G)',
          'Full BSW stack integration: COM, MEM/NVM, Diagnostics (DEM, DCM, FIM), Ethernet, and Crypto Stack',
          'Complex Device Drivers (CDD), RTE generation, and ASW software components (SWC)',
        ],
      },
      {
        title: 'Adaptive AUTOSAR & Service-Oriented Architecture',
        description:
          'High-compute Adaptive AUTOSAR stacks enabling dynamic SOA communication, cloud connectivity, and centralized gateway architectures.',
        bullets: [
          'Adaptive AUTOSAR porting and integration on QNX, AGL, Linux, and Android',
          'ara::com network bindings (SOME/IP, DDS), Diagnostic Manager, and Update & Configuration Management',
          'Signal-to-Service (CAN to SOME/IP) gateway translation and core partitioning',
        ],
      },
      {
        title: 'Virtualization & Cloud ECU Validation',
        description:
          'Accelerating AUTOSAR integration cycles through virtual ECUs (vECUs) and containerized simulation environments.',
        bullets: [
          'Virtual ECU execution on AWS metal instances and Vector vVIRTUALtarget / SIL Kit',
          'Audio Video Bridging (AVB), gPTP time synchronization, and Ethernet switch configuration',
          'Calibration, measurement, and automated regression with CANoe, CANape, and VectorCAST',
        ],
      },
    ],
    deliverables: [
      'Configured Classic & Adaptive AUTOSAR Stacks (ARXML & BSW)',
      'ASIL D Compliant MCAL & Complex Device Drivers (CDD)',
      'Multi-Core Application Software Components (ASW / SWC)',
      'Virtual ECU (vECU) & HIL Integration Validation Suites',
    ],
    tools: ['Vector DaVinci', 'Elektrobit EB tresos', 'Siemens VSA', 'ETAS', 'Vector CANoe / CANape', 'VectorCAST'],
    standards: ['AUTOSAR Classic 4.x', 'AUTOSAR Adaptive', 'ISO 26262 ASIL D', 'Automotive SPICE® V3.1'],
  },
  {
    slug: 'testing-validation',
    title: 'Testing, Verification & Validation',
    shortTitle: 'Testing & Validation (XIL)',
    badge: 'MIL / SIL / HIL & QA',
    tagline:
      'Comprehensive verification and validation across XIL (MIL, SIL, HIL), model-based testing, safety & security testing, and automated CI/CD test benches.',
    overview:
      'Zero-defect engineering demands verification shifted left from day one through final hardware-in-the-loop sign-off. Our dedicated V&V squads combine automated test frameworks, fault injection, scenario-based ADAS validation, and pre-silicon/embedded verification to guarantee production reliability.',
    metrics: [
      { value: 'MIL / SIL / HIL', label: 'Full XIL Coverage' },
      { value: 'SWE.4 – SWE.6', label: 'ASPICE V&V Aligned' },
      { value: '100% Traceable', label: 'Req-to-Test Evidence' },
      { value: 'Automated', label: 'CI/CD Bench Execution' },
    ],
    capabilities: [
      {
        title: 'XIL Development & Model-Based Testing',
        description:
          'End-to-end simulation and real-time bench testing across Model-in-the-Loop, Software-in-the-Loop, and Hardware-in-the-Loop setups.',
        bullets: [
          'dSPACE SCALEXIO, VEOS, NI LabVIEW / VeriStand, and IPG CarMaker test benches',
          'ASAM OpenSCENARIO & OpenDRIVE scenario generation and Euro NCAP / ODD validation',
          'Bespoke tooling development, sensor emulation, and automated test execution',
        ],
      },
      {
        title: 'Functional, Non-Functional & Regression Testing',
        description:
          'Multi-tier verification guaranteeing deterministic timing, memory integrity, and zero regressions across releases.',
        bullets: [
          'Unit, integration, system, and automated regression test suites',
          'Performance profiling, latency budgets, bus-load, and memory stress testing',
          'Pre-silicon UVM verification, formal proofs, and FPGA prototyping support',
        ],
      },
      {
        title: 'Safety, Compliance & Security Testing',
        description:
          'Rigorous fault-injection and adversarial testing validating fail-safe behavior and cyber resilience.',
        bullets: [
          'Safety compliance testing (ISO 26262, DO-178C, IEC 61508), fail-safe/fail-soft, and redundancy testing',
          'SOTIF (ISO 21448) validation and controlled hardware/signal fault injection',
          'Vulnerability scanning, penetration testing, and firmware integrity verification',
        ],
      },
    ],
    deliverables: [
      'Requirements-Based Test Strategies & Traceable Test Specifications',
      'Automated MIL / SIL / HIL & Virtual ECU Test Suites',
      'Fault Injection, Safety & Penetration Testing Audit Reports',
      'CI/CD Integrated Regression & Coverage Dashboards',
    ],
    tools: ['dSPACE / VEOS', 'NI LabVIEW & VeriStand', 'IPG CarMaker', 'VectorCAST', 'CANoe', 'Python / pytest', 'FreeMASTER'],
    standards: ['Automotive SPICE® SWE.4–6', 'ISO 26262', 'ISO 21448 (SOTIF)', 'ISO/SAE 21434'],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation & Web Platforms',
    shortTitle: 'Digital Transformation & Web',
    badge: 'Enterprise & Modern Web',
    tagline:
      'Enterprise digital modernization and scalable web platform engineering—transforming legacy ecosystems with modern SPAs, microservices, and APIs.',
    overview:
      'We help enterprises modernize legacy software estates and launch high-performance web applications built for scale. Combining intuitive UX/UI architecture with decoupled microservices and cloud-native APIs, our teams turn complex engineering and operational workflows into seamless digital products.',
    metrics: [
      { value: 'React & Vue', label: 'Modern SPA Stacks' },
      { value: 'Core Web Vitals', label: 'Performance Tuned' },
      { value: 'API-First', label: 'Microservices Backend' },
      { value: 'PWA Ready', label: 'Offline & Real-Time' },
    ],
    capabilities: [
      {
        title: 'Modern SPA & Progressive Web Applications',
        description:
          'Responsive, high-speed frontend engineering optimized for desktop, tablet, and mobile with real-time interactivity.',
        bullets: [
          'React.js, Vue.js, TypeScript, and modern HTML5/CSS3 design systems',
          'Progressive Web Apps (PWA) with offline capabilities and push notifications',
          'Real-time dashboards using WebSockets, WebGL, and WebRTC',
        ],
      },
      {
        title: 'Legacy Modernization & Microservices',
        description:
          'Incrementally refactoring monolithic systems into maintainable, cloud-ready services with zero business disruption.',
        bullets: [
          'Node.js, Python, and Go REST/GraphQL/gRPC backend architectures',
          'PostgreSQL, time-series, and distributed data layer engineering',
          'Enterprise third-party API integrations and identity/RBAC security',
        ],
      },
      {
        title: 'UX/UI Design, QA & Lifecycle Support',
        description:
          'End-to-end delivery from user-journey mapping and acceptance criteria to automated testing and continuous maintenance.',
        bullets: [
          'Requirements scoping, user-flow wireframing, and responsive interface architecture',
          'Functional, compatibility, performance, and security validation',
          'Continuous deployment, monitoring, and iterative feature evolution',
        ],
      },
    ],
    deliverables: [
      'UX/UI Design Systems & Interactive Frontend Applications',
      'Decoupled Microservices, REST/GraphQL APIs & Database Schemas',
      'Legacy-to-Cloud Modernization Roadmaps & Migration Execution',
      'Automated E2E Test Suites & Production Monitoring Setup',
    ],
    tools: ['React.js', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL / REST', 'WebSockets'],
    standards: ['OWASP Top 10', 'WCAG Accessibility', 'Core Web Vitals', 'ISO 9001:2015'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & Industrial DevOps Engineering',
    shortTitle: 'Cloud & Industrial DevOps',
    badge: 'Cloud, CI/CD & OTA',
    tagline:
      'Well-architected cloud platforms, Infrastructure as Code, and embedded CI/CD pipelines engineered for connected vehicles, IoT fleets, and regulated software.',
    overview:
      'We engineer scalable cloud backends and automated DevOps pipelines purpose-built for both enterprise workloads and embedded/automotive ECUs. From containerized cross-compilation and HIL-in-CI automation to multi-cloud Kubernetes clusters and FinOps governance, we embed quality and compliance directly into every pipeline.',
    metrics: [
      { value: 'AWS · Azure · GCP', label: 'Multi-Cloud Scale' },
      { value: 'Compliance as Code', label: 'ASPICE / 26262 Evidence' },
      { value: 'SIL & HIL in CI', label: 'Automated Verification' },
      { value: 'Zero-Downtime', label: 'Signed OTA & Rollback' },
    ],
    capabilities: [
      {
        title: 'Embedded CI/CD & Build Infrastructure',
        description:
          'Reproducible, containerized build and test pipelines tailored for Yocto Linux, AUTOSAR, and multi-target ECU cross-compilation.',
        bullets: [
          'Automated Jenkins, GitLab CI, and GitHub Actions pipelines with binary caching',
          'Containerized toolchains, artifact versioning, and SBOM generation',
          'Quality gates enforcing static analysis (SonarQube), MISRA checks, and coverage',
        ],
      },
      {
        title: 'Cloud Architecture & Connected-Vehicle Backends',
        description:
          'Resilient, infrastructure-as-code cloud platforms powering fleet telemetry, OTA servers, and virtual ECU simulation at scale.',
        bullets: [
          'Terraform IaC, Kubernetes / K3s orchestration, and Argo CD GitOps delivery',
          'High-throughput MQTT/streaming telemetry pipelines and OTA management backends',
          'Cloud-hosted virtual ECU (vECU) and simulation farms on AWS/Azure/GCP',
        ],
      },
      {
        title: 'Observability, Cloud Security & FinOps',
        description:
          'Running production platforms securely, reliably, and cost-efficiently with full compliance traceability.',
        bullets: [
          'Prometheus, Grafana, and OpenTelemetry metrics, logs, traces, and SLO alerting',
          'Least-privilege IAM, encryption, policy-as-code, and compliance baselines',
          'Right-sizing, cost telemetry, and continuous FinOps optimization',
        ],
      },
    ],
    deliverables: [
      'Automated Embedded & Cloud CI/CD Pipelines with Quality Gates',
      'Terraform Infrastructure-as-Code & Kubernetes Deployment Blueprints',
      'Connected Vehicle / IoT Telemetry & Signed OTA Backends',
      'Full Observability Stack (Prometheus / Grafana / OpenTelemetry)',
    ],
    tools: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'Terraform', 'Jenkins / GitLab CI / GitHub Actions', 'Argo CD', 'Ansible', 'SonarQube', 'Prometheus & Grafana'],
    standards: ['Compliance as Code (ASPICE / ISO 26262 / 21434)', 'SOC 2 Best Practices', 'Zero-Trust IAM'],
  },
  {
    slug: 'native-android',
    title: 'Native Android & AAOS Engineering',
    shortTitle: 'Native Android Engineering',
    badge: 'Kotlin, Java & AAOS',
    tagline:
      'High-performance native Android applications and Android Automotive OS (AAOS) cockpit integrations built for 60fps fluidity and offline resilience.',
    overview:
      'Our mobile and automotive Android engineers craft responsive, secure native applications in Kotlin and Java—from consumer and enterprise companion apps with robust offline synchronization to customized AOSP / Android Automotive OS (AAOS) platforms integrated directly with Vehicle HAL bridges.',
    metrics: [
      { value: '60 FPS', label: 'Fluid Native UI' },
      { value: 'Kotlin & Java', label: 'Modern Codebase' },
      { value: 'Offline-First', label: 'Local Sync Resilience' },
      { value: 'AOSP / AAOS', label: 'Cockpit & VHAL Ready' },
    ],
    capabilities: [
      {
        title: 'Native Mobile App Engineering',
        description:
          'Feature-rich Kotlin and Java applications architected for maintainability, smooth rendering, and deep hardware API access.',
        bullets: [
          'Clean MVVM / MVI architecture with Jetpack Compose and modern Android SDK',
          'Robust local caching, offline synchronization, and conflict-free data flows',
          'Secure backend API integration, biometrics, BLE/Wi-Fi device pairing, and telemetry',
        ],
      },
      {
        title: 'Android Automotive OS (AAOS) & AOSP Customization',
        description:
          'Deep platform engineering for in-vehicle cockpits on Qualcomm Snapdragon and automotive SoC targets.',
        bullets: [
          'AOSP customization: boot sequences, multi-display support, audio/Dolby, and voice/NLP integration',
          'Vehicle HAL (VHAL) bridges connecting standardized vehicle signals (VSS/gRPC) into CarService',
          'Android Auto projection, media playback (ExoPlayer), and navigation system integration',
        ],
      },
      {
        title: 'Compatibility, Performance & Release Readiness',
        description:
          'End-to-end validation ensuring rock-solid stability across device matrices and OS versions.',
        bullets: [
          'Automated UI, integration, compatibility, and memory/battery profiling',
          'Virtualized Android Cuttlefish testing in cloud CI/CD pipelines',
          'Play Store / OEM release management, crash analytics, and continuous updates',
        ],
      },
    ],
    deliverables: [
      'Production Kotlin / Java Native Android Applications',
      'Customized AOSP / AAOS System Images & VHAL Bridges',
      'Offline-Resilient Local Storage & Secure API Sync Layers',
      'Automated Compatibility & Performance Validation Reports',
    ],
    tools: ['Kotlin', 'Java', 'Android SDK', 'AOSP / AAOS', 'Jetpack Compose', 'Android Cuttlefish', 'ExoPlayer'],
    standards: ['Android CDD / CTS', 'OWASP MASVS', 'ISO 9001:2015'],
  },
  {
    slug: 'consulting',
    title: 'Consulting & Architecture Review',
    shortTitle: 'Consulting',
    badge: 'Advisory & Dedicated Squads',
    tagline:
      'Strategic engineering consulting, independent architecture reviews, and flexible resource staffing through dedicated global engineering squads.',
    overview:
      'Beyond hands-on execution, NEXZORA acts as a strategic engineering partner for OEMs, Tier-1 suppliers, and technology leaders. Whether you need an independent architecture review, an AI/SDV transformation roadmap, or rapid scaling via specialized embedded and automotive engineering talent across our global centers, we tailor our engagement model to your exact delivery goals.',
    metrics: [
      { value: '< 2 Weeks', label: 'Squad Ramp-Up' },
      { value: '4 Global Hubs', label: 'US · Egypt · Japan · India' },
      { value: '3–7 Days', label: 'Specialist Onboarding' },
      { value: '100% IP', label: 'Client Ownership' },
    ],
    capabilities: [
      {
        title: 'Architecture Review & Technical Due Diligence',
        description:
          'Independent evaluations of complex embedded, automotive, AI, and cloud architectures to uncover bottlenecks and de-risk production.',
        bullets: [
          'Compute, bus-load, memory, and real-time latency bottleneck assessments',
          'Hardware-software partitioning, vendor/SoC selection, and BOM optimization',
          'Actionable remediation roadmaps with milestone-based implementation plans',
        ],
      },
      {
        title: 'Dedicated Engineering Squads & Resource Staffing',
        description:
          'Rapidly extending your engineering organization with pre-vetted specialists across automotive, embedded, AI, robotics, and cloud.',
        bullets: [
          'Fully managed cross-functional squads integrated directly into your repos & toolchains',
          'Flexible staff augmentation for AUTOSAR, FuSa, Cybersecurity, ADAS, V&V, and AI roles',
          'Seamless global collaboration spanning Dallas, Cairo, Tokyo, and Thiruvananthapuram',
        ],
      },
      {
        title: 'Strategic Roadmaps (SDV, AI & DevOps)',
        description:
          'Pragmatic, value-driven roadmaps that move organizations smoothly from legacy workflows to modern platforms.',
        bullets: [
          'AI & Agentic AI readiness assessments, pilot scoping, and ROI governance',
          'Software-Defined Vehicle (SDV) transition and zonal consolidation blueprints',
          'Industrial DevOps & ASPICE/ISO 26262 process maturity transformation',
        ],
      },
    ],
    deliverables: [
      'Independent Architecture Assessment & Risk Mitigation Reports',
      'Technology, SDV & AI Implementation Roadmaps',
      'Dedicated Turnkey Squads or Embedded Specialist Staffing',
      'Process Maturity & Toolchain Modernization Plans',
    ],
    tools: ['Architecture Reviews', 'Dedicated Squads', 'Turnkey Delivery', 'Staff Augmentation', 'Executive Advisory'],
    standards: ['ISO 9001:2015', 'TISAX®', 'Automotive SPICE® V3.1', 'ISO 26262'],
  },
];

export const SOLUTIONS_DATA = [
  {
    slug: 'sdv',
    title: 'Software-Defined Vehicles (SDV)',
    shortTitle: 'Software-Defined Vehicles (SDV)',
    badge: '6-Layer SDV Stack',
    tagline:
      'Centralized, continuously updatable vehicle software platforms turning low-level hardware connectivity into standardized, signal-centric cloud-manageable services.',
    overview:
      'We build complete Software-Defined Vehicle (SDV) software stacks that decouple vehicle features from underlying wiring harnesses and supplier-locked ECUs. Built on open industry standards—COVESA VSS, ISO 17978 SOVD, 10BASE-T1S Ethernet, SOME/IP, and containerized OTA—our SDV solutions let OEMs ship new features in days and improve vehicles continuously over the air.',
    metrics: [
      { value: '6 Layers', label: 'Clean Modular Stack' },
      { value: 'COVESA VSS', label: 'Standard Signal Plane' },
      { value: 'ISO 17978', label: 'SOVD Diagnostics' },
      { value: 'Multi-Target', label: 'SoC · HPC · Zonal' },
    ],
    capabilities: [
      {
        title: 'Zonal Edge Networking & Hardware Abstraction',
        description:
          'Collapsing point-to-point wiring harnesses into single-pair Ethernet and clean, transport-agnostic C++ interfaces.',
        bullets: [
          '10BASE-T1S single-pair Ethernet supporting ~15 remote nodes per twisted pair',
          'Tunneling I2C, SPI, UART, ADC, CAN, and LIN over Ethernet with pluggable transports',
          'ABI-stable, thread-safe C++ transport wrappers and type-safe device factories',
        ],
      },
      {
        title: 'Standardized Signal Data Plane (COVESA VSS)',
        description:
          'One source-of-truth vehicle signal catalog decoupling feature teams, cockpits, and Tier-1 suppliers.',
        bullets: [
          'Auto-generated broker configs, C++ models, IPC datatypes, and diagnostic mappings from .vspec',
          'gRPC signal broker plus SOME/IP and D-Bus (CommonAPI) middleware interoperability',
          'Android Automotive VHAL bridge surfacing standardized signals across multiple HMIs',
        ],
      },
      {
        title: 'Service-Oriented Diagnostics (SOVD) & Cloud OTA',
        description:
          'Modern REST/HTTP diagnostics and containerized over-the-air fleet management.',
        bullets: [
          'ISO 17978 SOVD gateway unifying workshop, cloud backend, and on-board diagnostic access',
          'Combined DTC fault memory (DEM) with OpenTelemetry software metrics, logs, and traces',
          'Containerized OTA updates, edge runtime, and fleet health monitoring dashboards',
        ],
      },
    ],
    useCases: [
      {
        title: 'Centralized Gateway ECU (NXP S32G3)',
        description:
          'Adaptive AUTOSAR on A-Cores + Classic AUTOSAR on M-Cores with CAN-to-SOME/IP translation, DoIP flashing master, IDS, and firewall.',
      },
      {
        title: 'Zonal Audio Bus & Signal-Driven Features',
        description:
          'Multi-transport parking assist, ambient lighting, and steering-driven matrix lighting assembled purely from standardized VSS signals.',
      },
    ],
    techStack: ['COVESA VSS', 'ISO 17978 SOVD', 'gRPC', 'SOME/IP', '10BASE-T1S Ethernet', 'Android VHAL', 'OpenTelemetry', 'Docker / K3s'],
    standards: ['ISO 17978 (SOVD)', 'COVESA VSS', 'AUTOSAR Adaptive', 'ISO/SAE 21434'],
  },
  {
    slug: 'adas',
    title: 'ADAS & Automated Driving',
    shortTitle: 'ADAS & Automated Driving',
    badge: 'L2++ Perception & Fusion',
    tagline:
      'End-to-end Advanced Driver Assistance Systems spanning multi-sensor perception, sensor fusion, surround view, automated parking, and scenario-based validation.',
    overview:
      'We design, integrate, and validate production ADAS software across Qualcomm, Texas Instruments, and NVIDIA HPC platforms. From radar and camera fusion for ACC, LKAS, and AEB to 360° surround view, automated parking, and Driver Monitoring Systems (DMS), our teams deliver both single ADAS features and complete end-to-end stacks.',
    metrics: [
      { value: 'Qualcomm · TI · NVIDIA', label: 'SoC Platforms' },
      { value: 'L2 / L2++', label: 'ADAS Feature Depth' },
      { value: 'Euro NCAP', label: 'Validation Ready' },
      { value: 'ISO 21448', label: 'SOTIF Aligned' },
    ],
    capabilities: [
      {
        title: 'Sensor Fusion & Driving Assistance',
        description:
          'Deterministic multi-sensor perception pipelines fusing short/long-range radar, front cameras, and surround vision.',
        bullets: [
          'Multi-object detection, tracking, and lane/road boundary perception',
          'Adaptive Cruise Control (ACC), Lane Keeping Assist (LKAS/LCA), AEB, and FCW',
          'Longitudinal and lateral motion planning and vehicle control integration',
        ],
      },
      {
        title: 'Surround View (SVS), Park Assist & In-Cabin DMS',
        description:
          'High-precision computer vision features for low-speed maneuvering and driver safety monitoring.',
        bullets: [
          'Real-time multi-camera stitching into 360° bird’s-eye and 3D surround views',
          'Fisheye-camera perception and trajectory planning for automated parallel/perpendicular parking',
          'Driver & Cabin Monitoring Systems (DMS/CMS): gaze/head pose, drowsiness, distraction, and unresponsiveness',
        ],
      },
      {
        title: 'ADAS System Integration & Scenario Validation',
        description:
          'Integrating mixed-criticality ADAS apps on HPC SoCs with automated scenario-based verification.',
        bullets: [
          'QNX + Adaptive AUTOSAR on HPC SoCs integrated with Classic AUTOSAR safety hosts',
          'AI-driven scenario generation in ASAM OpenSCENARIO & OpenDRIVE',
          'dSPACE Aurelion / VEOS / SCALEXIO, IPG CarMaker, SOTIF, ODD, and fault-injection testing',
        ],
      },
    ],
    useCases: [
      {
        title: 'HPC ECU ADAS Feature Integration',
        description:
          'Integrated Park Assist, LKAS, ACC, and 360° SVS combining radar and camera feeds on a flagship automotive HPC platform.',
      },
      {
        title: 'L2++ Automated Parking V&V (ASPICE SWE.5/6)',
        description:
          'Full MIL/SIL/HIL validation with Euro NCAP parallel/perpendicular parking scenarios, SOTIF verification, and ground-truth data pipelines.',
      },
    ],
    techStack: ['Qualcomm Snapdragon Ride', 'NVIDIA Orin', 'TI TDA4', 'QNX', 'Adaptive AUTOSAR', 'ASAM OpenSCENARIO', 'dSPACE / IPG / Hexagon'],
    standards: ['ISO 26262', 'ISO 21448 (SOTIF)', 'Automotive SPICE®', 'Euro NCAP'],
  },
  {
    slug: 'ivi-telematics',
    title: 'In-Vehicle Infotainment (IVI) & Telematics',
    shortTitle: 'IVI & Telematics',
    badge: 'Android · QNX · AGL',
    tagline:
      'Next-generation digital cockpits, hypervisor-based infotainment clusters, connected telematics control units, and cloud-virtualized IVI platforms.',
    overview:
      'We build responsive, feature-rich cockpit and connectivity platforms across Android Automotive OS (AAOS), Automotive Grade Linux (AGL), and QNX. Whether consolidating instrument cluster and IVI via hypervisors on Qualcomm SA8295 or engineering ultra-low-cost cellular TCUs with FOTA and AVB audio streaming, our teams deliver seamless in-vehicle experiences.',
    metrics: [
      { value: 'AAOS · QNX · AGL', label: 'Cockpit OS Mastery' },
      { value: 'SA8295 / 8195', label: 'Snapdragon Platforms' },
      { value: 'AVB & gPTP', label: 'Time-Sensitive Audio' },
      { value: 'FOTA & Cloud', label: 'Connected Telematics' },
    ],
    capabilities: [
      {
        title: 'Digital Cockpit & Hypervisor IVI Platforms',
        description:
          'Consolidating instrument clusters, infotainment, and voice/media services on high-performance automotive SoCs.',
        bullets: [
          'QNX Hypervisor multi-OS orchestration (QNX + Android Automotive + AGL)',
          'Android Auto projection, custom AOSP features, Dolby audio, ExoPlayer streaming, and NLP/Alexa voice',
          'Multi-display bring-up, camera modules, and shared graphics/audio pipelines',
        ],
      },
      {
        title: 'Telematics Control Units (TCU) & Connectivity',
        description:
          'Reliable vehicle-to-cloud connectivity, remote diagnostics, and over-the-air fleet management.',
        bullets: [
          'MCU + Network Access Device (NAD) architectures for automobiles and two-wheelers',
          'CAN-to-cloud IoT telemetry ingestion and resilient FOTA state machines',
          'Centralized gateway routing, protocol translation, and remote diagnostics over IP (DoIP)',
        ],
      },
      {
        title: 'Time-Sensitive Networking (AVB) & Cloud Virtualization',
        description:
          'Audio Video Bridging over automotive Ethernet and containerized virtual cockpit testbeds.',
        bullets: [
          'AUTOSAR AVB talker/listener stacks with gPTP global time sync and media clock recovery',
          'Containerized Android Cuttlefish + Vector vVIRTUALtarget virtual IVI integration on AWS',
          'SOME/IP and SIL Kit middleware for rapid cloud-based IVI feature development',
        ],
      },
    ],
    useCases: [
      {
        title: 'Next-Gen Snapdragon 8295 Cockpit & Cluster',
        description:
          'Board bring-up, hypervisor cross-OS services, Adaptive AUTOSAR Diagnostic Manager, and AWS G5g virtualized ECU deployment.',
      },
      {
        title: 'Cloud-Containerized Remote Tuner & IVI System',
        description:
          'Unified Docker/LXC environment connecting virtual Android Cuttlefish IVI with simulated Traveo remote tuner over SOME/IP & AVB.',
      },
    ],
    techStack: ['Qualcomm SA8295/8195', 'QNX Hypervisor', 'Android Automotive (AAOS)', 'AGL', 'Infineon Traveo II', 'NXP S32K', 'SOME/IP & AVB'],
    standards: ['IEEE 802.1 AVB / gPTP', 'AUTOSAR Classic & Adaptive', 'ISO 14229 (UDS)', 'Android CDD'],
  },
  {
    slug: 'powertrain-bms',
    title: 'Powertrain & Battery Management Systems (BMS)',
    shortTitle: 'Powertrain & BMS',
    badge: 'EV & Electrification',
    tagline:
      'High-voltage EV electrification, Battery Management Systems (BMS), EV charging controllers (EVCC), and real-time HIL battery validation.',
    overview:
      'We engineer complete electrification software and control architectures for electric vehicles, hybrid powertrains, and grid-scale energy storage. From BMU/CMU sensing and SOC/SOH/SOP estimation algorithms to ISO 15118 EV charging controllers and DC-DC / onboard charger ECUs, our solutions deliver maximum range, thermal safety, and longevity.',
    metrics: [
      { value: '800V Ready', label: 'EV Powertrain Stacks' },
      { value: 'SOC · SOH · SOP', label: 'Precision Estimation' },
      { value: 'ISO 15118-20', label: 'EVCC Charging Comms' },
      { value: 'MIL / SIL / HIL', label: 'Real-Time Cell Sim' },
    ],
    capabilities: [
      {
        title: 'BMS Architecture, Sensing & Protection',
        description:
          'Complete embedded software and hardware integration for safe, high-efficiency battery packs.',
        bullets: [
          'BMU/CMU architectures, cell voltage/current/temperature sensing, and isolation monitoring',
          'Contactor control, pre-charge sequencing, dynamic power limits, and safe fault reactions',
          'SOC, SOH, and SOP state estimators, active/passive cell balancing, and thermal control logic',
        ],
      },
      {
        title: 'Powertrain ECUs & EV Charging Controllers (EVCC)',
        description:
          'AUTOSAR-compliant software for onboard chargers, DC-DC converters, inverters, and smart charging.',
        bullets: [
          'EVCC controller development on Infineon TriCore TC3xx with full BSW, ASW, and CDD stacks',
          'IEC 61851-1, ISO 15118-2/-20 Plug & Charge, and J1939 diagnostic protocols',
          'High-efficiency power conversion control and energy optimization algorithms',
        ],
      },
      {
        title: 'Battery Modeling & Real-Time HIL Verification',
        description:
          'Validating battery aging, thermal behavior, and fault handling prior to physical pack testing.',
        bullets: [
          'Electrical and thermal battery-pack modeling in MATLAB/Simulink & Simscape Battery',
          'Real-time HIL benches (dSPACE / NI) with cell, sensor, and CAN/CAN-FD fault injection',
          'Automated requirements-based regression tests and traceable compliance reports',
        ],
      },
    ],
    useCases: [
      {
        title: 'AUTOSAR EVCC Controller (Leading USA OEM)',
        description:
          'End-to-end Infineon TC3xx EVCC architecture, MATLAB/Simulink business logic, EB tresos MCAL, and ISO 15118 validation.',
      },
      {
        title: '800V EV Battery Pack BMS & HIL Testbench',
        description:
          'Closed-loop Simscape battery plant model coupled with embedded BMS ECU for SOC/SOH tuning and thermal fault-injection testing.',
      },
    ],
    techStack: ['MATLAB / Simulink', 'Simscape Battery', 'Infineon TriCore TC3xx', 'AUTOSAR', 'dSPACE / NI HIL', 'CANoe / CANape'],
    standards: ['ISO 26262 ASIL D', 'ISO 15118-2/-20', 'IEC 61851-1', 'SAE J1939'],
  },
  {
    slug: 'safety-cybersecurity',
    title: 'Functional Safety & Automotive Cybersecurity',
    shortTitle: 'Safety & Cybersecurity',
    badge: 'ISO 26262 · ISO 21434',
    tagline:
      'End-to-end Functional Safety (FuSa) up to ASIL D / SIL 3 and chip-to-cloud cybersecurity protecting vehicles, industrial controllers, and connected products.',
    overview:
      'Safety and security cannot be bolted on after development—they must be engineered into every requirement, line of code, and hardware interface. We deliver ISO 26262 Functional Safety, IEC 61508 SIL 3 industrial safety, ISO/SAE 21434 automotive cybersecurity, and NIST 8425 IoT security compliance across the entire product lifecycle.',
    metrics: [
      { value: 'Up to ASIL D', label: 'ISO 26262 FuSa' },
      { value: 'ISO/SAE 21434', label: 'Automotive Cyber' },
      { value: 'Cat 4 / SIL 3', label: 'Industrial Safety' },
      { value: 'Chip-to-Cloud', label: 'Defense in Depth' },
    ],
    capabilities: [
      {
        title: 'Functional Safety Engineering (ISO 26262 & IEC 61508)',
        description:
          'Full safety lifecycle execution from hazard analysis through independent safety assessment.',
        bullets: [
          'HARA, Functional Safety Lifecycle Management Plan, Safety Concept & Technical Requirements',
          'FMEDA, FTA, FSM plans, software tool qualification, and Ansys Medini safety modeling',
          'Dual-channel MCU safety architectures (Category 4 / SIL 3) with fail-safe and redundancy testing',
        ],
      },
      {
        title: 'Chip-to-Cloud Automotive & IoT Cybersecurity',
        description:
          'Hardening ECUs, gateways, and smart appliances against evolving cyber threats.',
        bullets: [
          'AUTOSAR Crypto Stack, Hardware Security Modules (HSM), secure boot, and encrypted firmware OTA',
          'Active security: Intrusion Detection Systems (IDS), firewalls, anomaly detection, and reporting',
          'IoT & consumer product security roadmaps aligned with NIST 8425 and U.S. Cyber Trust Mark',
        ],
      },
      {
        title: 'Threat Modeling & Adversarial Security Testing',
        description:
          'Proactively uncovering vulnerabilities before deployment via structured TARA and penetration testing.',
        bullets: [
          'Threat Analysis and Risk Assessment (TARA), audit gap remediation, and security architecture design',
          'Vulnerability testing (buffer overflows, insecure communications) and firmware integrity checks',
          'Simulated penetration testing and compliance readiness for UNECE R155/R156',
        ],
      },
    ],
    useCases: [
      {
        title: 'Dual-Channel Industrial Safety Controller (Cat 4 / SIL 3)',
        description:
          'Redundant MCU startup, heartbeat supervision, cross-channel monitoring, and safe-state logic for servo, EVSE, and PLC applications.',
      },
      {
        title: 'Home Appliance Cybersecurity & Cyber Trust Mark (USA OEM)',
        description:
          'Audit gap remediation, TARA, NIST 8425 mapping, SW/HW security controls, and penetration testing across connected appliances.',
      },
    ],
    techStack: ['AUTOSAR Crypto Stack', 'HSM / TrustZone', 'Ansys Medini', 'MATLAB Simulink', 'Atlassian JIRA', 'IDS & Firewall'],
    standards: ['ISO 26262 ASIL A–D', 'ISO/SAE 21434', 'IEC 61508 SIL 3', 'NIST 8425 / UNECE R155'],
  },
  {
    slug: 'vision-agentic-ai',
    title: 'Vision AI & Agentic AI Solutions',
    shortTitle: 'Vision AI & Agentic AI',
    badge: 'Edge Vision & Governed Agents',
    tagline:
      'Domain-robust computer vision built for unseen field conditions and production-grade governed AI agents for regulated engineering and enterprise workflows.',
    overview:
      'We turn cutting-edge AI research into reliable, deployable products—never fragile demos. Our AI solutions span two high-impact pillars: a 6-layer Vision AI stack with domain generalization, federated learning, and edge TensorRT deployment; and a 6-layer governed Agentic AI architecture with RAG grounding, multi-agent orchestration, human approval gates, and full audit trails.',
    metrics: [
      { value: '6-Layer Stacks', label: 'Vision & Agentic AI' },
      { value: 'Edge to Cloud', label: 'ONNX · TensorRT · vLLM' },
      { value: 'Federated', label: 'Privacy-By-Design AI' },
      { value: 'Audit-Ready', label: 'Regulated Governance' },
    ],
    capabilities: [
      {
        title: 'Domain-Robust Vision AI & Edge Deployment',
        description:
          'Computer-vision models that maintain accuracy across new cameras, lighting, weather, and sites without costly re-labeling.',
        bullets: [
          'Parameter-efficient adaptation (LoRA, adapters, mixture-of-experts) on frozen foundation backbones',
          'Federated learning across vehicle fleets, factories, and clinics without raw image pooling',
          'Quantization, pruning, and ONNX / TensorRT deployment for NVIDIA Orin, automotive SoCs, and edge SBCs',
        ],
      },
      {
        title: 'Governed Agentic AI & Multi-Agent Workflows',
        description:
          'Grounded AI assistants and multi-agent engineering systems built with least-privilege tool access and human-in-the-loop gates.',
        bullets: [
          'Knowledge assistants with hybrid RAG, knowledge graphs, and source-cited answers across PDFs, ARXML, DBC, and code',
          'Engineering & compliance agents drafting traceable requirements, tests, and ASPICE/ISO 26262/21434 artifacts',
          'Stateful LangGraph orchestration, golden-set evaluation before launch, and production quality/cost/latency observability',
        ],
      },
      {
        title: 'AI Strategy, Conversational AI & Personalization',
        description:
          'Flexible AI engagement from strategic roadmaps to full end-to-end production execution.',
        bullets: [
          'Cloud API, private VPC, on-premise (vLLM / Ollama), and offline edge/in-vehicle deployment modes',
          'On-device wake-wordless voice assistants, conversational AI, and predictive analytics',
          'Data & model documentation aligned with ISO 21448 (SOTIF) and ISO/PAS 8800',
        ],
      },
    ],
    useCases: [
      {
        title: 'Agri-Tech AI Weed Detection & Targeted Spraying',
        description:
          'Pixel-precise image segmentation on autonomous drones with 0.5mm GPS targeting at speeds up to 50 mph, cutting herbicide waste.',
      },
      {
        title: 'Regulated Automotive Engineering & Compliance Agents',
        description:
          'Multi-agent planner-executor-reviewer workflows automating requirement gap detection, trace links, and static-analysis fixes under human sign-off.',
      },
    ],
    techStack: ['PyTorch', 'ONNX / TensorRT', 'OpenCV', 'LangGraph / LangChain', 'MCP', 'vLLM / Ollama', 'MLflow & OpenTelemetry'],
    standards: ['ISO 21448 (SOTIF)', 'ISO/PAS 8800', 'TISAX® / ISO 9001 Environment', 'Human-in-the-Loop Governance'],
  },
  {
    slug: 'robotics-autonomous',
    title: 'Robotics & Autonomous Systems',
    shortTitle: 'Robotics & Autonomous Systems',
    badge: 'ROS 1/2 · Autonomy · ROV/AUV',
    tagline:
      'Full-stack robotic engineering spanning autonomous navigation, ROS/ROS 2 middleware, precision control, virtual simulation, and subsea ROV/AUV systems.',
    overview:
      'From autonomous industrial robots to 200m-depth underwater ROVs and AUVs, we deliver integrated robotics engineering across software, electronics, and mechanical systems. Our teams build real-time perception, SLAM navigation, ROS 1/2 stacks, Gazebo/CARLA simulations, and custom hardware-software integrations ready for demanding real-world environments.',
    metrics: [
      { value: 'ROS 1 & ROS 2', label: 'Middleware Mastery' },
      { value: 'Real-Time', label: 'Perception & Control' },
      { value: 'Sim-to-Real', label: 'Gazebo & CARLA' },
      { value: 'Full Stack', label: 'SW · PCB · Mechanical' },
    ],
    capabilities: [
      {
        title: 'Autonomous Navigation, Perception & Control',
        description:
          'Intelligent guidance and control software enabling safe, precise operation in dynamic environments.',
        bullets: [
          'Autonomous navigation, sensor fusion, stereo vision, and real-time object recognition & tracking',
          'Precision control algorithms, depth hold, auto-heading, and adaptive learning',
          'Predictive maintenance systems and operator control GUI engineering',
        ],
      },
      {
        title: 'ROS 1 / ROS 2 Development & Simulation',
        description:
          'Modular robotic software architectures validated thoroughly in virtual environments before field deployment.',
        bullets: [
          'Custom ROS 1 & ROS 2 package creation and middleware coordination',
          'Virtual simulation, stress testing, and performance optimization in Gazebo & CARLA',
          'Hardware-software integration on NVIDIA Jetson / ARM 64-bit compute platforms',
        ],
      },
      {
        title: 'Mechanical, Electrical & Subsea Robotics Engineering',
        description:
          'Multidisciplinary hardware integration for specialized industrial and marine robotic platforms.',
        bullets: [
          'CAD modeling, FEA, CFD, motion/kinematic analysis, sealing, and propulsion design',
          'PCB design, power conversion/distribution, battery management, and internal wiring',
          'Subsea acoustic/optical communications (ADSCOM, BlueComm) and underwater wireless docking',
        ],
      },
    ],
    useCases: [
      {
        title: '200m Depth ROV, Remora AUV & Subsea Docking Skid',
        description:
          'Fully integrated underwater robotic ecosystem with 4-core/6-core ARM compute, stereo vision, sonar, wireless underwater charging, and optical telemetry.',
      },
      {
        title: 'Industrial Autonomous Navigation & Control',
        description:
          'ROS 2 based multi-sensor perception, motion planning, and safety-monitored actuation for factory automation.',
      },
    ],
    techStack: ['ROS 1 / ROS 2', 'Gazebo', 'CARLA', 'NVIDIA Carmel / Jetson', 'OpenCV', 'C++ / Python', 'CAD / FEA / CFD'],
    standards: ['IEC 61508', 'ISO 13849', 'Real-Time Control Safety', 'Encrypted Telemetry'],
  },
  {
    slug: 'iot-ecosystems',
    title: 'IoT & Connected Ecosystems',
    shortTitle: 'IoT & Connected Ecosystems',
    badge: 'Edge-to-Cloud IoT',
    tagline:
      'End-to-end IoT architecture connecting smart devices, wireless protocols, edge intelligence, cloud analytics, security, and rapid PoC prototyping.',
    overview:
      'We engineer scalable IoT ecosystems that bridge embedded edge devices with cloud analytics and intuitive visualization dashboards. From ultra-low-power sensor firmware and wireless connectivity (Wi-Fi, BLE, Zigbee, LoRaWAN) to predictive maintenance pipelines, zero-trust IoT security, and rapid proof-of-concept validation, we turn connected hardware into measurable business value.',
    metrics: [
      { value: 'Edge-to-Cloud', label: 'End-to-End Delivery' },
      { value: 'Multi-Protocol', label: 'Wi-Fi · BLE · LoRaWAN' },
      { value: 'Zero-Trust', label: 'Secure Boot & PKI' },
      { value: 'Rapid PoC', label: 'Fast Idea Validation' },
    ],
    capabilities: [
      {
        title: 'Embedded IoT Systems & Wireless Connectivity',
        description:
          'Reliable firmware, sensor/actuator integration, and multi-protocol wireless networking with edge processing.',
        bullets: [
          'Low-power embedded firmware and seamless sensor/actuator integration',
          'Wireless connectivity via Wi-Fi, Bluetooth/BLE, Zigbee, LoRaWAN, and cellular/MQTT',
          'Edge computing for low-latency local decision-making and bandwidth optimization',
        ],
      },
      {
        title: 'Cloud Integration, Analytics & Visualization',
        description:
          'Transforming high-volume device telemetry into real-time operational intelligence.',
        bullets: [
          'Scalable ingestion pipelines integrated with AWS IoT, Azure IoT, and Google Cloud',
          'AI/ML-powered predictive analytics for anomaly detection and maintenance',
          'Intuitive web and mobile dashboards for real-time fleet monitoring and control',
        ],
      },
      {
        title: 'IoT Security & Rapid Prototyping / PoC',
        description:
          'Protecting connected ecosystems by design while accelerating time-to-validation.',
        bullets: [
          'Secure firmware development, hardware encryption, secure boot, and device authentication',
          'Compliance alignment with NIST 8425, U.S. Cyber Trust Mark, and GDPR data privacy',
          'Rapid functional prototyping and scalable Proof of Concept (PoC) development',
        ],
      },
    ],
    useCases: [
      {
        title: 'Connected Home Appliance Security & Modernization',
        description:
          'End-to-end cybersecurity architecture, threat modeling, and NIST 8425 validation across smart residential appliances.',
      },
      {
        title: 'Global Fleet Telemetry & Predictive Edge Gateways',
        description:
          'Sub-second MQTT/Kafka telemetry ingestion with edge filtering, OTA updates, and fleet health visualization.',
      },
    ],
    techStack: ['MQTT / CoAP', 'Wi-Fi / BLE / Zigbee / LoRaWAN', 'AWS IoT / Azure IoT', 'FreeRTOS / Zephyr', 'Docker / K3s', 'Time-Series DBs'],
    standards: ['NIST 8425', 'U.S. Cyber Trust Mark', 'Zero-Trust PKI', 'TLS 1.3'],
  },
];

export const INDUSTRIES_DATA = [
  {
    slug: 'automotive',
    id: 'automotive',
    label: 'Automotive & Mobility',
    shortTitle: 'Automotive & Mobility',
    badge: 'ISO 26262 ASIL D',
    headline: 'Software-defined vehicles, ADAS perception, AUTOSAR platforms, and 800V electrification for global OEMs and Tier-1s.',
    overview:
      'We partner with leading automotive OEMs and Tier-1 suppliers worldwide to engineer next-generation vehicle software and electronics. Our teams cover the full automotive spectrum—from Classic & Adaptive AUTOSAR and centralized SDV gateways to L2++ ADAS, digital cockpits, EV battery management systems, and ASPICE/ISO 26262/ISO 21434 compliance.',
    metrics: [
      { value: 'ASIL A – D', label: 'ISO 26262 FuSa' },
      { value: 'ASPICE L2', label: 'V3.1 Certified' },
      { value: 'TISAX®', label: 'OEM Security Ready' },
      { value: 'OEM & Tier-1', label: 'Production Proven' },
    ],
    pillars: [
      {
        num: '01',
        title: 'SDV, AUTOSAR & Centralized Gateways',
        desc: 'Classic & Adaptive AUTOSAR stacks, COVESA VSS signal planes, ISO 17978 SOVD diagnostics, and multi-core HPC ECU consolidation.',
      },
      {
        num: '02',
        title: 'ADAS, Digital Cockpit & Telematics',
        desc: 'Multi-sensor radar/camera fusion, 360° surround view, DMS, QNX/AAOS/AGL infotainment, and connected TCU/AVB platforms.',
      },
      {
        num: '03',
        title: 'EV Powertrain, BMS & Full XIL V&V',
        desc: '800V BMS state estimation, ISO 15118 EVCC controllers, and automated MIL/SIL/HIL verification with Euro NCAP & SOTIF coverage.',
      },
    ],
    useCases: [
      {
        title: 'AUTOSAR HPC ECU & Cluster/Infotainment Consolidation',
        description:
          'Multi-core Classic & Adaptive AUTOSAR integration with PCIe/Ethernet switches, SOME/IP cross-domain services, and secure boot.',
      },
      {
        title: '800V Powertrain BMS & EVCC Software Stack',
        description:
          'ISO 26262 ASIL D battery management firmware and Infineon TriCore EVCC controller with real-time HIL fault-injection testing.',
      },
    ],
    standards: ['ISO 26262 ASIL D', 'ISO/SAE 21434', 'Automotive SPICE® V3.1', 'TISAX®', 'AUTOSAR Classic & Adaptive', 'ISO 21448 (SOTIF)'],
    relatedOfferings: [
      { label: 'Software-Defined Vehicles (SDV)', href: '/solutions/sdv' },
      { label: 'ADAS & Automated Driving', href: '/solutions/adas' },
      { label: 'AUTOSAR Development', href: '/services/autosar-development' },
    ],
  },
  {
    slug: 'robotics',
    id: 'robotics',
    label: 'Robotics & Autonomous Systems',
    shortTitle: 'Robotics & Autonomy',
    badge: 'ROS 2 · Real-Time Autonomy',
    headline: 'Autonomous navigation, precision control, virtual simulation, and subsea ROV/AUV engineering built for real-world reliability.',
    overview:
      'We engineer software and integrated hardware systems for industrial robotics, autonomous mobile platforms, and harsh-environment marine robotics. Combining ROS 1/2 expertise, stereo vision, sensor fusion, Gazebo/CARLA simulation, and full electromechanical design, we accelerate robots from concept prototype to field deployment.',
    metrics: [
      { value: 'ROS 1 & 2', label: 'Core Middleware' },
      { value: '200m Depth', label: 'Subsea ROV / AUV' },
      { value: 'Real-Time', label: 'SLAM & Tracking' },
      { value: 'End-to-End', label: 'SW · Elec · Mech' },
    ],
    pillars: [
      {
        num: '01',
        title: 'Autonomous Navigation & Vision',
        desc: 'SLAM navigation, stereo vision, real-time object recognition/tracking, and adaptive learning in dynamic environments.',
      },
      {
        num: '02',
        title: 'ROS 1/2 & Virtual Simulation',
        desc: 'Custom ROS packages, middleware integration, and Gazebo/CARLA virtual stress testing prior to hardware deployment.',
      },
      {
        num: '03',
        title: 'Electromechanical & Marine Robotics',
        desc: 'CAD/FEA/CFD design, PCB/power integration, underwater ROV/AUV systems, optical/acoustic modems, and wireless docking skids.',
      },
    ],
    useCases: [
      {
        title: 'Integrated 200m ROV, AUV & Underwater Docking Station',
        description:
          'Complete subsea robotic system featuring autonomous visual survey, wireless underwater charging, ADSCOM acoustic comms, and optical streaming.',
      },
      {
        title: 'Autonomous Agri-Tech & Industrial Robotics',
        description:
          'Edge-AI perception and precision control loops enabling real-time obstacle avoidance and targeted actuation.',
      },
    ],
    standards: ['ROS 2 Humble / Iron', 'IEC 61508', 'ISO 13849', 'Encrypted Control Telemetry'],
    relatedOfferings: [
      { label: 'Robotics & Autonomous Systems', href: '/solutions/robotics-autonomous' },
      { label: 'Vision AI & Agentic AI', href: '/solutions/vision-agentic-ai' },
      { label: 'Firmware & Embedded Software', href: '/services/firmware-embedded' },
    ],
  },
  {
    slug: 'iot',
    id: 'iot',
    label: 'Internet of Things (IoT) & Smart Devices',
    shortTitle: 'IoT & Smart Devices',
    badge: 'Edge-to-Cloud IoT',
    headline: 'Connected device ecosystems, low-power embedded firmware, wireless protocols, and zero-trust IoT security at scale.',
    overview:
      'We build end-to-end IoT platforms connecting smart appliances, industrial gateways, and commercial field devices to scalable cloud analytics. Our teams handle embedded device firmware, wireless connectivity, edge processing, cybersecurity compliance, and rapid PoC prototyping to bring connected products to market faster.',
    metrics: [
      { value: 'Edge + Cloud', label: 'Unified IoT Stack' },
      { value: 'NIST 8425', label: 'Cyber Trust Ready' },
      { value: 'Multi-Radio', label: 'Wi-Fi · BLE · LoRa' },
      { value: 'Rapid PoC', label: 'Fast Prototyping' },
    ],
    pillars: [
      {
        num: '01',
        title: 'Device Firmware & Sensor Integration',
        desc: 'Efficient RTOS/bare-metal firmware, sensor/actuator abstraction, and edge computing to cut latency and bandwidth.',
      },
      {
        num: '02',
        title: 'Connectivity, Cloud & Analytics',
        desc: 'Wi-Fi, Bluetooth, Zigbee, LoRaWAN, and MQTT pipelines feeding predictive ML analytics and real-time visualization dashboards.',
      },
      {
        num: '03',
        title: 'IoT Security & Rapid PoC',
        desc: 'Secure boot, encryption, device authentication, NIST 8425 compliance, and rapid functional prototyping.',
      },
    ],
    useCases: [
      {
        title: 'Smart Home Appliance Cybersecurity Program',
        description:
          'Comprehensive audit gap analysis, threat modeling, SW/HW security controls, and penetration testing toward U.S. Cyber Trust Mark certification.',
      },
      {
        title: 'Connected Edge Gateway & Cloud Fleet Analytics',
        description:
          'Scalable telemetry ingestion, remote diagnostics, and zero-downtime OTA management for distributed IoT devices.',
      },
    ],
    standards: ['MQTT & CoAP', 'NIST 8425', 'AWS / Azure IoT', 'Zero-Trust PKI'],
    relatedOfferings: [
      { label: 'IoT & Connected Ecosystems', href: '/solutions/iot-ecosystems' },
      { label: 'Cloud & Industrial DevOps', href: '/services/cloud-devops' },
      { label: 'Firmware & Embedded Software', href: '/services/firmware-embedded' },
    ],
  },
  {
    slug: 'industrial',
    id: 'industrial',
    label: 'Industrial & Automation',
    shortTitle: 'Industrial & Automation',
    badge: 'IEC 61508 SIL 3',
    headline: 'Safety-critical dual-channel industrial controllers, precision motion control, and deterministic factory automation.',
    overview:
      'We engineer high-integrity embedded control software and hardware integrations for industrial machinery, servo drives, PLC platforms, and automated factory systems. Targeting Category 4 / SIL 3 functional safety, our solutions ensure deterministic fault detection, redundant monitoring, and defined safe-state operation.',
    metrics: [
      { value: 'Cat 4 / SIL 3', label: 'Safety Design Target' },
      { value: 'Dual-MCU', label: 'Redundant Monitoring' },
      { value: 'Sub-ms', label: 'Servo Control Loops' },
      { value: 'Bench Verified', label: 'Fault Injection Proven' },
    ],
    pillars: [
      {
        num: '01',
        title: 'Dual-Channel Safety Control Software',
        desc: 'Redundant MCU architectures with peer heartbeat supervision, state-coherence checks, cross-channel monitoring, and safe-state logic.',
      },
      {
        num: '02',
        title: 'Motion Control & Hardware I/O Integration',
        desc: 'Field-Oriented Control (FOC) for servo/BLDC drives plus safety digital I/O, OSSD, 0–10V / 4–20mA, and RTD board bring-up.',
      },
      {
        num: '03',
        title: 'Industrial Fieldbus & Traceable Validation',
        desc: 'Deterministic EtherCAT / OPC-UA integration with requirements-based fault injection, SPI decoding, and timing verification.',
      },
    ],
    useCases: [
      {
        title: 'Unified Cat 4 / SIL 3 Safety Controller (American OEM)',
        description:
          'Dual-channel safety controller software and bench validation serving servo motor control, EVSE charging, and PLC applications.',
      },
      {
        title: 'Predictive Industrial IIoT Telemetry',
        description:
          'Edge anomaly detection and OPC-UA gateway telemetry reducing unplanned downtime across production lines.',
      },
    ],
    standards: ['IEC 61508 SIL 3', 'ISO 13849 Cat 4 / PL e', 'EtherCAT & OPC-UA', 'FreeMASTER / XMON'],
    relatedOfferings: [
      { label: 'Functional Safety & Cybersecurity', href: '/solutions/safety-cybersecurity' },
      { label: 'Firmware & Embedded Software', href: '/services/firmware-embedded' },
      { label: 'Testing & Validation (XIL)', href: '/services/testing-validation' },
    ],
  },
  {
    slug: 'energy',
    id: 'energy',
    label: 'Energy & EV Infrastructure',
    shortTitle: 'Energy & EV Infrastructure',
    badge: 'ISO 15118 V2G',
    headline: 'Megawatt EV charging, grid-scale battery storage, bidirectional inverters, and smart power conversion firmware.',
    overview:
      'We build intelligent embedded control and communication stacks driving the clean-energy transition. From DC fast charging (EVSE) with ISO 15118 Plug & Charge to multi-rack grid-scale Battery Energy Storage Systems (BESS) and bidirectional V2G power inverters, we engineer safe, grid-compliant energy platforms.',
    metrics: [
      { value: 'ISO 15118-20', label: 'Plug & Charge V2G' },
      { value: 'OCPP 2.0.1', label: 'Charger Fleet Comms' },
      { value: 'BESS & EVSE', label: 'High-Voltage Control' },
      { value: 'SIL 3 / ASIL D', label: 'Fault Protection' },
    ],
    pillars: [
      {
        num: '01',
        title: 'DC Fast Charging (EVSE) & EVCC',
        desc: 'ISO 15118-2/-20 Plug & Charge stacks, IEC 61851-1 signaling, TLS 1.3 certificate handling, and OCPP 2.0.1 cloud management.',
      },
      {
        num: '02',
        title: 'Grid-Scale BESS & BMS Masters',
        desc: 'Multi-rack battery management controllers with SOC/SOH estimation, isolation monitoring, and thermal runaway prevention.',
      },
      {
        num: '03',
        title: 'Bidirectional Power Inverters & Grid Control',
        desc: 'High-efficiency digital switching firmware, grid-forming algorithms, and bidirectional Vehicle-to-Grid (V2G) power control.',
      },
    ],
    useCases: [
      {
        title: 'Smart EV Charging Controller & Safety Stack',
        description:
          'AUTOSAR EVCC software and dual-channel safety control supporting high-power EVSE charging stations.',
      },
      {
        title: 'Grid-Scale BESS Pack Simulation & Controller',
        description:
          'Electrical/thermal pack modeling and real-time HIL fault validation for utility-scale energy storage.',
      },
    ],
    standards: ['ISO 15118-20', 'IEC 61851-1', 'OCPP 2.0.1', 'IEC 61850'],
    relatedOfferings: [
      { label: 'Powertrain & BMS', href: '/solutions/powertrain-bms' },
      { label: 'Functional Safety & Cybersecurity', href: '/solutions/safety-cybersecurity' },
      { label: 'System Design & Architecture', href: '/services/system-design' },
    ],
  },
  {
    slug: 'ai-platforms',
    id: 'ai-platforms',
    label: 'AI & Intelligent Platforms',
    shortTitle: 'AI & Intelligent Systems',
    badge: 'Vision AI · Agentic AI',
    headline: 'Production Vision AI, governed multi-agent workflows, and edge-deployed machine learning across mobility, industry, healthcare, and agri-tech.',
    overview:
      'We engineer AI systems that hold up under real-world domain shifts and strict enterprise governance. From federated, domain-generalizing computer vision models compressed for edge hardware to source-grounded Agentic AI platforms that automate regulated engineering and operations, we bridge AI research and production reliability.',
    metrics: [
      { value: 'Vision & Agents', label: 'Dual AI Pillars' },
      { value: 'Privacy-First', label: 'Federated & On-Prem' },
      { value: 'Sub-10ms', label: 'Edge NPU Inference' },
      { value: 'Evaluated', label: 'Golden-Set Tested' },
    ],
    pillars: [
      {
        num: '01',
        title: 'Domain-Generalizing Vision AI',
        desc: 'Foundation backbones with lightweight adapters delivering robust detection, segmentation, and tracking across unseen cameras, sites, and weather.',
      },
      {
        num: '02',
        title: 'Governed Agentic AI Systems',
        desc: 'Multi-agent RAG workflows with least-privilege tool access, human approval gates, and full audit trails for engineering & compliance.',
      },
      {
        num: '03',
        title: 'Edge Compression & MLOps',
        desc: 'INT8/FP8 quantization, ONNX/TensorRT export, drift monitoring, and automated evaluation pipelines across cloud, VPC, on-prem, and vehicle SoCs.',
      },
    ],
    useCases: [
      {
        title: 'Agri-Tech Autonomous Weed Detection & Precision Spraying',
        description:
          'Edge computer-vision segmentation guiding 0.5mm GPS targeted spraying on autonomous drones at up to 50 mph.',
      },
      {
        title: 'Federated Medical & Industrial Inspection Models',
        description:
          'Privacy-preserving foundation models learning across plants and imaging centers without moving raw sensitive data.',
      },
    ],
    standards: ['ISO 21448 (SOTIF)', 'ISO/PAS 8800', 'OpenTelemetry MLOps', 'TISAX® Data Governance'],
    relatedOfferings: [
      { label: 'Vision AI & Agentic AI', href: '/solutions/vision-agentic-ai' },
      { label: 'Consulting & Architecture Review', href: '/services/consulting' },
      { label: 'Cloud & Industrial DevOps', href: '/services/cloud-devops' },
    ],
  },
  {
    slug: 'cloud-digital',
    id: 'cloud-digital',
    label: 'Cloud & Digital Platforms',
    shortTitle: 'Cloud & Digital Platforms',
    badge: 'Cloud · Web · Mobile · DevOps',
    headline: 'Cloud-native backends, modern web & native Android applications, and automated DevOps platforms built for enterprise scale.',
    overview:
      'We build the digital backbone behind connected products and modern enterprises. Combining multi-cloud Kubernetes architectures, React/Vue web platforms, native Kotlin/Java Android apps, and Compliance-as-Code DevOps pipelines, our teams deliver resilient software engineered for speed, observability, and cost efficiency.',
    metrics: [
      { value: '99.99%', label: 'Platform Uptime' },
      { value: 'GitOps & IaC', label: 'Terraform · Argo CD' },
      { value: 'Web & Mobile', label: 'React · Vue · Android' },
      { value: 'FinOps', label: 'Cost-Optimized Cloud' },
    ],
    pillars: [
      {
        num: '01',
        title: 'Cloud Architecture & Connected Backends',
        desc: 'AWS, Azure, and GCP landing zones, Kubernetes orchestration, MQTT/Kafka telemetry ingestion, and signed OTA distribution.',
      },
      {
        num: '02',
        title: 'Modern Web & Native Android Products',
        desc: 'High-speed React/Vue SPAs, Progressive Web Apps, and 60fps offline-resilient native Android applications.',
      },
      {
        num: '03',
        title: 'Industrial DevOps & Observability',
        desc: 'Automated CI/CD with quality gates, virtual ECU cloud farms, Prometheus/Grafana/OpenTelemetry monitoring, and FinOps.',
      },
    ],
    useCases: [
      {
        title: 'Global Fleet Telematics & OTA Platform',
        description:
          'Edge-to-cloud ingestion pipeline supporting 250,000+ connected devices with real-time dashboards and zero-data-loss failover.',
      },
      {
        title: 'Containerized Embedded CI/CD & Virtual ECU Farm',
        description:
          'Automated Yocto/AUTOSAR build pipelines with HIL bench scheduling and ASPICE/ISO 26262 compliance evidence generation.',
      },
    ],
    standards: ['Kubernetes & Terraform', 'OpenTelemetry', 'OWASP Security', 'SOC 2 Best Practices'],
    relatedOfferings: [
      { label: 'Cloud & Industrial DevOps', href: '/services/cloud-devops' },
      { label: 'Digital Transformation & Web', href: '/services/digital-transformation' },
      { label: 'Native Android Engineering', href: '/services/native-android' },
    ],
  },
];

/* Helpers for looking up any offering by type + slug */
export function getOfferingByTypeAndSlug(type, slug) {
  if (type === 'service') return SERVICES_DATA.find((item) => item.slug === slug);
  if (type === 'solution') return SOLUTIONS_DATA.find((item) => item.slug === slug);
  if (type === 'industry') return INDUSTRIES_DATA.find((item) => item.slug === slug);
  return null;
}

export function getOfferingsListByType(type) {
  if (type === 'service') return SERVICES_DATA;
  if (type === 'solution') return SOLUTIONS_DATA;
  if (type === 'industry') return INDUSTRIES_DATA;
  return [];
}
