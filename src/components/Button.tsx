import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'linkedin' | 'github';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
  variant = 'primary',
  type = 'button',
  disabled = false,
  icon,
  isLoading = false,
}: ButtonProps) => {

  // Estilos base: Minimalistas, tipografía limpia, transición suave
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100";

  // Variantes de diseño
  const variants = {
    // Azul sólido pero sin sombras pesadas (Flat Design)
    primary: "bg-blue-600 text-white hover:bg-blue-700 border border-transparent",
    
    // Solo borde, muy elegante para acciones secundarias
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    
    // Sin fondo, ideal para acciones terciarias
    ghost: "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5",
    
    // Marcas específicas (Minimalistas)
    linkedin: "bg-[#0077b5] text-white hover:bg-[#006097] border border-transparent",
    github: "bg-gray-900 text-white hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 border border-transparent",
  };

  const selectedVariant = variants[variant] || variants.primary;

  // Contenido del botón (Icono + Texto)
  const content = (
    <>
      {isLoading ? (
        // Spinner de carga minimalista
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {icon && <span className="text-lg">{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </>
  );

  // Renderizar como Link (<a>) si hay href
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${selectedVariant} ${className}`}
      >
        {content}
      </a>
    );
  }

  // Renderizar como Botón (<button>) estándar
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      {content}
    </button>
  );
};