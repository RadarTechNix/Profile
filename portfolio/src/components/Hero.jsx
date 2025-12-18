import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profile from '../data/profile.json';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl rounded-full" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-3xl rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Portfolio</h2>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Hi, I'm <span className="text-primary">{profile.name.split(' ')[0]}</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-light">
                            {profile.title}
                        </p>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            {profile.summary}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-primary hover:bg-sky-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                            >
                                Get in Touch
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href={profile.resumeUrl}
                                download
                                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary rounded-full font-medium transition-all flex items-center justify-center gap-2"
                            >
                                Download CV
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-700/50">
                                {/* Placeholder for Profile Image if not available */}
                                <span className="text-6xl font-bold text-slate-300 dark:text-slate-600">NN</span>
                                {/* <img src="/path/to/profile.jpg" alt={profile.name} className="w-full h-full object-cover" /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
