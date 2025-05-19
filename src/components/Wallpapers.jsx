// Wallpapers Component
function Wallpapers() {
  const wallpapers = [
    {
      id: 1,
      src: 'public/assets/images/cavaleiros1.jpg',
      alt: 'Wallpaper dos 5 cavaleiros',
    },
    {
      id: 2,
      src: 'public/assets/images/cavaleiros2.jpg',
      alt: 'Wallpaper com 4 cavaleiros',
    },
    {
      id: 3,
      src: 'public/assets/images/cavaleiros3.png',
      alt: 'Wallpaper com 6 cavaleiros',
    },
    {
      id: 4,
      src: 'public/assets/images/cavaleiros4.png',
      alt: 'Wallpaper com os cavaleiros',
    },
    {
      id: 5,
      src: 'public/assets/images/cavaleiros5.jpg',
      alt: 'Wallpaper com 5 cavaleiros',
    },
    {
      id: 6,
      src: 'public/assets/images/cavaleiros6.jpg',
      alt: 'Wallpaper com Cavaleiros de Ouro',
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? wallpapers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === wallpapers.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          .carousel-container {
            perspective: 1000px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .carousel-item {
            position: absolute;
            width: 300px;
            height: 300px;
            transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
          }
          .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          .carousel-item.central {
            transform: translateZ(100px) scale(1);
            opacity: 1;
            filter: blur(0);
            z-index: 10;
          }
          .carousel-item.side {
            transform: translateZ(-50px) scale(0.8);
            opacity: 0.7;
            filter: blur(2px);
            z-index: 5;
          }
          .carousel-item.far {
            transform: translateZ(-100px) scale(0.6);
            opacity: 0.4;
            filter: blur(4px);
            z-index: 1;
          }
        `}
      </style>
      <section id='wallpapers' className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Wallpapers</h2>
          <div className='relative'>
            <div className='carousel-container'>
              {wallpapers.map((wallpaper, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                let className = 'carousel-item';
                let style = {};

                if (offset === 0) {
                  className += ' central';
                  style = {
                    transform: 'translateZ(100px) scale(1)',
                    left: '50%',
                    marginLeft: '-150px',
                  };
                } else if (absOffset === 1) {
                  className += ' side';
                  style = {
                    transform: 'translateZ(-50px) scale(0.8)',
                    left: offset > 0 ? '75%' : '25%',
                    marginLeft: offset > 0 ? '-75px' : '-225px',
                  };
                } else {
                  className += ' far';
                  style = {
                    transform: 'translateZ(-100px) scale(0.6)',
                    left: offset > 0 ? '90%' : '10%',
                    marginLeft: offset > 0 ? '-30px' : '-270px',
                  };
                }

                return (
                  <div key={wallpaper.id} className={className} style={style}>
                    <img src={wallpaper.src} alt={wallpaper.alt} />
                    {offset === 0 && (
                      <a
                        href={wallpaper.src}
                        download
                        className='absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
                      >
                        Baixar
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              onClick={prevSlide}
              className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
