import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import experience from '../data/experience.json';

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 -ml-[11px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-slate-800 z-10 shadow-lg"></div>

                                <div className="flex-1 md:w-1/2 pl-12 md:pl-0"></div> {/* Spacer */}

                                <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'}`}>
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700/50 relative group">
                                        <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-1 block">
                                            {job.company}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex flex-col md:block">
                                            {job.role}
                                        </h3>
                                        <div className={`flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <Calendar size={14} />
                                            {job.period}
                                        </div>

                                        <ul className={`space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                            {job.achievements.map((item, i) => (
                                                <li key={i} className="relative">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            {job.tech.map((t) => (
                                                <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded font-medium">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
