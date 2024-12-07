import { Button } from '../../../components/ui/button';     
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PersonalizedMedicine() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full py-16 bg-white text-gray-900 inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#478ea1] mb-4 inter" data-aos="fade-up">
          Transforme sua saúde de dentro para fora
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg font-bold text-gray-800 mb-6" data-aos="fade-up">
          Você está vivendo a vida com todo o potencial que seu corpo, mente e espírito podem oferecer? <br />
          Imagine como seria sentir-se renovado, saudável e em paz todos os dias.
        </p>

        {/* Body Text */}
        <p className="text-gray-600 text-md mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Na nossa clínica de medicina integrativa, não oferecemos soluções rápidas, mas um caminho real para um bem-estar completo e duradouro. 
          Através de um atendimento personalizado, vamos descobrir as raízes dos seus desafios e criar um plano que 
          trará equilíbrio físico, mental e emocional à sua vida.
        </p>

        {/* CTA Button */}
        <a href="https://api.whatsapp.com/send/?phone=556298428354&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4aff3a]">
        <Button className="shadow-md bg-[#478ea1] hover:bg-gray-800 text-gray-100 px-8 py-3 rounded-xl text-lg tracking-wide mx-auto lg:mx-0 lg:w-auto lg:text-left transition-transform duration-300 ease-in-out hover:scale-105">
            Agendar uma consulta
          </Button>
        </a>
      </div>
    </section>
  );
}
