// Importamos los íconos que vamos a usar
import { SiReact, SiTypescript, SiPython, SiMysql, SiGithub } from "react-icons/si"; // Logos oficiales
import { FaDatabase, FaServer, FaLaptopCode } from "react-icons/fa"; // Íconos genéricos de FontAwesome

export const profile = {
  name: "Gastón Dávila",
  role: "Desarrollador Full Stack | Técnico en Programación (En curso)",
  bio: "Estudiante avanzado de programación en Mendoza. Me apasiona crear soluciones que resuelvan problemas reales. Tengo experiencia desarrollando aplicaciones completas (Frontend y Backend), automatizando procesos y trabajando con control de versiones.",
  email: "tu-email@ejemplo.com",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  github: "https://github.com/tu-usuario",
};

// Ahora 'skills' es una lista de objetos con nombre e ícono
export const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" }, // Agregué color opcional para un toque extra
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git / GitHub", icon: SiGithub, color: "#181717" },
  { name: "ETL / Datos", icon: FaDatabase, color: "#4DB33D" }, // Usé FaDatabase para ETL
  { name: "Frontend Dev", icon: FaLaptopCode, color: "#e34c26" },
  { name: "Backend Dev", icon: FaServer, color: "#000000" },
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Asignación Docente (PPS)",
    description: "Aplicación Full-Stack desarrollada para la Dirección General de Escuelas (San Martín). Automatiza el proceso de asignar profesores a escuelas basándose en datos geográficos y disponibilidad.",
    challenges: "Integración de Backend (Python) con Frontend moderno, manejo de base de datos SQLite y optimización de tiempos de carga.",
    stack: ["React", "TypeScript", "Python", "SQLite"], // Aquí lo dejamos simple por ahora
    linkRepo: "https://github.com/tu-usuario/repo-pps",
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Este sitio web. Diseñado para mostrar mis habilidades y proyectos de forma profesional.",
    challenges: "Diseño responsivo, implementación de modo oscuro y despliegue continuo.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    linkRepo: "https://github.com/tu-usuario/mi-portfolio",
  }
];