import { useState } from 'react';
import { motion } from 'framer-motion';

const Predict = () => {
  const [sentiment, setSentiment] = useState(null);

  const analyzeSentiment = () => {
    // Simulate sentiment analysis
    const randomSentiment = Math.random();
    setSentiment(randomSentiment);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl p-8 bg-[#121212]/95 backdrop-blur-lg rounded-lg border border-[#ff8c00]/10 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[#ff8c00]">
          Analyze Financial News
        </h2>
        <textarea
          placeholder="Paste financial news article here..."
          className="w-full h-48 p-4 mb-6 bg-[#121212]/80 border border-[#ff8c00]/30 rounded text-[#ff8c00] placeholder-[#ff8c00]/50 resize-none"
        />
        <button
          onClick={analyzeSentiment}
          className="w-full py-3 bg-[#ff8c00] text-[#121212] rounded font-semibold hover:bg-[#ffa500] transition-colors mb-6"
        >
          Analyze Sentiment
        </button>
        
        {sentiment !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="h-5 bg-[#121212]/80 rounded-full border border-[#ff8c00]/30 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${sentiment * 100}%` }}
                className="h-full bg-gradient-to-r from-red-500 to-[#ff8c00]"
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-center text-xl font-semibold" style={{ color: sentiment < 0.3 ? '#ff4444' : sentiment < 0.7 ? '#ffbb33' : '#4CAF50' }}>
              Sentiment: {sentiment < 0.3 ? 'Negative' : sentiment < 0.7 ? 'Neutral' : 'Positive'}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Predict;