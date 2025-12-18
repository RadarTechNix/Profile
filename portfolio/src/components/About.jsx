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
                            I am a dedicated <strong>Senior Radar Algorithm Engineer</strong> based in {profile.location}, with extensive experience in the full cycle of radar system development. My passion lies in pushing the boundaries of what's possible with FMCW radar technology, focusing on advanced signal processing, MIMO system optimization, and high-fidelity simulation.
                        </p>
                        <p className="leading-relaxed">
                            With a background spanning both Research & Development and Field Application Engineering, I bring a unique perspective that bridges rigorous theoretical design with practical, customer-focused implementation. I excel in solving complex technical challenges and translating them into robust, detailed-oriented solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
