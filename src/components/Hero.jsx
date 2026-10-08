import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content reveal">
        <div className="eyebrow"><span className="pulse" /> Software developer · New York</div>
        <h1>I build digital<br /><i>experiences</i> people<br />can believe in.</h1>
        <p className="hero-lede">I&apos;m Tarkan — a developer focused on making complex ideas feel clear, useful, and worth coming back to.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
          <a className="underlined-link" href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="hero-profile reveal delay-1">
        <div className="profile-photo">TZ</div>
        <div className="profile-caption"><span>Currently</span><strong>Building thoughtful<br />software products</strong></div>
        <div className="profile-rule" />
        <div className="profile-facts"><span>01</span><span>Product-minded</span></div>
        <div className="profile-facts"><span>02</span><span>Detail oriented</span></div>
        <div className="profile-facts"><span>03</span><span>Always learning</span></div>
      </div>
      <div className="hero-footer"><span>Scroll to explore</span><span className="scroll-line" /><span>01 / 04</span></div>
    </section>
  );
}
