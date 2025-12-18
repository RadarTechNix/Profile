import { Github } from 'lucide-react';
import profile from '../data/profile.json';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-slate-600 dark:text-slate-400 font-medium">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">Built with React, Vite & Tailwind CSS</p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/nikhilnavghade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm"
                    >
                        <Github size={18} />
                        Source Code
                    </a>
                </div>
            </div>
        </footer>
    );
}
