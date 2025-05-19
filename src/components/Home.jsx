function Home() {
  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center'
    >
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='public/assets/videos/video1.mp4'
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative text-center z-10'>
        <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>
          Cavaleiros do Zodíaco
        </h2>
        <p className='text-xl md:text-2xl text-white'>
          A lendária saga dos cavaleiros do zodíaco
        </p>
      </div>
    </section>
  );
}

export default Home;
