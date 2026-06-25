import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { UsedCars } from "./components/UsedCars";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <UsedCars />
        <About />
        <Team />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
