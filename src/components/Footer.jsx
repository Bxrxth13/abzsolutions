import logo from '../assets/logo.png';
import { Facebook, Twitter, Instagram, Linkedin, Heart, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Autobotz" className="h-8 md:h-10" />
                            <span className="text-gray-900 font-bold text-xl uppercase">Autobotz</span>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Revolutionizing the digital landscape with cutting-edge technology solutions. Your partner in innovation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Link & Services Group */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        {/* Quick Links */}
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
                                <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Use</a></li>
                                <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a></li>
                                <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg mb-6">Services</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Web Designing</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Digital Marketing</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Staffing Solutions</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">App Development</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your Details"
                                className="bg-white text-gray-900 px-4 py-2 rounded-l-lg focus:outline-none w-full border border-gray-300 focus:border-primary"
                            />
                            <button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Autobotz Technology. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Made with ❤️</span>
                        <span>by Autobotz Team</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
