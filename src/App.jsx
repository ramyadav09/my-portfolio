import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Experience from "./components/Experience";
import ThemeToggle from "./components/ThemeToggle";
import Intro from "./components/Intro";
import { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  if (showIntro) {
    return (
      <div style={{minHeight: '100vh', background: isDark ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)', color: isDark ? 'white' : 'black', transition: 'all 0.3s'}}>
        <Intro onExplore={() => setShowIntro(false)} isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', background: isDark ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)', color: isDark ? 'white' : 'black', transition: 'all 0.3s'}}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Outlet context={{isDark, toggleTheme}} />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/services", element: <Services /> },
      { path: "/experience", element: <Experience /> },
    ],
  },
]);

export default AppRouter;
