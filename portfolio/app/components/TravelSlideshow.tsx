"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const travelPhotos = [
  {
    image: "/travel/travel-placeholder-01.svg",
    label: "Travel photo 01",
    place: "Location to be added",
    takenAt: "Date to be added",
  },
  {
    image: "/travel/travel-placeholder-02.svg",
    label: "Travel photo 02",
    place: "Location to be added",
    takenAt: "Date to be added",
  },
  {
    image: "/travel/travel-placeholder-03.svg",
    label: "Travel photo 03",
    place: "Location to be added",
    takenAt: "Date to be added",
  },
  {
    image: "/travel/travel-placeholder-04.svg",
    label: "Travel photo 04",
    place: "Location to be added",
    takenAt: "Date to be added",
  },
];

export default function TravelSlideshow() {
  const [slideState, setSlideState] = useState<{
    activeIndex: number;
    previousIndex: number | null;
  }>({ activeIndex: 0, previousIndex: null });
  const { activeIndex, previousIndex } = slideState;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setSlideState((current) => ({
        activeIndex: (current.activeIndex + 1) % travelPhotos.length,
        previousIndex: current.activeIndex,
      }));
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (previousIndex === null) return;

    const timer = window.setTimeout(() => {
      setSlideState((current) => ({ ...current, previousIndex: null }));
    }, 540);

    return () => window.clearTimeout(timer);
  }, [activeIndex, previousIndex]);

  const showPhoto = (index: number) => {
    setSlideState((current) =>
      index === current.activeIndex
        ? current
        : { activeIndex: index, previousIndex: current.activeIndex }
    );
  };

  const activePhoto = travelPhotos[activeIndex];
  const previousPhoto =
    previousIndex === null ? null : travelPhotos[previousIndex];

  return (
    <section className="travel-section scroll-reveal" aria-labelledby="travel-title">
      <div className="travel-heading">
        <h2 id="travel-title">Travel Through My Lens</h2>
        <p>
          A place for moments collected while travelling. Personal photos will
          replace these placeholders soon.
        </p>
      </div>

      <div className="travel-slideshow">
        <div className="film-frame">
          <div className="movie-still">
            {previousPhoto && (
              <Image
                alt=""
                aria-hidden="true"
                className="movie-still-image movie-still-previous"
                fill
                sizes="(max-width: 860px) calc(100vw - 44px), 760px"
                src={previousPhoto.image}
                unoptimized
              />
            )}
            <Image
              alt={`${activePhoto.label} placeholder`}
              className="movie-still-image movie-still-current"
              fill
              key={activePhoto.image}
              sizes="(max-width: 860px) calc(100vw - 44px), 760px"
              src={activePhoto.image}
              unoptimized
            />
          </div>

          <div className="movie-hover-panel travel-hover-panel">
            <h3>{activePhoto.place}</h3>
            <p>{activePhoto.takenAt}</p>
          </div>

          {previousPhoto && (
            <span className="movie-black-transition" aria-hidden="true" />
          )}
          <Image
            alt=""
            aria-hidden="true"
            className="film-overlay"
            fill
            sizes="(max-width: 920px) calc(100vw - 44px), 920px"
            src="/overlay.png"
          />
        </div>

        <div className="movie-dots" aria-label="Select travel photo">
          {travelPhotos.map((photo, index) => (
            <button
              aria-current={activeIndex === index ? "true" : undefined}
              aria-label={`Show ${photo.label.toLowerCase()}`}
              className={activeIndex === index ? "movie-dot active" : "movie-dot"}
              key={photo.image}
              onClick={() => showPhoto(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
