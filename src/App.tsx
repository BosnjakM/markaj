import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { legalPages, servicePages } from "./data/pages";
import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";
import { Kontakt } from "./pages/Kontakt";
import { Legal } from "./pages/Legal";
import { Occasionen } from "./pages/Occasionen";
import { ServicePage } from "./pages/ServicePage";
import { UeberUns } from "./pages/UeberUns";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          {servicePages.map((page) => (
            <Route key={page.slug} path={`/${page.slug}`} element={<ServicePage data={page} />} />
          ))}
          <Route path="/occasionen" element={<Occasionen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {legalPages.map((page) => (
            <Route key={page.slug} path={`/${page.slug}`} element={<Legal data={page} />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
