import { useEffect } from 'react';
import { Button } from "../../../components/ui/button";
import ConsultaImg from '../../img/equipe.jpg'; // Use uma imagem parecida com a da inspiração
import './services.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

export default function ServicesSection() {
  const services = [
    "Homeopatia",
    "Fitoterapia",
    "Microfisioterapia",
    "Medicina Ortomolecular",
    "Psicoterapia",
    "Pilates",
    "Nutrologia"
  ];

  // Inicializando o AOS para animações
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-16 md:py-24 flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        
        {/* Imagem à esquerda */}
        <div className="w-full md:w-1/2 h-full mb-10 md:mb-0 md:pr-10 flex justify-center">
          <img 
            src={ConsultaImg} 
            alt="Consulta" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            data-aos="fade-right" // Animação para a imagem
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full md:w-1/2 text-left flex flex-col items-center md:items-start">
          <h2 
            className="text-3xl md:text-4xl font-normal text-[#478ea1] mb-6 text-center md:text-left"
            data-aos="fade-up" // Animação para o título
          >
            Meus Serviços e Tratamentos
          </h2>

          {/* Lista de serviços */}
          <ul className="space-y-4 text-lg text-center md:text-left">
            {services.map((service, index) => (
              <li 
                key={index} 
                className="flex items-center justify-center md:justify-start"
                data-aos="fade-up" // Animação para cada serviço
                data-aos-delay={index * 100} // Delay incremental para cada item
              >
                <span className="text-[#478ea1] mr-3">➤</span>
                <span className="text-gray-800">{service}</span>
              </li>
            ))}
          </ul>

          {/* Botão de agendamento */}
          <div className="mt-8 flex justify-center md:justify-start">
          <a href="https://api.whatsapp.com/send/?phone=556298428354&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4aff3a]">
          
          <Button className="mt-3 shadow-md bg-[#478ea1] hover:bg-gray-800 text-gray-100 px-8 py-3 rounded-xl text-lg tracking-wide mx-auto lg:mx-0 lg:w-auto lg:text-left transition-transform duration-300 ease-in-out hover:scale-105" 
              data-aos="zoom-in" // Animação para o botão
              data-aos-delay="500" // Aparece após os serviços
            >
              Agendar uma Consulta
            </Button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
