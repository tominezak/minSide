import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Portfolio from "./Pages/Portfolio";
import { SiteProvider } from "./SiteProvider";

// Hele porteføljen er én side; gamle lenker til /projects hopper til prosjektene
function OldRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/projects")
      document.getElementById("prosjekter")?.scrollIntoView();
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <SiteProvider>
        <Cursor />
        <Loader />
        <Nav />
        <main>
          <Portfolio />
          <Footer />
        </main>
        <OldRoutes />
      </SiteProvider>
      <Analytics />
    </Router>
  );
}

export default App;
