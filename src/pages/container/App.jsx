import './App.css';
import { Button } from "../../../components/ui/button";
import imageDoutor from "../../../src/img/dr2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";

export default function App() {
  const phrases = [
    "física.",
    "emocional.",
    "espiritual."
  ];

  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;

    const updateText = () => {
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, prevText.length - 1));

        if (text.length === 0) {
          setTimeout(() => {
            setIsDeleting(false);
            setIsTyping(true);
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Ciclar para a próxima frase
          }, 100);
        }
      } else {
        setText((prevText) => phrases[currentPhraseIndex].slice(0, prevText.length + 1));

        if (text === phrases[currentPhraseIndex]) {
          setTimeout(() => {
            setIsTyping(false);
            setIsDeleting(true);
          }, 1000);
        }
      }
    };

    interval = setInterval(updateText, 100);

    return () => clearInterval(interval);
  }, [text, isDeleting, isTyping, currentPhraseIndex]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className=" min-h-screen bg-gradient-to-b from-slate-300 via-gray-200 to-gray-50 flex items-center justify-center relative overflow-hidden inter">
      <div className="container mx-4 md:mx-10 lg:mx-20 flex flex-col lg:flex-row-reverse items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">

        {/* Imagem */}
        <div className="w-full max-w-sm md:max-w-2xl lg:w-1/2" data-aos="fade-left">
          <img src={imageDoutor} className="w-full h-auto object-cover" alt="Dr. Guilherme Jorge" />
        </div>

        {/* Texto e informações */}
        <div className="max-w-xl text-center md:text-left lg:w-1/2" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold pb-5">
            <span className="text-gray-800 tracking-tight">Medicina Integrativa</span>
          </h1>

          <h1 className="pb-5">
            <span className="text-gray-600 text-4xl md:text-4xl lg:text-5xl hurricane-regular">Dr. Guilherme Jorge</span>
          </h1>

          <h1 className="text-md md:text-xl lg:text-2xl font-normal pb-4">
            <span className="text-gray-600 tracking-normal">
              Somos um <span className="font-bold text-gray-800">Centro de Saúde Integrativa</span> que ajuda pessoas em sua jornada{" "}
              <span className="font-bold text-gray-800">{text}|</span>
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-lg font-normal pb-4">
            Toque no botão abaixo e agende a sua consulta.
          </p>

          {/* Botão */}
          <a href="https://api.whatsapp.com/send/?phone=556298428354&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4aff3a]">
          <Button className="shadow-md bg-[#478ea1] hover:bg-gray-800 text-gray-100 px-8 py-3 rounded-xl text-lg tracking-wide flex mx-auto lg:mx-0 lg:w-auto lg:text-left transition-transform duration-300 ease-in-out hover:scale-105">
            Agendar uma consulta
            <IoMdArrowDropright />
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
