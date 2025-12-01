export interface ProjectType {
  id: number;
  title: string;
  description: string;
  challenges: string;
  stack: string[];
  linkRepo: string;
}

interface Props {
  project: ProjectType;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl group select-none">
      
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="flex-grow text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>
        
        <div className="mt-auto bg-blue-50 dark:bg-slate-700/50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>💡 Desafío:</strong> {project.challenges}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-xs font-semibold rounded border bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 border-gray-200 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 md:px-8 py-4 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-700">
        <a 
          href={project.linkRepo} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
        >
          🔗 Ver Código en GitHub
        </a>
      </div>
    </div>
  );
};