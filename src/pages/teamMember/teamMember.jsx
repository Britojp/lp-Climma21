import ImageEquipe from '../../img/equipe.jpg'
export default function TeamSection() {

  return (
    <section className="relative py ">
      <div
        className="w-full h-[450px] bg-cover bg-center relative bg-fixed"
        style={{
          backgroundImage: `url(${ImageEquipe})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-9xl font-bold mb-4 hurricane-regular">Venha conhecer</h1>
          <p className="text-xl inter">Profissionais dedicados para transformar a sua saúde</p>
        </div>
      </div>
      
    </section>
  );
}
