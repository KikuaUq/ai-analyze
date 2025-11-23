'use client';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const newsItems = [
  { title: 'Fed hints at potential rate cuts by year-end.', sentiment: 'Positive', impact: 'High', icon: TrendingUp, color: 'text-success' },
  { title: 'New SEC regulations on crypto staking announced.', sentiment: 'Neutral', impact: 'Medium', icon: Minus, color: 'text-warning' },
  { title: 'Tech giants report mixed earnings for Q2.', sentiment: 'Negative', impact: 'High', icon: TrendingDown, color: 'text-error' },
  { title: 'Bitcoin Halving event completes successfully.', sentiment: 'Positive', impact: 'High', icon: TrendingUp, color: 'text-success' },
];

const NewsSentiment = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.9,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <Newspaper className="w-8 h-8 text-accent mr-3" />
        News Sentiment Analysis
      </h2>
      <motion.div 
        className="glass-card p-6 space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {newsItems.map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="p-4 bg-background/50 rounded-lg border border-border/50 flex items-start space-x-4 hover:bg-surface/50 transition-colors duration-300">
            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.color.replace('text-', 'bg-')}/10`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div>
              <p className="font-medium text-white">{item.title}</p>
              <div className="flex items-center space-x-3 text-xs text-text-secondary mt-1">
                <span className={`${item.color} font-semibold`}>{item.sentiment}</span>
                <span>•</span>
                <span>Impact: {item.impact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default NewsSentiment;
