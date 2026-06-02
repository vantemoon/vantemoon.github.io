import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "TGP I",
    video: "Embedded Video Placeholder",
    description:
      "A collaborative project entry for TGP I. Replace this copy with team goals, your contribution, tools used, and the final outcome.",
  },
  {
    title: "TGP II",
    video: "Embedded Video Placeholder",
    description:
      "A second collaborative project entry for TGP II. This space can hold a YouTube trailer embed and a concise explanation of the work.",
  },
];

export default function TeamworkPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>Team Projects</h1>
        <p>
          Two team project entries with embedded video placeholders and complete
          descriptive sections.
        </p>
      </section>

      <section className="project-layout">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="video-placeholder">
              <span>{project.video}</span>
            </div>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
