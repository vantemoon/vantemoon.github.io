import SiteHeader from "../components/SiteHeader";

export default function PersonalProjectPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>Personal Projects</h1>
        <p>
          A focused page for personal portfolio pieces, beginning with DFS I.
          Each project includes visual placeholders and descriptions for every
          required item.
        </p>
      </section>

      <section className="project-layout">
        <article className="project-card featured">
          <div className="stacked-media">
            <div className="media-placeholder static-media">
              <span>DFS I Static Image Placeholder</span>
            </div>
            <div className="media-placeholder animated-media">
              <span>DFS I Animated Image Placeholder</span>
            </div>
          </div>
          <div>
            <h2>DFS I</h2>
            <p>
              DFS I is represented as a personal project item with one static
              image placeholder, one animated image placeholder, and descriptive
              copy. Replace these placeholders with the final visual materials
              when ready.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
