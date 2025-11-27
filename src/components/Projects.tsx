import { projects } from '../data';
import { SectionTitle } from './SectionTitle';

export const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionTitle title="Proyectos Destacados" />
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
          >
            <div className="p-6 md:p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              
              <div className="bg-blue-50 dark:bg-slate-700/50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>💡 Desafío:</strong> {project.challenges}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded border border-gray-200 dark:border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-900/50 px-6 md:px-8 py-4 border-t border-gray-100 dark:border-slate-700">
              <a 
                href={project.linkRepo} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2 transition-colors text-sm sm:text-base"
              >
                🔗 Ver Código en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};