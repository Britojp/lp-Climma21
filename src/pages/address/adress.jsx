import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../called/called.css';

export default function MapSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-white via-gray-200 to-slate-300 text-gray-900 inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-4xl font-extrabold text-[#478ea1] inter">
            Onde nos encontrar?
          </h2>
          <p className="text-lg text-gray-600">
            Encontre-nos facilmente usando o mapa abaixo.
          </p>
        </div>

        {/* Centralização do Mapa */}
        <div className="flex justify-center items-center w-full" data-aos="fade-up">
          <div className="w-full lg:w-[700px] h-[300px]">
            <iframe
              title="Localização da Climma 21"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.181509953918!2d-49.2657469!3d-16.6996182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef13e6f885155%3A0x65b9e0d21089a96c!2sClimma%2021!5e0!3m2!1spt-BR!2sbr!4v1733342744898!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className='rounded-lg shadow-lg border-[#478ea1] border-4'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Informações de Contato ou Endereço */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700">
            Estamos localizados na R. T-53, 227 - St. Marista, Goiânia - GO, 74150-310
          </p>
          <p className="text-lg text-gray-700">
            Horário de funcionamento: Segunda a Sexta - 9h às 18h.
          </p>
        </div>
      </div>
    </section>
  );
}
