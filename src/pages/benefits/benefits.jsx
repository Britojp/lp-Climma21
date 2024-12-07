'use client';
import '../benefits/benefits.css';
import bgAcupuntura from '../../video/bg-limpeza.mp4';
import teste1 from '../../img/Climma branco.png';
import { FaInstagram, FaTelegram } from 'react-icons/fa6';
import { Button } from '../../../components/ui/button'
import { FaWhatsapp } from "../../../node_modules/react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Benefits() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="relative w-full min-h-screen py-16 inter overflow-hidden ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={bgAcupuntura} type="video/mp4" />
      </video>

      {/* Overlay to darken the video background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start text-left lg:text-left">
        
        {/* Left Section: Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex justify-center items-center"> {/* Flexbox para centralização */}
          <img
            src={teste1}
            alt="Imagem Terapia Climma"
            className="w-96 h-auto object-cover rounded-lg"
            data-aos="fade-right"
          />
        </div>

        {/* Right Section: Text */}
        <div className="lg:w-1/2 w-full lg:pl-12 lg:pt-10 text-center lg:text-left" data-aos="fade-up-left">
          <h1 className="inter text-4xl sm:text-5xl lg:text-4xl font-extrabold text-white mb-6">
            Como a Climma 21 pode te ajudar?
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-3xl inter mx-auto">
            Na Climma 21, oferecemos uma abordagem holística para o seu bem-estar,
            combinando terapias convencionais e alternativas. Descubra como nossos serviços
            podem melhorar sua saúde física, emocional e espiritual, proporcionando um equilíbrio total.
          </p>
        
          <p className="text-lg text-gray-200 mb-6 max-w-3xl inter mx-auto">Conheça nossos serviços</p>

          {/* Button Section */}
          <div className="flex justify-center mt-6">
            <div className='flex flex-col sm:flex-row'>
              <div className='flex justify-center'>
                <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125 mr-4">
                <a href="https://api.whatsapp.com/send?phone=+55XX00000000" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-8 h-auto" />
                </a>                  
                </Button>
                <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125 mr-4">
                <a href="https://www.instagram.com/climma21/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-8 h-auto" />
                </a>
                </Button>
                <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
                <a href="https://t.me/joinchat/EA40I8I7T6WUIfju" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className="w-8 h-auto" />
                </a>
                </Button>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=556298428354&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4aff3a]">
              <Button className="mt-3shadow-md bg-[#478ea1] hover:bg-gray-800 text-gray-100 px-8 py-3 rounded-xl text-lg tracking-wide flex mx-auto lg:mx-0 lg:w-auto lg:text-left transition-transform duration-300 ease-in-out hover:scale-105">
            Agendar uma consulta
          </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
