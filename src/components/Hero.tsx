import { motion } from "framer-motion";
import { profile } from "../data";
import { FaChevronDown } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:mix-blend-screen dark:opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:mix-blend-screen dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:mix-blend-screen dark:opacity-20 animate-blob animation-delay-4000 transform -translate-x-1/2"></div>

      {/* 1. La Foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // AJUSTE MÓVIL: w-40 h-40 en móvil (un poco más chico) -> sm:w-64 (grande en tablet/PC)
        className="relative z-10 w-40 h-40 sm:w-64 sm:h-64 mb-8"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full overflow-hidden border-4 border-white/50 dark:border-blue-500/30 shadow-2xl h-full w-full"
        >
          <img 
            src="/perfil.jpg" 
            alt="Foto de perfil" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://ui-avatars.com/api/?name=Gaston+P&background=0D8ABC&color=fff&size=256";
            }}
          />
        </motion.div>
      </motion.div>

      {/* 2. El Nombre y Rol */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 px-4"
      >
        {/* AJUSTE MÓVIL: text-4xl en móvil (más controlado) -> sm:text-7xl en PC */}
        <h1 className="text-4xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 block sm:inline mt-2 sm:mt-0">{profile.name}</span>
        </h1>
        {/* AJUSTE MÓVIL: text-lg o xl en móvil */}
        <h2 className="text-lg sm:text-3xl text-gray-600 dark:text-gray-300 font-medium">
          {profile.role}
        </h2>
      </motion.div>

      {/* 3. El Indicador de Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 z-10"
      >
        <a href="#sobre-mi" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition">
          <FaChevronDown size={32} className="sm:w-10 sm:h-10" />
        </a>
      </motion.div>

    </section>
  );
};