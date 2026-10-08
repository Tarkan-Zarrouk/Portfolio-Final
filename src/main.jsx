"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setNavHidden(false);
      } else if (currentScrollY < previousScrollY) {
        setNavHidden(true);
      } else if (currentScrollY > previousScrollY) {
        setNavHidden(false);
      }
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "work", "projects", "contact"].map((id) => document.getElementById(id));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <>
    <div className="grain" aria-hidden="true" />
    <Header menuOpen={menuOpen} navHidden={navHidden} activeSection={activeSection} onMenuToggle={() => setMenuOpen(!menuOpen)} onCloseMenu={() => setMenuOpen(false)} />
    <main><Introduction /><Work /><Projects /><Contact /></main>
    <Footer />
  </>;
}
