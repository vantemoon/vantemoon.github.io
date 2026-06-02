import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

export default function PersonalProjectPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>Personal Projects</h1>
        <p>
          A collection of my individual project work, exploring game systems, 
          interaction design, technical implementation, and visual presentation. 
          These projects reflect how I approach development independently, 
          from early ideas and prototypes to more polished playable experiences.
        </p>
      </section>

      <section className="project-layout">
        <article className="project-card featured">
          <div className="stacked-media">
            <div className="static-media">
              <Image
                className="project-image"
                src="/dfs1.png"
                alt="DFS I static project preview"
                width={960}
                height={540}
              />
            </div>
            <div className="media-placeholder animated-media">
              <span>DFS I Animated Image Placeholder</span>
            </div>
          </div>
          <div>
            <h2>DFS I</h2>
            <p className="project-label">DFS I · Card-Based Village Simulation</p>
            <p>
              For my DFS I project, I am recreating the core gameplay loop of Stacklands 
              as a card-based village simulation. The project focuses on draggable cards, 
              stack-based interactions, timed actions, resource gathering, crafting, 
              food management, card packs, and simple automatic combat. My main goal is 
              to build a flexible card system and user interface that can support expandable 
              gameplay content.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
