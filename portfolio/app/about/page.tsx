import MovieSlideshow from "../components/MovieSlideshow";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <h1>About Me</h1>
        <p>
          This page shares more about who I am, 
          what I have worked on, and where I hope to grow next. 
          It includes my resume and application materials 
          alongside a short overview of my background, skills, and interests.
        </p>
      </section>

      <section className="document-grid">
        <article className="document-card scroll-reveal">
          <h2>Resume</h2>
          <p>
            View or download my resume as a PDF.
          </p>
          <a
            className="button primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Resume PDF
          </a>
        </article>

        <article className="document-card scroll-reveal">
          <h2>Cover Letter</h2>
          <p>
            View or download my cover letter as a PDF.
          </p>
          <a
            className="button secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Cover Letter PDF
          </a>
        </article>
      </section>

      <MovieSlideshow />
    </main>
  );
}
