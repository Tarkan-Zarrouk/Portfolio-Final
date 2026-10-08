import { ArrowUpRight } from "lucide-react";
import { mlProjects } from "../data/projects";

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="section-heading reveal"><div><div className="eyebrow">01 / Selected work</div><h2>Work that makes<br /><i>an impression.</i></h2></div><p>Two sides of the same curiosity: building products for people and exploring systems that help us understand the world.</p></div>
      <article className="featured-project reveal">
        <div className="project-art"><div className="window-chrome"><span /><span /><span /><small>pulse / home</small></div><div className="social-ui"><aside><strong>◉</strong><span className="side-active" /><span /><span /><span /><small>TZ</small></aside><div className="social-feed"><div className="feed-top"><b>Good morning, Tarkan</b><span>＋</span></div><div className="story-list"><b>TZ</b><span>AM</span><span>JK</span><span>+</span></div><div className="post-card"><div className="post-head"><span className="avatar">AM</span><span><b>Alex Morgan</b><small>12 min ago</small></span><i>•••</i></div><div className="post-photo"><span>shared moments</span></div><div className="post-footer">♡ &nbsp; ◌ &nbsp; ♧ <small>1,248 reactions</small></div></div></div></div><span className="art-note note-one">made for humans</span><span className="art-note note-two">social / 2024</span></div>
        <div className="featured-copy"><div className="project-kicker">Featured project / 01</div><h3>Social<br /><i>Media App</i></h3><p>A community-first social experience designed around meaningful sharing instead of endless noise. I explored how information hierarchy and small interaction details can make a platform feel more human.</p><div className="tag-list"><span>Product thinking</span><span>Responsive UI</span><span>Interaction design</span></div><a className="button button-dark" href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer">View project on GitHub <ArrowUpRight size={15} /></a></div>
      </article>
      <div className="ml-heading reveal"><div className="eyebrow">02 / Machine learning</div><h3>Questions become<br /><i>better with data.</i></h3><p>A collection of learning-driven work from my journey in machine learning — grounded in experimentation, iteration, and making technical ideas useful.</p></div>
      <div className="ml-grid">{mlProjects.map((project) => <article className="ml-card reveal" key={project.number}><div className="ml-card-top"><span>{project.number}</span><span className="card-index">/ 03</span></div><div><div className="project-kicker">{project.category}</div><h4>{project.title}</h4><p>{project.copy}</p></div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="card-arrow" href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">Learn more <ArrowUpRight size={14} /></a></article>)}</div>
    </section>
  );
}
