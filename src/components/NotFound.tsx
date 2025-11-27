import { Button } from "./Button";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 text-center px-4">
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-500 opacity-20">
        404
      </h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          ¡Ups! Página no encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Parece que te has perdido en el ciberespacio.
        </p>
        <Button href="/" variant="primary">
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};