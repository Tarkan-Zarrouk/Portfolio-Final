"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const mlProjects = [
  {
    number: "01",
    category: "Machine learning",
    title: "Predictive systems",
    copy: "Exploring how structured data and thoughtful feature engineering can turn noisy inputs into useful signals.",
    tags: ["Python", "Modeling"],
  },
  {
    number: "02",
    category: "Machine learning",
    title: "Pattern recognition",
    copy: "Building practical experiments that make complex patterns easier to understand, measure, and act on.",
    tags: ["Data", "Evaluation"],
  },
  {
    number: "03",
    category: "Machine learning",
    title: "Applied learning",
    copy: "Keeping the person in the loop with clear outputs, honest constraints, and interfaces that build trust.",
    tags: ["Product", "Iteration"],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "work", "approach", "contact"].map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">TZ</span>
          <span>Tarkan Zarrouk</span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {["home", "work", "approach", "contact"].map((section) => (
            <a className={activeSection === section ? "active" : ""} href={`#${section}`} key={section} onClick={closeMenu}>
              {section}
            </a>
          ))}
        </nav>
        <a className="header-availability" href="#contact">Let&apos;s work together <ArrowUpRight size={14} /></a>
      </header>

      <main>
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
          <div className="hero-footer">
            <span>Scroll to explore</span>
            <span className="scroll-line" />
            <span>01 / 04</span>
          </div>
        </section>

        <section className="statement section">
          <div className="eyebrow">A little context</div>
          <p className="statement-copy">The best products sit at the intersection of <i>clarity</i>, curiosity, and craft. That&apos;s where I like to work.</p>
          <div className="statement-meta"><span>Based in the details</span><span>Open to meaningful opportunities</span></div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading reveal"><div><div className="eyebrow">01 / Selected work</div><h2>Work that makes<br /><i>an impression.</i></h2></div><p>Two sides of the same curiosity: building products for people and exploring systems that help us understand the world.</p></div>
          <article className="featured-project reveal">
            <div className="project-art">
              <div className="window-chrome"><span /><span /><span /><small>pulse / home</small></div>
              <div className="social-ui">
                <aside><strong>◉</strong><span className="side-active" /><span /><span /><span /><small>TZ</small></aside>
                <div className="social-feed"><div className="feed-top"><b>Good morning, Tarkan</b><span>＋</span></div><div className="story-list"><b>TZ</b><span>AM</span><span>JK</span><span>+</span></div><div className="post-card"><div className="post-head"><span className="avatar">AM</span><span><b>Alex Morgan</b><small>12 min ago</small></span><i>•••</i></div>                <div className="post-photo"><span>shared moments</span></div><div className="post-footer">♡ &nbsp; ◌ &nbsp; ♧ <small>1,248 reactions</small></div></div></div>
              </div>
                <span className="art-note note-one">made for humans</span>
              <span className="art-note note-two">social / 2024</span>
            </div>
            <div className="featured-copy"><div className="project-kicker">Featured project / 01</div><h3>Social<br /><i>Media App</i></h3><p>A community-first social experience designed around meaningful sharing instead of endless noise. I explored how information hierarchy and small interaction details can make a platform feel more human.</p><div className="tag-list"><span>Product thinking</span><span>Responsive UI</span><span>Interaction design</span></div><a className="button button-dark" href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer">View project on GitHub <ArrowUpRight size={15} /></a></div>
          </article>

          <div className="ml-heading reveal"><div className="eyebrow">02 / Machine learning</div><h3>Questions become<br /><i>better with data.</i></h3><p>A collection of learning-driven work from my journey in machine learning — grounded in experimentation, iteration, and making technical ideas useful.</p></div>
          <div className="ml-grid">{mlProjects.map((project) => <article className="ml-card reveal" key={project.number}><div className="ml-card-top"><span>{project.number}</span><span className="card-index">/ 03</span></div><div><div className="project-kicker">{project.category}</div><h4>{project.title}</h4><p>{project.copy}</p></div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="card-arrow" href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">Learn more <ArrowUpRight size={14} /></a></article>)}</div>
        </section>

        <section className="approach section" id="approach">
          <div className="section-heading reveal"><div><div className="eyebrow">02 / Approach</div><h2>Thoughtful by<br /><i>design.</i></h2></div><p>I bring a product mindset to every layer of the work, from the first question to the final interaction.</p></div>
          <div className="approach-grid">{[["01", "Find the signal", "I start by asking better questions. Understanding the context makes the eventual solution sharper."], ["02", "Make it legible", "Complexity is inevitable. Confusion is optional. I translate ideas into systems people can navigate."], ["03", "Keep learning", "I stay curious, test what I think I know, and use feedback to make the next version stronger."]].map(([number, title, copy]) => <article className="approach-card reveal" key={number}><span>{number}</span><Check size={16} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="contact section" id="contact"><div className="contact-inner reveal"><div className="eyebrow">03 / Start a conversation</div><h2>Have a good<br /><i>problem to solve?</i></h2><p>I&apos;m looking for a team where I can contribute, keep learning, and help turn ambitious ideas into useful products.</p><a className="button button-lime" href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">Say hello on LinkedIn <ArrowUpRight size={16} /></a></div><div className="contact-links reveal delay-1"><span>Find me online</span><a href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a></div></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Tarkan Zarrouk</span><span>Built with curiosity.</span></footer>
    </>
  );
}
