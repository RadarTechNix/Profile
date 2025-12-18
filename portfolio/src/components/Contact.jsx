import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import profile from '../data/profile.json';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Thank you for your message! This is a demo form. Please email me directly.');
        window.location.href = `mailto:${profile.email}`;
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let's Connect</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-lg">
                            I'm always open to discussing new opportunities, radar technology, or potential collaborations. Feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${profile.email}`} className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                    <p className="font-medium">{profile.email}</p>
                                </div>
                            </a>

                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                                    <p className="font-medium">Connect on LinkedIn</p>
                                </div>
                            </a>

                            <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                    <p className="font-medium">{profile.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary dark:text-white"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary dark:text-white"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary dark:text-white"
                                    placeholder="How can we collaborate?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary hover:bg-sky-600 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
