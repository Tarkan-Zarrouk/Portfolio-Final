import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="mx-auto grid max-w-[1280px] grid-cols-[1fr_280px] gap-[100px] px-[42px] py-[135px] max-md:block max-md:px-[22px] max-md:py-[100px]"
      id="contact"
    >
      <div className="animate-rise">
        <h2 className="my-[25px] text-[clamp(48px,6.7vw,86px)] font-bold leading-[0.94] tracking-[-0.09em]">
          Get in touch
        </h2>
        <p className="mb-[31px] max-w-[400px] text-sm leading-[1.8] text-muted">
          If you'd like to chat, feel free to shoot me a message throug here!
        </p>
      </div>
      <div className="pt-2 animate-rise [animation-delay:120ms] max-md:mt-[65px]">
        <a
          className="flex items-center gap-2.5 border-b border-line py-[15px] text-xs font-bold transition-all hover:pl-2"
          href="https://www.linkedin.com/in/tarkan-zarrouk/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <ArrowUpRight size={14} />
        </a>
        <a
          className="flex items-center gap-2.5 border-b border-line py-[15px] text-xs font-bold transition-all hover:pl-2"
          href="mailto:tarkan.zarrouk@gmail.com"
        >
          Email <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
