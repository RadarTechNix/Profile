import { motion } from 'framer-motion';
import profile from '../data/profile.json';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-300">
                        <p className="mb-6 leading-relaxed">
                            I am a <strong>System Integration &amp; Validation Engineer</strong> based in {profile.location}, working on automotive radar validation and RF test automation. My current focus is building scalable validation workflows that combine Python automation, MATLAB signal processing, laboratory instrumentation, and database-backed traceability.
                        </p>
                        <p className="leading-relaxed">
                            With a background spanning Radar R&amp;D, Field Applications Engineering, and system validation, I bridge algorithm development with practical end-to-end verification. I enjoy turning complex radar and RF measurement challenges into robust, automated test solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
