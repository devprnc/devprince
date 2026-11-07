import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Download,
  MessageCircle,
  X,
  Send,
  Bot,
  ChevronDown,
  ChevronUp,
  Menu,
  Loader2,
  Sun,
  Moon,
  Trophy,
  CalendarDays,
  FolderKanban,
  Code2,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiCodeigniter,
  SiExpress,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiComposer,
  SiDotnet,
  SiC,
  SiSharp,
} from "react-icons/si";
import ReCAPTCHA from "react-google-recaptcha";


export default function App() {
    const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    try { return window.localStorage.getItem("portfolio-theme") !== "light"; }
    catch { return true; }
  });

  useEffect(() => {
    try { window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light"); }
    catch { /* Storage may be unavailable; theme still works for this session. */ }
  }, [darkMode]);
  const [sending, setSending] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Prince AI Assistant 👋 Ask me about skills, experience, projects, contact info, tech stack, resume, or anything about Prince Louie.",
    },
  ]);

  const [input, setInput] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = [
    "skills",
    "experience",
    "projects",
    "contact",
    "resume",
    "frontend",
    "backend",
    "laravel",
    "react",
    "node",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const normalizeText = (text = "") =>
    text.toLowerCase().trim().replace(/[^a-z0-9+#.\s]/g, " ").replace(/\s+/g, " ");

  const getAIResponse = (message = "") => {
    const msg = normalizeText(message);
    const has = (...terms: string[]) => terms.some((term) =>
      new RegExp(`(^|\\s)${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i").test(msg)
    );

    if (!msg) return "Please enter a question. You can ask about skills, experience, projects, or contact details.";
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)$/.test(msg)) {
      return "Hello! I'm Prince's portfolio assistant. Ask me about his development skills, work experience, projects, or how to get in touch.";
    }
    if (has("experience", "work", "career", "employment", "job")) {
      return "Prince is a Full-Stack Web Developer at Xytron International (MIS Department), working on enterprise web applications and internal systems. His experience also includes a Department of Agriculture OJT and leading the UPA rental platform thesis project.";
    }
    if (has("project", "projects", "portfolio", "system", "systems", "application", "applications")) {
      return "Featured work includes RentSpace, MotoShop POS, HR Information System, Student Management System, Evacuation Center System, and Barangay Management System. Open the Projects section to review each project and its technology stack.";
    }
    if (has("frontend", "front end", "interface", "ui", "design")) {
      return "Frontend technologies include ReactJS, JavaScript, HTML, CSS, TailwindCSS, and Bootstrap. Prince also works with responsive interfaces and API integration.";
    }
    if (has("backend", "back end", "api", "server")) {
      return "Backend technologies include PHP, Laravel, CodeIgniter, NodeJS, and ExpressJS, with experience building APIs, business workflows, and database-driven systems.";
    }
    if (has("skill", "skills", "technology", "technologies", "tech", "stack")) {
      return "Prince's stack includes PHP, JavaScript, Java, C, C#, Laravel, CodeIgniter, ReactJS, NodeJS, ExpressJS, React Native, MySQL, MongoDB, Firebase, Git, and Postman.";
    }
    if (has("node", "nodejs", "express", "expressjs")) return "Prince also builds backend services and APIs using NodeJS and ExpressJS.";
    if (has("laravel")) return "Laravel is one of Prince's primary backend frameworks, used for enterprise systems, application logic, and API development.";
    if (has("react", "reactjs", "react native")) return "Prince uses ReactJS for web interfaces and React Native for mobile application development.";
    if (has("resume", "cv")) return "Use the Download CV link in the Overview section to download Prince's resume. If the download does not start, check that the PDF exists at /files/princelouiepaquiado_resume.pdf in the deployed public folder.";
    if (has("contact", "email", "phone", "hire", "freelance")) {
      return "You can reach Prince at princepaquiado20@gmail.com or +63 992 418 3277. You can also use the contact form in the Contact section.";
    }
    if (has("github")) return "GitHub profile: https://github.com/devprnc";
    if (has("location", "where", "country")) return "Prince is based in the Philippines.";
    return "I can help with questions about Prince's skills, frontend/backend stack, experience, projects, resume, GitHub, and contact details. Try asking a specific question.";
  };

  const sendMessage = (customText: string | null = null) => {
    const finalMessage = (customText ?? input).trim();
    if (!finalMessage) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: finalMessage },
      { sender: "bot", text: getAIResponse(finalMessage) },
    ]);
    setInput("");
  };

  const [emailModal, setEmailModal] = useState(false);

  const [emailStatus, setEmailStatus] = useState<
    "success" | "error"
  >("success");

  const [emailMessage, setEmailMessage] = useState("");

  const projects = [
  {
    title: "RentSpace",
    description:
      "This project connecting tenants and property owners through a mobile and web rental platform.",
    tech: [
      {
        name: "ReactJS",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      {
        name: "React Native",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400" />,
      },
    ],
    image: "/img/rentspace.png",
    link: "https://rentspaceapp.netlify.app/",
  },

  {
    title: "MotoShop POS",
    description:
      "Point of Sale system for inventory, sales, and customer management.",
    tech: [
      {
        name: "C#",
        icon: <SiSharp className="text-green-500" />,
      },
      {
        name: ".NET",
        icon: <SiDotnet className="text-violet-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-emerald-400" />,
      },
    ],
    image: "/img/service2.jpg",
  },

  {
    title: "HR Information System",
    description:
      "Java-based HRIS with payroll, attendance, and employee management modules.",
    tech: [
      {
        name: "Java",
        icon: <FaJava className="text-orange-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-emerald-400" />,
      },
    ],
    image: "/img/service3.jpg",
  },

  {
    title: "Student Management System",
    description:
      "Multi-portal platform for students, teachers, and administrators.",
    tech: [
      {
        name: "PHP",
        icon: <FaPhp className="text-indigo-400" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-emerald-400" />,
      },
    ],
    image: "/img/service4.jpg",
  },

  {
    title: "Evacuation Center System",
    description:
      "Real-time monitoring system for evacuees, calamities, and supplies.",
    tech: [
      {
        name: "Laravel",
        icon: <FaLaravel className="text-red-500" />,
      },
      {
        name: "React Native",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400" />,
      },
    ],
    image: "/img/service5.jpg",
  },

  {
    title: "Barangay Management System",
    description:
      "Enterprise-level management system for barangay operations and workflows.",
    tech: [
      {
        name: "Laravel",
        icon: <FaLaravel className="text-red-500" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-emerald-400" />,
      },
    ],
    image: "/img/service6.jpg",
  },
];

  const techStack = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-emerald-400" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500" />,
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "PHP",
        icon: <FaPhp className="text-indigo-400" />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel className="text-red-500" />,
      },
      {
        name: "CodeIgniter",
        icon: <SiCodeigniter className="text-orange-500" />,
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress className="text-gray-700 dark:text-white" />,
      },
    ],
  },

  {
    category: "Mobile Development",
    skills: [
      {
        name: "React Native",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-sky-400" />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-orange-500" />,
      },
    ],
  },

  {
    category: "Programming Languages",
    skills: [
      {
        name: "PHP",
        icon: <FaPhp className="text-indigo-400" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-orange-500" />,
      },
      {
        name: "C",
        icon: <SiC className="text-emerald-400" />,
      },
      {
        name: "C#",
        icon: <SiSharp className="text-green-500" />,
      },
    ],
  },

  {
    category: "Database",
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql className="text-emerald-400" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400" />,
      },
    ],
  },

  {
    category: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "Github",
        icon: <FaGithub className="text-black dark:text-white" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" />,
      },
      {
        name: "Composer",
        icon: <SiComposer className="text-amber-700 dark:text-amber-400" />,
      },
    ],
  },
];

  const experiences = [
  {
    role: "Full-Stack Web Developer",
    company: "Xytron International (MIS Department)",
    year: "2025 - Present",
    current: true,
    description:
      "Currently developing enterprise web applications and internal systems using Laravel. Responsible for developing the eSOA Blasting System, including backend logic, email processing workflows, database management, and frontend integration. Also contributed to the Ticketing Management System (CRUD) handling APIs, frontend interfaces, and server-side development.",
  },
  {
    role: "Lead Developer / Thesis Project",
    company: "UPA - Urban Property Rental Application",
    year: "2024 - 2025",
    current: false,
    description:
      "Led the development of a mobile and web-based rental application designed to connect tenants and property owners. Built core frontend and backend functionalities, managed Firebase integration, and implemented responsive UI/UX for both web and mobile platforms using React Native and Laravel. The project received the 'Best in Thesis' award at the University of Caloocan City in 2025.",
  },
  {
    role: "Web Developer (OJT)",
    company: "Department of Agriculture",
    year: "2024",
    current: false,
    description:
      "Developed backend logic and managed databases for the Ticketing Management System (TMS). Contributed as a full-stack developer for the Farm Input Management System (FIMS), handling both frontend and backend development.",
  },
];

useEffect(() => {
  const sections =
    document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  };
}, []);


  // const sendEmail = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();

  //   const form = e.currentTarget;

  //   setSending(true);

  //   const now = new Date();

  //   const timestamp = now.toLocaleString("en-PH", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   });

  //   const existing =
  //     form.querySelector('input[name="timestamp"]');

  //   if (!existing) {
  //     const time = document.createElement("input");

  //     time.type = "hidden";
  //     time.name = "timestamp";
  //     time.value = timestamp;

  //     form.appendChild(time);
  //   }

  //   try {
  //     await emailjs.sendForm(
  //       "service_j4xmz6e",
  //       "template_cy5c77p",
  //       form,
  //       "MXcKRUXgUP_6ZMGBX"
  //     );

  //     setEmailStatus("success");

  //     setEmailMessage(
  //       "Your message has been sent successfully!"
  //     );

  //     setEmailModal(true);

  //     form.reset();
  //   } catch (error) {
  //     console.log(error);

  //     setEmailStatus("error");

  //     setEmailMessage(
  //       "Failed to send message. Please try again."
  //     );

  //     setEmailModal(true);
  //   } finally {
  //     setSending(false);
  //   }
  // };

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // new send email with captcha verification
  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!captchaToken) {
      setEmailStatus("error");
      setEmailMessage("Please verify that you are not a robot.");
      setEmailModal(true);
      return;
    }

    setSending(true);

    const now = new Date();

    const timestamp = now.toLocaleString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    try {
      const existing = form.querySelector(
        'input[name="timestamp"]'
      );

      let timestampInput = existing as HTMLInputElement | null;
      if (!timestampInput) {
        timestampInput = document.createElement("input");
        timestampInput.type = "hidden";
        timestampInput.name = "timestamp";
        form.appendChild(timestampInput);
      }
      timestampInput.value = timestamp;

      // Pass CAPTCHA token to EmailJS
      let captchaInput = form.querySelector<HTMLInputElement>(
        'input[name="g-recaptcha-response"]'
      );

      if (!captchaInput) {
        captchaInput = document.createElement("input");
        captchaInput.type = "hidden";
        captchaInput.name = "g-recaptcha-response";
        form.appendChild(captchaInput);
      }

      captchaInput.value = captchaToken;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_j4xmz6e",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_cy5c77p",
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "MXcKRUXgUP_6ZMGBX"
      );

      setEmailStatus("success");
      setEmailMessage(
        "Your message has been sent successfully!"
      );

      setEmailModal(true);

      form.reset();
      setCaptchaToken(null);
      recaptchaRef.current?.reset();

    } catch (error) {
      console.log(error);

      setEmailStatus("error");
      setEmailMessage(
        "Failed to send message. Please try again."
      );

      setEmailModal(true);

      setCaptchaToken(null);
      recaptchaRef.current?.reset();

    } finally {
      setSending(false);
    }
  };


  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={`${darkMode ? "dark bg-[#080f1b] text-slate-100" : "light bg-slate-50 text-slate-900"} min-h-screen overflow-x-hidden font-sans selection:bg-emerald-400/30 transition-colors duration-300`}
    >
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 6.5rem; }
        section[id] { scroll-margin-top: 6.5rem; }
        @media (max-width: 1023px) { section[id] { scroll-margin-top: 7.5rem; } }
        section[id] > div:first-child h2::before { content: "// "; color: #10b981; opacity: .75; }
        .light aside, .light header { background-color: rgba(255,255,255,.96) !important; border-color: #e2e8f0 !important; color: #334155 !important; }
        .light [class*="bg-[#0b1220]"], .light [class*="bg-[#0b1625]"], .light [class*="bg-[#050b12]"], .light [class*="bg-[#0b1520]"], .light [class*="bg-slate-900"] { background-color: #ffffff !important; color: #0f172a !important; }
        .light [class*="border-slate-800"], .light [class*="border-slate-700"] { border-color: #dbe4ee !important; }
        .light [class*="text-white"], .light [class*="text-slate-100"], .light [class*="text-slate-200"], .light [class*="text-slate-300"] { color: #172033 !important; }
        .light [class*="text-slate-400"], .light [class*="text-slate-500"], .light [class*="text-gray-400"], .light [class*="text-gray-500"] { color: #64748b !important; }
        .light input, .light textarea { background-color: #fff !important; color: #0f172a !important; border-color: #cbd5e1 !important; }
        .light footer { background-color: #f1f5f9 !important; border-color: #dbe4ee !important; }
        .light .terminal-window { background-color: #f8fafc !important; }
      `}</style>
      {/* Corporate dashboard sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-slate-800 bg-[#0b1220] text-slate-300 lg:flex">
        <a href="#home" className="flex h-16 items-center gap-1 border-b border-slate-800 px-6 text-base
              font-bold
              font-mono
              tracking-[0.2em]
              md:text-lg">
          <span className="text-emerald-400">&lt;</span>PL<span className="text-emerald-400">/&gt;</span>

          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">
              DEV PRINCE
            </span>
            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Developer Portfolio
            </span>
          </span>
        </a>
        <div className="px-5 pt-7 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">EXPLORER / WORKSPACE</div>
        <nav className="flex flex-col gap-1 px-3">
          {[
            { label: "Overview", href: "#home", icon: "⌂" },
            { label: "About Me", href: "#about", icon: "◉" },
            { label: "Skills & Stack", href: "#skills", icon: "⌘" },
            { label: "Experience", href: "#experience", icon: "▤" },
            { label: "Projects", href: "#projects", icon: "▦" },
            { label: "Contact", href: "#contact", icon: "✉" },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setActiveSection(item.href.slice(1))} className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${activeSection === item.href.slice(1) ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "text-slate-400 hover:bg-slate-800/80 hover:text-white"}`}>
              <span className="w-5 text-center font-mono text-base">{item.icon}</span>{item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto border-t border-slate-800 p-5">
          <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"/><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"/></span>
            <div><p className="font-mono text-xs font-medium text-emerald-300">● system_online</p><p className="mt-0.5 font-mono text-[10px] text-slate-500">status: available_for_work</p></div>
          </div>
          <p className="mt-4 text-[10px] text-slate-600">Dev Prince · © 2026 Prince Louie T. Paquiado</p>
        </div>
      </aside>

      {/* Dashboard top bar */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-slate-800 bg-[#0b1220]/95 backdrop-blur-xl lg:left-64">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            
            <button aria-label="Toggle navigation menu" aria-expanded={mobileMenu} onClick={() => setMobileMenu(!mobileMenu)} className="rounded-lg border border-slate-700 p-2 text-slate-300 lg:hidden"><Menu size={18}/></button>
            <span className="flex h-8 w-8 items-center justify-center font-mono text-lg font-bold lg:hidden"><span className="text-emerald-400">&lt;</span>PL<span className="text-emerald-400">/&gt;</span></span>
          
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[11px] text-emerald-300 sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Available for work</span>
            <a href="#contact" className="hidden rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold transition hover:bg-emerald-400 sm:inline-flex">Let's Talk <ArrowUpRight size={14} className="ml-1"/></a>
          </div>
        </div>
        {mobileMenu && <nav className="grid grid-cols-2 gap-2 border-t border-slate-800 bg-[#0b1220] p-4 sm:grid-cols-3 lg:hidden">{[["Overview","home"],["About","about"],["Skills","skills"],["Experience","experience"],["Projects","projects"],["Contact","contact"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => { setMobileMenu(false); setActiveSection(id); }} className="rounded-lg border border-slate-800 px-3 py-2.5 text-xs text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300">{label}</a>)}</nav>}
      </header>

      <main className="min-h-screen pt-16 lg:pl-64">
      {/* Dashboard overview */}
      <section id="home" className="dashboard-section mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="font-mono text-xs text-emerald-400">// INITIALIZING DEVELOPER PROFILE...</p><h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Developer Dashboard<span className="ml-2 font-mono text-emerald-500">_</span></h1><p className="mt-1 text-sm text-slate-400">A quick overview of my profile, capabilities, and selected work.</p></div>
          <p className="font-mono text-[11px] text-slate-500">STATUS: <span className="text-emerald-400">ONLINE</span> · PHILIPPINES</p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(260px,0.8fr)]">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220] shadow-xl shadow-black/10">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3"><span className="font-mono text-[11px] text-slate-500">profile.tsx</span><span className="text-[10px] text-emerald-400">● ACTIVE PROFILE</span></div>
            <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-7">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-900 p-1"><img src="/img/prince_profile.jpg" alt="Prince Louie" className="h-full w-full rounded-xl object-cover"/></div>
              <div className="min-w-0"><p className="font-mono text-xs text-emerald-400"><span className="text-slate-500">const</span> developer <span className="text-slate-500">=</span> <span className="text-amber-300">"Dev Prince"</span><span className="text-slate-500">;</span></p><h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Prince Louie T. Paquiado</h2><p className="mt-2 text-sm font-medium text-emerald-300">Full-Stack Web Developer</p><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Building reliable web applications, enterprise systems, and user-focused digital solutions with modern technologies.</p>
                <div className="mt-5 flex flex-wrap gap-2"><a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400">Explore Projects <ArrowRight size={14}/></a><a href="/files/princelouiepaquiado_resume.pdf" download="princelouiepaquiado_resume.pdf" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300">Download CV <Download size={14}/></a></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-1">
            <div className="rounded-2xl border border-slate-800 bg-[#0b1220] p-5"><p className="text-[11px] uppercase tracking-wider text-slate-500">Core Focus</p><p className="mt-3 text-lg font-semibold text-white">Full-Stack</p><p className="mt-1 text-xs text-slate-400">Web application development</p></div>
            <div className="rounded-2xl border border-slate-800 bg-[#0b1220] p-5"><p className="text-[11px] uppercase tracking-wider text-slate-500">Primary Stack</p><p className="mt-3 text-lg font-semibold text-white">Laravel · React</p><p className="mt-1 text-xs text-slate-400">Backend & frontend engineering</p></div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["03+", "Years in Development", CalendarDays],
            ["06+", "Featured Projects", FolderKanban],
            ["10+", "Technologies & Tools", Code2],
            ["2025", "Best in Thesis Award", Trophy],
          ].map(([value, label, Icon]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-800 bg-[#0b1220] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-slate-500">
                  {label}
                </span>
                <Icon size={18} className="text-emerald-400" />
              </div>

              <p className="mt-3 font-mono text-2xl font-bold text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#0b1220] px-5 py-4"><div><p className="text-sm font-semibold text-white">Connect with me</p><p className="mt-1 text-xs text-slate-500">Find my work and professional profile online.</p></div><div className="flex gap-2"><a href="https://github.com/devprnc" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-slate-700 p-2.5 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300"><Github size={17}/></a><a href="https://www.linkedin.com/in/prince-louie-paquiado-4748b0326/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-slate-700 p-2.5 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300"><Linkedin size={17}/></a><a href="#contact" aria-label="Email" className="rounded-lg border border-slate-700 p-2.5 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300"><Mail size={17}/></a></div></div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="terminal-window overflow-hidden rounded-xl border border-emerald-400/20 bg-[#050b12] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0b1520] px-4 py-3">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/><span className="ml-2 font-mono text-[10px] text-slate-500">terminal — bash</span></div>
              <span className="font-mono text-[10px] text-emerald-400">SESSION: ACTIVE</span>
            </div>
            <div className="space-y-2 p-4 font-mono text-xs leading-6 sm:p-5">
              <p><span className="text-emerald-400">prince@developer</span><span className="text-slate-500">:</span><span className="text-cyan-300">~</span><span className="text-slate-300">$ whoami</span></p>
              <p className="pl-3 text-slate-300">Full-Stack Web Developer <span className="text-slate-500">// Philippines</span></p>
              <p><span className="text-emerald-400">prince@developer</span><span className="text-slate-500">:</span><span className="text-cyan-300">~</span><span className="text-slate-300">$ cat stack.json</span></p>
              <p className="pl-3"><span className="text-slate-500">{`{`}</span> <span className="text-cyan-300">"frontend"</span><span className="text-slate-400">: </span><span className="text-amber-300">["React", "Tailwind"]</span><span className="text-slate-500">,</span></p>
              <p className="pl-6"><span className="text-cyan-300">"backend"</span><span className="text-slate-400">: </span><span className="text-amber-300">["Laravel", "Node.js"]</span><span className="text-slate-500">,</span></p>
              <p className="pl-6"><span className="text-cyan-300">"database"</span><span className="text-slate-400">: </span><span className="text-amber-300">["MySQL", "MongoDB"]</span></p>
              <p className="pl-3 text-slate-500">{`}`}</p>
              <p className="pt-1"><span className="text-emerald-400">prince@developer</span><span className="text-slate-500">:</span><span className="text-cyan-300">~</span><span className="text-slate-300">$ <span className="animate-pulse text-emerald-400">▌</span></span></p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0b1220]">
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3"><span className="font-mono text-[10px] text-slate-400">developer.prompt</span><span className="rounded border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 font-mono text-[9px] text-emerald-300">READY</span></div>
            <div className="p-4 sm:p-5"><p className="font-mono text-xs text-emerald-400">// BUILD • DEBUG • DEPLOY</p><h3 className="mt-3 text-lg font-semibold text-white">Turning ideas into working software.</h3><p className="mt-2 text-xs leading-6 text-slate-400">From database design to responsive interfaces, I build practical applications with clean logic and maintainable code.</p><div className="mt-4 flex flex-wrap gap-2">{["API Integration", "System Development", "UI Engineering", "Database Design"].map((tag) => <span key={tag} className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 font-mono text-[10px] text-slate-300"><span className="mr-1 text-emerald-400">#</span>{tag}</span>)}</div></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="fade-section mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mb-10">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl">
            About Me
          </h2>
        </div>

        <div
          className="
            rounded-3xl
            border border-slate-800
            bg-[#0b1220]
            p-7
            shadow-xl shadow-black/20
            backdrop-blur-xl
            dark:border-slate-800
            dark:bg-[#0b1220]
          "
        >
          <p className="text-sm leading-8 text-slate-400">
            I am{" "}
            <span className="font-semibold text-emerald-400">
              Prince Louie T. Paquiado
            </span>
            , a Full-Stack Web Developer with more than 3 years of experience developing
            scalable and responsive web applications. I specialize in building
            backend systems using Laravel and CodeIgniter while creating modern,
            user-friendly interfaces with ReactJS, TailwindCSS, Bootstrap, HTML,
            CSS, and JavaScript.
          </p>

          <p className="mt-5 text-sm leading-8 text-slate-400">
            Currently, I work at{" "}
            <span className="font-semibold text-emerald-400">
              Xytron International
            </span>{" "}
            as a Full-Stack Web Developer in the MIS Department, where I develop
            enterprise systems and internal web applications including the{" "}
            <span className="font-semibold">
              eSOA Blasting System
            </span>
            , Ticketing Management System (TMS) using Laravel and modern web technologies.
          </p>

          <p className="mt-5 text-sm leading-8 text-slate-400">
            I graduated with a Bachelor of Science in Computer Science (BSCS)
            from the University of Caloocan City and received the{" "}
            <span className="font-semibold text-emerald-400">
              Best in Thesis Award
            </span>{" "}
            in 2025 for developing the UPA (Urban Property Rental Application),
            a mobile and web-based platform connecting tenants and property
            owners.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "3 Years Experience",
              "Laravel Developer",
              "MERN Stack Developer",
              "Best in Thesis 2025",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-full
                  border border-emerald-400/20
                  bg-emerald-500/10
                  px-4 py-2
                  text-xs
                  font-medium
                  text-emerald-400
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="dashboard-section fade-section mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl">
            Skills & Tech Stack
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Technologies and tools I use for development
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-slate-800
                bg-[#0b1220]
                p-5
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                dark:border-slate-800
                dark:bg-[#0b1220]
              "
            >
              <h3 className="mb-4 text-base font-semibold">
                {stack.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {stack.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="
                      flex items-center gap-2
                      rounded-xl
                      border border-white/10
                      bg-black/5
                      dark:bg-[#0b1625]/90
                      px-3 py-2
                      text-sm
                      font-medium
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-105
                      hover:border-emerald-400/30
                    "
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="dashboard-section fade-section mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl">
            Experience
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border border-slate-800
                bg-[#0b1220]
                p-6
                shadow-lg
                backdrop-blur-xl
                dark:border-slate-800
                dark:bg-[#0b1220]
              "
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold">{exp.role}</h3>

                    {exp.current && (
                      <span
                        className="
                          rounded-full
                          bg-green-500/10
                          px-2 py-1
                          text-[10px]
                          font-semibold
                          text-green-500
                        "
                      >
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-emerald-400">
                    {exp.company}
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  {exp.year}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="dashboard-section fade-section mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl">
            Featured Projects
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Some systems and applications I developed
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link || "#projects"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            aria-disabled={!project.link}
            onClick={(event) => { if (!project.link) event.preventDefault(); }}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border border-gray-200
              bg-[#0b1625]/90
              shadow-xl
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-3
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
              active:scale-[0.98]
              dark:border-emerald-400/15
              dark:bg-[#0b1625]/90
            "
          >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition duration-[1600ms] ease-out
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Arrow */}
              <div
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border border-white/20
                  bg-white/20
                  backdrop-blur-md
                  transition-all duration-300
                  group-hover:rotate-45
                  group-hover:bg-[#0b1625]
                "
              >
                <ArrowUpRight
                  size={18}
                  className="text-white group-hover:text-black"
                />
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <p className="mb-6 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="
                      flex items-center gap-2
                      rounded-full
                      border border-gray-200
                      bg-black/[0.03]
                      dark:bg-[#0b1625]/90
                      px-3 py-1.5
                      text-xs font-medium
                      backdrop-blur-md
                      transition-all duration-300
                      hover:scale-105
                      hover:border-emerald-400
                      hover:bg-emerald-500/10
                    "
                  >
                    <span className="text-base">{tech.icon}</span>

                    <span className="text-slate-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dashboard-section mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <h2 className="font-mono text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl">
            LET&apos;S TALK!
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Feel free to contact me for freelance projects,
            collaborations, internships, or full-time opportunities.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                label: "Email",
                value: "princepaquiado20@gmail.com",
              },
              {
                label: "Phone",
                value: "+63 992 418 3277",
              },
              {
                label: "Github",
                value: "github.com/princepaqs",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border border-emerald-400/15
                  bg-[#0b1625]/90
                  p-4
                  backdrop-blur-xl
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]/90
                "
              >
                <p className="text-xs text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-1 break-all text-sm font-semibold">
                  {item.label === "Email" ? <a href={`mailto:${item.value}`} className="hover:text-emerald-400">{item.value}</a> : item.label === "Phone" ? <a href={`tel:${item.value.replace(/\s/g, "")}`} className="hover:text-emerald-400">{item.value}</a> : <a href="https://github.com/devprnc" target="_blank" rel="noreferrer" className="hover:text-emerald-400">{item.value}</a>}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          className="
            rounded-3xl
            border border-slate-800
            bg-[#0b1220]
            p-6
            shadow-xl shadow-black/20
            backdrop-blur-xl
            dark:border-slate-800
            dark:bg-[#0b1220]
          "
        >
          <div
            className="
              mb-5
              flex h-14 w-14
              items-center justify-center
              rounded-full
              bg-emerald-500/10
              text-emerald-400
            "
          >
            <Mail size={28} />
          </div>

          <h3 className="text-xl font-bold">Send Message</h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Send me a message directly through the contact form.
          </p>

          <form
            onSubmit={sendEmail}
            className="mt-6 space-y-4"
          >
            <div>
              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="
                  w-full rounded-2xl
                  border border-emerald-400/20
                  bg-[#0b1625]/90
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-emerald-400
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]/90
                "
              />
            </div>

            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="
                  w-full rounded-2xl
                  border border-emerald-400/20
                  bg-[#0b1625]/90
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-emerald-400
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]/90
                "
              />
            </div>

            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="
                  w-full rounded-2xl
                  border border-emerald-400/20
                  bg-[#0b1625]/90
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-emerald-400
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]/90
                "
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="
                  w-full resize-none rounded-2xl
                  border border-emerald-400/20
                  bg-[#0b1625]/90
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-emerald-400
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]/90
                "
              />
            </div>
            
            {/* GOOGLE RECAPTCHA */}
            <div className="flex justify-center py-2">
              {recaptchaSiteKey ? (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaSiteKey}
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                  onErrored={() => setCaptchaToken(null)}
                />
              ) : (
                <p className="text-center text-xs text-amber-400">reCAPTCHA is not configured. Set VITE_RECAPTCHA_SITE_KEY in your environment.</p>
              )}
            </div>


            <button
              type="submit"
              disabled={sending || !captchaToken || !recaptchaSiteKey}
              className="
                cursor-pointer
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-emerald-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:-translate-y-1
                hover:bg-emerald-600
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {sending ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer
        className="
          py-6
          text-center
          text-xs
          text-gray-500
          border-b border-emerald-400/15 dark:border-emerald-400/15
          bg-white/5 dark:bg-[#050b14]/70
          backdrop-blur-xl
        "
      >
        Dev Prince · © 2026 Prince Louie T. Paquiado. All rights reserved.
      </footer>
      {/* EMAIL STATUS MODAL */}
{emailModal && (
  <div
    className="
      fixed inset-0 z-[9999]
      flex items-center justify-center
      bg-black/60
      px-4
      backdrop-blur-sm
    "
  >
    <div
      className="
        w-full max-w-md
        rounded-3xl
        border border-white/10
        bg-[#0b1625]
        p-6
        shadow-2xl
        dark:bg-[#0f172a]
      "
    >
      <div
        className={`
          mx-auto
          flex h-16 w-16
          items-center justify-center
          rounded-full
          ${
            emailStatus === "success"
              ? "bg-green-500/10 text-green-500"
              : "bg-red-500/10 text-red-500"
          }
        `}
      >
        {emailStatus === "success" ? (
          <Mail size={30} />
        ) : (
          <X size={30} />
        )}
      </div>

      <h3 className="mt-5 text-center text-xl font-bold">
        {emailStatus === "success"
          ? "Message Sent"
          : "Sending Failed"}
      </h3>

      <p
        className="
          mt-3
          text-center
          text-sm
          leading-7
          text-gray-600
          dark:text-gray-300
        "
      >
        {emailMessage}
      </p>

      <button
        onClick={() => setEmailModal(false)}
        className="
          mt-6
          w-full
          rounded-2xl
          bg-emerald-500
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-emerald-600
        "
      >
        Close
      </button>
    </div>
  </div>
)}

      </main>

      {/* CHATBOT */}
      <div className="fixed bottom-6 right-6 z-[999]">
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-emerald-500
              px-5
              py-4
              text-white
              shadow-2xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-emerald-400
            "
          >
            <span className="text-sm font-semibold">
              <MessageCircle/>
            </span>
          </button>
        )}

        {chatOpen && (
          <div
            className="
              flex
              h-[620px]
              w-[min(360px,calc(100vw-2rem))]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-emerald-400/20
              bg-[#0b1625]
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
              dark:border-emerald-400/15
              dark:bg-[#0f172a]
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-emerald-400/20
                bg-emerald-500
                px-5
                py-4
                text-white
                dark:border-emerald-400/15
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                  "
                >
                  <Bot size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Prince AI Assistant
                  </h3>

                  <p className="text-xs text-emerald-100">
                    Online
                  </p>
                </div>
              </div>

              <button
                aria-label="Close chat assistant"
                onClick={() => setChatOpen(false)}
                className="
                  rounded-full
                  p-2
                  transition
                  hover:bg-white/20
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* CHAT BODY */}
            <div
              className="
                flex-1
                space-y-4
                overflow-y-auto
                bg-slate-50
                p-4
                dark:bg-[#050b14]
              "
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[85%]
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      leading-7
                      shadow-md

                      ${
                        msg.sender === "user"
                          ? "bg-emerald-500 text-white"
                          : "bg-[#0b1625] text-gray-700 dark:bg-white/10 dark:text-gray-200"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* SUGGESTION DRAWER */}
            <div
              className="
                relative
                border-t
                border-emerald-400/15
                dark:border-emerald-400/15
                bg-[#0b1625]
                dark:bg-[#0f172a]
                pt-6
              "
            >
              {/* FLOATING TOGGLE BUTTON */}
              <button
                onClick={() =>
                  setShowSuggestions(!showSuggestions)
                }
                className="
                  absolute
                  -top-5
                  left-1/2
                  z-20
                  flex
                  h-10
                  w-10
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-[#0b1625]
                  text-gray-700
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-emerald-500
                  hover:text-white
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]
                  dark:text-white
                "
              >
                {showSuggestions ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronUp size={18} />
                )}
              </button>

              {/* DRAWER CONTENT */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300

                  ${
                    showSuggestions
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                  <div
                    className="
                    flex
                    flex-wrap
                    gap-2
                    px-3
                    pb-4
                    pt-2
                  "
                >
                  {suggestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(item)}
                      className="
                        rounded-full
                        bg-emerald-500/10
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-emerald-400
                        transition
                        hover:bg-emerald-500
                        hover:text-white
                      "
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* INPUT */}
            <div
              className="
                flex
                items-center
                gap-3
                border-t
                border-emerald-400/20
                p-4
                dark:border-emerald-400/15
              "
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && sendMessage()
                }
                placeholder="Ask something..."
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-emerald-400/20
                  bg-[#0b1625]
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-emerald-400
                  dark:border-emerald-400/15
                  dark:bg-[#0b1625]
                  dark:text-white
                "
              />

              <button
                type="button"
                aria-label="Send message"
                disabled={!input.trim()}
                onClick={() => sendMessage()}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500
                  text-white
                  transition
                  hover:bg-emerald-400
                "
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
    
  );
}