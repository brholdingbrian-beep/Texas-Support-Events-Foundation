import { useState } from "react";

const nav: { href: string; label: string; cta?: boolean }[] = [
  { href: "#range-day", label: "Range Day" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#board", label: "Board" },
  { href: "#donate", label: "Donate", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-name">Texas Support Events</span>
          <span className="brand-sub">Foundation · Austin, TX</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.cta ? "btn btn-primary btn-header" : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
