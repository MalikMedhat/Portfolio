export const GITHUB_USERNAME = "MalikMedhat";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  features: string[];
  tech: string[];
  github: string;
  cover: { tint: string; accent: string; glyph: string };
};

export type SkillGroup = {
  title: string;
  icon: string;
  tags: string[];
};

export type TimelineItem = {
  type: string;
  icon: string;
  period: string;
  title: string;
  org: string;
  description: string;
};

export type ContactFormStrings = {
  fields: Record<"name" | "email" | "subject" | "message", { label: string; placeholder: string }>;
  submit: string;
  sending: string;
  success: string;
  successDemo: string;
  errorInvalid: string;
  errorGeneral: string;
  schema: Record<"name" | "email" | "subject" | "message", string>;
};

export type Content = {
  seo: { title: string; description: string };
  profile: {
    name: string;
    firstName: string;
    role: string;
    tagline: string;
    focus: string;
    location: string;
    availability: string;
    intro: string;
    about: string[];
    stats: { value: string; label: string }[];
    resume: { label: string; file: string };
  };
  navLinks: { label: string; href: string }[];
  navCta: string;
  ui: {
    viewProjects: string;
    downloadResume: string;
    contactMe: string;
    relocationBadge: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    viewOnGithub: string;
    pdfTag: string;
    githubAria: string;
    linkedinAria: string;
    emailAria: string;
  };
  sections: {
    about: { eyebrow: string; titlePre: string; titleAccent: string };
    skills: { eyebrow: string; titlePre: string; titleAccent: string; subtitle: string };
    projects: { eyebrow: string; titlePre: string; titleAccent: string; subtitle: string };
    experience: { eyebrow: string; titlePre: string; titleAccent: string; subtitle: string };
    resume: { eyebrow: string; titlePre: string; titleAccent: string };
    contact: { eyebrow: string; titlePre: string; titleAccent: string };
  };
  skills: SkillGroup[];
  projects: Project[];
  experience: TimelineItem[];
  contact: {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    location: string;
    socials: { label: string; value: string; href: string; icon: string }[];
    form: ContactFormStrings;
  };
};

const coverBlue = { tint: "from-sky-500/25 via-electric/20 to-transparent", accent: "#38bdf8", glyph: "cart" };
const coverViolet = { tint: "from-violet-500/25 via-fuchsia-500/15 to-transparent", accent: "#a78bfa", glyph: "bot" };
const coverEmerald = { tint: "from-emerald-500/25 via-teal-500/15 to-transparent", accent: "#34d399", glyph: "message" };

