import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import History from './components/History.jsx';
import Wallpapers from './components/Wallpapers.jsx';
import Trailer from './components/Trailer.jsx';
import Characters from './components/Characters.jsx';
import Movies from './components/Movies.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Home />
        <History />
        <Wallpapers />
        <Trailer />
        <Characters />
        <Movies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
