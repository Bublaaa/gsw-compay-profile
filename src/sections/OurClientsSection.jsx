// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { clientLogos } from "../constants/ClientLogoData";

const OurClientsSection = () => {
  return (
    <section id="our-products-section" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-lg w-full md:py-40 py-20 px-5 items-center justify-center mx-auto gap-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="w-full text-accent">Trusted by Industry Leaders</h2>
          <h5 className="w-full text-secondary">
            Building long-term partnerships with clients across diverse
            industries.
          </h5>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 my-5">
          {clientLogos.map((logo, index) => (
            <motion.a
              key={index}
              className="w-fit h-fit bg-white rounded-lg shadow-md"
              variants={fadeIn("up", "spring", 0.1, (index + 1) * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                className="object-fit w-full h-auto"
                src={logo.src}
                alt={logo.alt}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
