import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center bg-[#121212]/95 backdrop-blur-lg z-50 border-b border-[#ff8c00]/10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-[#ff8c00]"
      >
        FinSent
      </motion.div>
      <div className="flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-8"
        >
          <Link to="/" className="text-[#ff8c00] hover:text-[#ffa500] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#ff8c00] hover:text-[#ffa500] transition-colors">
            About
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4"
        >
          <Link
            to="/login"
            className="px-6 py-2 border-2 border-[#ff8c00] text-[#ff8c00] rounded hover:bg-[#ff8c00]/10 transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-[#ff8c00] text-[#121212] rounded hover:bg-[#ffa500] transition-colors"
          >
            Sign Up
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;