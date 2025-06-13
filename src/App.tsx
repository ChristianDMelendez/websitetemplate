import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans transition-all duration-500">
        <header className="p-6 flex justify-between items-center bg-[#161b22] shadow">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <Link to="/about" className="hover:text-cyan-400">About</Link>
            <Link to="/resume" className="hover:text-cyan-400">Resume</Link>
            <Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </nav>
        </header>
        <main className="p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="text-center p-6 text-sm text-gray-500">© 2025 Christian Melendez · Silent Industries</footer>
      </div>
    </Router>
  );
}

export default App;
