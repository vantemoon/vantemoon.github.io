import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "C++ Game Engine",
    label: "Custom 2D/3D Engine Architecture",
    staticAlt: "Custom C++ game engine project preview",
    animatedLabel: "Custom C++ Game Engine Demo Placeholder",
    description:
      "I developed a custom 2D/3D game engine in C++ with gameplay, physics, UI, animation, and rendering systems. The engine includes D3D11 rendering for geometry, shaders, lighting, and camera controls, plus data-driven definitions, gameplay logic, console commands, and debug visualization tools. I also built multiple demos with the engine, including DFS I, to validate its gameplay, rendering, and tooling systems.",
  },
  {
    title: "DFS I",
    label: "DFS I - Card-Based Village Simulation",
    staticAlt: "DFS I static project preview",
    animatedLabel: "DFS I Animated Image Placeholder",
    description:
      "For my DFS I project, I am recreating the core gameplay loop of Stacklands as a card-based village simulation. The project focuses on draggable cards, stack-based interactions, timed actions, resource gathering, crafting, food management, card packs, and simple automatic combat. My main goal is to build a flexible card system and user interface that can support expandable gameplay content.",
  },
];

export default function PersonalProjectPage() {
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
        {projects.map((project) => (
          <article className="project-card featured" key={project.title}>
            <div className="stacked-media">
              <div className="static-media">
                <Image
                  className="project-image"
                  src="/dfs1.png"
                  alt={project.staticAlt}
                  width={960}
                  height={540}
                />
              </div>
              <div className="media-placeholder animated-media">
                <span>{project.animatedLabel}</span>
              </div>
            </div>
            <div>
              <h2>{project.title}</h2>
              <p className="project-label">{project.label}</p>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
