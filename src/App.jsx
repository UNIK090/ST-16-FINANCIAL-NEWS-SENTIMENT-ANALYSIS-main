import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Predict from './pages/Predict';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-[#ff8c00] overflow-x-hidden">
        <VideoBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;