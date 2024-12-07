import { FaWhatsapp, FaInstagram, FaTelegram } from 'react-icons/fa'; // Biblioteca para ícones
import '../called/called.css';

export default function Footer() {
  return (
    <footer className="bg-[#478ea1] text-white py-4 inter">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Copyright Section */}
        <div className="text-sm mb-4 sm:mb-0">
          <p>&copy; 2024 Todos os direitos reservados | Climma 21</p>
        </div>

        {/* Links Section */}
        <div className="text-sm text-white space-x-4 mb-4 sm:mb-0">
          <p className="text-center sm:text-left">
          Nutrologia |
          Medicina Ortomolecular |
          Homeopatia |
          Microfisioterapia |
          Psicoterapia |
          Soroterapia |
          Pilates
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-6 justify-center sm:justify-start">
          <a href="https://t.me/joinchat/EA40I8I7T6WUIfju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3b5998]">
            <FaTelegram className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/climma21/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E4405F]">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=556298428354&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4aff3a]">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
