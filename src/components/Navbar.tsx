import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDownload } from "react-icons/fa";

export const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Activamos el efecto un poco más abajo
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste para el scroll suave y compensar la altura del navbar
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    // CAMBIO: 'fixed top-6' para que flote un poco separado del borde superior
    // Centramos todo con 'left-0 right-0 mx-auto'
    <nav className={`fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-300 w-fit max-w-[95%] sm:max-w-3xl`}>
      
      {/* CÁPSULA FLOTANTE */}
      <div className={`
        flex items-center justify-between px-6 py-3 rounded-full 
        transition-all duration-300 border
        ${isScrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-gray-200 dark:border-slate-700" 
          : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm border-transparent"
        }
      `}>

        {/* --- ENLACES DE NAVEGACIÓN (Centrados) --- */}
        <div className="flex items-center gap-1 sm:gap-6 mr-4 sm:mr-8">
          {['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'].map((item) => (
            <button 
              key={item}
              // Convertimos 'Sobre mí' a 'sobre-mi' para que coincida con el ID
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))} 
              className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        {/* --- ACCIONES (CV y Tema) --- */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
          
          {/* Botón CV (Icono solo en móvil, Texto en PC) */}
          <a 
            href="/cv.pdf" 
            download="CV_Gaston_Davila.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            title="Descargar CV"
          >
            <FaDownload size={16} />
            <span className="hidden sm:inline text-sm font-medium">CV</span>
          </a>

          {/* Botón Tema */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-600 dark:text-yellow-400"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>
        </div>

      </div>
    </nav>
  );
};