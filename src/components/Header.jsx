import { Menu, X } from "lucide-react";

export default function Header({ menuOpen, navHidden, activeSection, onMenuToggle, onCloseMenu }) {
  return (
    <header className={`site-header${navHidden ? " nav-hidden" : ""}`}>
      <a className="brand" href="#home" onClick={onCloseMenu}>
        <span className="brand-mark">TZ</span>
        <span>Tarkan Zarrouk</span>
      </a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={onMenuToggle}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {["home", "work", "projects", "get in touch"].map((label) => {
          const section = label === "get in touch" ? "contact" : label;
          return <a className={activeSection === section ? "active" : ""} href={`#${section}`} key={section} onClick={onCloseMenu}>{label}</a>;
        })}
      </nav>
    </header>
  );
}
