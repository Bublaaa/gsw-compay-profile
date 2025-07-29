// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../utils/motion";
import { teamData } from "../constants/OurTeamData";

const PersonCard = ({ image, name, role, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.5 }}
      className="group relative flex flex-col w-full h-fit lg:h-full overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out gap-1
"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-cover rounded-lg bg-white"
      />
      <h5 className="px-2 text-accent">{name}</h5>
      <p className="px-2 font-regular">{role}</p>
    </motion.div>
  );
};

const OurTeamSection = () => {
  return (
    <section id="our-team" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-xl w-full md:py-40 py-10 px-5 md:px-0 items-start justify-center mx-auto md:gap-10 gap-5">
        <div className="flex flex-col gap-2 items-end justify-end w-full">
          <motion.h4
            variants={fadeIn("right", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-accent"
          >
            Our Team
          </motion.h4>
          <motion.h2
            className="text-dark"
            variants={fadeIn("right", "spring", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Team work make dream work
          </motion.h2>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-2 md:gap-10 gap-5 md:px-30 bg-white-shadow">
          {teamData.map((person, index) => (
            <PersonCard
              key={index}
              index={index}
              image={person.image}
              name={person.name}
              role={person.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurTeamSection;
