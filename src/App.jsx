import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Intro from "./components/Intro";
import IntroPage from "./components/IntroPage";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function AppContent() {
  const [isDark, setIsDark] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleExplore = () => {
    setShowIntro(false);
    navigate('/');
  };

  return (
    <>
      {showIntro ? (
        <Intro onExplore={handleExplore} isDark={isDark} toggleTheme={toggleTheme} />
      ) : (
        <div>
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Body isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />
            <Route path="/experience" element={<Experience isDark={isDark} />} />
            <Route path="/services" element={<Services isDark={isDark} />} />
            <Route path="/contact" element={<Contact isDark={isDark} />} />
            <Route path="/portfolio" element={<Portfolio isDark={isDark} />} />
            <Route path="/intro" element={<IntroPage isDark={isDark} />} />
          </Routes>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
