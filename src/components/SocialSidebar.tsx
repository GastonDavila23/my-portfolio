import { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { profile } from "../data";

export const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: profile.linkedin,
      color: "hover:bg-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: profile.github,
      color: "hover:bg-black",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: `mailto:${profile.email}`,
      color: "hover:bg-red-500",
    },
    // Agregamos WhatsApp. Asegúrate de poner tu número real en el formato internacional (ej: 549...)
    { 
      name: "WhatsApp", 
      icon: FaWhatsapp, 
      url: "https://wa.me/549XXXXXXXXXX", // <--- REEMPLAZA CON TU NÚMERO
      color: "hover:bg-green-500" 
    },
  ];

  return (
    // 'hidden md:flex' para ocultar en móvil y mostrar en pantallas medianas+
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center">
      
      {/* BOTÓN TOGGLE (Pestañita) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 
          p-2 rounded-l-lg shadow-lg border-y border-l border-gray-200 dark:border-slate-700
          hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300
          ${isOpen ? "mr-0" : ""}
        `}
        aria-label="Mostrar redes sociales"
      >
        {isOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </button>

      {/* CONTENEDOR DE ICONOS (Se oculta/muestra) */}
      <div
        className={`
          flex flex-col bg-white dark:bg-slate-800 shadow-xl rounded-l-xl overflow-hidden
          transition-all duration-500 ease-in-out border-y border-l border-gray-200 dark:border-slate-700
          ${isOpen ? "w-16 opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-10"}
        `}
      >
        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`
                p-4 text-gray-600 dark:text-gray-400 
                transition-all duration-300 flex justify-center items-center
                ${item.color} hover:text-white
              `}
              title={item.name}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};