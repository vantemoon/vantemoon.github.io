import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "Out of the Dark",
    label: "TGP I - Team Horror Game",
    embedUrl: "https://www.youtube.com/embed/yxlQpKpnryw",
    description:
      "For TGP I, I worked as the main programmer on Out of the Dark, a top-down horror game focused on light, darkness, and psychological tension. I implemented the menu system, enemy AI, sanity system, and audio system, while also helping maintain build stability and support teammates with technical issues. This project taught me the importance of clear communication, early system planning, and balancing urgent bug fixes with long-term feature work.",
  },
  {
    title: "Hamsterballin'",
    titleLines: ["Hamster", "ballin'"],
    label: "TGP II - Kart Racer",
    video: "Hamsterballin' Trailer Placeholder",
    description:
      "For TGP II, the team built a kart racing game with a playful hamster-ball theme. As lead programmer, my main responsibility was keeping the technical side of the project organized and aligned with the wider team. I created tasks, prepared builds, coordinated with other discipline leads and stakeholders, supported team communication, and helped present the project during reviews and milestones.",
  },
];

export default function TeamworkPage() {
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
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="video-placeholder">
              {project.embedUrl ? (
                <iframe
                  src={project.embedUrl}
                  title={`${project.title} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <span>{project.video}</span>
              )}
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
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
