import { motion } from 'framer-motion';
import teamImg from '../assets/team_collaboration.png'; // Will need to ensure this path is valid or use the generated image path
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">WHY CHOOSE US</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            We're Autobotz Technology
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Autobotz Technology advances your business to the next level. Being an end-to-end IT service provider, we assure dedicated IT support to your business and take responsibility to increase your venture's technological roadmap. To accomplish success we follow a special collaborative planning approach with our clients.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <span className="text-gray-700 font-medium">Dedicated IT Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <span className="text-gray-700 font-medium">Collaborative Planning</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <span className="text-gray-700 font-medium">Technological Roadmap</span>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)]"
                        >
                            Explore <ArrowRight size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src={teamImg}
                            alt="Team Collaboration"
                            className="w-full h-auto object-cover rounded-2xl shadow-2xl relative z-10"
                        />
                        {/* Decorative Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Creative Divider - Slanted with Red */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]">
                    <path d="M1200 120L0 0 0 120 1200 120z" className="fill-gray-50"></path>
                    <path d="M1200 120L0 30 0 120 1200 120z" className="fill-primary/5"></path>
                </svg>
            </div>
        </section>
    );
};

export default WhyChooseUs;
