export const personalInfo = {
  name: "Arun Dalakoti",
  title: "Senior Front-End Developer",
  tagline:
    "Building scalable, high-performance web applications using modern JavaScript frameworks",
  email: "dalakotiarun8@gmail.com",
  phone: "+91 7017073713",
  github: "https://github.com/Arun-Dalakoti",
  linkedin: "https://www.linkedin.com/in/arun-dalakoti-349969234/",
  location: "Gurugram, India",
};

export const about = {
  summary: `Senior Front-End Developer specializing in building scalable, high-performance web applications using modern JavaScript frameworks. Expert in architecting multi-repository frontend systems with Next.js, implementing secure cross-origin integrations, and optimizing user experiences across international markets. Proven track record of integrating payment gateways, solving complex session management challenges, and delivering production-ready solutions with strong focus on type safety and performance optimization.`,
  highlights: [
    "3+ years of experience in frontend development",
    "Architected microservices handling millions of transactions",
    "Improved page load performance by 40%",
    "Deployed solutions across 5+ international markets",
    "Led migration of critical payment systems",
  ],
};

export const skills = {
  categories: [
    {
      name: "Frontend Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        { name: "Next.js 15", level: 95 },
        { name: "React", level: 95 },
        { name: "TailwindCSS", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Zustand", level: 85 },
      ],
    },
    {
      name: "Languages & Core Technologies",
      icon: "💻",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      name: "Testing & Quality Assurance",
      icon: "🧪",
      skills: [{ name: "Cypress", level: 85 }],
    },
    {
      name: "Tools & Infrastructure",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Webpack", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Nginx", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
  ],
};

export const experience = [
  {
    company: "Lenskart",
    role: "Senior Software Engineer",
    location: "Gurugram, IN",
    period: "Aug 2023 – Present",
    achievements: [
      {
        title: "Checkout Microservice Architecture & Performance",
        description:
          "Architected and led migration of checkout module from monolithic React application to multi-repository Next.js 15 architecture with Nginx reverse proxy routing, creating an independent microservice with autonomous deployment pipeline handling address and payment flows.",
        impact: [
          "Optimized LCP and CLS metrics to boost Lighthouse score from 30 to 60+",
          "Reduced deployment conflicts by 60%",
          "Achieved 40% faster page loads",
          "35% increase in organic SEO traffic",
          "Improved search engine rankings through optimized bundle size and server-side rendering",
        ],
      },
      {
        title: "Cross-Origin Checkout Integration",
        description:
          "Implemented bidirectional cross-origin API endpoints in the checkout microservice enabling seamless cart data transfer between external partners (Meller, Contactskart) and Lenskart checkout.",
        impact: [
          "CORS preflight handling",
          "Session token validation",
          "Cart synchronization",
          "Seamless cross-domain checkout flow",
        ],
      },
      {
        title: "Payment Gateway Migration",
        description:
          "Led migration from backend-dependent PayU to frontend-integrated Juspay PayV3 SDK in the checkout microservice, implementing client-side payment forms with secure tokenization and real-time transaction validation.",
        impact: [
          "20%+ revenue increase through improved payment success rates",
          "Reduced checkout friction",
          "Enhanced security with client-side tokenization",
        ],
      },
      {
        title: "International Checkout Expansion",
        description:
          "Extended checkout microservice to support UAE, KSA, Singapore, Thailand, and US markets with region-specific payment methods and localized validation rules.",
        impact: [
          "Enabled company's global expansion strategy",
          "Processing transactions across 5+ international markets",
          "Implemented multi-currency support",
        ],
      },
    ],
  },
  {
    company: "Lenskart",
    role: "Front-End Web Developer Intern",
    location: "Remote",
    period: "Sep 2022 – Jul 2023",
    achievements: [
      {
        title: "International Market Expansion",
        description:
          "Developed and deployed region-specific UI components for UAE, KSA, Singapore, Thailand, and US markets.",
        impact: [
          "Implemented localized language support",
          "RTL layout for Arabic regions",
          "Region-based formatting for dates, currencies, and content",
        ],
      },
      {
        title: "Component Development & Testing",
        description:
          "Built reusable React components for product listing, cart, and checkout flows using TypeScript and TailwindCSS.",
        impact: [
          "Writing end-to-end tests with Cypress",
          "Ensured 95%+ test coverage",
          "Reduced UI bugs by 30% in production",
        ],
      },
    ],
  },
  {
    company: "Thirstysea Limited",
    role: "Web Developer Intern",
    location: "Remote",
    period: "Apr 2022 – Jun 2022",
    achievements: [
      {
        title: "Mathematics Solutions Platform",
        description:
          "Built web application for displaying mathematics paper solutions using React, integrating KaTeX library to render complex mathematical expressions, equations, and formulas with proper formatting and notation.",
        impact: [],
      },
    ],
  },
];

export const projects = [
  {
    title: "E-commerce Checkout Microservice",
    description:
      "Multi-repository Next.js architecture with autonomous deployment pipeline",
    technologies: ["Next.js 15", "TypeScript", "Nginx", "Docker"],
    highlights: [
      "Lighthouse score: 30 → 60+",
      "40% faster page loads",
      "60% reduction in deployment conflicts",
    ],
  },
  {
    title: "Cross-Origin Integration System",
    description: "Bidirectional API endpoints for seamless cart data transfer",
    technologies: ["React", "TypeScript", "REST APIs"],
    highlights: [
      "CORS preflight handling",
      "Session token validation",
      "Multi-partner integration",
    ],
  },
  {
    title: "International Payment Gateway",
    description:
      "Frontend-integrated Juspay PayV3 SDK with secure tokenization",
    technologies: ["React", "TypeScript", "Payment APIs"],
    highlights: [
      "20%+ revenue increase",
      "Real-time transaction validation",
      "Multi-currency support",
    ],
  },
  {
    title: "Global Marketplace Platform",
    description:
      "Multi-region e-commerce platform supporting 5+ international markets",
    technologies: ["Next.js", "React", "TailwindCSS"],
    highlights: [
      "RTL support for Arabic regions",
      "Multi-language support",
      "Region-specific payment methods",
    ],
  },
];

export const education = {
  institution: "Birla Institute of Applied Sciences",
  degree: "B.Tech in Computer Science and Engineering",
  location: "Nainital, IN",
  period: "Apr 2019 – Apr 2023",
  gpa: "85%",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
