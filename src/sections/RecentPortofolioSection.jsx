import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "../constants/PortofolioData";
import { MoveRight } from "lucide-react";
import placeholderImage from "../assets/placeholderImage.png";

const PortofolioCard = ({ index, title, date, kind, image, description }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderImage;
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.5 }}
      className="flex flex-col p-5 bg-white shadow-md rounded-lg"
    >
      <img
        src={image}
        alt={title}
        onError={handleImageError}
        className="rounded-md"
      />
      <div className="flex flex-row w-full justify-between items-center mt-4">
        <div className="text-accent px-7 py-2 bg-accent/10 rounded-full capitalize text-sm font-semibold">
          <h6>{kind}</h6>
        </div>
        <h6 className="text-sm text-gray-500">{date}</h6>
      </div>
      <h4 className="text-lg font-semibold mt-2">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </motion.div>
  );
};

const RecentPortofolioSection = () => {
  // Sort by date descending and take the 3 most recent
  const recentItems = [...portfolioData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section id="recent-portofolio" className="bg-white w-full">
      <div className="flex flex-col md:max-w-screen-xl w-full md:py-40 py-10 px-5 md:px-0 items-start justify-center mx-auto md:gap-10 gap-5">
        <div className="flex md:flex-row flex-col justify-between gap-5 md:items-end items-start">
          <div className="flex flex-col gap-5 md:px-30">
            <h4 className="text-accent">Our Portfolio</h4>
            <h2 className="text-dark text-3xl font-bold">Our Latest Work</h2>
            <p className="text-gray-600 max-w-2xl">
              At PT. Garda Setia Waspada, we take pride in delivering skilled,
              disciplined personnel tailored to your operational needs. Our
              portfolio reflects our commitment to excellence through
              continuous, up-to-date training and professional
              development—ensuring every team we deploy is prepared, competent,
              and aligned with the latest industry standards.
            </p>
          </div>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-red-100 dark:focus:ring-red-950"
          >
            See Full Portfolio
            <MoveRight className="ml-3" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full md:px-30">
          {recentItems.map((item, index) => (
            <PortofolioCard
              key={index}
              index={index}
              title={item.name}
              date={item.date}
              kind={item.kind}
              image={item.images[0]}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPortofolioSection;
