import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const benefits = [
        "Expert Team of Developers",
        "Agile Development Process",
        "24/7 Dedicated Support",
        "Data-Driven Results",
        "Transparent Communication",
        "On-Time Delivery"
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 1, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About Us</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Empowering Business Through <br /><span className="text-primary">Technology & Innovation</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At Autobotz Technology, we don't just write code; we solve business problems. Since our inception, we have been dedicated to delivering high-quality digital solutions that help businesses thrive in the modern era.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our team of passionate experts combines creativity with technical prowess to deliver web designing, digital marketing, and staffing solutions that exceed expectations.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <div className="flex gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900">50+</h4>
                                    <p className="text-gray-600 text-sm">Projects Completed</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900">98%</h4>
                                    <p className="text-gray-600 text-sm">Client Satisfaction</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900">10+</h4>
                                    <p className="text-gray-600 text-sm">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 1, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-gray-200 to-gray-50 p-1 rounded-2xl rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl shadow-primary/20">
                            <div className="bg-white rounded-xl overflow-hidden h-96 flex items-center justify-center border border-gray-200">
                                {/* Placeholder for an image or graphic */}
                                <div className="text-center p-8">
                                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                        <div className="w-16 h-16 bg-primary rounded-full"></div>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Autobotz Vision</h4>
                                    <p className="text-gray-600">Leading the future of digital transformation.</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/30 rounded-2xl"></div>
                    </motion.div>
                </div>
            </div>

            {/* Zigzag Divider with Red */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-gray-50"></path>
                    <path d="M1200 120L0 40 0 120 1200 120z" className="fill-primary/5"></path>
                </svg>
            </div>
        </section>
    );
};

export default About;
