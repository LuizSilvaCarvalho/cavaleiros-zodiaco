function Characters() {
  const characters = [
    {
      id: 1,
      name: 'Seiya de Pégaso',
      src: 'public/assets/images/Seiya.jpg',
      desc: 'O protagonista corajoso e leal.',
    },
    {
      id: 2,
      name: 'Shiryu de Dragão',
      src: 'public/assets/images/Shiryu.jpg',
      desc: 'O cavaleiro sábio e disciplinado.',
    },
    {
      id: 3,
      name: 'Shun de Andrômeda',
      src: 'public/assets/images/Shun de Andromeda.png',
      desc: 'O defensor pacífico, com uma força que transcende sua gentileza.',
    },
    {
      id: 4,
      name: 'Hyoga de Cisne',
      src: 'public/assets/images/Hyoga.jpg',
      desc: 'O Cavaleiro de Cisne, frio e determinado, com um coração que brilha mesmo no gelo.',
    },
    {
      id: 5,
      name: 'Ikky de Fênix',
      src: 'public/assets/images/Ikki.jpg',
      desc: 'O cavaleiro de bronze solitário e poderoso.',
    },
    {
      id: 6,
      name: 'Shaka de Virgem',
      src: 'public/assets/images/Shaka.png',
      desc: 'O Cavaleiro de Ouro mais sábio e místico.',
    },
    {
      id: 7,
      name: 'Saori Kido',
      src: 'public/assets/images/Saori.jpg',
      desc: 'A reencarnação de Atena, a deusa do amor e da sabedoria.',
    },
    {
      id: 8,
      name: 'Dohko de Libra',
      src: 'public/assets/images/Dohko.png',
      desc: 'O Cavaleiro sábio e paciente, guardião da justiça e da sabedoria.',
    },
    {
      id: 9,
      name: 'Shura de Capricórnio',
      src: 'public/assets/images/Shura.jpg',
      desc: 'Shura, o Cavaleiro de Ouro mais fiel a Atena, com a Excalibur como sua fiel companheira.',
    },
  ];

  return (
    <section id='personagens' className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>
          Personagens
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {characters.map((character) => (
            <div
              key={character.id}
              className='bg-gray-700 rounded-lg overflow-hidden'
            >
              <img
                src={character.src}
                alt={character.name}
                className='w-full h-64 object-cover'
                loading='lazy'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-white'>
                  {character.name}
                </h3>
                <p className='mt-2 text-gray-300'>{character.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Characters;
