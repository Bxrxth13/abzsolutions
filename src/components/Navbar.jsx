import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home', isRoute: false },
        { name: 'Services', href: '/#services', hasDropdown: true, isRoute: false },
        { name: 'About', href: '/#about', isRoute: false },
        { name: 'Career', href: '/career', isRoute: true },
        { name: 'Contact', href: '/#contact', isRoute: false },
    ];

    const servicesDropdown = [
        "Web Designing",
        "Digital Marketing",
        "Staffing Solutions",
        "App Development",
        "Custom Software",
        "Cyber Security"
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img className="h-16 w-auto" src={logo} alt="Autobotz Logo" />
                        <span className="text-gray-900 font-extrabold text-2xl tracking-widest uppercase hidden sm:block">Autobotz Solutions</span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    <Link
                                        to={link.href}
                                        className="text-gray-800 hover:text-primary px-4 py-2 rounded-md text-base font-bold transition-colors duration-300 flex items-center gap-1"
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown size={16} className="mt-0.5" />}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.hasDropdown && (
                                        <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 overflow-hidden">
                                            <div className="py-2">
                                                {servicesDropdown.map((service, index) => (
                                                    <Link
                                                        key={index}
                                                        to="/#services"
                                                        className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                                                    >
                                                        {service}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link to="/#contact" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]">
                                Explore <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 hover:text-primary focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full bg-primary hover:bg-red-700 text-center text-white block px-3 py-3 rounded-md text-base font-bold transition-all shadow-lg shadow-primary/30"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
