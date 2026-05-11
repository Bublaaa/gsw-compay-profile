// eslint-disable-next-line no-unused-vars
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeIn } from "../utils/motion";
import { serviceData } from "../constants/ServiceData";
import { div } from "framer-motion/client";

const ServiceCard = ({
  title,
  Icon,
  index,
  service,
  description,
  selectedService,
  setSelectedService,
}) => {
  const isSelected = selectedService === service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      {/* DESCRIPTION */}

      <motion.div
        initial={false}
        animate={{
          opacity: isSelected ? 1 : 0,
          y: isSelected ? 0 : 2,
        }}
        transition={{ duration: 0.35 }}
        className="pointer-events-none absolute -top-24 left-1/2 w-full -translate-x-1/2"
      >
        <p className="w-full font-bold text-end leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* BUTTON */}

      <button
        type="button"
        onClick={() => setSelectedService(service)}
        className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
          isSelected
            ? "scale-105 border-accent bg-accent shadow-2xl"
            : "border-zinc-200 bg-white hover:scale-105 hover:border-red-500 hover:bg-accent-hover"
        }`}
      >
        <div className="relative z-20 flex flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-full bg-white/10 p-5">
            {Icon && (
              <Icon
                className={`h-10 w-10 transition-colors duration-300 ${
                  isSelected
                    ? "text-white"
                    : "text-red-500 group-hover:text-white"
                }`}
              />
            )}
          </div>

          <h2
            className={`text-xl font-semibold transition-colors duration-300 ${
              isSelected ? "text-white" : "text-black group-hover:text-white"
            }`}
          >
            {title}
          </h2>
        </div>
      </button>
    </motion.div>
  );
};

const BackgroundCover = ({ selectedService }) => {
  const activeService = serviceData.find(
    (service) => service.service === selectedService,
  );

  if (!activeService) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeService.service}
          src={activeService.backgroundImage}
          alt=""
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 70 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute right-0 top-0 w-[45%] max-w-[1000px] min-w-md object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const OurServiceSection = () => {
  const [selectedService, setSelectedService] = useState("security");
  return (
    <section id="our-service" className="relative w-full bg-white-shadow">
      <BackgroundCover selectedService={selectedService} />

      <div className="relative flex flex-col z-20 md:max-w-screen-xl w-full min-h-screen md:py-40 py-10 px-5 md:px-10 items-start justify-between mx-auto md:gap-10 gap-5">
        <div className="flex flex-col">
          <motion.h4
            variants={fadeIn("right", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-accent"
          >
            Our Service
          </motion.h4>
          <motion.h2
            className="text-dark"
            variants={fadeIn("right", "spring", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            We excel at delivering resources for your needs
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl"
            variants={fadeIn("right", "spring", 0.1, 1.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            At PT Garda Setia Waspada, we specialize in providing reliable,
            skilled, and well-trained personnel to support a wide range of
            operational needs — from security to administration — ensuring your
            business runs smoothly and securely.
          </motion.p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.service}
              index={index}
              service={service.service}
              title={service.title}
              Icon={service.Icon}
              description={service.description}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServiceSection;
