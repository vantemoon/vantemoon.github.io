"use client";

import Image from "next/image";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "C++ Game Engine",
    label: "Custom 2D/3D Engine Architecture",
    tags: ["C++", "D3D11", "Rendering", "Tools", "Gameplay"],
    intro:
      "A custom 2D/3D C++ engine with gameplay, physics, UI, animation, rendering, tooling, and debug systems.",
    imageSrc: "/math.png",
    staticAlt: "Custom C++ game engine project preview",
    videoSrc: "/engine.mp4",
    animatedLabel: "Custom C++ Game Engine Demo Placeholder",
    description:
      "I developed a custom 2D/3D game engine in C++ with gameplay, physics, UI, animation, and rendering systems. The engine includes D3D11 rendering for geometry, shaders, lighting, and camera controls, plus data-driven definitions, gameplay logic, console commands, and debug visualization tools. I also built multiple demos with the engine to validate its gameplay, rendering, and tooling systems.",
  },
  {
    title: "Stacklands",
    label: "Playable Card-Based Village Prototype",
    tags: ["C++", "Gameplay", "UI", "Systems", "Prototype"],
    intro:
      "A playable card-based village prototype built in my custom engine, with packs, stacking, crafting, survival, and combat.",
    imageSrc: "/stacklands.png",
    staticAlt: "Stacklands static project preview",
    videoSrc: "/stacklands.mp4",
    animatedLabel: "Stacklands Animated Image Placeholder",
    description:
      "I built a playable card-based village prototype inspired by Stacklands in my custom engine. The project currently includes 24 card definitions across Villagers, Structures, Resources, Food, and Mobs; 11 harvesting, growing, crafting, and population recipes; four card packs; a 60-second day cycle; food consumption and starvation; basic economy, population growth, animal behavior, and combat. I implemented card rendering, selection, dragging, stacking, stack separation, click-to-open packs with fixed and weighted draws, selling cards for coins, pack-buying regions, timed recipe progress bars, reusable and consumed ingredients, chance-based results, repeated harvesting with limited yields, and a food/gold/day-progress HUD. The simulation also supports babies maturing into Villagers, Rabbits and Chickens wandering and producing resources, automatic Villager-versus-Mob combat with attack speed, hit chance, damage, defense, health, target selection, corpse and raw-meat drops, cursor-centered zoom, WASD panning, an in-game guide with recipe reference and day-length slider, pause, slow motion, single-frame stepping, reset, and developer-console support.",
  },
];

export default function PersonalProjectPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>Personal Projects</h1>
        <p>
          A collection of my individual project work, exploring game systems,
          interaction design, technical implementation, and visual presentation.
          These projects reflect how I approach development independently, from
          early ideas and prototypes to more polished playable experiences.
        </p>
      </section>

      <section className="project-layout">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.title;

          return (
          <article
            aria-expanded={isExpanded}
            className={`project-card featured ${isExpanded ? "expanded" : ""}`}
            key={project.title}
            onClick={() =>
              setExpandedProject(isExpanded ? null : project.title)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setExpandedProject(isExpanded ? null : project.title);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="stacked-media">
              <div className="static-media">
                <Image
                  className="project-image"
                  src={project.imageSrc}
                  alt={project.staticAlt}
                  width={960}
                  height={540}
                />
              </div>
              <div
                className={`media-placeholder animated-media ${project.videoSrc ? "has-media" : ""}`}
              >
                {project.videoSrc ? (
                  <video
                    className="project-video"
                    src={project.videoSrc}
                    aria-label={`${project.title} animated project preview`}
                    poster={project.imageSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <span>{project.animatedLabel}</span>
                )}
              </div>
            </div>
            <div className="personal-project-copy">
              <h2>{project.title}</h2>
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
