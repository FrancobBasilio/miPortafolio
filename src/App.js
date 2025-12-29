import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Cloud,
  Wrench,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Award,
  Briefcase,
  Terminal,
  Cpu,
  Server,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    lenguajes: ["Java", "Kotlin", "C#", "JavaScript", "TypeScript", "SQL"],
    backend: [
      "ASP.NET Core",
      "Spring",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
    ],
    frontend: ["React", "Angular"],
    databases: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
    metodologias: ["Scrum", "Kanban", "RUP/AUP", "OWASP", "ITIL 4"],
    devops: ["Docker", "Kubernetes", "AWS", "Azure"],
    otros: [
      "Hibernate",
      "UX/UI",
      "IaaS",
      "PaaS",
      "SaaS",
      "JUnit",
      "Mockito",
      "OAuth",
    ],
  };

  const projects = [
    {
      title: "Sistema de Reservas Hoteleras",
      period: "Octubre - Diciembre 2025",
      description:
        "Sistema web Full Stack para la digitalización y automatización del proceso de gestión hotelera.",
      technologies: ["Spring Boot", "Angular", "JPA", "MySQL"],
      features: [
        "Reservas en línea para clientes",
        "Gestión administrativa de hoteles y habitaciones",
        "Control de disponibilidad en tiempo real",
        "Generación de reportes PDF dinámicos",
        "Arquitectura MVC con validaciones frontend y backend",
      ],
      icon: <Briefcase size={24} />,
      color: "from-blue-500 to-cyan-500",
      link: "https://nice-grass-07855bf0f.1.azurestaticapps.net/",
    },
    {
      title: "Balance+ - App Android",
      period: "Agosto - Octubre 2025",
      description:
        "Aplicación móvil Android para control de finanzas personales aplicando la regla 50/30/20.",
      technologies: ["Kotlin", "MVVM", "Room", "SQLite"],
      features: [
        "Registro y gestión de transacciones",
        "Categorización de gastos e ingresos",
        "Cálculo automático de balances",
        "Reportes diario, semanal y mensual",
        "Funcionamiento offline con persistencia local",
      ],
      icon: <Terminal size={24} />,
      color: "from-purple-500 to-pink-500",
      link: "",
    },
    {
      title: "MiVet Online",
      period: "Junio - Agosto 2025",
      description:
        "Sistema web de gestión veterinaria para digitalización de procesos clínicos y administrativos.",
      technologies: ["ASP.NET Core", "Razor", "SQL Server"],
      features: [
        "Gestión de usuarios, clientes y mascotas",
        "Programación y seguimiento de citas",
        "Historiales médicos completos",
        "Facturación de servicios",
        "Interfaces responsive e intuitivas",
      ],
      icon: <Server size={24} />,
      color: "from-green-500 to-emerald-500",
      link: "https://mivet-webapp-g9hwcmdghwf0bqde.canadacentral-01.azurewebsites.net/",
    },
  ];

  const expertise = [
    {
      icon: <Code size={32} />,
      title: "Full Stack Development",
      desc: "Desarrollo completo frontend y backend con las últimas tecnologías",
    },
    {
      icon: <Database size={32} />,
      title: "Database Design",
      desc: "Diseño y optimización de bases de datos relacionales y NoSQL",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      desc: "Despliegue y gestión en Azure, AWS con Docker y Kubernetes",
    },
    {
      icon: <Cpu size={32} />,
      title: "Mobile Development",
      desc: "Desarrollo nativo Android con Kotlin y arquitectura MVVM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Franco Basilio</span>
            <div className="flex gap-8">
              {[
                "inicio",
                "sobre-mi",
                "expertise",
                "skills",
                "proyectos",
                "contacto",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors relative ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {section.replace("-", " ")}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left column */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Franco
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Basilio
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Desarrollador de Software Full Stack
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Especializado en el desarrollo y mantenimiento de sistemas
              informáticos, con una fuerte orientación al trabajo en equipo.
              Apasionado por el mundo tecnológico y por la creación de
              soluciones innovadoras que aporten valor.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=francolitobo@gmail.com&su=Hola"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all hover:scale-105 font-semibold"
              >
                <Mail size={20} />
                Contáctame
              </a>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all hover:scale-105 font-semibold"
              >
                Ver Proyectos
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/martin-franco-basilio-orme%C3%B1o-561124260/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-lg transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/FrancobBasilio?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-lg transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6 blur-xl opacity-50"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/mifoto.jpeg"
                  alt="Franco Basilio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-blue-400">Mí</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Desarrollador apasionado por crear soluciones tecnológicas que
              impactan positivamente
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-blue-400" size={20} />
                  </div>
                  Mi Historia
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Estudiante de Computación e Informática en Cibertec con una
                  sólida formación en el ciclo de vida del desarrollo de
                  software. Mi enfoque está en crear aplicaciones escalables,
                  seguras y eficientes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  He trabajado en diversos proyectos académicos que simulan
                  entornos reales de trabajo, aplicando metodologías ágiles y
                  las mejores prácticas de la industria.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Award className="text-purple-400" size={20} />
                  </div>
                  Certificaciones
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Introduction to Cloud Computing
                      </p>
                      <p className="text-sm text-gray-400">
                        IBM - Coursera (Septiembre 2025)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Información Personal
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Ubicación</p>
                      <p className="font-semibold">Lima, Perú</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold text-sm">
                        francolitobo@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Teléfono</p>
                      <p className="font-semibold">+51 947 234 555</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
                <h3 className="text-xl font-bold mb-4">Idiomas</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Español</span>
                      <span className="text-blue-400">Nativo</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Inglés</span>
                      <span className="text-blue-400">Intermedio</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Portugués</span>
                      <span className="text-blue-400">Básico</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Áreas de <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Especialidades técnicas en las que me destaco
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stack <span className="text-blue-400">Tecnológico</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tecnologías y herramientas que domino
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    {category === "lenguajes" && (
                      <Code className="text-blue-400" size={18} />
                    )}
                    {category === "databases" && (
                      <Database className="text-blue-400" size={18} />
                    )}
                    {category === "devops" && (
                      <Cloud className="text-blue-400" size={18} />
                    )}
                    {!["lenguajes", "databases", "devops"].includes(
                      category
                    ) && <Wrench className="text-blue-400" size={18} />}
                  </div>
                  {category === "lenguajes"
                    ? "Lenguajes"
                    : category === "backend"
                    ? "Backend"
                    : category === "frontend"
                    ? "Frontend"
                    : category === "databases"
                    ? "Bases de Datos"
                    : category === "metodologias"
                    ? "Metodologías"
                    : category === "devops"
                    ? "DevOps & Cloud"
                    : "Otros"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proyectos <span className="text-blue-400">Destacados</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Experiencia práctica en desarrollo de software
            </p>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="text-sm text-blue-400 font-semibold">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">
                          STACK TECNOLÓGICO
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`bg-gradient-to-r ${project.color} bg-opacity-20 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-500/30`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold hover:scale-105"
                          >
                            <ExternalLink size={30} />
                            Ver Proyecto en Vivo
                          </a>
                        ) : (
                          <div className="w-full bg-slate-900/50 text-gray-500 px-4 py-3 rounded-lg border border-slate-700 text-center">
                            Link del proyecto próximamente
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        CARACTERÍSTICAS
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-300"
                          >
                            <span className="text-blue-400 font-bold mt-0.5">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Trabajamos <span className="text-blue-400">Juntos?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Buscando siempre mejorar tanto personal como profesionalmente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:francolitobo@gmail.com"
              className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:scale-105 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">francolitobo@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+51947234555"
              className="bg-slate-800/50 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all hover:scale-105 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Teléfono</p>
                <p className="font-semibold">+51 947 234 555</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/martin-franco-basilio-orme%C3%B1o-561124260/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-xl transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/FrancobBasilio?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-xl transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Franco Basilio. Hecho con React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
