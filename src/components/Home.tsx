import { profile, skills } from '../data';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button'; // <--- Importamos

export const Home = () => {
  return (
    // AJUSTE MÓVIL: 'pt-24' en móvil para separar del navbar flotante, 'md:pt-32' en escritorio
    <div id="sobre-mi" className="max-w-4xl mx-auto px-4 pt-24 md:pt-32 pb-16"> 
      
      <SectionTitle title="Sobre Mí" />

      {/* AJUSTE MÓVIL: Texto un poco más chico en móvil (text-lg) y más grande en escritorio (md:text-xl) */}
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        {profile.bio}
      </p>
      
      {/* BOTONES: flex-col en pantallas MUY pequeñas para que no se aplasten, flex-row en sm+ */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-16">
        <Button href="#proyectos" variant="primary" className="w-full sm:w-auto">
          Ver Proyectos
        </Button>
        
        <Button href="#contacto" variant="outline" className="w-full sm:w-auto">
          Contactar
        </Button>
      </div>

      <Reveal>
        <div className="bg-gray-50 dark:bg-slate-800 dark:border-slate-700 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 transition-colors duration-300">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Mi Stack Tecnológico</h3>
          
          {/* AJUSTE MÓVIL: gap-3 en móvil, gap-4 en escritorio */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  // AJUSTE MÓVIL: Tarjetas más compactas en móvil (p-3, min-w-[90px])
                  className="flex flex-col items-center gap-2 p-3 md:p-4 bg-white dark:bg-slate-700 rounded-xl border border-gray-100 dark:border-slate-600 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default min-w-[90px] md:min-w-[100px]"
                >
                  {/* Icono un poco más chico en móvil si fuera necesario, pero 32px suele estar bien */}
                  <IconComponent size={32} style={{ color: skill.color }} />
                  <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

    </div>
  );
};