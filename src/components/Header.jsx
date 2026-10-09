import { Menu, X } from "lucide-react";

export default function Header({
  menuOpen,
  navHidden,
  activeSection,
  onMenuToggle,
  onCloseMenu,
}) {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 mx-auto flex h-[86px] max-w-[1360px] items-center justify-between border-b border-line bg-paper/95 px-[42px] backdrop-blur-xl transition-transform duration-300 max-md:px-[22px] ${
        navHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        className="flex items-center gap-2.5 text-xs font-extrabold"
        href="#home"
        onClick={onCloseMenu}
      >
        <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-lime text-[9px] tracking-[-0.08em] text-dark">
          TZ
        </span>
        <span>Tarkan Zarrouk</span>
      </a>
      <button
        className="ml-auto border-0 bg-transparent text-ink md:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={onMenuToggle}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav
        className={`absolute left-0 right-0 top-[85px] flex-col gap-5 border-b border-line bg-paper p-[22px] text-xs font-medium md:static md:flex md:flex-row md:gap-[29px] md:border-0 md:bg-transparent md:p-0 ${
          menuOpen ? "flex" : "hidden"
        }`}
        aria-label="Primary navigation"
      >
        {["home", "work", "projects", "get in touch"].map((label) => {
          const section = label === "get in touch" ? "contact" : label;
          return (
            <a
              className={`relative text-xs font-medium text-muted after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:w-0 after:bg-ink after:transition-all hover:after:w-full ${
                activeSection === section ? "text-ink after:w-full" : ""
              }`}
              href={`#${section}`}
              key={section}
              onClick={onCloseMenu}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
