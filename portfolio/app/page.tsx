import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SocialIcon from "./components/SocialIcon";

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
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sun-ruoxin-sylvia/",
    description: "Professional profile and experience.",
    icon: "linkedin",
  },
] as const;

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
            I am a game developer with a passion for creating engaging 
            interactive experiences. My career interests center on gameplay 
            programming, game engine development, and the technical systems 
            that make interactive experiences responsive, expressive, 
            and engaging. This portfolio brings together my individual 
            projects, collaborative games, and approach to solving technical 
            and creative challenges.
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

      <section className="content-band scroll-reveal">
        <div className="section-heading">
          <h2>Projects and progress</h2>
        </div>
        <p className="bio-text">
          This portfolio documents how I design, build, and refine game systems
          across different engines and team environments. It includes my custom
          C++ engine and gameplay prototypes, team projects developed in Unity
          and Unreal Engine, examples of programming leadership, and additional
          background about my skills and interests.
        </p>
      </section>

      <section className="link-grid" aria-label="Portfolio links">
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <Link className="link-card scroll-reveal" key={link.label} href={link.href}>
              <span>{link.label}</span>
              <small>{link.description}</small>
            </Link>
          ) : (
            <a
              className="link-card scroll-reveal"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
            >
              <span className="link-card-heading">
                {"icon" in link && (
                  <SocialIcon className="link-card-icon" name={link.icon} />
                )}
                {link.label}
              </span>
              <small>{link.description}</small>
            </a>
          )
        )}
      </section>
    </main>
  );
}
