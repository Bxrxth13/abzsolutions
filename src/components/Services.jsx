import { motion } from 'framer-motion';
import { Monitor, TrendingUp, Users, Smartphone, Server, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: 'Web Designing',
        description: 'Stunning, responsive, and user-centric websites that captivate your audience and drive conversions. We build modern web experiences.',
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: 'Digital Marketing',
        description: 'Data-driven strategies to amplify your brand presence. SEO, social media marketing, and PPC campaigns that deliver real ROI.',
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: 'Staffing Solutions',
        description: 'Connect with top-tier talent. We bridge the gap between skilled professionals and companies looking to innovate.',
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'App Development',
        description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: 'Custom Software',
        description: 'Tailor-made software solutions to streamline your business operations and solve complex challenges.',
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Cyber Security',
        description: 'Protect your digital assets with our robust security audits and implementation services.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-100 opacity-50 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Our <span className="text-primary">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Comprehensive technology solutions designed to scale your business.
                    </motion.p>
                </div>

                <div className="py-8">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12 services-swiper"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <div className="p-8 h-full min-h-[300px] rounded-2xl bg-gray-100 border border-red-100 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] flex flex-col cursor-pointer">
                                    <div className="mb-6 p-4 bg-white shadow-sm rounded-xl inline-block text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 w-fit">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .services-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>

            {/* Split Divider with Red Accent */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="fill-gray-100"></path>
                    <path d="M1200 120L0 120 0 0 600 100 1200 0z" className="fill-primary/5" style={{ mixBlendMode: 'multiply' }}></path>
                </svg>
            </div>
        </section>
    );
};

export default Services;
