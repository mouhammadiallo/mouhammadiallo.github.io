/* ==========================================================================
   Portfolio — Mouhammad DIALLO
   JavaScript natif. Chaque fonctionnalité est isolée dans sa propre fonction.
   Le site reste entièrement lisible si ce script ne se charge pas.
   ========================================================================== */
(() => {
  "use strict";

  /** Menu mobile : ouverture/fermeture, accessibilité clavier. */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    const label = toggle.querySelector(".nav-toggle__label");
    const desktop = window.matchMedia("(min-width: 56rem)");

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Fermer" : "Menu";
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));

    // Échap ferme le menu et rend le focus au bouton
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Un clic en dehors du menu le ferme
    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });

    // Repasser en affichage bureau referme l'état mobile
    desktop.addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }

  /** Marque le lien de navigation correspondant à la page courante. */
  function initActiveNav() {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link").forEach((link) => {
      const target = link.getAttribute("href").split("#")[0];
      if (target === current || (current === "" && target === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /** Apparition douce des blocs au défilement. */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /** Année du copyright mise à jour automatiquement. */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.documentElement.classList.add("js");
  const start = () => {
    initActiveNav();
    initMobileNav();
    initReveal();
    initYear();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
