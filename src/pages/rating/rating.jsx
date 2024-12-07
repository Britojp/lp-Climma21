import { useEffect, useState } from 'react';
import { Star } from 'lucide-react'; // Ícone de estrela
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ReviewsCarousel() {
  // Estado para controlar o índice da avaliação atual no carrossel (mobile)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado para armazenar quais comentários estão expandidos
  const [expanded, setExpanded] = useState([]);

  // Dados de avaliação com foto de perfil
  const reviews = [
    {
      name: 'Nilson Oliveira',
      rating: 5,
      comment: 'Acabo de sair de uma consulta com o Dr. GUILHERME JORGE DA SILVA. Minha primeira visita ao profissional nutrólogo. A sensação que trago comigo é a de que eu estive na presença de um ser de outro mundo. Sei que soa demasiadamente exagerado, mas não há outra forma de descrever o conhecimento, o alcance de visão, a amplitude das abordagens nas análises feitas por ele não apenas diante dos resultados de exames clínicos que levei, mas também no compartilhamento do seu vasto entendimento do SER HUMANO em todas as suas dimensões! Foi bem mais que uma simples consulta. Experienciei uma viagem do conhecimento de mim mesmo, no campo da matéria e das emoções, tomando ciência das implicações da segunda sobre a primeira.',
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVUqXkBgkZbxlIjgwbFuxtpU3LX-czByvfd5kJ50gyqO7jLrnsO=w60-h60-p-rp-mo-br100',
    },
    {
      name: 'Luana MSO',
      rating: 5,
      comment: 'Consultamos com o dr. Vicente, excelente profissional, o tratamento com a homeopatia está sendo extremamente eficaz. Ótimo atendimento, principalmente o carinho com as crianças.',
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXrTyOqvLkbcXG_uvEJfHvGAHHcpIbmldhz82LSqMMdBc_ENUw2dg=w60-h60-p-rp-mo-br100',
    },
    {
      name: 'Isabella Di Velasco',
      rating: 5,
      comment: 'Um ambiente muito agradável, com brinquedos para as crianças e poltronas super confortáveis para a espera do atendimento. Dr Vicente e o dr Guilherme são maravilhosos!',
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXCbCpB9zw-thZoyI6MudxdYGYa0XNYJM3BExQ1v0cY1CX6Pb0-sw=w60-h60-p-rp-mo-ba3-br100',
    },
    
  ];

  // Função para alternar entre expandir e ocultar um comentário
  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo
  }, [currentIndex]);

  const truncateComment = (comment, length) => {
    if (comment.length > length) {
      return comment.slice(0, length) + '...';
    }
    return comment;
  };

  return (
    <section className="relative w-full py-16 bg-white text-gray-900 inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-4xl font-bold text-[#478ea1] inter" data-aos="fade-up">
            Avaliações dos nossos clientes
          </h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
            Veja o que nossos clientes têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Layout para telas maiores: Exibe todos os comentários */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Foto de Perfil e Informação */}
              <div className="flex items-center mb-4">
                <img
                  src={review.photo}
                  alt={`Foto de perfil de ${review.name}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                </div>
              </div>

              {/* Estrelas de Avaliação */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    weight={i < review.rating ? 'fill' : 'regular'}
                    size={24}
                    color={i < review.rating ? '#FFD700' : '#C0C0C0'}
                    className="mr-1"
                  />
                ))}
              </div>

              {/* Comentário com opção de "Leia mais" */}
              <p className="text-gray-700">
                {expanded.includes(index)
                  ? review.comment
                  : truncateComment(review.comment, 150)}
              </p>

              {review.comment.length > 150 && (
                <button
                  className="text-blue-500 mt-2"
                  onClick={() => toggleExpand(index)}
                >
                  {expanded.includes(index) ? 'Leia menos' : 'Leia mais'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Carrossel para dispositivos móveis */}
        <div className="md:hidden relative w-full mx-auto">
          <div
            key={reviews[currentIndex].name}
            className="transition-opacity duration-1000 ease-in-out opacity-100"
            data-aos="fade-up"
            data-aos-delay={currentIndex * 100}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              {/* Foto de Perfil e Informação */}
              <div className="flex items-center mb-4">
                <img
                  src={reviews[currentIndex].photo}
                  alt={`Foto de perfil de ${reviews[currentIndex].name}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{reviews[currentIndex].name}</h3>
                </div>
              </div>

              {/* Estrelas de Avaliação */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    weight={i < reviews[currentIndex].rating ? 'fill' : 'regular'}
                    size={24}
                    color={i < reviews[currentIndex].rating ? '#FFD700' : '#C0C0C0'}
                    className="mr-1"
                  />
                ))}
              </div>

              {/* Comentário com opção de "Leia mais" */}
              <p className="text-gray-700">
                {expanded.includes(currentIndex)
                  ? reviews[currentIndex].comment
                  : truncateComment(reviews[currentIndex].comment, 150)}
              </p>

              {reviews[currentIndex].comment.length > 150 && (
                <button
                  className="text-blue-500 mt-2"
                  onClick={() => toggleExpand(currentIndex)}
                >
                  {expanded.includes(currentIndex) ? 'Leia menos' : 'Leia mais'}
                </button>
              )}
            </div>
          </div>

          {/* Botões de Navegação no Mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-lg"
            data-aos="fade-left"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-lg"
            data-aos="fade-right"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
