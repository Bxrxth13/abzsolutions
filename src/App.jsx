import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Methodology />
      <Services />
      <WhyChooseUs />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
