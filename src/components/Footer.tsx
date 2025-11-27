import { profile } from '../data';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid: 1 columna en móvil, 3 columnas en PC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          
          {/* --- GRUPO ICONOS IZQUIERDA (LinkedIn y GitHub) --- */}
          <div className="flex justify-center md:justify-start gap-6 order-2 md:order-1">
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 hover:text-[#0077b5] transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* --- TEXTO CENTRAL --- */}
          <div className="order-1 md:order-2">
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              © {currentYear} <span className="font-bold text-blue-600 dark:text-blue-400">{profile.name}</span>
            </p>
          </div>

          {/* --- GRUPO ICONOS DERECHA (Email y WhatsApp) --- */}
          <div className="flex justify-center md:justify-end gap-6 order-3">
            <a 
              href={`mailto:${profile.email}`} 
              className="text-gray-500 hover:text-red-500 transition-colors text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://wa.me/549XXXXXXXXXX" // Reemplaza con tu número real
              target="_blank" 
              rel="noreferrer"
              className="text-gray-500 hover:text-green-500 transition-colors text-2xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};