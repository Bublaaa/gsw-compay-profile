import { Lightbulb, Goal } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission-section" className="bg-white-shadow w-full">
      <div className="flex flex-col gap-10 mx-auto w-full md:max-w-4xl md:py-40  py-20 px-5">
        <div className="flex flex-col w-full items-center text-center">
          <motion.h5
            variants={fadeIn("up", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full text-secondary"
          >
            Vision & Mission
          </motion.h5>
          <motion.h1
            className="text-accent"
            variants={fadeIn("up", "spring", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            "We Come, People Feel Safe."
          </motion.h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 w-full">
          <motion.div
            className="flex flex-col gap-5 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 items-center px-10 py-10 transition duration-300"
            variants={fadeIn("right", "spring", 0.1, 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <Lightbulb className="w-15 h-15 text-accent" />
              <h3 className="text-accent">Vision</h3>
            </div>
            <p>
              To be recognized as a leading provider of highly qualified
              security personnel, delivering exceptional human resource services
              in the field of safety and protection—wherever we are present,
              people feel secure.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-5 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 items-center px-10 py-10 transition duration-300"
            variants={fadeIn("left", "spring", 0.1, 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <Goal className="w-15 h-15 text-accent" />
              <h3 className="text-accent">Mission</h3>
            </div>
            <p>
              To be recognized as a leading provider of highly qualified
              security personnel, delivering exceptional human resource services
              in the field of safety and protection—wherever we are present,
              people feel secure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
