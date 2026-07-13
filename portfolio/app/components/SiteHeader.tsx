"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcon from "./SocialIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Personal Projects", href: "/personal-project" },
  { label: "Team Projects", href: "/team-project" },
  { label: "About Me", href: "/about" },
  { label: "GitHub", href: "https://github.com/vantemoon", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sun-ruoxin-sylvia/",
    icon: "linkedin",
  },
] as const;

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
            <a
              aria-label={link.label}
              className="social-nav-link"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
            >
              {"icon" in link ? (
                <SocialIcon className="social-icon" name={link.icon} />
              ) : (
                link.label
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
