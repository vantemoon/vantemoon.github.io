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
            Placeholder for a resume PDF. Replace with the final resume document
            when ready.
          </p>
          <a className="button primary" href="#" aria-disabled="true">
            Resume Placeholder PDF
          </a>
        </article>

        <article className="document-card">
          <h2>Cover Letter</h2>
          <p>
            Placeholder for a cover letter or letter of intent PDF. Replace with
            the final document when ready.
          </p>
          <a className="button secondary" href="#" aria-disabled="true">
            Cover Letter Placeholder PDF
          </a>
        </article>
      </section>
    </main>
  );
}
