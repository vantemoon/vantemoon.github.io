"use client";

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "Out of the Dark",
    label: "TGP I - Team Horror Game",
    tags: ["Unity", "C#", "Gameplay", "AI", "Audio"],
    intro:
      "A top-down horror team project where I worked as main programmer on core systems, AI, UI, sanity, and audio.",
    embedUrl: "https://www.youtube.com/embed/yxlQpKpnryw",
    description:
      "For TGP I, I was responsible for all programming on Out of the Dark, a top-down horror game built around light, darkness, and psychological tension. I created a modular Unity menu framework with shared prefabs and reusable scripts for input navigation, button highlighting, scene transitions, resolution settings, fullscreen controls, and pause behavior. I built state-based enemy AI that moves between idle, patrol, chase, and attack behaviors using raycasts, distance and visibility checks, the player's sanity level, and timed attack cooldowns. The sanity system continuously responds to darkness, nearby enemies, and safe light sources, combining decay and recovery with escalating visual feedback. I also developed a central audio manager that layers ambient loops, enemy cues, and event-driven effects according to player state, enemy proximity, and sanity. Beyond feature work, I maintained build stability, diagnosed integration bugs, clarified technical requirements, followed up on tasks, and helped artists and level designers resolve tool and setup issues. The project strengthened my ability to define system expectations early, communicate across disciplines, and balance urgent fixes with planned feature development.",
  },
  {
    title: "Hamsterballin'",
    titleLines: ["Hamsterballin'"],
    label: "TGP II - Kart Racer",
    tags: ["Unreal Engine", "Blueprint", "Leadership", "Gameplay"],
    intro:
      "A team kart-racing project where I led programming coordination, builds, task planning, and milestone support.",
    embedUrl: "https://www.youtube.com/embed/DW9M2h70mUY",
    description:
      "For TGP II, our team built Hamsterballin', a kart-racing game with a playful hamster-ball theme. As lead software developer, I was responsible for turning the team's goals into an actionable technical plan and keeping programming aligned with design, art, audio, and production. I broke features into scoped tasks, clarified ownership and acceptance criteria, prioritized work around milestone needs, tracked dependencies, and communicated schedule or implementation risks before they became blockers. I coordinated programming check-ins, supported teammates when they encountered technical problems, and helped maintain shared development practices so work could be integrated reliably. I also triaged bugs, monitored build stability, prepared and validated milestone builds, and balanced short-term fixes against longer-term technical needs. As the programming representative in lead and stakeholder discussions, I reported progress, negotiated scope, surfaced cross-discipline dependencies, documented decisions, and helped the team prepare project reviews and presentations. The role taught me how to lead through clear expectations, active communication, delegation, and technical support while keeping the wider project goals ahead of any single feature.",
  },
];

export default function TeamworkPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [videoOffsets, setVideoOffsets] = useState<Record<string, number>>({});

  const toggleProject = (projectTitle: string, card: HTMLElement) => {
    const isExpanded = expandedProject === projectTitle;

    if (!isExpanded) {
      const video = card.querySelector<HTMLElement>(".video-placeholder");

      if (video) {
        const cardStyles = window.getComputedStyle(card);
        const contentTop =
          parseFloat(cardStyles.borderTopWidth) +
          parseFloat(cardStyles.paddingTop);
        const collapsedOffset =
          video.getBoundingClientRect().top -
          card.getBoundingClientRect().top -
          contentTop;

        setVideoOffsets((offsets) => ({
          ...offsets,
          [projectTitle]: Math.max(0, collapsedOffset),
        }));
      }
    }

    setExpandedProject(isExpanded ? null : projectTitle);
  };

  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>Team Projects</h1>
        <p>
          A collection of collaborative game projects where I worked closely
          with teammates across programming, design, art, audio, and production.
          These projects show how I contribute to shared goals, communicate
          across disciplines, and take ownership of technical systems within a team.
        </p>
      </section>

      <section className="project-layout">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.title;

          return (
          <article
            aria-expanded={isExpanded}
            className={`project-card scroll-reveal ${isExpanded ? "expanded" : ""}`}
            key={project.title}
            onClick={(event) => toggleProject(project.title, event.currentTarget)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleProject(project.title, event.currentTarget);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div
              className="video-placeholder"
              style={
                isExpanded
                  ? { marginTop: videoOffsets[project.title] ?? 0 }
                  : undefined
              }
            >
              <iframe
                src={project.embedUrl}
                title={`${project.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h2>
                {project.titleLines
                  ? project.titleLines.map((line) => (
                      <span className="title-line" key={line}>
                        {line}
                      </span>
                    ))
                  : project.title}
              </h2>
              <p className="project-label">{project.label}</p>
              <div className="project-tags" aria-label={`${project.title} tags`}>
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className="project-description"
                key={isExpanded ? "expanded" : "collapsed"}
              >
                {isExpanded ? project.description : project.intro}
              </p>
              <span className="project-expand-prompt">
                {isExpanded ? "Click to collapse" : "Click card to expand"}
              </span>
            </div>
          </article>
          );
        })}
      </section>
    </main>
  );
}
