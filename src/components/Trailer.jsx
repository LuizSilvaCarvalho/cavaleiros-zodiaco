function Trailer() {
  return (
    <section id='trailer' class='py-16 bg-gray-800'>
      <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 class='text-3xl font-bold mb-8 text-center'>Trailer</h2>
        <div class='relative' style={{ paddingBottom: '56.25%' }}>
          <iframe
            class='absolute top-0 left-0 w-full h-full'
            src='https://www.youtube.com/embed/55sMzwXliMc?si=Ao5N8pFj3bnbyZg6'
            title='Trailer Cavaleiros do Zodíaco'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Trailer;
