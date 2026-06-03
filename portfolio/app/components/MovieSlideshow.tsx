"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const movies = [
  {
    title: "La La Land",
    year: "2016",
    director: "Damien Chazelle",
    image: "/la-la-land.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    image: "/the-dark-knight.jpg",
  },
  {
    title: "In the Mood for Love",
    year: "2000",
    director: "Wong Kar-Wai",
    image: "/in-the-mood-for-love.jpg",
  },
  {
    title: "F1: The Movie",
    year: "2025",
    director: "Joseph Kosinski",
    image: "/f1-the-movie.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    director: "Christopher Nolan",
    image: "/interstellar.jpg",
  },
  {
    title: "Inception",
    year: "2010",
    director: "Christopher Nolan",
    image: "/inception.avif",
  },
  {
    title: "Project Hail Mary",
    year: "2026",
    director: "Phil Lord Christopher Miller",
    image: "/project-hail-mary.jpeg",
  },
  {
    title: "Robot Dreams",
    year: "2023",
    director: "Pablo Berger",
    image: "/robot-dreams.jpg",
  },
  {
    title: "Love Letter",
    year: "1995",
    director: "Shunji Iwai",
    image: "/love-letter.webp",
  },
  {
    title: "The Prestige",
    year: "2006",
    director: "Christopher Nolan",
    image: "/the-prestige.png",
  },
];

const movieDescription =
  "I love immersing myself in different stories, characters, and cinematic worlds. Two of my favorite directors are Christopher Nolan and Wong Kar-Wai. Nolan films are known for complex narratives and mind-bending concepts, and I am always in awe of how he masterfully weaves together different elements to create a cohesive and thought-provoking experience. On the other hand, Wong Kar-Wai films are characterized by their poignant and intimate exploration of human emotions, often told through stunning cinematography and powerful performances.";

export default function MovieSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const activeMovie = movies[activeIndex];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % movies.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [hasMounted]);

  if (!hasMounted) {
    return (
      <section className="movie-section" aria-label="Screen favorites">
        <h2>Screen Favorites</h2>

        <div className="movie-stage">
          <div className="film-frame movie-frame-loading" aria-hidden="true" />
          <p className="movie-description">{movieDescription}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="movie-section" aria-label="Screen favorites">
      <h2>Screen Favorites</h2>

      <div className="movie-stage">
        <div className="film-frame">
          <div className="movie-still">
            <Image
              alt={`${activeMovie.title} movie still`}
              className="movie-still-image"
              fill
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
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>

        <p className="movie-description">{movieDescription}</p>
      </div>
    </section>
  );
}
