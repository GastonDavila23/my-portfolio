import { projects } from '../data';
import { SectionTitle } from './SectionTitle';
import { ProjectCard } from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
      <SectionTitle title="Proyectos Destacados" />
      
      {/* CONTENEDOR PRINCIPAL CON PADRE RELATIVO */}
      <div className="relative py-4 px-0 sm:px-14">
        
        {/* --- FLECHA IZQUIERDA --- */}
        <div className="swiper-button-prev-custom absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 
          flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
          bg-gray-900 dark:bg-slate-700 text-white border border-gray-800 dark:border-slate-500 shadow-xl
          transition-all duration-300 hover:scale-110 hover:bg-black dark:hover:bg-slate-600
          hidden md:flex
          [&.swiper-button-disabled]:opacity-0 [&.swiper-button-disabled]:pointer-events-none"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>

        {/* --- FLECHA DERECHA --- */}
        <div className="swiper-button-next-custom absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 
          flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
          bg-gray-900 dark:bg-slate-700 text-white border border-gray-800 dark:border-slate-500 shadow-xl
          transition-all duration-300 hover:scale-110 hover:bg-black dark:hover:bg-slate-600
          hidden md:flex
          [&.swiper-button-disabled]:opacity-0 [&.swiper-button-disabled]:pointer-events-none"
        >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoHeight={false}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
          }}
          className="
            pb-14 !px-4 !overflow-hidden
            [&_.swiper-wrapper]:items-stretch 
            [&_.swiper-slide]:h-auto 
            [&_.swiper-pagination-bullet-active]:bg-blue-600 dark:[&_.swiper-pagination-bullet-active]:bg-blue-400
          "
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};