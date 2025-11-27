import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Reveal } from './components/Reveal';
import { SocialSidebar } from "./components/SocialSidebar";
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-slate-950 transition-colors duration-300 font-sans text-gray-900 dark:text-white">
      <Navbar />
      
      <main>
        {/* SECCIÓN 1: HERO (Portada) */}
        {/* El componente Hero ya maneja su altura interna, solo lo envolvemos con el ID */}
        <div id="inicio">
           <Hero />
        </div>

        {/* SECCIÓN 2: SOBRE MÍ */}
        {/* Usamos 'flex flex-col justify-center items-center' para centrado absoluto */}
        <section id="sobre-mi" className="min-h-screen w-full flex flex-col justify-center items-center p-6">
          <div className="w-full max-w-4xl"> {/* Limitador de ancho */}
            <Reveal width="100%">
              <Home />
            </Reveal>
          </div>
        </section>

        {/* SECCIÓN 3: PROYECTOS */}
        {/* Fondo blanco para diferenciar. Max-width más amplio para que entren las tarjetas */}
        <section id="proyectos" className="min-h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900 p-6 border-y border-gray-200 dark:border-slate-800 transition-colors duration-300">
          <div className="w-full max-w-6xl">
            <Reveal width="100%">
              <Projects />
            </Reveal>
          </div>
        </section>

        {/* SECCIÓN 4: CONTACTO */}
        <section id="contacto" className="min-h-screen w-full flex flex-col justify-center items-center p-6">
          <div className="w-full max-w-2xl">
            <Reveal width="100%">
              <Contact />
            </Reveal>
          </div>
        </section>
      </main>

      <SocialSidebar />
      <Footer />
    </div>
  );
}

export default App;