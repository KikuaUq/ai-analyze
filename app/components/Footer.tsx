'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="border-t border-border mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} QuantumLeap. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="text-text-secondary hover:text-primary transition-colors">Disclaimer</a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
