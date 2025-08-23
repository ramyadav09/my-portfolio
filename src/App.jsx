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

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (showIntro) {
    return <Intro onExplore={() => setShowIntro(false)} isDark={isDark} toggleTheme={toggleTheme} />;
  }

  return (
    <div>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Outlet context={{ isDark }} />
    </div>
  );
}
const AppRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/intro",
        element: <IntroPage />,
      },
    ],
  },
]);

export default AppRouter;
