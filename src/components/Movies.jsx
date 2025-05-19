function Movies() {
  const movies = [
    {
      id: 1,
      title: 'A Guerra Galáctica',
      src: 'https://www.youtube.com/embed/JveboWS_RC8?si=NJqciQ_xNY2RTC5O', // Substitua por URL real do YouTube
      desc: 'Início da história dos cinco cavaleiros de bronze, a Guerra Galáctica mostra alguns dos personagens escolhidos para servirem a reencarnação de Athena.',
    },
    {
      id: 2,
      title: 'Cavaleiros Negros',
      src: 'https://www.youtube.com/embed/kbZN25fpOAs?si=BFiRrA0Uy9-_Mb8D', // Substitua por URL real do YouTube
      desc: 'Os Cavaleiros Negros são como cópias dos Cavaleiros de Atena, mas se opõem à deusa e lutam pelo mal.',
    },
    {
      id: 3,
      title: 'Forças Ocultas no Santuário e Os Cavaleiros de Prata ',
      src: 'https://www.youtube.com/embed/Njx0h57skck?si=ITCPeQp2E6zvnUIm', // Substitua por URL real do YouTube
      desc: 'O arco "Forças Ocultas" é uma saga que os Cavaleiros de Bronze enfrentam a organização do Santuário, que busca dominar o mundo e confronta os Cavaleiros de Bronze fiéis à deusa Atena. Os Cavaleiros de Prata são enviados para unir os Cavaleiros de Bronze, que traíram as regras do Santuário.',
    },
    {
      id: 4,
      title: 'Cavaleiros de Ouro',
      src: 'https://www.youtube.com/embed/IyLkYYYkNlI?si=yzPuK4j-WdBz3Ark', // Substitua por URL real do YouTube
      desc: 'Os Cavaleiros de Ouro são a elite dos Cavaleiros de Atena, representando os 12 signos do zodíaco. São os guardiões do Santuário e os mais poderosos cavaleiros da ordem, cada um protegendo uma das Doze Casas Zodiacais. ',
    },
    {
      id: 5,
      title: 'A Batalha das Doze Casas',
      src: 'https://www.youtube.com/embed/Dz6yfKgnDK4?si=HO_nLaVXJWNKLjPP', // Substitua por URL real do YouTube
      desc: 'Os cinco Cavaleiros de bronze desafiam corajosamente os doze Cavaleiros de Ouro, os mais poderosos de todos os cavaleiros.',
    },
    {
      id: 6,
      title: 'A Batalha de Asgard e A Batalha de Poseidon',
      src: 'https://www.youtube.com/embed/fg3OX93bdwY?si=OqtbJ0d0CCL-gdiP', // Substitua por URL real do YouTube
      desc: 'Em Saga de Asgard, Hilda de Polaris é a representante do deus Odin, na Terra, tendo como missão garantir a paz em Asgard. A Saga de Poseidon em Os Cavaleiros do Zodíaco é uma luta contra o Deus do Mar, Poseidon, que busca inundar o mundo e vingar-se dos humanos.',
    },
    {
      id: 7,
      title: 'A Saga de Hades',
      src: 'https://www.youtube.com/embed/cuP80xa16_8?si=XLR8Pa3rmhZHszYu', // Substitua por URL real do YouTube
      desc: 'A Saga de Hades nos Cavaleiros do Zodíaco conta a história do resgate de Atena, a deusa da sabedoria e da batalha dos Cavaleiros de Bronze contra os Espectros de Hades e o próprio Imperador do Inferno.',
    },
    {
      id: 8,
      title: 'A Lenda do Santuário',
      src: 'https://www.youtube.com/embed/KsR3zwu_1_w?si=3IFI3yUY7KFA7xH4', // Substitua por URL real do YouTube
      desc: 'Um filme em CG que reimagina a saga do Santuário.',
    },
  ];

  return (
    <section id='filmes' className='py-16 bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Filmes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className='bg-gray-700 rounded-lg overflow-hidden'
            >
              <div
                className='relative'
                style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}
              >
                <iframe
                  className='absolute top-0 left-0 w-full h-full'
                  src={movie.src}
                  title={movie.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{movie.title}</h3>
                <p className='mt-2'>{movie.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Movies;
