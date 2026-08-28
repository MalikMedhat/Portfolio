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
    title: "Malik Medhat — Backend & Full-Stack Software Engineer (Java / Spring Boot)",
    description:
      "Portfolio of Malik Medhat, a Backend & Full-Stack Software Engineer specialized in Java and Spring Boot, based in Giza, Egypt. Building scalable APIs, AI integrations and real-time systems.",
  },
  profile: {
    name: "Malik Medhat",
    firstName: "Malik",
    role: "Backend & Full-Stack Software Engineer",
    tagline: "Backend & Full-Stack Software Engineer",
    focus: "Java / Spring Boot",
    location: "Giza, Cairo, Egypt",
    availability: "Open to backend & full-stack roles in AI engineering & cloud across Germany, Austria & remote Europe",
    intro:
      "I build scalable, production-ready backends with Java and Spring Boot — from secure REST APIs and payment flows to AI-powered services and real-time chat. I care about clean architecture, solid testing and code that other engineers actually enjoy reading.",
    about: [
      "I'm a backend-focused engineer who loves turning complex requirements into simple, reliable systems. My daily toolkit revolves around Java and Spring Boot, but I go full-stack when a project needs it — React, Docker, MySQL and CI pipelines included.",
      "Right now I'm deepening my expertise in Spring Security, event-driven architectures and AI integrations, while shipping personal projects that solve real problems end-to-end.",
      "I'm currently looking for my next opportunity as a backend engineer in Germany, Austria or remote across Europe.",
    ],
    stats: [
      { value: "2+", label: "Years learning & building with Java / Spring Boot" },
      { value: "10", label: "Projects built end-to-end" },
      { value: "10+", label: "Technologies in daily use" },
      { value: "100%", label: "Self-driven learner" },
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
    pdfTag: "Backend & Full-Stack Software Engineer · PDF",
    githubAria: "GitHub",
    linkedinAria: "LinkedIn",
    emailAria: "Email",
  },
  sections: {
    about: { eyebrow: "About me", titlePre: "A backend engineer who", titleAccent: "cares about the details" },
    skills: {
      eyebrow: "Skills",
      titlePre: "A stack built for",
      titleAccent: "reliable products",
      subtitle:
        "The tools I reach for every day to design, build, secure and ship backend systems — and the frontends that talk to them.",
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
      subtitle: "Education, certifications and projects that shaped how I build software.",
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
      title: "Backend",
      icon: "server",
      tags: [
        "Java",
        "Spring Boot 3",
        "Spring Security",
        "Spring MVC",
        "REST APIs",
        "JWT / OAuth2",
        "JPA / Hibernate",
        "WebSockets",
        "FastAPI",
      ],
    },
    {
      title: "Frontend",
      icon: "monitor",
      tags: ["React", "TypeScript", "Angular", "Tailwind CSS", "Vite", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      title: "Databases",
      icon: "database",
      tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Flyway", "Indexing & Query Optimization"],
    },
    {
      title: "DevOps & Tools",
      icon: "settings",
      tags: ["Docker", "Git", "GitHub Actions", "Maven", "Gradle", "Linux", "Postman", "REST Clients"],
    },
    {
      title: "Other Languages",
      icon: "code",
      tags: ["Python", "JavaScript", "SQL", "Bash"],
    },
    {
      title: "AI Tools",
      icon: "sparkles",
      tags: ["Spring AI", "Groq API", "Llama 3.1", "LangChain4j", "Prompt Engineering", "AI Agents"],
    },
  ],
  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Full-Stack Platform",
      tagline: "Secure marketplace with payments & role-based access",
      problem:
        "Built a complete online store from scratch — a scalable, layered backend with secure authentication, role-based access and real card payments, paired with a responsive storefront.",
      features: [
        "Clean layered architecture: config, controller, dto, model, repository, security, service",
        "Stateless auth with Spring Security & JWT, custom security filters and secure registration/login",
        "Role-Based Access Control (RBAC) across protected endpoints",
        "Stripe payment gateway for checkout and order lifecycle",
        "Responsive React/TypeScript frontend with filtering, search, sort and a live cart",
        "Containerized with Docker for consistent local and production environments",
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "TypeScript", "MySQL", "Docker"],
      github: `https://github.com/${GITHUB_USERNAME}/ecommerce-platform`,
      cover: coverBlue,
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Platform",
      tagline: "Streaming LLM chat powered by Llama 3.1",
      problem:
        "Built a high-performance generative AI backend with a clean, provider-agnostic architecture — low-latency responses with zero local model overhead.",
      features: [
        "Spring Boot 3 + Spring AI with an OpenAI-compatible architecture",
        "Groq Cloud Services (Llama 3.1) for low-latency AI response generation",
        "Zero local model overhead — all inference in the cloud",
        "Modular abstraction layers for dynamic API key management",
        "Seamless model switching without touching business logic",
        "Clean, responsive chat interface",
      ],
      tech: ["Java", "Spring Boot 3", "Spring AI", "Groq API", "Llama 3.1", "HTML", "CSS"],
      github: `https://github.com/${GITHUB_USERNAME}/ai-chatbot-platform`,
      cover: coverViolet,
    },
    {
      id: "realtime-chat",
      title: "Real-Time Chat Application",
      tagline: "Instant messaging over WebSockets",
      problem:
        "Engineered real-time, bidirectional messaging where every message arrives instantly — built to handle many concurrent connections.",
      features: [
        "Real-time bidirectional messaging over WebSockets",
        "Concurrent user connection handling on a Spring Boot backend",
        "Scalable message broadcasting across connected clients",
        "Typing indicators and online presence",
        "Multi-room support with join/leave events",
        "Low-latency delivery for a native chat feel",
      ],
      tech: ["Java", "Spring Boot", "WebSockets"],
      github: `https://github.com/${GITHUB_USERNAME}/realtime-chat`,
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
      { label: "LinkedIn", value: "linkedin.com/in/malik-medhat", href: "https://www.linkedin.com/in/malik-medhat", icon: "linkedin" },
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
    title: "Malik Medhat — Backend- & Full-Stack-Softwareentwickler (Java / Spring Boot)",
    description:
      "Portfolio von Malik Medhat, Backend- & Full-Stack-Softwareentwickler mit Spezialisierung auf Java und Spring Boot, basierend in Giza, Ägypten. Skalierbare APIs, KI-Integrationen und Echtzeitsysteme.",
  },
  profile: {
    name: "Malik Medhat",
    firstName: "Malik",
    role: "Backend- & Full-Stack-Softwareentwickler",
    tagline: "Backend- & Full-Stack-Softwareentwickler",
    focus: "Java / Spring Boot",
    location: "Giza, Kairo, Ägypten",
    availability: "Offen für Backend- & Full-Stack-Rollen in KI-Entwicklung & Cloud in Deutschland, Österreich & Remote in ganz Europa",
    intro:
      "Ich entwickle skalierbare, produktionsreife Backends mit Java und Spring Boot — von sicheren REST-APIs und Zahlungsflüssen über KI-gestützte Dienste bis hin zu Echtzeit-Chat. Mir sind saubere Architektur, solide Tests und Code wichtig, den andere Entwickler gerne lesen.",
    about: [
      "Als backend-fokussierter Entwickler verwandle ich komplexe Anforderungen gerne in einfache, zuverlässige Systeme. Mein tägliches Werkzeug dreht sich um Java und Spring Boot, aber wenn ein Projekt es erfordert, arbeite ich auch Full-Stack — inklusive React, Docker, MySQL und CI-Pipelines.",
      "Derzeit vertiefe ich mich in Spring Security, ereignisgesteuerte Architekturen und KI-Integrationen und entwickle dabei persönliche Projekte, die echte Probleme von Anfang bis Ende lösen.",
      "Ich suche aktuell meine nächste Möglichkeit als Backend-Entwickler in Deutschland, Österreich oder remote in ganz Europa.",
    ],
    stats: [
      { value: "2+", label: "Jahre Lernen & Entwickeln mit Java / Spring Boot" },
      { value: "10", label: "End-to-End umgesetzte Projekte" },
      { value: "10+", label: "Technologien im täglichen Einsatz" },
      { value: "100%", label: "Selbstständig lernend" },
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
    pdfTag: "Backend- & Full-Stack-Softwareentwickler · PDF",
    githubAria: "GitHub",
    linkedinAria: "LinkedIn",
    emailAria: "E-Mail",
  },
  sections: {
    about: { eyebrow: "Über mich", titlePre: "Ein Backend-Entwickler, dem", titleAccent: "die Details wichtig sind" },
    skills: {
      eyebrow: "Fähigkeiten",
      titlePre: "Ein Stack für",
      titleAccent: "zuverlässige Produkte",
      subtitle:
        "Die Werkzeuge, mit denen ich täglich Backend-Systeme entwerfe, baue, absichere und ausliefere — und die Frontends, die mit ihnen sprechen.",
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
      subtitle: "Ausbildung, Zertifikate und Projekte, die geprägt haben, wie ich Software entwickle.",
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
      title: "Backend",
      icon: "server",
      tags: [
        "Java",
        "Spring Boot 3",
        "Spring Security",
        "Spring MVC",
        "REST-APIs",
        "JWT / OAuth2",
        "JPA / Hibernate",
        "WebSockets",
        "FastAPI",
      ],
    },
    {
      title: "Frontend",
      icon: "monitor",
      tags: ["React", "TypeScript", "Angular", "Tailwind CSS", "Vite", "HTML5", "CSS3", "Responsives Design"],
    },
    {
      title: "Datenbanken",
      icon: "database",
      tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Flyway", "Indizierung & Abfrageoptimierung"],
    },
    {
      title: "DevOps & Tools",
      icon: "settings",
      tags: ["Docker", "Git", "GitHub Actions", "Maven", "Gradle", "Linux", "Postman", "REST-Clients"],
    },
    {
      title: "Weitere Sprachen",
      icon: "code",
      tags: ["Python", "JavaScript", "SQL", "Bash"],
    },
    {
      title: "KI-Tools",
      icon: "sparkles",
      tags: ["Spring AI", "Groq API", "Llama 3.1", "LangChain4j", "Prompt Engineering", "KI-Agenten"],
    },
  ],
  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Full-Stack Platform",
      tagline: "Sicherer Marktplatz mit Zahlungen & rollenbasierter Zugriffskontrolle",
      problem:
        "Einen kompletten Online-Shop von Grund auf gebaut — ein skalierbares, geschichtetes Backend mit sicherer Authentifizierung, rollenbasierter Zugriffskontrolle und echten Kartenzahlungen, kombiniert mit einem responsiven Storefront.",
      features: [
        "Saubere Schichtenarchitektur: config, controller, dto, model, repository, security, service",
        "Zustandslose Authentifizierung mit Spring Security & JWT, eigenen Sicherheitsfiltern und sicherer Registrierung/Anmeldung",
        "Rollenbasierte Zugriffskontrolle (RBAC) über geschützte Endpunkte",
        "Stripe-Zahlungsgateway für Checkout und Bestelllebenszyklus",
        "Responsives React/TypeScript-Frontend mit Filtern, Suche, Sortierung und Live-Warenkorb",
        "Mit Docker containerisiert für konsistente lokale und Produktionsumgebungen",
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "TypeScript", "MySQL", "Docker"],
      github: `https://github.com/${GITHUB_USERNAME}/ecommerce-platform`,
      cover: coverBlue,
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Platform",
      tagline: "KI-Chat mit Llama 3.1 in Echtzeit",
      problem:
        "Ein leistungsstarkes generatives KI-Backend mit einer sauberen, providerunabhängigen Architektur gebaut — niedrige Latenz ohne lokalen Modell-Overhead.",
      features: [
        "Spring Boot 3 + Spring AI mit einer OpenAI-kompatiblen Architektur",
        "Groq Cloud Services (Llama 3.1) für KI-Antworten mit niedriger Latenz",
        "Kein lokaler Modell-Overhead — die gesamte Inferenz läuft in der Cloud",
        "Modulare Abstraktionsschichten für dynamisches API-Key-Management",
        "Nahtloser Modellwechsel ohne Änderung der Geschäftslogik",
        "Saubere, responsive Chat-Oberfläche",
      ],
      tech: ["Java", "Spring Boot 3", "Spring AI", "Groq API", "Llama 3.1", "HTML", "CSS"],
      github: `https://github.com/${GITHUB_USERNAME}/ai-chatbot-platform`,
      cover: coverViolet,
    },
    {
      id: "realtime-chat",
      title: "Real-Time Chat Application",
      tagline: "Sofortnachrichten über WebSockets",
      problem:
        "Echtzeit-, bidirektionale Messaging-Anwendung entwickelt, bei der jede Nachricht sofort ankommt — gebaut für viele gleichzeitige Verbindungen.",
      features: [
        "Echtzeit-Bidirektionales Messaging über WebSockets",
        "Handhabung gleichzeitiger Verbindungen auf einem Spring-Boot-Backend",
        "Skalierbare Nachrichtenübertragung an verbundene Clients",
        "Tipp-Indikatoren und Online-Präsenz",
        "Unterstützung mehrerer Räume mit Beitritts-/Verlass-Ereignissen",
        "Niedrige Latenz für ein natives Chat-Gefühl",
      ],
      tech: ["Java", "Spring Boot", "WebSockets"],
      github: `https://github.com/${GITHUB_USERNAME}/realtime-chat`,
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
      { label: "LinkedIn", value: "linkedin.com/in/malik-medhat", href: "https://www.linkedin.com/in/malik-medhat", icon: "linkedin" },
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
