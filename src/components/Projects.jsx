import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Social Media App",
    category: "Product development",
    copy: "A community-first social experience focused on meaningful sharing, clear information hierarchy, and interactions that feel human.",
    tags: ["React", "Product thinking", "Responsive UI"],
    href: "https://github.com/Tarkan-Zarrouk",
  },
  {
    number: "02",
    title: "Minecraft mod",
    category: "Open source / Java",
    copy: "A quality-of-life Minecraft mod built to test ideas against a real codebase and make everyday play more useful.",
    tags: ["Java", "Fabric", "Open source"],
    href: "https://github.com/Tarkan-Zarrouk/meow-client",
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading reveal"><div><div className="eyebrow">02 / Projects</div><h2>Projects</h2></div><p>Selected work that reflects how I learn: by making, testing, and improving things people can actually use.</p></div>
      <div className="project-grid">{projects.map((project) => <article className="project-tile reveal" key={project.number}><div className="project-tile-top"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.copy}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="card-arrow" href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14} /></a></article>)}</div>
      <div className="project-note reveal"><span>Also on the shelf</span><a href="https://github.com/Tarkan-Zarrouk/CPT" target="_blank" rel="noreferrer">Grade 12 capstone project <ArrowUpRight size={14} /></a></div>
    </section>
  );
}