export const en: Content = {
  seo: {
    title: "Malik Medhat — Software Engineer | Java & Spring Boot",
    description:
      "Portfolio of Malik Medhat, Software Engineer specialized in Java and Spring Boot. Building production-grade applications, scalable APIs, AI integrations and real-time systems.",
  },
  profile: {
    name: "Malik Medhat",
    firstName: "Malik",
    role: "Software Engineer | Java & Spring Boot",
    tagline: "Software Engineer | Java & Spring Boot",
    focus: "Java / Spring Boot",
    location: "Cairo, Egypt",
    availability: "Open to Software Engineer roles in Germany, Austria & remote Europe",
    intro:
      "Software Engineer with hands-on experience designing and shipping full-stack Java and Spring Boot applications. Built a production-grade e-commerce platform featuring JWT authentication, RBAC, Stripe payments, Spring Security, and Docker containerization. Developed an AI chatbot platform leveraging Spring AI and Groq API for real-time, low-latency inference.",
    about: [
      "Software Engineer with hands-on experience designing and shipping full-stack Java and Spring Boot applications. I turn complex requirements into robust, scalable, and maintainable systems.",
      "My core focus is modern backend development with Spring Boot, Spring Security, and clean layered architecture, complemented by hands-on frontend experience in React, TypeScript, and Vite.",
      "I am currently looking for my next software engineering opportunity in Germany, Austria, or remote across Europe.",
    ],
    stats: [
      { value: "2+", label: "Years building with Java & Spring Boot" },
      { value: "10+", label: "Technologies in daily use" },
      { value: "3", label: "Production-grade featured projects" },
      { value: "C1", label: "Fluent English (German: B1)" },
    ],
    resume: { label: "Download CV (PDF)", file: "/Malik_Medhat_CV.pdf" },
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: "Contact Me",
  ui: {
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    contactMe: "Contact Me",
    relocationBadge: "Open to relocation & remote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
    viewOnGithub: "View on GitHub",
    pdfTag: "Software Engineer | Java & Spring Boot · PDF",
    githubAria: "GitHub",
    linkedinAria: "LinkedIn",
    emailAria: "Email",
  },
  sections: {
    about: { eyebrow: "About me", titlePre: "A software engineer who", titleAccent: "cares about the details" },
    skills: {
      eyebrow: "Skills",
      titlePre: "A stack built for",
      titleAccent: "reliable products",
      subtitle:
        "Technical skills and technologies I use to architect, build, secure, and ship full-stack and backend systems.",
    },
    projects: {
      eyebrow: "Projects",
      titlePre: "Things I've",
      titleAccent: "built end-to-end",
      subtitle:
        "Real applications, from database schema to deployed service. Every project tackles a concrete problem and ships with tests, docs and Docker.",
    },
    experience: {
      eyebrow: "Experience & Education",
      titlePre: "The journey so",
      titleAccent: "far",
      subtitle: "Education, certifications and coursework shaping my engineering standards.",
    },
    resume: { eyebrow: "Resume", titlePre: "My curriculum vitae", titleAccent: "" },
    contact: {
      eyebrow: "Contact",
      titlePre: "Let's build something",
      titleAccent: "reliable together",
    },
  },
  skills: [
    {
      title: "Frameworks & Security",
      icon: "server",
      tags: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Spring AI",
        "Spring Testing",
        "React",
        "RESTful APIs",
        "WebSockets",
        "JPA / Hibernate",
      ],
    },
    {
      title: "Languages",
      icon: "code",
      tags: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "PHP", "HTML5", "CSS3"],
    },
    {
      title: "Databases & DevOps",
      icon: "database",
      tags: ["MySQL", "Docker", "Git", "GitHub", "Postman", "Linux", "Vite", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Cloud & Deployment",
      icon: "settings",
      tags: ["Railway", "Vercel", "Groq API"],
    },
    {
      title: "Spoken Languages",
      icon: "sparkles",
      tags: ["Arabic (Native)", "English (Fluent / C1)", "German (B1)"],
    },
    {
      title: "Architecture & Practices",
      icon: "briefcase",
      tags: [
        "Layered Architecture",
        "RBAC",
        "Payment Integrations (Stripe)",
        "Stateless Auth",
        "Unit & Integration Testing",
        "Clean Code",
      ],
    },
  ],
  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Full-Stack Platform",
      tagline: "Secure marketplace with payments & role-based access",
      problem:
        "Architected and built a production-grade e-commerce application featuring end-to-end secure authentication, role-based access control, card payment integration, and a responsive frontend.",
      features: [
        "Architected a scalable backend with clean layered structure (config, controller, dto, model, repository, security, service) using Spring Boot and JPA/Hibernate ORM over a MySQL database",
        "Engineered stateless authentication and authorization with Spring Security and JWT, including custom security filters, token validation, and secure user registration/login flows",
        "Enforced Role-Based Access Control (RBAC) across protected endpoints to restrict sensitive operations by user role",
        "Integrated Stripe payment gateway for secure checkout, payment processing, and order lifecycle management",
        "Developed a responsive React/TypeScript frontend with Vite, featuring dynamic product filtering/search/sort and a real-time shopping cart",
        "Containerized the full application with Docker; implemented Spring Testing for unit and integration test coverage",
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "TypeScript", "MySQL", "Docker"],
      github: `https://github.com/${GITHUB_USERNAME}/E-commerce`,
      cover: coverBlue,
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Platform",
      tagline: "Generative AI chat backend with OpenAI-compatible architecture",
      problem:
        "Developed a high-performance generative AI backend leveraging Spring AI and Groq API for real-time, low-latency LLM inference with zero local model overhead.",
      features: [
        "Built a high-performance generative AI backend using Spring Boot 3 and Spring AI with an OpenAI-compatible architecture",
        "Integrated Groq Cloud Services (Llama 3.1) for low-latency AI response generation with zero local model overhead",
        "Designed modular backend abstraction layers to support dynamic API key management and seamless model switching",
      ],
      tech: ["Java", "Spring Boot 3", "Spring AI", "Groq API (Llama 3.1)", "HTML/CSS"],
      github: `https://github.com/${GITHUB_USERNAME}/Spring-AI-chatbot-website`,
      cover: coverViolet,
    },
    {
      id: "realtime-chat",
      title: "Real-Time Chat Application",
      tagline: "Instant bidirectional messaging over WebSockets",
      problem:
        "Engineered a real-time, bidirectional messaging application using WebSockets for low-latency communication across concurrent users.",
      features: [
        "Engineered a real-time, bidirectional messaging application using WebSockets for low-latency communication",
        "Handled concurrent user connections and message broadcasting across a scalable Spring Boot backend",
      ],
      tech: ["Java", "Spring Boot", "WebSockets"],
      github: `https://github.com/${GITHUB_USERNAME}/Chat-Application-`,
      cover: coverEmerald,
    },
  ],
  experience: [
    {
      type: "Education",
      icon: "graduation",
      period: "Sep 2023 — Present",
      title: "Bachelor of Business Information Systems (BIS)",
      org: "Helwan University — Cairo, Egypt",
      description:
        "Relevant coursework: advanced databases, systems design, Python programming, web development, e-commerce systems, data security and operating systems.",
    },
    {
      type: "Certification",
      icon: "award",
      period: "Jun 2026",
      title: "Claude with Google Cloud's Vertex AI",
      org: "Anthropic",
      description:
        "Certification covering Claude model integration, tool use and agentic workflows running on Google Cloud's Vertex AI platform.",
    },
    {
      type: "Certification",
      icon: "award",
      period: "Jun 2026",
      title: "Java (Basic) Certification",
      org: "HackerRank",
      description: "Verified fundamentals of Java — syntax, data structures and object-oriented programming.",
    },
    {
      type: "Certification",
      icon: "award",
      period: "2026",
      title: "AI Fluency: Framework and Foundations",
      org: "Online certification",
      description:
        "Practical grounding in AI concepts, large language models and the frameworks used to build AI-powered applications.",
    },
  ],
  contact: {
    heading: "Let's build something reliable together",
    subheading:
      "I'm actively looking for backend roles in Germany, Austria or remote across Europe — with a focus on AI engineering and cloud. If you have a role, an internship or just want to talk Java, I'd love to hear from you.",
    email: "malikmedhat77@gmail.com",
    phone: "+20 1011091749",
    location: "Giza, Cairo, Egypt",
    socials: [
      { label: "Email", value: "malikmedhat77@gmail.com", href: "mailto:malikmedhat77@gmail.com", icon: "mail" },
      { label: "Phone", value: "+20 1011091749", href: "tel:+201011091749", icon: "phone" },
      { label: "LinkedIn", value: "linkedin.com/in/malik-medhat-34732034a", href: "https://www.linkedin.com/in/malik-medhat-34732034a/", icon: "linkedin" },
      { label: "GitHub", value: "github.com/MalikMedhat", href: "https://github.com/MalikMedhat", icon: "github" },
      { label: "Location", value: "Giza, Cairo, Egypt", href: "https://maps.google.com/?q=Giza,+Egypt", icon: "map-pin" },
    ],
    form: {
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@example.com" },
        subject: { label: "Subject", placeholder: "What is this about?" },
        message: { label: "Message", placeholder: "Tell me about the role or project…" },
      },
      submit: "Send Message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you soon.",
      successDemo: "Message received (demo mode). Connect Supabase to store submissions.",
      errorInvalid: "Please fix the highlighted fields.",
      errorGeneral: "Something went wrong. Please try again in a moment.",
      schema: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        subject: "Please add a short subject.",
        message: "Your message should be at least 10 characters.",
      },
    },
  },
};

