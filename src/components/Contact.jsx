import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ready to start your next project? Contact us today for a free consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 1, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-xl border border-red-100">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                                <p className="text-gray-600">info@autobotz.com</p>
                                <p className="text-gray-600">support@autobotz.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-xl border border-red-100">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                <p className="text-gray-600">+1 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-xl border border-red-100">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Visit Us</h3>
                                <p className="text-gray-600">123 Tech Park Avenue</p>
                                <p className="text-gray-600">Silicon Valley, CA 94025</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 1, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 p-8 rounded-2xl border border-red-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Asymmetric Curve Divider with Red Accent */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-100"></path>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-primary/5" transform="translate(0, 5)"></path>
                </svg>
            </div>
        </section>
    );
};

export default Contact;
