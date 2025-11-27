interface Props {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className = "" }: Props) => {
  return (
    <div className={`text-center mb-16 group cursor-default ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full transition-all duration-300 group-hover:w-48 group-hover:bg-blue-500"></div>
    </div>
  );
};