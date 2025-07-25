import logo from "../assets/logo.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutUsSection = () => {
  return (
    <section id="about-us-section" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-lg w-full md:py-40 pt-20 px-5 md:px-30 items-start justify-center mx-auto gap-10">
        {/* Pictures */}
        <div className="flex flex-row w-full items-center md:gap-10 gap-5">
          <motion.img
            variants={fadeIn("up", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="h-1/4 w-1/4 object-contain "
            src={logo}
            alt="GSW_Logo"
          />
          <div className="flex flex-col">
            <motion.h4
              className="text-accent"
              variants={fadeIn("left", "spring", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              About Us
            </motion.h4>
            <motion.h2
              variants={fadeIn("left", "spring", 0.1, 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              PT Garda Setia Waspada
            </motion.h2>
            <motion.h6
              className="text-gray-600"
              variants={fadeIn("left", "spring", 0.1, 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Innovating Technical Services for Industry Leaders
            </motion.h6>
          </div>
        </div>
        {/* Headline */}
        <div className="flex flex-col gap-10 w-full">
          <div className="grid grid-cols-1 gap-5">
            <motion.p
              variants={fadeIn("up", "spring", 0.1, 1.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Garda Setia Waspada is a professional security service provider
              with extensive experience and deep expertise in the industrial
              security sector. Highly skilled personnel are continuously trained
              and developed under the guidance of experienced and certified
              professionals. This process is supported by modern facilities and
              infrastructure to ensure that every client’s security needs are
              met with the highest standards.
            </motion.p>
            <motion.p
              variants={fadeIn("up", "spring", 0.1, 1.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              A wide range of personnel and tailored security services are
              offered by Garda Setia Waspada, designed to meet the specific
              requirements of clients across various environments—including
              office buildings, apartments, residential areas, tourist
              attractions, warehouses, and factories. All services are delivered
              with readiness and precision, ensuring that any potential security
              challenges are addressed effectively and professionally.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
