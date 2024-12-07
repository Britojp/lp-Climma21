import { useState } from 'react';
import './assesment.css';

export default function App() {
  // Estado para controlar o slide atual
  const [slideIndex, setSlideIndex] = useState(0);

  // Dados dos depoimentos
  const depoimentos = [
    {
      nome: 'João Pedro de Brito Tomé',
      data: 'Setembro 7, 2024',
      comentario: 'Ótimo atendimento, levei meu terno para lavar e ele ficou impecável!',
      foto: 'img/img-joaopedro.png',
      estrelas: 5,
    },
    {
      nome: 'Marcelo',
      data: 'Fevereiro 8, 2022',
      comentario: 'Tem de tudo o que um shopping precisa ter e não cobra estacionamento.',
      foto: 'avatar2.jpg',
      estrelas: 5,
    },
    {
      nome: 'Marcelo',
      data: 'Fevereiro 8, 2022',
      comentario: 'Tem de tudo o que um shopping precisa ter e não cobra estacionamento.',
      foto: 'avatar2.jpg',
      estrelas: 5,
    },
  ];

  // Função para mudar o slide
  const mudarSlide = (direcao) => {
    const novoIndex = (slideIndex + direcao + depoimentos.length) % depoimentos.length;
    setSlideIndex(novoIndex);
  };

  return (
    <section className="avaliacoes">
      <div className="carrossel-header"> 
        <h1>Depoimentos</h1>
        <p>Veja o que nossos clientes dizem sobre nós</p>
      </div>
      <div className="carrossel-container">
        <button className="prev" onClick={() => mudarSlide(-1)}>&#10094;</button>
        <div className="carrossel">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className={`avaliacao ${index === slideIndex ? 'ativo' : 'inativo'}`}
              style={{ display: index === slideIndex ? 'block' : 'none' }}
            >
              <div className="perfil">
                <img src={depoimento.foto} alt={`Foto de ${depoimento.nome}`} />
                <div className="info">
                  <h3>{depoimento.nome}</h3>
                  <p>{depoimento.data}</p>
                </div>
                <img src="img/google-logo.png" alt="Logo Google" className="logo-google" />
              </div>
              <div className="estrelas">{'★'.repeat(depoimento.estrelas)}</div>
              <p>{depoimento.comentario}</p>
            </div>
          ))}
        </div>
        <button className="next" onClick={() => mudarSlide(1)}>&#10095;</button>
      </div>
    </section>
  );
}
