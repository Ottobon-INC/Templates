import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { HomeContent } from './components/HomeContent';
import { Campus } from './components/Campus';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-body text-[var(--color-text)] bg-[var(--color-ivory)]">
      <Navbar />
      <main>
        <Home />
        <About />
        <HomeContent />
        <Campus />
      </main>
      <Footer />
    </div>
  );
}

export default App;
