import { Check } from "lucide-react";

const principles = [["01", "Find the signal", "I start by asking better questions. Understanding the context makes the eventual solution sharper."], ["02", "Make it legible", "Complexity is inevitable. Confusion is optional. I translate ideas into systems people can navigate."], ["03", "Keep learning", "I stay curious, test what I think I know, and use feedback to make the next version stronger."]];

export default function Approach() {
  return <section className="approach section" id="approach"><div className="section-heading reveal"><div><div className="eyebrow">02 / Approach</div><h2>Thoughtful by<br /><i>design.</i></h2></div><p>I bring a product mindset to every layer of the work, from the first question to the final interaction.</p></div><div className="approach-grid">{principles.map(([number, title, copy]) => <article className="approach-card reveal" key={number}><span>{number}</span><Check size={16} /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>;
}
