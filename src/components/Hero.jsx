import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-intro reveal">
        <div className="hero-kicker"><span className="pulse" /> Tarkan Zarrouk <span className="hero-kicker-divider">/</span> Software developer</div>
        <h1>Thoughtful<br /><i>software</i><br />for real life.</h1>
        <p className="hero-lede">I&apos;m Tarkan — a developer who turns complex ideas into clear, useful experiences across product, web, and machine learning.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#work">View selected work <ArrowDownRight size={17} /></a>
          <a className="underlined-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={14} /></a>
        </div>
      </div>
      <div className="hero-profile reveal delay-1">
        <div className="profile-photo">TZ</div>
        <div className="profile-caption"><span>Currently</span><strong>Building thoughtful<br />software products</strong></div>
        <div className="profile-rule" />
        <div className="profile-links">
          <a href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          <a href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
        </div>
        <div className="profile-rule" />
        <div className="profile-facts"><span>01</span><span>Product-minded</span></div>
        <div className="profile-facts"><span>02</span><span>Detail oriented</span></div>
      </div>
      <div className="hero-footer"><span>Scroll to explore</span><span className="scroll-line" /><span>01 / 04</span></div>
    </section>
  );
}
