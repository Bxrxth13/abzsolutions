import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Career from './components/Career';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="bg-white min-h-screen text-gray-900 selection:bg-primary selection:text-white">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
