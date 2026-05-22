import { useState, useEffect, useRef } from "react";

import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
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


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);


  const [chatOpen, setChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Prince AI Assistant 👋 Ask me about skills, experience, projects, contact info, tech stack, resume, or anything about Prince Louie.",
    },
  ]);

  const [input, setInput] = useState("");
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
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const normalizeText = (text = '') => {
    return text.toLowerCase().trim();
  };

  const getAIResponse = (message = '') => {
    const msg = normalizeText(message);

    // greetings
    if (
      msg.includes("hi") ||
      msg.includes("hello") ||
      msg.includes("hey")
    ) {
      return "Hello 👋 I'm Prince AI Assistant. Ask me about Prince's skills, projects, experience, tech stack, or contact details.";
    }

    // experience
    if (
      msg.includes("experience") ||
      msg.includes("exp") ||
      msg.includes("work")
    ) {
      return `Prince has 2+ years of experience as a Full-Stack Web Developer. He currently works at Xytron International developing enterprise systems using Laravel, ReactJS, MySQL, and modern web technologies.`;
    }

    // skills
    if (
      msg.includes("skill") ||
      msg.includes("tech") ||
      msg.includes("stack")
    ) {
      return `Prince specializes in Laravel, ReactJS, NodeJS, CodeIgniter, TailwindCSS, Bootstrap, MySQL, MongoDB, Firebase, and ExpressJS.`;
    }

    // frontend
    if (
      msg.includes("frontend") ||
      msg.includes("front end") ||
      msg.includes("ui")
    ) {
      return `Frontend technologies: ReactJS, HTML, CSS, JavaScript, TailwindCSS, and Bootstrap.`;
    }

    // backend
    if (
      msg.includes("backend") ||
      msg.includes("server")
    ) {
      return `Backend technologies: Laravel, PHP, NodeJS, ExpressJS, and CodeIgniter.`;
    }

    // node
    if (
      msg.includes("node") ||
      msg.includes("express")
    ) {
      return `Prince also develops backend APIs using NodeJS and ExpressJS.`;
    }

    // react
    if (
      msg.includes("react")
    ) {
      return `Prince uses ReactJS and React Native for building modern web and mobile applications.`;
    }

    // laravel
    if (
      msg.includes("laravel")
    ) {
      return `Laravel is one of Prince's primary backend frameworks for enterprise systems and APIs.`;
    }

    // projects
    if (
      msg.includes("project") ||
      msg.includes("system")
    ) {
      return `Featured projects include UPA Rental App, MotoShop POS, HRIS, Student Management System, Evacuation Center System, and Barangay Management System.`;
    }

    // resume
    if (
      msg.includes("resume") ||
      msg.includes("cv")
    ) {
      return `You can download Prince's resume using the Download CV button in the Hero section.`;
    }

    // contact
    if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("phone")
    ) {
      return `You can contact Prince through email at princepaquiado20@gmail.com or phone number +63 992 418 3277.`;
    }

    // github
    if (
      msg.includes("github")
    ) {
      return `Github: https://github.com/princepaqs`;
    }

    // default
    return `I'm still learning 🤖 Try asking about:
- skills
- experience
- projects
- Laravel
- React
- backend
- frontend
- contact`;
  };

  const sendMessage = (customText = null) => {
    const finalMessage = customText || input;

    if (!finalMessage.trim()) return;

    const userMessage = {
      sender: "user",
      text: finalMessage,
    };

    const botMessage = {
      sender: "bot",
      text: getAIResponse(finalMessage),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

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
        icon: <SiMysql className="text-blue-500" />,
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
        icon: <SiMysql className="text-blue-500" />,
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
        icon: <SiMysql className="text-blue-500" />,
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
        icon: <SiMysql className="text-blue-500" />,
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
        icon: <FaCss3Alt className="text-blue-500" />,
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
        icon: <SiC className="text-blue-400" />,
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
        icon: <SiMysql className="text-blue-500" />,
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

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        text-slate-900
        transition-all
        duration-500

        bg-[#f8fafc]
        dark:bg-[#020617]
        dark:text-white

        bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:60px_60px]

        dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        dark:bg-[size:60px_60px]
      "
    >
      {/* Navbar */}
      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          border-b
          border-black/5
          bg-white/70
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-[#020617]/70
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
            px-4
            py-4
            md:px-6
          "
        >
          {/* LOGO */}
          <a
            href="#"
            className="
              text-base
              font-bold
              tracking-[0.2em]
              md:text-lg
            "
          >
            PL
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 md:flex">
            {[
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-sm
                  text-gray-600
                  transition
                  hover:text-blue-500
                  dark:text-gray-300
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* DARK MODE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                rounded-full
                border
                border-black/10
                p-2
                transition
                hover:rotate-180
                dark:border-white/10
              "
            >
              {darkMode ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                flex
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                p-2
                md:hidden
                dark:border-white/10
              "
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden

            ${
              mobileMenu
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              flex
              flex-col
              gap-1
              border-t
              border-black/5
              bg-white/90
              px-4
              py-4
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-[#020617]/90
            "
          >
            {[
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-black/5
                  hover:text-blue-500
                  dark:text-gray-200
                  dark:hover:bg-white/5
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6">
          <div
            className="
              relative
              mx-auto
              h-36
              w-36
              overflow-hidden
              rounded-full
              border border-black/10
              bg-white
              p-1
              shadow-xl
              dark:border-white/10
              dark:bg-[#111827]
            "
          >
            <img
              src="/img/prince_profile.jpg"
              alt="Prince Louie"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="animate-title text-4xl font-extrabold md:text-6xl">
          PRINCE LOUIE T. PAQUIADO
        </h1>

        <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
          <span className="typing-animation font-medium">
            Full-Stack Web Developer
          </span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="
              flex items-center gap-2
              rounded-xl
              bg-blue-500
              px-5 py-2.5
              text-sm font-medium
              text-white
              transition
              hover:bg-blue-600
            "
          >
            View Projects
            <ArrowRight size={16} />
          </a>

          <a
            href="/files/princelouiepaquiado_resume.pdf"
            download="princelouiepaquiado_resume.pdf"
            className="
              flex items-center gap-2
              rounded-xl
              border border-gray-300
              px-5 py-2.5
              text-sm font-medium
              transition
              hover:bg-gray-100
              dark:border-gray-700
              dark:hover:bg-gray-800
            "
          >
            Download CV
            <Download size={16} />
          </a>
                  </div>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/princepaqs"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-full
              border border-gray-300
              p-2.5
              transition-all
              hover:-translate-y-1
              hover:border-blue-500
              hover:text-blue-500
              dark:border-gray-700
            "
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-full
              border border-gray-300
              p-2.5
              transition-all
              hover:-translate-y-1
              hover:border-blue-500
              hover:text-blue-500
              dark:border-gray-700
            "
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:princepaquiado20@gmail.com"
            className="
              rounded-full
              border border-gray-300
              p-2.5
              transition-all
              hover:-translate-y-1
              hover:border-blue-500
              hover:text-blue-500
              dark:border-gray-700
            "
          >
            <Mail size={18} />
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="fade-section mx-auto max-w-5xl px-6 py-20"
      >
        <div className="mb-10">
          <h2 className="animate-heading text-3xl font-bold md:text-4xl">
            About Me
          </h2>
        </div>

        <div
          className="
            rounded-3xl
            border border-black/5
            bg-white/70
            p-7
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-white/5
          "
        >
          <p className="text-sm leading-8 text-gray-600 dark:text-gray-300">
            I am{" "}
            <span className="font-semibold text-blue-500">
              Prince Louie T. Paquiado
            </span>
            , a Full-Stack Web Developer with more than 3 years of experience developing
            scalable and responsive web applications. I specialize in building
            backend systems using Laravel and CodeIgniter while creating modern,
            user-friendly interfaces with ReactJS, TailwindCSS, Bootstrap, HTML,
            CSS, and JavaScript.
          </p>

          <p className="mt-5 text-sm leading-8 text-gray-600 dark:text-gray-300">
            Currently, I work at{" "}
            <span className="font-semibold text-blue-500">
              Xytron International
            </span>{" "}
            as a Full-Stack Web Developer in the MIS Department, where I develop
            enterprise systems and internal web applications including the{" "}
            <span className="font-semibold">
              eSOA Blasting System
            </span>
            , Ticketing Management System (TMS) using Laravel and modern web technologies.
          </p>

          <p className="mt-5 text-sm leading-8 text-gray-600 dark:text-gray-300">
            I graduated with a Bachelor of Science in Computer Science (BSCS)
            from the University of Caloocan City and received the{" "}
            <span className="font-semibold text-blue-500">
              Best in Thesis Award
            </span>{" "}
            in 2025 for developing the UPA (Urban Property Rental Application),
            a mobile and web-based platform connecting tenants and property
            owners.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "2 Years Experience",
              "Laravel Developer",
              "ReactJS Developer",
              "Best in Thesis 2025",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-full
                  border border-blue-500/20
                  bg-blue-500/10
                  px-4 py-2
                  text-xs
                  font-medium
                  text-blue-500
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="fade-section mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="animate-heading text-3xl font-bold md:text-4xl">
            Skills & Tech Stack
          </h2>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Technologies and tools I use for development
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-black/5
                bg-white/70
                p-5
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                dark:border-white/10
                dark:bg-white/5
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
                      dark:bg-white/5
                      px-3 py-2
                      text-sm
                      font-medium
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-105
                      hover:border-blue-500/30
                    "
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="text-gray-700 dark:text-gray-200">
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
      <section id="experience" className="fade-section mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="animate-heading text-3xl font-bold md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border border-black/5
                bg-white/70
                p-6
                shadow-lg
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/5
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

                  <p className="mt-1 text-sm text-blue-500">
                    {exp.company}
                  </p>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {exp.year}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="fade-section mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="animate-heading text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Some systems and applications I developed
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border border-gray-200
              bg-white/70
              shadow-xl
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-3
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
              active:scale-[0.98]
              dark:border-white/10
              dark:bg-white/5
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
                  group-hover:bg-white
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
              <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300">
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
                      dark:bg-white/5
                      px-3 py-1.5
                      text-xs font-medium
                      backdrop-blur-md
                      transition-all duration-300
                      hover:scale-105
                      hover:border-blue-400
                      hover:bg-blue-500/10
                    "
                  >
                    <span className="text-base">{tech.icon}</span>

                    <span className="text-gray-700 dark:text-gray-200">
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
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="animate-heading text-3xl font-bold md:text-4xl">
              LET'S TALK!
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
              Feel free to contact me for freelance projects, collaborations,
              internships, or full-time opportunities.
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
                    border border-black/5
                    bg-white/70
                    p-4
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              flex min-h-[340px]
              flex-col
              items-center
              justify-center
              rounded-3xl
              border border-black/5
              bg-white/70
              p-6
              text-center
              shadow-lg
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/5
            "
          >
            <div
              className="
                mb-5
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-blue-500/10
                text-blue-500
              "
            >
              <Mail size={28} />
            </div>

            <h3 className="text-xl font-bold">Contact Form</h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-300">
              The contact form is still in development. Feel free to reach out
              through email or social platforms.
            </p>

            <div
              className="
                mt-6
                rounded-full
                border border-blue-500/20
                bg-blue-500/10
                px-4 py-2
                text-xs
                font-medium
                text-blue-500
              "
            >
              Coming Soon
            </div>
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
          border-b border-black/5 dark:border-white/10
          bg-white/70 dark:bg-[#020617]/70
          backdrop-blur-xl
        "
      >
        © 2026 Prince Louie T. Paquiado. All rights reserved.
      </footer>

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
              bg-blue-500
              px-5
              py-4
              text-white
              shadow-2xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-600
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
              w-[360px]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-black/10
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
              dark:border-white/10
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
                border-black/10
                bg-blue-500
                px-5
                py-4
                text-white
                dark:border-white/10
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

                  <p className="text-xs text-blue-100">
                    Online
                  </p>
                </div>
              </div>

              <button
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
                dark:bg-[#020617]
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
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700 dark:bg-white/10 dark:text-gray-200"
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
                border-black/5
                dark:border-white/10
                bg-white
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
                  border-black/10
                  bg-white
                  text-gray-700
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-blue-500
                  hover:text-white
                  dark:border-white/10
                  dark:bg-[#1e293b]
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
                        bg-blue-500/10
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-blue-500
                        transition
                        hover:bg-blue-500
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
                border-black/10
                p-4
                dark:border-white/10
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
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-blue-500
                  dark:border-white/10
                  dark:bg-[#1e293b]
                  dark:text-white
                "
              />

              <button
                onClick={() => sendMessage()}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500
                  text-white
                  transition
                  hover:bg-blue-600
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