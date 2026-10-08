import {ArrowUpRight } from "lucide-react";

export default function Introduction() {
  return (
    <section className="hero section" id="home">
      <div className="hero-intro reveal">
        <h1>I&apos;m Tarkan. <span aria-hidden="true">👋</span></h1>
        <p className="hero-lede">Passionate. Hardworking. Inquisitive.</p>
        {/* these links point visitors to the main work section and resume */}
        <div className="hero-actions">
          <a className="button button-lime" href="#work">View my work</a>
          <a className="underlined-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume </a>
        </div>
        <div className="hero-links">
          <a href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href="mailto:tarkan.zarrouk@gmail.com">EMail <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="hero-profile reveal delay-1">
        <div className="profile-photo"><img src="/Photo.png" alt="Tarkan Zarrouk" /></div>
      </div>
    </section>
  );
}
