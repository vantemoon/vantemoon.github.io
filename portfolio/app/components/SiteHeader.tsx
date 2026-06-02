"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Personal Projects", href: "/personal-project" },
  { label: "Team Projects", href: "/team-project" },
  { label: "About Me", href: "/about" },
  { label: "GitHub", href: "https://github.com/vantemoon" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sun-ruoxin-sylvia/" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Sylvia Sun
      </Link>
      <nav aria-label="Primary navigation">
        {navLinks.map((link) => {
          const isInternal = link.href.startsWith("/");
          const isActive =
            isInternal &&
            (pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href)));

          return isInternal ? (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "active-link" : undefined}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ) : (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
