import { FaReact, FaPython, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiMysql, SiAuth0 } from "react-icons/si";

// --- PERFIL PERSONAL ---
export const profile = {
  name: "Gastón Dávila",
  role: "Desarrollador Full Stack",
  bio: "Estudiante avanzado de programación en Mendoza. Me apasiona crear soluciones que resuelvan problemas reales. Tengo experiencia desarrollando aplicaciones completas (Frontend y Backend), automatizando procesos y trabajando con control de versiones.",
  email: "gastonn520@gmail.com",
  linkedin: "https://www.linkedin.com/in/gaston-davila-desarrollador-web/",
  github: "https://github.com/GastonDavila23",
};

// --- SKILLS ---
export const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Java", icon: FaJava, color: "#007396" }, 
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git / GitHub", icon: FaGitAlt, color: "#F05032" },
  { name: "Auth0", icon: SiAuth0, color: "#EB5424" },
];

// --- PROYECTOS ---
export const projects = [
  {
    id: 1,
    title: "El Buen Sabor (E-commerce & Dashboard)",
    description: "Plataforma integral para un local de comidas con roles (Admin, Cajero, Cocinero, Delivery). Incluye tienda online para clientes, gestión de pedidos en tiempo real con WebSockets, control de stock basado en recetas, integración con Mercado Pago y reportes financieros.",
    challenges: "Orquestar la lógica de negocio compleja entre los distintos roles, manejar la consistencia del stock de insumos vs productos manufacturados y asegurar la comunicación en tiempo real entre la cocina y la caja.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Auth0", "Mercado Pago", "WebSockets"],
    linkRepo: "https://github.com/exeromer/ElBuenSabor",
  },
  {
    id: 2,
    title: "Sistema de Asignación Docente (PPS)",
    description: "Aplicación Full-Stack desarrollada para la Dirección General de Escuelas (San Martín). Automatiza el proceso de asignar profesores a escuelas basándose en datos geográficos y disponibilidad.",
    challenges: "Integración de Backend (Python) con Frontend moderno, manejo de base de datos SQLite y optimización de tiempos de carga.",
    stack: ["React", "TypeScript", "Python", "SQLite"],
    linkRepo: "https://github.com/GastonDavila23/PPS",
  },
  {
    id: 3,
    title: "Portafolio Personal",
    description: "Este sitio web. Diseñado para mostrar mis habilidades y proyectos de forma profesional, con un diseño moderno y accesible.",
    challenges: "Diseño responsivo, implementación de modo oscuro, animaciones con Framer Motion y formulario de contacto serverless.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS"],
    linkRepo: "https://github.com/GastonDavila23/my-portfolio",
  },
];