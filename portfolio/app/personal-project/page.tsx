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
      "I developed a custom 2D/3D game engine in C++ and used it to build a collection of gameplay projects and technical demos. Its D3D11 renderer supports textured and indexed geometry, vertex and index buffers, per-frame and per-model constant buffers, HLSL shaders, cameras, directional and ambient lighting, and tangent-space normal mapping. I also implemented an OBJ loader from scratch to parse mesh data and bring external 3D models into the engine without relying on a third-party model-loading library. Engine utilities generate 3D primitives such as cylinders and cones with UVs, normals, tangents, and bitangents, while runtime debug views make it possible to inspect textures, surface vectors, and lighting calculations. Beyond rendering, the engine includes input, physics, UI, animation, gameplay state machines, XML-driven content definitions, debug drawing, and a developer console with runtime commands and command-history editing. I validated these systems in projects including a fully rendered 3D chess game with legal piece movement, castling, en passant, pawn promotion, animated moves, and data-driven piece geometry, alongside other 2D and 3D gameplay prototypes.",
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
            className={`project-card featured scroll-reveal ${isExpanded ? "expanded" : ""}`}
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
