"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    return storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

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
    <Header menuOpen={menuOpen} activeSection={activeSection} theme={theme} onMenuToggle={() => setMenuOpen(!menuOpen)} onCloseMenu={() => setMenuOpen(false)} onThemeToggle={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")} />
    <main><Hero /><section className="statement section"><div className="eyebrow">A little context</div><p className="statement-copy">The best products sit at the intersection of <i>clarity</i>, curiosity, and craft. That&apos;s where I like to work.</p><div className="statement-meta"><span>Based in the details</span><span>Open to meaningful opportunities</span></div></section><Work /><Projects /><Contact /></main>
    <Footer />
  </>;
}
