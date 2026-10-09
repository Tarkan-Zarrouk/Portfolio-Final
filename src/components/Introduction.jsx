import { ArrowUpRight } from "lucide-react";

export default function Introduction() {
  return (
    <section
      className="mx-auto grid min-h-[710px] max-w-none grid-cols-[minmax(0,1fr)_320px] items-center border-b border-line bg-paper px-[max(42px,calc((100vw-1180px)/2))] pb-[90px] pt-[100px] max-md:block max-md:min-h-[720px] max-md:px-[22px] max-md:pt-[90px]"
      id="home"
    >
      <div className="max-w-[720px] animate-rise">
        <h1 className="mx-0 mb-[30px] mt-[34px] text-[clamp(72px,10vw,132px)] font-bold leading-[0.88] tracking-[-0.1em] max-md:text-[clamp(68px,18vw,100px)]">
          I&apos;m Tarkan.{" "}
          <span className="font-serif font-normal" aria-hidden="true">
            👋
          </span>
        </h1>
        <p className="max-w-[525px] text-[15px] leading-[1.85] text-muted">
          Passionate. Hardworking. Inquisitive.
        </p>
        <div className="mt-8 flex items-center gap-[27px]">
          <a
            className="inline-flex items-center justify-between bg-lime px-[18px] py-[15px] text-[10px] font-bold text-lime-ink transition-transform hover:-translate-y-1"
            href="#work"
          >
            View my work
          </a>
          <a
            className="inline-flex items-center gap-2 border-b border-[#aeb7ae] pb-[5px] text-[10px] font-bold"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume{" "}
          </a>
        </div>
        <div className="mt-[45px] flex max-w-[525px] gap-[25px] border-t border-line pt-[18px] text-[11px] tracking-[0.06em] text-muted max-md:flex-wrap max-md:gap-x-[22px] max-md:gap-y-[15px]">
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            href="https://github.com/Tarkan-Zarrouk"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            href="https://www.linkedin.com/in/tarkan-zarrouk/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            href="mailto:tarkan.zarrouk@gmail.com"
          >
            EMail <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="ml-auto w-full max-w-[278px] animate-rise border-y border-[#b9c4b8] py-5 [animation-delay:120ms] max-md:mx-0 max-md:mt-[65px] max-md:max-w-[320px]">
        <div className="h-[235px] overflow-hidden bg-gradient-to-br from-[#dbe4d7] to-[#b5c6b3]">
          <img
            className="block h-full w-full object-cover"
            src="./Users/tarkanzarrouk/Desktop/Portfolio/public/Photo.png"
            alt="Tarkan Zarrouk"
          />
        </div>
      </div>
    </section>
  );
}
