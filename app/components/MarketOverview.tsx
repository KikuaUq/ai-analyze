'use client';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Bitcoin } from 'lucide-react';

const marketData = [
  { name: 'S&P 500', value: '5,473.20', change: '+0.77%', icon: TrendingUp, color: 'text-success' },
  { name: 'NASDAQ', value: '17,857.02', change: '+1.25%', icon: TrendingUp, color: 'text-success' },
  { name: 'Bitcoin', value: '$66,120.50', change: '-1.80%', icon: TrendingDown, color: 'text-error' },
  { name: 'Ethereum', value: '$3,550.75', change: '-2.50%', icon: TrendingDown, color: 'text-error' },
];

const MarketOverview = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketData.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-text-secondary">{item.name}</h3>
              {item.name.includes('Bitcoin') ? <Bitcoin className="w-6 h-6 text-warning" /> : item.name.includes('Ethereum') ? <DollarSign className="w-6 h-6 text-secondary" /> : <DollarSign className="w-6 h-6 text-primary" />}
            </div>
            <p className="text-3xl font-bold text-white mt-2">{item.value}</p>
            <div className={`flex items-center mt-2 ${item.color}`}>
              <item.icon className="w-4 h-4 mr-1" />
              <span className="font-semibold">{item.change}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MarketOverview;
