import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-[#121212]/95 backdrop-blur-lg rounded-lg border border-[#ff8c00]/10 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[#ff8c00]">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#121212]/80 border border-[#ff8c00]/30 rounded text-[#ff8c00] placeholder-[#ff8c00]/50"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#121212]/80 border border-[#ff8c00]/30 rounded text-[#ff8c00] placeholder-[#ff8c00]/50"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#121212]/80 border border-[#ff8c00]/30 rounded text-[#ff8c00] placeholder-[#ff8c00]/50"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 bg-[#121212]/80 border border-[#ff8c00]/30 rounded text-[#ff8c00] placeholder-[#ff8c00]/50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#ff8c00] text-[#121212] rounded font-semibold hover:bg-[#ffa500] transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-[#ffd700]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#ff8c00] font-semibold hover:text-[#ffa500]">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;