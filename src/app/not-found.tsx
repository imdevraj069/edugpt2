'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <motion.div
                    className="text-8xl mb-8"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    🚀
                </motion.div>
                <h1 className="text-6xl font-poppins font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Oops! This page seems to have drifted into another galaxy.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 font-semibold hover:shadow-[0_0_30px_rgba(0,242,234,0.4)] transition-all"
                >
                    <Home className="w-5 h-5" />
                    Return to Home
                </Link>
            </motion.div>
        </div>
    );
}
