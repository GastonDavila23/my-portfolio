import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { SocialSidebar } from "./SocialSidebar";
import { NotFound } from "./NotFound";
import { Reveal } from "./Reveal";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* RUTA PRINCIPAL */}
      <Route
        path="/"
        element={
          <div className="bg-gray-50 dark:bg-slate-950 transition-colors duration-300 font-sans text-gray-900 dark:text-white">
            <Navbar />
            
            <main>
              {/* HERO */}
              <div id="inicio">
                 <Hero />
              </div>

              {/* SOBRE MÍ */}
              <section id="sobre-mi" className="min-h-screen w-full flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-4xl">
                  <Reveal width="100%">
                    <Home />
                  </Reveal>
                </div>
              </section>

              {/* PROYECTOS */}
              <section id="proyectos" className="min-h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900 p-6 border-y border-gray-200 dark:border-slate-800 transition-colors duration-300">
                <div className="w-full max-w-6xl">
                  <Reveal width="100%">
                    <Projects />
                  </Reveal>
                </div>
              </section>

              {/* CONTACTO */}
              <section id="contacto" className="min-h-screen w-full flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-7xl">
                  <Reveal width="100%">
                    <Contact />
                  </Reveal>
                </div>
              </section>
            </main>

            <SocialSidebar />
            
            <Footer />
          </div>
        }
      />

      {/* RUTA 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};