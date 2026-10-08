import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return <section className="contact section" id="contact"><div className="contact-inner reveal"><div className="eyebrow">03 / Start a conversation</div><h2>Have a good<br /><i>problem to solve?</i></h2><p>I&apos;m looking for a team where I can contribute, keep learning, and help turn ambitious ideas into useful products.</p><a className="button button-lime" href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer">Say hello on LinkedIn <ArrowUpRight size={16} /></a></div><div className="contact-links reveal delay-1"><span>Find me online</span><a href="https://github.com/Tarkan-Zarrouk" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a></div></section>;
}
