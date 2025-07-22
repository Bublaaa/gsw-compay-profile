import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
      className="flex flex-col p-5 bg-white shadow-md rounded-lg"
    >
      <img
        src={image}
        alt={title}
        onError={handleImageError}
        className="rounded-md"
      />
      <div className="flex flex-row w-full justify-between items-center mt-4">
        <div className="text-accent px-5 py-2 bg-accent/10 rounded-full capitalize text-sm font-semibold">
          <h6>{kind}</h6>
        </div>
        <h6 className="text-sm text-gray-500">{date}</h6>
      </div>
      <h4 className="text-lg font-semibold mt-2">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </motion.div>
  );
};

export default PortofolioCard;
