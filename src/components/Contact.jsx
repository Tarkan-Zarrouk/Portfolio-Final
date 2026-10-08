import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return <section className="contact section" id="contact"><div className="contact-inner reveal"><div className="eyebrow">03 / Contact</div><h2>Contact</h2><p>For opportunities, questions, or a good problem to solve, reach out through LinkedIn or email.</p></div><div className="contact-links reveal delay-1"><span>Get in touch</span><a href="https://www.linkedin.com/in/tarkan-zarrouk/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="mailto:tarkan.zarrouk@gmail.com"><Mail size={17} /> Email me <ArrowUpRight size={14} /></a></div></section>;
}
