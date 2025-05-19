import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full bg-gray-800 bg-opacity-90 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <h1 className='text-xl font-bold text-white'>
                Cavaleiros do Zodíaco
              </h1>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <div className='flex space-x-4'>
              {[
                'Home',
                'História',
                'Wallpapers',
                'Trailer',
                'Personagens',
                'Filmes',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700'
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none'
              aria-label='Toggle menu'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden'>
          <div className='pt-2 pb-3 space-y-1'>
            {[
              'Home',
              'História',
              'Wallpapers',
              'Trailer',
              'Personagens',
              'Filmes',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
