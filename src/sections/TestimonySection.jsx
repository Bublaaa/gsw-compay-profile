import * as LucideIcon from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonies = [
  {
    client: "Mining Sector Client",
    message:
      '"PT Garda Setia Waspada exceeded our expectations with their innovative solutions and seamless execution. A trusted partner for our critical projects."',
  },
  {
    client: "Power Generation Client",
    message:
      '"Their technical expertise and attention to detail have been invaluable to our operations. We highly recommend PT Garda Setia Waspada for any industrial project."',
  },
  {
    client: "Oil & Gas Sector Client",
    message:
      '"Professionalism, quality, and reliability define PT Garda Setia Waspada. We look forward to many more successful projects together."',
  },
];

const TestimonySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const nextItem = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonies.length);
  const prevItem = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonies.length) % testimonies.length
    );

  useEffect(() => {
    const interval = setInterval(() => nextItem(), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="flex bg-white-shadow w-full h-full ">
      <div className="relative flex max-w-screen-xl w-full py-24 lg:py-36 items-center justify-center mx-auto">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {testimonies.map((t, i) => (
            <div
              key={i}
              className="carousel-item min-w-full flex justify-center px-4 md:px-8 lg:px-16 "
            >
              <figure className="text-center max-w-3xl py-10 px-40 rounded-lg bg-white">
                <LucideIcon.Quote className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                {/* <svg
                  className="w-10 h-10 mx-auto mb-3 text-gray-400 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg> */}
                <blockquote className="italic text-lg text-dark ">
                  {t.message}
                </blockquote>
                <figcaption className="mt-6 font-semibold text-accent">
                  {t.client}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevItem}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30  hover:bg-gray-700 ">
            <LucideIcon.ChevronLeft className="w-4 h-5 text-accent" />
          </span>
        </button>

        <button
          onClick={nextItem}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 hover:bg-gray-700  ">
            <LucideIcon.ChevronRight className="w-4 h-5 text-accent" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default TestimonySection;
