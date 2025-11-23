'use client';
import { motion } from 'framer-motion';
import { BarChart2, Zap, Newspaper, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-between items-center py-6"
        >
          <div className="text-2xl font-bold tracking-tighter text-white">
            Quantum<span className="text-primary">Leap</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-text-secondary">
            <a href="#" className="hover:text-primary transition-colors duration-300">Dashboard</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Markets</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">News</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Portfolio</a>
          </div>
          <button className="flex items-center justify-center bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-lg hover:bg-primary/20 transition-all duration-300 shadow-glow-primary">
            <User className="w-4 h-4 mr-2" />
            <span>Connect</span>
          </button>
        </motion.nav>

        <div className="text-center py-24 md:py-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight"
          >
            Navigate Markets with
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              AI-Powered Clarity
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary"
          >
            QuantumLeap decodes market complexity, offering predictive insights and actionable recommendations for stocks and crypto.
          </motion.p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(158,127,255,0.15)_0%,transparent_70%)] -z-10"></div>
    </header>
  );
};

export default Header;
