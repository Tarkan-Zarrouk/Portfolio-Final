import { ArrowDownRight, ArrowUpRight, Download, Mail } from "lucide-react";

export default function Introduction() {
  return (
    <section className="hero section" id="home">
      <div className="hero-intro reveal">
        <div className="hero-kicker"><span className="pulse" /> Software developer <span className="hero-kicker-divider">/</span> Toronto, Canada</div>
        <h1>Hi, I&apos;m <span>Tarkan.</span></h1>
        <p className="hero-lede">I build reliable, well-considered software for people and teams. I care about clear thinking, useful interfaces, and doing the work properly.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#work">View my work <ArrowDownRight size={17} /></a>
          <a className="underlined-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={14} /></a>
        </div>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="mailto:tarkan.zarrouk@gmail.com">Email <Mail size={14} /></a>
        </div>
      </div>
      <div className="hero-profile reveal delay-1">
        <div className="profile-photo"><img src="/Photo.png" alt="Tarkan Zarrouk" /></div>
        <div className="profile-caption"><span>Currently focused on</span><strong>Product development,<br />web, and ML.</strong></div>
        <div className="profile-rule" />
        <div className="profile-facts"><span>01</span><span>Product-minded</span></div>
        <div className="profile-facts"><span>02</span><span>Detail oriented</span></div>
        <div className="profile-facts"><span>03</span><span>Always learning</span></div>
      </div>
    </section>
  );
}