export const de: Content = {
  seo: {
    title: "Malik Medhat — Softwareentwickler | Java & Spring Boot",
    description:
      "Portfolio von Malik Medhat, Softwareentwickler mit Spezialisierung auf Java und Spring Boot. Produktionsreife Anwendungen, skalierbare APIs, KI-Integrationen und Echtzeitsysteme.",
  },
  profile: {
    name: "Malik Medhat",
    firstName: "Malik",
    role: "Softwareentwickler | Java & Spring Boot",
    tagline: "Softwareentwickler | Java & Spring Boot",
    focus: "Java / Spring Boot",
    location: "Kairo, Ägypten",
    availability: "Offen für Softwareentwickler-Rollen in Deutschland, Österreich & Remote in ganz Europa",
    intro:
      "Softwareentwickler mit praktischer Erfahrung im Entwurf und Deployment von Full-Stack-Anwendungen mit Java und Spring Boot. Entwicklung einer produktionsreifen E-Commerce-Plattform mit JWT-Authentifizierung, RBAC, Stripe-Zahlungen, Spring Security und Docker-Containerisierung sowie einer KI-Chatbot-Plattform mit Spring AI und Groq API für Echtzeit-Inferenz mit minimaler Latenz.",
    about: [
      "Softwareentwickler mit praktischer Erfahrung im Entwurf und Deployment von Full-Stack-Anwendungen mit Java und Spring Boot. Ich verwandle komplexe Anforderungen in robuste, skalierbare und wartbare Systeme.",
      "Mein Schwerpunkt liegt auf moderner Backend-Entwicklung mit Spring Boot, Spring Security und sauberer Schichtenarchitektur, ergänzt durch Full-Stack-Erfahrung in React, TypeScript und Vite.",
      "Ich suche aktuell meine nächste Möglichkeit als Softwareentwickler in Deutschland, Österreich oder remote in ganz Europa.",
    ],
    stats: [
      { value: "2+", label: "Jahre Entwicklung mit Java & Spring Boot" },
      { value: "10+", label: "Technologien im täglichen Einsatz" },
      { value: "3", label: "Produktionsreife Hauptprojekte" },
      { value: "C1", label: "Fließend Englisch (Deutsch: B1)" },
    ],
    resume: { label: "Lebenslauf herunterladen (PDF)", file: "/Malik_Medhat_CV.pdf" },
  },
  navLinks: [
    { label: "Über mich", href: "#about" },
    { label: "Fähigkeiten", href: "#skills" },
    { label: "Projekte", href: "#projects" },
    { label: "Erfahrung", href: "#experience" },
    { label: "Kontakt", href: "#contact" },
  ],
  navCta: "Kontakt",
  ui: {
    viewProjects: "Projekte ansehen",
    downloadResume: "Lebenslauf herunterladen",
    contactMe: "Kontakt",
    relocationBadge: "Bereit zur Relocation & Remote",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    backToTop: "Nach oben",
    viewOnGithub: "Auf GitHub ansehen",
    pdfTag: "Softwareentwickler | Java & Spring Boot · PDF",
    githubAria: "GitHub",
    linkedinAria: "LinkedIn",
    emailAria: "E-Mail",
  },
  sections: {
    about: { eyebrow: "Über mich", titlePre: "Ein Softwareentwickler, dem", titleAccent: "die Details wichtig sind" },
    skills: {
      eyebrow: "Fähigkeiten",
      titlePre: "Ein Stack für",
      titleAccent: "zuverlässige Produkte",
      subtitle:
        "Technische Fähigkeiten und Werkzeuge, mit denen ich Full-Stack- und Backend-Systeme entwerfe, baue, absichere und ausliefere.",
    },
    projects: {
      eyebrow: "Projekte",
      titlePre: "Projekte, die ich",
      titleAccent: "von Anfang bis Ende umgesetzt habe",
      subtitle:
        "Echte Anwendungen, vom Datenbankschema bis zum deployed Service. Jedes Projekt löst ein konkretes Problem und wird mit Tests, Doku und Docker ausgeliefert.",
    },
    experience: {
      eyebrow: "Erfahrung & Ausbildung",
      titlePre: "Der Weg",
      titleAccent: "bisher",
      subtitle: "Ausbildung, Zertifikate und Studieninhalte, die meine Standards prägen.",
    },
    resume: { eyebrow: "Lebenslauf", titlePre: "Mein Lebenslauf", titleAccent: "" },
    contact: {
      eyebrow: "Kontakt",
      titlePre: "Lass uns gemeinsam etwas",
      titleAccent: "Zuverlässiges bauen",
    },
  },
  skills: [
    {
      title: "Frameworks & Sicherheit",
      icon: "server",
      tags: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Spring AI",
        "Spring Testing",
        "React",
        "RESTful APIs",
        "WebSockets",
        "JPA / Hibernate",
      ],
    },
    {
      title: "Programmiersprachen",
      icon: "code",
      tags: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "PHP", "HTML5", "CSS3"],
    },
    {
      title: "Datenbanken & DevOps",
      icon: "database",
      tags: ["MySQL", "Docker", "Git", "GitHub", "Postman", "Linux", "Vite", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Cloud & Deployment",
      icon: "settings",
      tags: ["Railway", "Vercel", "Groq API"],
    },
    {
      title: "Sprachen",
      icon: "sparkles",
      tags: ["Arabisch (Muttersprache)", "Englisch (Fließend / C1)", "Deutsch (B1)"],
    },
    {
      title: "Architektur & Praxis",
      icon: "briefcase",
      tags: [
        "Schichtenarchitektur",
        "RBAC",
        "Zahlungsintegration (Stripe)",
        "Zustandslose Auth",
        "Unit- & Integrationstests",
        "Clean Code",
      ],
    },
  ],
  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Full-Stack Platform",
      tagline: "Sicherer Marktplatz mit Zahlungen & rollenbasierter Zugriffskontrolle",
      problem:
        "Produktionsreife E-Commerce-Plattform von Grund auf gebaut — mit sicherer Authentifizierung, rollenbasierter Zugriffskontrolle, Kartenzahlungsintegration und responsivem Storefront.",
      features: [
        "Skalierbare Schichtenarchitektur (config, controller, dto, model, repository, security, service) mit Spring Boot und JPA/Hibernate über MySQL aufgebaut",
        "Zustandslose Authentifizierung & Autorisierung mit Spring Security und JWT, eigenen Sicherheitsfiltern und sicheren Registrierungs-/Login-Abläufen entwickelt",
        "Rollenbasierte Zugriffskontrolle (RBAC) über geschützte Endpunkte zur Absicherung sensibler Operationen durchgesetzt",
        "Stripe-Zahlungsgateway für sicheren Checkout, Zahlungsabwicklung und Bestelllebenszyklus integriert",
        "Responsives React/TypeScript-Frontend mit Vite, dynamischer Filterung/Suche/Sortierung und Echtzeit-Warenkorb entwickelt",
        "Vollständige Anwendung mit Docker containerisiert; Spring Testing für Unit- und Integrationstests implementiert",
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "TypeScript", "MySQL", "Docker"],
      github: `https://github.com/${GITHUB_USERNAME}/E-commerce`,
      cover: coverBlue,
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Platform",
      tagline: "Generatives KI-Chat-Backend mit OpenAI-kompatibler Architektur",
      problem:
        "Leistungsstarkes generatives KI-Backend mit Spring AI und Groq API für Echtzeit-LLM-Inferenz mit minimaler Latenz ohne lokalen Modell-Overhead entwickelt.",
      features: [
        "Leistungsstarkes generatives KI-Backend mit Spring Boot 3 und Spring AI mit OpenAI-kompatibler Architektur aufgebaut",
        "Groq Cloud Services (Llama 3.1) für KI-Antworten mit minimaler Latenz ohne lokalen Modell-Overhead integriert",
        "Modulare Backend-Abstraktionsschichten für dynamisches API-Schlüssel-Management und nahtlosen Modellwechsel entworfen",
      ],
      tech: ["Java", "Spring Boot 3", "Spring AI", "Groq API (Llama 3.1)", "HTML/CSS"],
      github: `https://github.com/${GITHUB_USERNAME}/Spring-AI-chatbot-website`,
      cover: coverViolet,
    },
    {
      id: "realtime-chat",
      title: "Real-Time Chat Application",
      tagline: "Sofortnachrichten über WebSockets",
      problem:
        "Echtzeit-, bidirektionale Messaging-Anwendung mit WebSockets für Kommunikation mit minimaler Latenz über viele gleichzeitige Benutzerverbindungen entwickelt.",
      features: [
        "Echtzeit-, bidirektionale Messaging-Anwendung mit WebSockets für Kommunikation mit minimaler Latenz entwickelt",
        "Gleichzeitige Benutzerverbindungen und Nachrichten-Broadcasting über ein skalierbares Spring-Boot-Backend verarbeitet",
      ],
      tech: ["Java", "Spring Boot", "WebSockets"],
      github: `https://github.com/${GITHUB_USERNAME}/Chat-Application-`,
      cover: coverEmerald,
    },
  ],
  experience: [
    {
      type: "Ausbildung",
      icon: "graduation",
      period: "Sep 2023 – heute",
      title: "Bachelor of Business Information Systems (BIS)",
      org: "Helwan-Universität — Kairo, Ägypten",
      description:
        "Relevante Kurse: fortgeschrittene Datenbanken, Systemdesign, Python-Programmierung, Webentwicklung, E-Commerce-Systeme, Datensicherheit und Betriebssysteme.",
    },
    {
      type: "Zertifizierung",
      icon: "award",
      period: "Jun 2026",
      title: "Claude with Google Cloud's Vertex AI",
      org: "Anthropic",
      description:
        "Zertifizierung zu Claude-Modellintegration, Tool-Use und agentischen Workflows auf der Google-Cloud-Plattform Vertex AI.",
    },
    {
      type: "Zertifizierung",
      icon: "award",
      period: "Jun 2026",
      title: "Java (Grundlagen)-Zertifizierung",
      org: "HackerRank",
      description: "Verifizierte Java-Grundlagen — Syntax, Datenstrukturen und objektorientierte Programmierung.",
    },
    {
      type: "Zertifizierung",
      icon: "award",
      period: "2026",
      title: "AI Fluency: Framework and Foundations",
      org: "Online-Zertifizierung",
      description:
        "Praktische Grundlagen zu KI-Konzepten, großen Sprachmodellen und den Frameworks für KI-gestützte Anwendungen.",
    },
  ],
  contact: {
    heading: "Lass uns gemeinsam etwas Zuverlässiges bauen",
    subheading:
      "Ich suche aktiv Backend-Rollen in Deutschland, Österreich oder remote in ganz Europa — mit Fokus auf KI-Entwicklung und Cloud. Wenn du eine Rolle, ein Praktikum hast oder einfach über Java sprechen möchtest, freue ich mich, von dir zu hören.",
    email: "malikmedhat77@gmail.com",
    phone: "+20 1011091749",
    location: "Giza, Kairo, Ägypten",
    socials: [
      { label: "E-Mail", value: "malikmedhat77@gmail.com", href: "mailto:malikmedhat77@gmail.com", icon: "mail" },
      { label: "Telefon", value: "+20 1011091749", href: "tel:+201011091749", icon: "phone" },
      { label: "LinkedIn", value: "linkedin.com/in/malik-medhat-34732034a", href: "https://www.linkedin.com/in/malik-medhat-34732034a/", icon: "linkedin" },
      { label: "GitHub", value: "github.com/MalikMedhat", href: "https://github.com/MalikMedhat", icon: "github" },
      { label: "Standort", value: "Giza, Kairo, Ägypten", href: "https://maps.google.com/?q=Giza,+Egypt", icon: "map-pin" },
    ],
    form: {
      fields: {
        name: { label: "Name", placeholder: "Dein Name" },
        email: { label: "E-Mail", placeholder: "du@beispiel.de" },
        subject: { label: "Betreff", placeholder: "Worum geht es?" },
        message: { label: "Nachricht", placeholder: "Erzähl mir von der Rolle oder dem Projekt…" },
      },
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Nachricht gesendet! Ich melde mich bald bei dir.",
      successDemo: "Nachricht empfangen (Demo-Modus). Verbinde Supabase, um Nachrichten zu speichern.",
      errorInvalid: "Bitte korrigiere die markierten Felder.",
      errorGeneral: "Etwas ist schiefgelaufen. Bitte versuche es gleich noch einmal.",
      schema: {
        name: "Bitte gib deinen Namen ein.",
        email: "Bitte gib eine gültige E-Mail-Adresse ein.",
        subject: "Bitte füge einen kurzen Betreff hinzu.",
        message: "Deine Nachricht sollte mindestens 10 Zeichen lang sein.",
      },
    },
  },
};

export const translations = { en, de };
