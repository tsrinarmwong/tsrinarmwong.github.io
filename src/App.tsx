// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPostPage from './pages/BlogPostPage';
import { useEffect } from 'react';
import { initGoogleAnalytics } from './lib/analytics'; // adjust path if needed

function App() {
  useEffect(() => {
    initGoogleAnalytics();
  }, []);
  
  return (
    <Router>
      {/* Navbar always stays at the top */}
      <Navbar />

      {/* Main content changes based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;