import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import projects from '../data/projects.json';

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A selection of projects highlighting my expertise in Radar R&D, Embedded Systems, and Signal Processing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700/50 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary">
                                    <Folder size={24} />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.repo} aria-label="GitHub Repo" className="text-slate-500 hover:text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} aria-label="Demo Link" className="text-slate-500 hover:text-primary transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs rounded-full border border-slate-200 dark:border-slate-700">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
