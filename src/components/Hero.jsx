
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import webDesignImg from '../assets/webdesign.webp';
import digitalMarketingImg from '../assets/digitalmarketing.png';
import staffImg from '../assets/methodology_growth.png'; // Using existing growth image for "Staff" fallback if needed, or just rotating these.

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Soft Background Accents */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-red-50 border border-red-100 text-primary text-sm font-bold mb-6 tracking-wider uppercase">
                            Autobotz Solutions
                        </span>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                            <span className="block mb-2"><span className="text-primary">WE</span> <span className="text-gray-900">CODE.</span></span>
                            <span className="block mb-2 bg-primary text-white w-fit px-4 -ml-4">WE MARKET.</span>
                            <span className="block"><span className="text-primary">WE</span> <span className="text-gray-900">STAFF.</span></span>
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                            Driving digital transformation through expert engineering, strategic marketing, and elite talent acquisition.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                                Start Buildin
                            </a>
                            <a href="#services" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:border-gray-400 transition-all">
                                Our Services
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:flex justify-center items-center w-full"
                    >
                        {/* Abstract blobs behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>

                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect={'fade'}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className="w-full max-w-md !overflow-visible"
                        >
                            <SwiperSlide className="!overflow-visible py-10">
                                <img
                                    src={webDesignImg}
                                    alt="Web Design & Development"
                                    className="w-full h-auto object-contain drop-shadow-2xl border-4 border-white rounded-3xl shadow-xl bg-white scale-125"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="!overflow-visible py-10">
                                <img
                                    src={digitalMarketingImg}
                                    alt="Digital Marketing"
                                    className="w-full h-auto object-contain drop-shadow-2xl border-4 border-white rounded-3xl shadow-xl bg-white scale-125"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="!overflow-visible py-10">
                                <img
                                    src={staffImg}
                                    alt="Staffing Solutions"
                                    className="w-full h-auto object-contain drop-shadow-2xl border-4 border-white rounded-3xl shadow-xl bg-white scale-125"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>
            </div>

            {/* Creative Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-primary/5"></path>
                </svg>
            </div>
        </section>
    );
};
export default Hero;
