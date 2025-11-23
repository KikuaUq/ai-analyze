'use client';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const recommendations = [
  { ticker: 'NVDA', name: 'NVIDIA Corp', type: 'Stock', action: 'BUY', confidence: '92%', reason: 'Strong demand in AI chips and data centers.', trend: 'up' },
  { ticker: 'SOL', name: 'Solana', type: 'Crypto', action: 'BUY', confidence: '88%', reason: 'High throughput and growing ecosystem adoption.', trend: 'up' },
  { ticker: 'TSLA', name: 'Tesla, Inc.', type: 'Stock', action: 'HOLD', confidence: '75%', reason: 'Market volatility and upcoming product announcements.', trend: 'down' },
  { ticker: 'ETH', name: 'Ethereum', type: 'Crypto', action: 'BUY', confidence: '95%', reason: 'Post-merge deflationary pressure and ETF potential.', trend: 'up' },
];

const AiRecommendations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <Zap className="w-8 h-8 text-primary mr-3" />
        AI-Powered Recommendations
      </h2>
      <motion.div 
        className="glass-card p-6 space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {recommendations.map((rec, i) => (
          <motion.div key={i} variants={itemVariants} className="p-4 bg-background/50 rounded-lg border border-border/50 flex items-center justify-between hover:bg-surface/50 transition-colors duration-300">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${rec.type === 'Stock' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                <span className="font-bold">{rec.ticker}</span>
              </div>
              <div>
                <p className="font-semibold text-white">{rec.name}</p>
                <p className="text-sm text-text-secondary">{rec.reason}</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${rec.action === 'BUY' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                {rec.action}
              </div>
              <p className="text-sm text-text-secondary mt-1">Conf: {rec.confidence}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AiRecommendations;
