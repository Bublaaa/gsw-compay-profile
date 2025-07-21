import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as LucideIcons from "lucide-react";

import securityService from "../assets/security-service.png";
import administrativeService from "../assets/administration-service.png";
import assistantService from "../assets/assistant-service.png";

const serviceData = [
  {
    backgroundImage: securityService,
    title: "Security Service",
    description:
      "We offer certified, well-trained security personnel who are fully prepared to serve in diverse industries and dynamic work environments with professionalism and readiness.",
    Icon: LucideIcons.Shield,
  },
  {
    backgroundImage: administrativeService,
    title: "Administrative Officer Services",
    description:
      "Our administrative staff are courteous, detail-oriented, and trained to provide efficient support for day-to-day operations with professionalism and precision.",
    Icon: LucideIcons.BookText,
  },
  {
    backgroundImage: assistantService,
    title: "Office Assistant Services",
    description:
      "We supply disciplined, trustworthy, and proactive office assistants who bring speed, responsibility, and a positive mindset to every task.",
    Icon: LucideIcons.BrushCleaning,
  },
];

const ServiceCard = ({ backgroundImage, title, description, Icon, index }) => {
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
      className="group relative flex flex-col w-full h-fit lg:h-full rounded-lg shadow-md overflow-hidden"
    >
      <div className="h-1/4 bg-accent overflow-hidden">
        <img
          src={backgroundImage}
          alt={backgroundImage}
          className="h-auto w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="z-20 h-2/3 text-center space-y-4 items-center justify-center mt-[-40px] pb-10 px-5">
        <div className=" p-5 w-fit bg-white-shadow rounded-full shadow-md mx-auto">
          {Icon && <Icon className="text-accent  w-10 h-10" />}
        </div>
        <h2 className="text-dark text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 text-sm px-2">{description}</p>
      </div>
      <div className="absolute inset-0 bg-white opacity-50 z-10 pointer-events-none" />
    </motion.div>
  );
};

const OurServiceSection = ({}) => {
  return (
    <section id="our-service" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-xl w-full md:py-40 py-10 px-5 md:px-0 items-start justify-center mx-auto md:gap-10 gap-5">
        <div className="flex flex-col gap-5 md:px-30">
          <h4 className="text-accent">Our Service</h4>
          <h2 className="text-dark">
            We excel at delivering resources for your needs
          </h2>
          <p className="text-gray-600 max-w-2xl">
            At PT Garda Setia Waspada, we specialize in providing reliable,
            skilled, and well-trained personnel to support a wide range of
            operational needs — from security to administration — ensuring your
            business runs smoothly and securely.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-10 gap-5 md:px-30">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              backgroundImage={service.backgroundImage}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServiceSection;
