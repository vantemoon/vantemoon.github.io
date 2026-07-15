"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const movies = [
  {
    title: "La La Land",
    year: "2016",
    director: "Damien Chazelle",
    image: "/movie/la-la-land.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    image: "/movie/the-dark-knight.jpg",
  },
  {
    title: "In the Mood for Love",
    year: "2000",
    director: "Wong Kar-Wai",
    image: "/movie/in-the-mood-for-love.jpg",
  },
  {
    title: "F1: The Movie",
    year: "2025",
    director: "Joseph Kosinski",
    image: "/movie/f1-the-movie.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    director: "Christopher Nolan",
    image: "/movie/interstellar.jpg",
  },
  {
    title: "Inception",
    year: "2010",
    director: "Christopher Nolan",
    image: "/movie/inception.avif",
  },
  {
    title: "Project Hail Mary",
    year: "2026",
    director: "Phil Lord Christopher Miller",
    image: "/movie/project-hail-mary.jpeg",
  },
  {
    title: "Robot Dreams",
    year: "2023",
    director: "Pablo Berger",
    image: "/movie/robot-dreams.jpg",
  },
  {
    title: "Love Letter",
    year: "1995",
    director: "Shunji Iwai",
    image: "/movie/love-letter.webp",
  },
  {
    title: "The Prestige",
    year: "2006",
    director: "Christopher Nolan",
    image: "/movie/the-prestige.png",
  },
];

const movieDescription =
  "I love immersing myself in different stories, characters, and cinematic worlds. Two of my favorite directors are Christopher Nolan and Wong Kar-Wai. Nolan films are known for complex narratives and mind-bending concepts, and I am always in awe of how he masterfully weaves together different elements to create a cohesive and thought-provoking experience. On the other hand, Wong Kar-Wai films are characterized by their poignant and intimate exploration of human emotions, often told through stunning cinematography and powerful performances.";

export default function MovieSlideshow() {
  const [slideState, setSlideState] = useState<{
    activeIndex: number;
    previousIndex: number | null;
  }>({ activeIndex: 0, previousIndex: null });
  const [hasMounted, setHasMounted] = useState(false);
  const { activeIndex, previousIndex } = slideState;
  const activeMovie = movies[activeIndex];
  const previousMovie = previousIndex === null ? null : movies[previousIndex];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const timer = window.setInterval(() => {
      setSlideState((current) => ({
        activeIndex: (current.activeIndex + 1) % movies.length,
        previousIndex: current.activeIndex,
      }));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [hasMounted]);

  useEffect(() => {
    if (previousIndex === null) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSlideState((current) => ({ ...current, previousIndex: null }));
    }, 540);

    return () => window.clearTimeout(timer);
  }, [activeIndex, previousIndex]);

  const showMovie = (index: number) => {
    setSlideState((current) =>
      index === current.activeIndex
        ? current
        : { activeIndex: index, previousIndex: current.activeIndex }
    );
  };

  if (!hasMounted) {
    return (
      <section className="movie-section scroll-reveal" aria-label="Screen favorites">
        <h2>Screen Favorites</h2>

        <div className="movie-stage">
          <div className="film-frame movie-frame-loading" aria-hidden="true" />
          <p className="movie-description">{movieDescription}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="movie-section scroll-reveal" aria-label="Screen favorites">
      <h2>Screen Favorites</h2>

      <div className="movie-stage">
        <div className="film-frame">
          <div className="movie-still">
            {previousMovie && (
              <Image
                alt=""
                aria-hidden="true"
                className="movie-still-image movie-still-previous"
                fill
                sizes="(max-width: 860px) calc(100vw - 44px), 760px"
                src={previousMovie.image}
              />
            )}
            <Image
              alt={`${activeMovie.title} movie still`}
              className="movie-still-image movie-still-current"
              fill
              key={activeMovie.image}
              priority={activeIndex === 0}
              sizes="(max-width: 860px) calc(100vw - 44px), 760px"
              src={activeMovie.image}
            />
          </div>
          <div className="movie-hover-panel">
            <h3>
              {activeMovie.title} <span>({activeMovie.year})</span>
            </h3>
            <p>{activeMovie.director}</p>
          </div>
          {previousMovie && (
            <span className="movie-black-transition" aria-hidden="true" />
          )}
          <Image
            className="film-overlay"
            src="/overlay.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 920px) calc(100vw - 44px), 920px"
          />
        </div>

        <div className="movie-dots" aria-label="Select movie">
          {movies.map((movie, index) => (
            <button
              aria-label={`Show ${movie.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={activeIndex === index ? "movie-dot active" : "movie-dot"}
              key={movie.title}
              onClick={() => showMovie(index)}
              type="button"
            />
          ))}
        </div>

        <p className="movie-description">{movieDescription}</p>
      </div>
    </section>
  );
}
