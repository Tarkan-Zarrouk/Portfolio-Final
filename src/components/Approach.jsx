import { Check } from "lucide-react";

const principles = [["Find the signal", "I start by asking better questions. Understanding the context makes the eventual solution sharper."], ["Make it legible", "Complexity is inevitable. Confusion is optional. I translate ideas into systems people can navigate."], ["Keep learning", "I stay curious, test what I think I know, and use feedback to make the next version stronger."]];

export default function Approach() {
  return <section className="approach section" id="approach"><div className="section-heading reveal"><div><div className="eyebrow">Approach</div><h2>Thoughtful by<br /><i>design.</i></h2></div><p>I bring a product mindset to every layer of the work, from the first question to the final interaction.</p></div><div className="approach-grid">{principles.map(([title, copy]) => <article className="approach-card reveal" key={title}><Check size={16} /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>;
}
