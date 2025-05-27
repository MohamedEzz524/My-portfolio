import Home from "./sections/Home";
import { useEffect, useState } from "react";
import Preloader from "./Preloader/Preloader";
import ThemeProvider from "./providers/ThemeProvider";
import ThemesBox from "./sections/ThemesBox";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { AnimatedSection } from "./Components/AnimatedSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);
  return (
    <main className="min-h-screen relative">
      {loading ? (
        <Preloader />
      ) : (
        <ThemeProvider>
          <div
            id="portfolio"
            className="section-style snap-section min-h-screen scroll-smooth"
          >
            <div className="container-hero flex flex-row justify-between max-lg:flex-col overflow-auto  h-screen  scroll-smooth">
              <div className="lg:basis-[45%] lg:sticky lg:top-0 max-h-screen ">
                <Home />
              </div>
              <div className="lg:basis-[52%] h-fit flex flex-col gap-[10px] pl-2 ">
                <AnimatedSection>
                  <About />
                </AnimatedSection>
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </div>
            </div>
          </div>
          <ThemesBox />
        </ThemeProvider>
      )}
    </main>
  );
}

export default App;
