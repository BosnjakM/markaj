import { About } from "./components/About";
import { AccidentHighlight } from "./components/AccidentHighlight";
import { AutoHub } from "./components/AutoHub";
import { CarwashSection } from "./components/CarwashSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { TrustStrip } from "./components/TrustStrip";
import { UsedCars } from "./components/UsedCars";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <AutoHub />
        <UsedCars />
        <AccidentHighlight />
        <About />
        <CarwashSection />
        <Team />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
