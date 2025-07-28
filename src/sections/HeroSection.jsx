import wallpaper from "../assets/hero-wallpaper.png";
import securityImages from "../assets/security-guard.png";
import * as LucideIcons from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" bg-center bg-cover bg-no-repeat bg-blend-multiply w-full h-full flex justify-center"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 px-4 max-w-screen-xl w-full h-full md:py-60 py-30">
        {/* Left Content */}
        <img
          src={securityImages}
          alt="security-guard"
          className="h-auto w-1/4 grayscale md:block hidden"
        />
        {/* Right Content */}
        <div className="flex flex-col w-full h-full  text-dark justify-start items-start gap-10">
          {/* Text Block */}
          <div className="flex flex-col gap-5">
            <motion.h3
              className="text-accent"
              variants={fadeIn("left", "spring", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Garda Setia Waspada
            </motion.h3>
            <motion.h1
              variants={fadeIn("left", "spring", 0.1, 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Professional Security Services
            </motion.h1>
            <motion.p
              className="text-gray-600"
              variants={fadeIn("left", "spring", 0.1, 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Backed by years of hands-on experience, we provide professional,
              trusted security services designed to anticipate threats, protect
              communities, and ensure safety every step of the way.
            </motion.p>
          </div>

          <motion.div
            className="p-4 sm:p-6 bg-white-shadow/80 rounded-lg w-fit"
            variants={fadeIn("right", "spring", 0.1, 1.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-row gap-20 ">
              <div className="flex-col items-center justify-center">
                <LucideIcons.ShieldCheck className="md:w-15 md:h-15 h-10 w-10 mx-auto text-accent" />
                <h5 className="text-mid-dark-2">Certified</h5>
              </div>

              <div className="flex flex-col items-center justify-center">
                <LucideIcons.Gauge className="md:w-15 md:h-15 h-10 w-10  mx-auto text-accent" />
                <h5 className="text-mid-dark-2">Fast Response</h5>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="#our-service"
            className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-accent/40 "
            variants={fadeIn("up", "spring", 0.1, 1.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Get started
            <LucideIcons.MoveRight className="ml-3" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
