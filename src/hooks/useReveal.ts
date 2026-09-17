import { useEffect } from "react";

/**
 * Scroll-driven reveal: adds `.in-view` to every `.reveal` element once it
 * enters the viewport. Re-runs on `key` change (route navigation) and also
 * picks up elements rendered later (e.g. fetched vehicle cards) through a
 * MutationObserver. Inline `animationDelay` is reused as transition delay so
 * existing stagger values keep working.
 */
export function useReveal(key = "") {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pending = () => document.querySelectorAll<HTMLElement>(".reveal:not(.in-view):not([data-reveal-observed])");

    if (reduce) {
      const show = () => pending().forEach((n) => n.classList.add("in-view"));
      show();
      const mo = new MutationObserver(show);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.style.animationDelay) el.style.transitionDelay = el.style.animationDelay;
          el.classList.add("in-view");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    const observed = new Set<HTMLElement>();
    const observeAll = () => {
      pending().forEach((n) => {
        n.dataset.revealObserved = "1";
        observed.add(n);
        io.observe(n);
      });
    };
    observeAll();

    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(observeAll);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
      // Un-mark elements that never became visible so a re-run (StrictMode,
      // route change) observes them again instead of skipping them.
      observed.forEach((n) => {
        if (!n.classList.contains("in-view")) delete n.dataset.revealObserved;
      });
    };
  }, [key]);
}
