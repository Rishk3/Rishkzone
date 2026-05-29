// ── Experience Calculator ──
export const CAREER_START = new Date(2021, 9, 1); // Oct 1, 2021

export function getExperience() {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  let months = now.getMonth() - CAREER_START.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, total: `${years}.${months}+` };
}

// ── Personal Info ──
export const personalInfo = {
  name: "Rishikesh Kumar",
  title: "Senior Software Engineer",
  email: "rishikesh3321@gmail.com",
  phone: "+91-7355608802",
  location: "Bangalore, India",
  github: "https://github.com/Rishk3",
  leetcode: "https://leetcode.com/u/Rishk3",
  linkedin: "https://www.linkedin.com/in/Rishk3",
  facebook: "https://www.facebook.com/anchalesh10/",
  instagram: "https://www.instagram.com/rishky_an/",
  whatsapp:
    "https://api.whatsapp.com/send?phone=+917355608802&text=Hey, I Saw your Portfolio",
  resumeLink: "https://Rishk3.github.io/resume/",
  avatarUrl:
    "https://avatars1.githubusercontent.com/u/47039153?s=460&u=e28c080efaedc7189be1c9d54c366eac86274b03&v=4",
  summary:
    "I build production systems and ship them. {exp}+ years across event-driven pipelines, distributed architectures, and AI-integrated platforms. Currently at Mercedes-Benz — designing Kafka pipelines, building RAG-powered tooling, and deploying on cloud infrastructure. My trajectory: fullstack engineering → systems design → applied AI/ML infrastructure.",
  taglines: [
    "Spring Boot · React · Systems that ship.",
    "Fullstack Engineer. AI Builder.",
    "Building at Mercedes-Benz R&D.",
    "Spring Boot → React → AI Infra",
  ],
};

// ── Experience ──
export const experiences = [
  {
    id: 1,
    company: "Mercedes-Benz R&D India",
    location: "Bangalore",
    role: "Senior Software Engineer",
    period: "Dec 2024 – Present",
    description:
      "Architecting the production planning platform that runs across Mercedes plants. Built the Kafka event pipeline from scratch, designed real-time D3.js dashboards that replaced manual reporting, and integrated LLM-powered tooling (RAG + Claude) for automated report generation. Deploying on Azure with Kubernetes.",
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "Apache Kafka",
      "D3.js",
      "Azure AKS",
      "LLM / RAG",
    ],
  },
  {
    id: 2,
    company: "Thoughts2binary",
    location: "Gurugram",
    role: "Software Engineer",
    period: "Oct 2021 – Oct 2024",
    description:
      "Built GraniteStack from zero — a low-code SaaS platform. Designed the dynamic form engine, integrated OpenAI for intelligent field suggestions using embeddings, and wired Google Maps for geo-tracking. Full ownership from Spring Boot APIs to React frontend to CI/CD deployment.",
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "Node.js",
      "OpenAI API",
      "Docker",
      "PostgreSQL",
    ],
  },
];

