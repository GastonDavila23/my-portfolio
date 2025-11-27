import { useRef, useState, type FormEvent } from 'react';
import { profile } from '../data';
import { FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button'; 

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        formRef.current, 
        import.meta.env.VITE_PUBLIC_KEY 
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsSubmitting(false);
          formRef.current?.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsSubmitting(false);
          alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
        },
      );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      
      <SectionTitle title="Contacto" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* --- TARJETA IZQUIERDA --- */}
        {/* AJUSTE MÓVIL: p-6 md:p-8 */}
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Hablemos!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Estoy buscando mi primera oportunidad como desarrollador. Si tenés una propuesta, querés charlar sobre tecnología o simplemente saludar, completá el formulario y te respondo lo antes posible.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
             <Button 
                href={profile.linkedin}
                target="_blank" 
                rel="noreferrer"
                variant="linkedin"
                icon={<FaLinkedin />}
                className="w-full"
             >
                LinkedIn
             </Button>

             <Button 
                href={profile.github}
                target="_blank" 
                rel="noreferrer"
                variant="github"
                icon={<FaGithub />}
                className="w-full"
             >
                GitHub
             </Button>
          </div>
        </div>

        {/* --- TARJETA DERECHA (FORMULARIO) --- */}
        {/* AJUSTE MÓVIL: p-6 md:p-8 */}
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 h-full">
          
          {isSuccess ? (
            <div className="text-center py-12 h-full flex flex-col justify-center items-center">
              <FaCheckCircle className="text-green-500 text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-600 dark:text-gray-300">Gracias por contactarme. Te responderé pronto.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5 flex flex-col h-full">
              
              <div className="space-y-5 flex-grow">
                <div className="grid grid-cols-1 gap-5">
                   <div>
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors placeholder-gray-400"
                        placeholder="Tu nombre"
                      />
                   </div>

                   <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors placeholder-gray-400"
                        placeholder="tu@email.com"
                      />
                   </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors resize-none placeholder-gray-400"
                    placeholder="Hola, me gustaría contactarte para..."
                  />
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  variant="primary"
                  className="w-full"
                  icon={!isSubmitting && <FaPaperPlane />}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};