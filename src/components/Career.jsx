import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import careerImage from '../assets/job.jpeg'; // Fallback image since generation failed

const Career = () => {
    const [fileName, setFileName] = useState("No file chosen");

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };

    return (
        <section id="career" className="py-24 bg-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                        Apply for a <span className="text-primary">Job</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Autobotz, we don't just build software; we build the future. We are searching for passionate innovators ready to challenge the status quo.
                        Join a culture that celebrates autonomy, mastery, and purpose. If you're ready to accelerate your career and make a global impact,
                        we want to hear from you. Your journey to excellence starts here.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={careerImage}
                            alt="Working at Autobotz"
                            className="w-full h-full object-cover min-h-[600px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.08)] border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile number"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Position apply for"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="resume-upload"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                    <label
                                        htmlFor="resume-upload"
                                        className="w-full bg-white border border-gray-200 rounded-lg p-1 text-gray-500 cursor-pointer hover:border-primary transition-colors flex items-center gap-3"
                                    >
                                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">Choose file</span>
                                        <span className="text-gray-400 text-sm truncate max-w-[150px]">{fileName}</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <textarea
                                    rows="6"
                                    placeholder="Message"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="w-full md:w-2/3 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 transform hover:-translate-y-1 block"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Open Positions Cards */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h3>
                    <p className="text-gray-600">Join our team of innovators</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Position 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                        <div className="mb-4">
                            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Full Time</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Senior React Developer</h4>
                        <p className="text-gray-600 mb-6 text-sm">We are looking for an experienced React developer to build scalable web applications.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-gray-500 text-sm font-medium">Remote / Hybrid</span>
                            <button className="text-primary font-bold text-sm hover:underline">Apply Now</button>
                        </div>
                    </div>

                    {/* Position 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                        <div className="mb-4">
                            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Full Time</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">UI/UX Designer</h4>
                        <p className="text-gray-600 mb-6 text-sm">Create intuitive and beautiful user interfaces for our global clients.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-gray-500 text-sm font-medium">Remote</span>
                            <button className="text-primary font-bold text-sm hover:underline">Apply Now</button>
                        </div>
                    </div>

                    {/* Position 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                        <div className="mb-4">
                            <span className="bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Contract</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Digital Marketing Specialist</h4>
                        <p className="text-gray-600 mb-6 text-sm">Drive growth and engagement through data-driven marketing strategies.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-gray-500 text-sm font-medium">On-site</span>
                            <button className="text-primary font-bold text-sm hover:underline">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;
