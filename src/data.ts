import { SiReact, SiTypescript, SiPython, SiMysql, SiGithub } from "react-icons/si";
import { FaDatabase, FaServer, FaLaptopCode } from "react-icons/fa";

export const profile = {
  name: "Gastón Dávila",
  role: "Desarrollador Full Stack | Técnico en Programación (En curso)",
  bio: "Estudiante avanzado de programación en Mendoza. Me apasiona crear soluciones que resuelvan problemas reales. Tengo experiencia desarrollando aplicaciones completas (Frontend y Backend), automatizando procesos y trabajando con control de versiones.",
  email: "gastonn520@gmail.com",
  linkedin: "https://www.linkedin.com/in/gast%C3%B3n-d%C3%A1vila-7a3028398/",
  github: "https://github.com/GastonDavila23",
  whatsapp: "https://wa.me/5492616948318",
};

export const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git / GitHub", icon: SiGithub, color: "#181717" },
  { name: "ETL / Datos", icon: FaDatabase, color: "#4DB33D" },
  { name: "Frontend Dev", icon: FaLaptopCode, color: "#e34c26" },
  { name: "Backend Dev", icon: FaServer, color: "#000000" },
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Asignación Docente (PPS)",
    description: "Aplicación Full-Stack desarrollada para la Dirección General de Escuelas (DGE). Automatiza el proceso de asignar profesores a escuelas basándose en datos geográficos y disponibilidad.",
    challenges: "Integración de Backend (Python) con Frontend moderno, manejo de base de datos SQLite y optimización de tiempos de carga.",
    stack: ["React", "TypeScript", "Python", "SQLite"],
    linkRepo: "https://github.com/GastonDavila23/PPS",
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Sitio web diseñado para mostrar mis habilidades y proyectos de forma profesional.",
    challenges: "Diseño responsivo, implementación de modo oscuro y despliegue continuo.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    linkRepo: "https://github.com/GastonDavila23/my-portfolio",
  }
];