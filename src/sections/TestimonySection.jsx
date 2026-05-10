import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { testimonies } from "../constants/TestimonyData";

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
    <section id="testimony" className="w-full bg-white h-full">
      <div className="flex flex-col items-center justify-center md:gap-10 gap-5 md:py-40 py-10">
        <div className="flex flex-col md:px-30 text-center h-full">
          <motion.h4
            className="text-accent"
            variants={fadeIn("up", "spring", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            What Our Clients Say
          </motion.h4>
          <motion.h2
            className="text-dark"
            variants={fadeIn("up", "spring", 0.1, 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Trusted by Industry Leaders Across Sectors
          </motion.h2>
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
                  <blockquote className="italic md:text-2xl text-lg text-dark">
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
