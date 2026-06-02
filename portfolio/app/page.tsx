import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

const links = [
  {
    label: "Personal Projects",
    href: "/personal-project",
    description: "Personal projects and development work.",
  },
  {
    label: "Team Projects",
    href: "/team-project",
    description: "Collaborative projects built with shared design.",
  },
  {
    label: "About Me",
    href: "/about",
    description: "My interests, experience, and resume.",
  },
  {
    label: "GitHub",
    href: "https://github.com/vantemoon",
    description: "Code repositories and development projects.",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sun-ruoxin-sylvia/",
    description: "Professional profile and experience.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero-section">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-title-intro">
              Hello,
              <br />
              my name is
            </span>
            <span className="hero-title-name">SYLVIA SUN</span>
          </h1>
          <p>
            I am a game development student who enjoys building interactive systems, 
            gameplay features, and polished digital experiences. 
            Here you will find my personal projects, team projects, and professional work.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/personal-project">
              Projects
            </Link>
            <Link className="button secondary" href="/about">
              About Me
            </Link>
          </div>
        </div>

        <div className="hero-image" aria-label="Portrait of Sylvia">
          <Image
            className="hero-photo"
            src="/hero.jpg"
            alt="Portrait of Sylvia"
            width={720}
            height={720}
            priority
          />
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <h2>Projects and progress</h2>
        </div>
        <p className="bio-text">
          This portfolio reflects my journey as a game development student, 
          from individual experiments to collaborative projects. 
          Through these works, I hope to show how I approach gameplay systems, 
          technical implementation, visual presentation, and team projects.
        </p>
      </section>

      <section className="link-grid" aria-label="Portfolio links">
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <Link className="link-card" key={link.label} href={link.href}>
              <span>{link.label}</span>
              <small>{link.description}</small>
            </Link>
          ) : (
            <a className="link-card" key={link.label} href={link.href}>
              <span>{link.label}</span>
              <small>{link.description}</small>
            </a>
          )
        )}
      </section>
    </main>
  );
}
