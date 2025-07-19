import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    const interval = setInterval(nextItem, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="w-full bg-white-shadow h-screen">
      <div className="flex flex-col items-center justify-center gap-10 py-40">
        <div className="flex flex-col gap-5 md:px-30 text-center">
          <h4 className="text-accent">What Our Clients Say</h4>
          <h2 className="text-dark">
            Trusted by Industry Leaders Across Sectors
          </h2>
        </div>
        <div className="relative max-w-screen-xl w-full overflow-hidden h-full flex items-center justify-center px-4 md:px-8">
          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-in-out w-full"
          >
            {testimonies.map((t, i) => (
              <div
                key={i}
                className="min-w-full flex items-center justify-center px-4 md:px-8"
              >
                <figure className="p-8 max-w-4xl w-full text-center">
                  <Quote className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                  <blockquote className="italic text-2xl text-dark">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2"
          >
            <span className="w-10 h-10 rounded-full bg-gray-800/10 hover:bg-gray-700/30 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-accent" />
            </span>
          </button>
          <button
            onClick={nextItem}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2"
          >
            <span className="w-10 h-10 rounded-full bg-gray-800/10 hover:bg-gray-700/30 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-accent" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
