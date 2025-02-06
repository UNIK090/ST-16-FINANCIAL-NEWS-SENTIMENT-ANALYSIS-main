import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl"
      >
        <motion.h1 variants={item} className="text-5xl font-bold mb-6 text-[#ff8c00]">
          Financial News Sentiment Analysis
        </motion.h1>
        
        <motion.p variants={item} className="text-xl mb-12 text-[#ffd700]">
          Make informed decisions with <span className="text-[#ff8c00]">AI-powered</span> sentiment analysis of financial news
        </motion.p>

        <motion.div variants={item} className="flex justify-center gap-8 mb-12">
          {['Real-time Analysis', 'Market Insights', 'Smart Predictions'].map((feature, index) => (
            <motion.div
              key={feature}
              variants={item}
              className="px-6 py-4 border border-[#ff8c00]/30 rounded bg-[#ff8c00]/10"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Link
            to="/predict"
            className="inline-block px-8 py-3 bg-[#ff8c00] text-[#121212] rounded-lg text-lg font-semibold hover:bg-[#ffa500] transition-colors"
          >
            Start Analysis
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;