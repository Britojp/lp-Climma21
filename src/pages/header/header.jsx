import './header.css'
import { FaInstagram, FaTelegram } from 'react-icons/fa6';
import { Button } from '../../../components/ui/button';
import { FaWhatsapp } from 'react-icons/fa'; // Use o caminho correto para o ícone
import climma21 from '../../../src/img/Climma.png';

export default function Header() {
  return (
    <header className="bg-slate-300 top-0 z-10 ibm-plex-sans-regular">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pt-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={climma21} className="w-16 md:w-20" alt="Climma Logo" />
            </a>
          </div>

          {/* Ícones sociais para dispositivos grandes */}
          <div className="hidden md:flex space-x-4">
            <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
              <a href="https://api.whatsapp.com/send?phone=+55XX00000000" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-auto md:w-8" />
              </a>
            </Button>
            <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
              <a href="https://www.instagram.com/climma21/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-auto md:w-8" />
              </a>
            </Button>
            <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
              <a href="https://t.me/climma21" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="w-6 h-auto md:w-8" />
              </a>
            </Button>
          </div>

          {/* Ícones sociais para dispositivos pequenos */}
          <div className="md:hidden flex space-x-2">
            <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
              <a href="https://api.whatsapp.com/send/?phone=556298428354&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-5 h-auto" />
              </a>
            </Button>
            <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
              <a href="https://www.instagram.com/climma21/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-auto" />
              </a>
            </Button>
            <Button variant="none" className="text-[#478ea1] hover:text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125">
              <a href="https://t.me/joinchat/EA40I8I7T6WUIfju" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="w-5 h-auto" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
