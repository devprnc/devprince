import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ArrowRight,
  ArrowUpRight,
  Download,
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

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
  {
    title: "UPA - Property Rental App",
    description:
      "Award-winning thesis project connecting tenants and property owners through a mobile and web rental platform.",
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
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400" />,
      },
    ],
    image: "/img/service1.jpg",
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
          fixed top-0 left-0 right-0 z-50
          border-b border-black/5 dark:border-white/10
          bg-white/70 dark:bg-[#020617]/70
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-[0.2em]">
            PL
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
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
              )
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              rounded-full
              border border-black/10 dark:border-white/10
              p-2
              transition
              hover:rotate-180
            "
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
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
      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
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
      <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
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
      <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
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
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
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
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border border-gray-200
                bg-white/70
                shadow-xl
                backdrop-blur-xl
                transition-all duration-700
                hover:-translate-y-4
                hover:scale-[1.03]
                hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]
                dark:border-white/10
                dark:bg-white/5
              "
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-[1600ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute right-4 top-4 rounded-full bg-white/20 p-2 backdrop-blur-md">
                  <ArrowUpRight size={18} className="text-white" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-sm font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-6 text-xs leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center gap-2
                        rounded-full
                        border border-white/10
                        bg-black/5
                        dark:bg-white/5
                        px-3 py-1.5
                        text-xs
                        font-medium
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-105
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
            </div>
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
    </div>
  );
}