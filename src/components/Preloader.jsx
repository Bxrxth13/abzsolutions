import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'; // Assuming logo exists

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("Optimizing Autobotz");

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Small delay before unmounting
                    return 100;
                }
                const increment = Math.random() * 10 + 5;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => {
            clearInterval(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
            <div className="relative flex flex-col items-center">
                {/* Logo or Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    {/* Placeholder for logo if import fails, or use img tag */}
                    <img src={logo} alt="Autobotz" className="h-24 w-auto object-contain drop-shadow-lg" />
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden relative mb-4">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Progress Text & Percentage */}
                <div className="flex justify-between w-64 text-sm font-medium">
                    <span className="text-gray-500 animate-pulse">{text}</span>
                    <span className="text-primary font-bold">{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Background geometric decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </div>
        </motion.div>
    );
};

export default Preloader;
