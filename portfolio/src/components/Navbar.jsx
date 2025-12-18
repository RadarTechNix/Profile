import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from '../data/profile.json';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Check system preference on mount
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="font-bold text-xl text-slate-800 dark:text-white">
                            NN.
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-slate-200 dark:border-slate-700">
                                <button onClick={toggleTheme} className="p-2 text-slate-500 hover:text-primary transition-colors">
                                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500 hover:text-primary p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-4 flex items-center space-x-4 px-3 py-2 border-t border-slate-100 dark:border-slate-800">
                                <button onClick={toggleTheme} className="p-2 text-slate-500 hover:text-primary">
                                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary">
                                    <Github size={20} />
                                </a>
                                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
