import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import About from "../components/About";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip to content — accesibilidad teclado */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-purple focus:text-white focus:rounded-lg focus:font-display focus:font-semibold focus:text-sm focus:shadow-lg"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Stats />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
