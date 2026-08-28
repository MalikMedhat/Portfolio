import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.seo.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.seo.description);
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.seo.title);
  }, [t]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,oklch(0.62_0.19_263/0.16),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_85%_15%,oklch(0.79_0.13_214/0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_10%_85%,oklch(0.62_0.19_263/0.08),transparent)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.5]" />
      <div className="absolute inset-0 bg-noise opacity-[0.35]" />
    </div>
  );
}

export default App;
