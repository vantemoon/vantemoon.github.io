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
      "For TGP I, I worked as the main programmer on Out of the Dark, a top-down horror game focused on light, darkness, and psychological tension. I implemented the menu system, enemy AI, sanity system, and audio system, while also helping maintain build stability and support teammates with technical issues. This project taught me the importance of clear communication, early system planning, and balancing urgent bug fixes with long-term feature work.",
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
      "For TGP II, the team built a kart racing game with a playful hamster-ball theme. As lead programmer, my main responsibility was keeping the technical side of the project organized and aligned with the wider team. I created tasks, prepared builds, coordinated with other discipline leads and stakeholders, supported team communication, and helped present the project during reviews and milestones.",
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
            className={`project-card ${isExpanded ? "expanded" : ""}`}
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
              <p className="project-description">
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