// ── Skills (categorized — Spring Boot & React first) ──
export const skillCategories = [
  {
    category: "Backend",
    icon: "server",
    skills: ["Spring Boot", "Spring Cloud", "Spring Data JPA", "Node.js", "GraphQL", "gRPC"],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React.js", "Next.js", "Redux", "D3.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Languages",
    icon: "code",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Messaging",
    icon: "zap",
    skills: [
      "Apache Kafka",
      "Event-Driven Architecture",
      "Producer/Consumer",
      "Kafka Streams",
    ],
  },
  {
    category: "Microservices",
    icon: "git-branch",
    skills: [
      "Spring Cloud Gateway",
      "Eureka",
      "Config Server",
      "Resilience4j",
      "Docker",
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Elasticsearch"],
  },
  {
    category: "AI & ML",
    icon: "cpu",
    skills: [
      "LLM Integration (OpenAI, Claude, Gemini)",
      "RAG Pipelines",
      "Vector Databases (Pinecone, Weaviate)",
      "LangChain",
      "Prompt Engineering",
      "Fine-Tuning & Embeddings",
      "AI Agents",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "AWS (EC2, S3, Lambda, ECS)",
      "Azure (App Service, AKS)",
      "Prometheus & Grafana",
      "ArgoCD",
      "Helm",
    ],
  },
];

// ── Projects (ordered: most complex / latest first) ──
export const existingProjects = [
  {
    id: "rishkord",
    title: "Rishkord",
    description:
      "A Discord-inspired real-time chat application with channels and user authentication.",
    liveLink: "https://rishkify.web.app/",
    gitLink: "https://github.com/Rishk3/Rishkord",
    techStack: ["React.js", "Firebase", "CSS3"],
    status: "live",
  },
  {
    id: "whatsappLyser",
    title: "Whatsapp Chatayser",
    description:
      "Analyze WhatsApp chat exports with visual statistics, word clouds, and message frequency charts.",
    liveLink: "https://rishk3lyser.netlify.app/",
    gitLink: "https://github.com/Rishk3/Chit_Chat",
    techStack: ["React.js", "D3.js", "CSS3"],
    status: "live",
  },
  {
    id: "rishkFlix",
    title: "Rishk-Flix Movies",
    description:
      "A Netflix-clone movie browsing app with TMDB API integration and responsive design.",
    liveLink: "https://rishk3-flix3.netlify.app",
    gitLink: "https://github.com/Rishk3/Rishk-Flix-Movies",
    techStack: ["React.js", "TMDB API", "CSS3"],
    status: "live",
  },
  {
    id: "fighterJet",
    title: "FighterJet SpaceCraft",
    description:
      "A fun browser-based space shooter game built with vanilla JavaScript and Canvas API.",
    liveLink: "https://github.com/Rishk3/SpaceJet-Fighter",
    gitLink: "https://github.com/Rishk3/SpaceJet-Fighter",
    techStack: ["JavaScript", "Canvas API", "HTML5"],
    status: "live",
  },
  {
    id: "covid_stat",
    title: "Covid19 Stats",
    description:
      "Real-time COVID-19 statistics dashboard with country-wise data visualization.",
    liveLink: "https://github.com/Rishk3/covid19_stats",
    gitLink: "https://github.com/Rishk3/covid19_stats",
    techStack: ["React.js", "REST API", "Charts"],
    status: "live",
  },
  {
    id: "weather",
    title: "Weather Report",
    description:
      "A weather forecast app with location-based search and beautiful UI.",
    liveLink: "https://serene-noyce-360752.netlify.app/",
    gitLink: "https://github.com/Rishk3/react-weather-report",
    techStack: ["React.js", "Weather API", "CSS3"],
    status: "live",
  },
  {
    id: "bdayWisher",
    title: "BirthDay Wisher",
    description:
      "An interactive birthday greeting generator with animations and personalization.",
    liveLink: "https://youthful-aryabhata-c56703.netlify.app/",
    gitLink: "https://github.com/Rishk3/Rishk3_birthday_msg",
    techStack: ["React.js", "Framer Motion", "CSS3"],
    status: "live",
  },
];

// ── Featured Full-Stack Projects (Spring Boot + React) ──
export const featuredProjects = [
  {
    id: "smartresume",
    title: "SmartResume AI",
    description:
      "AI-powered resume analyzer that parses uploaded resumes, scores them against job descriptions, and provides actionable improvement suggestions using LLM integration.",
    image: "/images/SmartResume-AI.png",
    gitLink: "https://github.com/Rishk3/SmartResume-AI",
    techStack: ["React.js", "Spring Boot", "AI/LLM", "Tailwind CSS"],
    status: "featured",
  },
  {
    id: "taskforge",
    title: "TaskForge",
    description:
      "Fullstack Kanban board for project management with drag-and-drop task cards, priority levels, status tracking, and real-time progress analytics.",
    image: "/images/TaskForge.png",
    gitLink: "https://github.com/Rishk3/TaskForge",
    techStack: ["React.js", "Spring Boot", "Spring Data JPA", "H2"],
    status: "featured",
  },
  {
    id: "algoarena",
    title: "AlgoArena",
    description:
      "Interactive algorithm playground — visualize sorting algorithms step-by-step, solve pathfinding mazes, and race against the clock with performance benchmarks.",
    image: "/images/AlgoArena.png",
    gitLink: "https://github.com/Rishk3/AlgoArena",
    techStack: ["React.js", "Spring Boot", "Tailwind CSS", "D3.js"],
    status: "featured",
  },
  {
    id: "geotrack",
    title: "GeoTrack Pro",
    description:
      "Geospatial property tracker with interactive Leaflet map, drop-pin mode, advanced filtering, and a real-time analytics dashboard for property insights.",
    image: "/images/GeoTrack.png",
    gitLink: "https://github.com/Rishk3/GeoTrack",
    techStack: ["React.js", "Spring Boot", "Leaflet", "Spring Data JPA"],
    status: "featured",
  },
  {
    id: "mindduel",
    title: "MindDuel",
    description:
      "Competitive logic puzzle game — pattern recognition, sequence cracking, memory grids, and boolean logic challenges. Play solo or VS the computer AI.",
    image: "/images/MindDuel.png",
    gitLink: "https://github.com/Rishk3/MindDuel",
    techStack: ["React.js", "Spring Boot", "Framer Motion", "H2"],
    status: "featured",
  },
  {
    id: "devvault",
    title: "DevVault",
    description:
      "Developer knowledge vault — save, tag, search, and organize code snippets with full-text search, syntax highlighting, and favorites system.",
    image: "/images/DevVault.png",
    gitLink: "https://github.com/Rishk3/DevVault",
    techStack: ["React.js", "Spring Boot", "Spring Data JPA", "H2"],
    status: "featured",
  },
  {
    id: "codepulse",
    title: "CodePulse",
    description:
      "Real-time code collaboration platform with live editing, syntax highlighting, multi-language support, and instant code execution feedback.",
    image: "/images/CodePulse.png",
    gitLink: "https://github.com/Rishk3/CodePulse",
    techStack: ["React.js", "Spring Boot", "WebSocket", "Monaco Editor"],
    status: "featured",
  },
  {
    id: "finsight",
    title: "FinSight",
    description:
      "Personal finance dashboard with expense tracking, budget visualization, spending category analytics, and interactive charts for financial insights.",
    image: "/images/FinSight.png",
    gitLink: "https://github.com/Rishk3/FinSight",
    techStack: ["React.js", "Spring Boot", "Chart.js", "Spring Data JPA"],
    status: "featured",
  },
];

// ── Certifications ──
export const certifications = [
  {
    id: "problem",
    title: "Problem Solving",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/7f9ab2e73a0c",
    image: "problem_solving",
  },
  {
    id: "python",
    title: "Python",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/ebc9e358a8fb",
    image: "python",
  },
  {
    id: "java",
    title: "Java",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/b64e0269afdc",
    image: "java_cert",
  },
  {
    id: "agile",
    title: "Agile Developer",
    issuer: "DoSelect",
    credentialId: "77113155",
    link: "https://app.doselect.com/test-report/8gq43",
    image: "agile",
  },
  {
    id: "fullstack",
    title: "Java Full-stack Developer with React",
    issuer: "DoSelect",
    credentialId: "14352208",
    link: "https://app.doselect.com/test-report/4n33x",
    image: "fullstack",
  },
  {
    id: "js_specialist",
    title: "Certified Internet Webmaster JavaScript Specialist",
    issuer: "Cutshort",
    credentialId: "34846",
    link: "https://cutshort.io/certificate/34846",
    image: "js_specialist",
  },
  {
    id: "python_ms",
    title: "Introduction to Programming Using Python",
    issuer: "Microsoft",
    link: "https://www.linkedin.com/in/rishk3/details/certifications/",
    image: "python_ms",
  },
];

// ── Nav Links ──
export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];
