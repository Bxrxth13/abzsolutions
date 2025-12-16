import { motion } from 'framer-motion';
import iconWebDesign from '../assets/icon_web_design.png';
import iconDigitalMarketing from '../assets/icon_digital_marketing.png';
import methodologyGrowth from '../assets/methodology_growth.png';

const Methodology = () => {
    const methods = [
        {
            icon: <img src={iconWebDesign} alt="Web Design" className="w-24 h-24 object-contain drop-shadow-lg hover:scale-110 transition-transform" />,
            title: "Web Design",
            description: "We craft immersive, user-centric digital experiences. By blending aesthetic excellence with intuitive functionality, we build websites that not only captivate visitors but also drive measurable business growth and brand loyalty.",
            bg: "bg-red-50"
        },
        {
            icon: <img src={iconDigitalMarketing} alt="Digital Marketing" className="w-24 h-24 object-contain drop-shadow-lg hover:scale-110 transition-transform" />,
            title: "Digital Marketing",
            description: "Amplify your reach with data-driven strategies. From SEO dominance to targeted social campaigns, we engineer marketing ecosystems that connect your brand with the right audience at the perfect moment.",
            bg: "bg-red-50"
        },
        {
            icon: <img src={methodologyGrowth} alt="Staffing Solutions" className="w-24 h-24 object-contain drop-shadow-lg hover:scale-110 transition-transform" />,
            title: "Staffing Solutions",
            description: "Empower your organization with world-class talent. We bridge the gap between ambition and capability, providing flexible, scalable staffing solutions that ensure you have the right experts to accelerate your success.",
            bg: "bg-red-50"
        }
    ];

    return (
        <section className="py-24 bg-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">How We Work</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6"
                    >
                        Our Process
                    </motion.h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        A systematic approach to turning complex challenges into simple, elegant digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent z-0"></div>

                    {methods.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-10 text-center group"
                        >
                            <div className={`w-32 h-32 mx-auto ${item.bg} rounded-full flex items-center justify-center mb-8 relative`}>
                                {item.icon}
                                <div className="absolute inset-0 rounded-full border border-red-100 scale-110 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>
        </section>
    );
};

export default Methodology;
