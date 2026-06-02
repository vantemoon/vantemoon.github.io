import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>About Me</h1>
        <p>
          This page shares a little more about who I am, 
          what I have worked on, and where I hope to grow next. 
          It includes my resume and application materials 
          alongside a short overview of my background, skills, and interests.
        </p>
      </section>

      <section className="document-grid">
        <article className="document-card">
          <h2>Resume</h2>
          <p>
            View or download my resume as a PDF.
          </p>
          <a className="button primary" href="/resume.pdf">
            Open Resume PDF
          </a>
        </article>

        <article className="document-card">
          <h2>Cover Letter</h2>
          <p>
            View or download my cover letter as a PDF.
          </p>
          <a className="button secondary" href="/resume.pdf">
            Open Cover Letter PDF
          </a>
        </article>
      </section>
    </main>
  );
}
