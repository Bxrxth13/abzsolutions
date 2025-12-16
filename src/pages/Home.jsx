import Hero from '../components/Hero';
import Methodology from '../components/Methodology';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Methodology />
            <Services />
            <WhyChooseUs />
            <About />
            <Contact />
        </main>
    );
};

export default Home;
