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
      className="bg-dark-hover bg-center bg-cover bg-no-repeat bg-blend-multiply w-full h-full flex justify-center"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 px-4 max-w-screen-xl w-full h-full md:py-60 py-30">
        {" "}
        {/* Left Content */}
        <div className="md:order-1 order-2 relative flex w-full lg:w-1/2 h-full justify-end items-end">
          <img
            src={securityImages}
            alt="security-guard"
            className="h-auto max-h-[60vh] w-auto grayscale z-10 ml-auto"
          />
          <motion.div
            className="absolute bottom-0 right-0 z-20 p-4 sm:p-6 bg-accent rounded-lg shadow-lg"
            variants={fadeIn("right", "spring", 0.1, 1.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-2">
                <LucideIcons.ShieldCheck className="w-8 h-8 text-white" />
                <div>
                  <h2 className="text-white text-sm font-semibold">
                    Certified
                  </h2>
                  <p className="text-gray-200 text-xs leading-tight">
                    Certified security services provider
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <LucideIcons.Gauge className="w-8 h-8 text-white" />
                <div>
                  <h2 className="text-white text-sm font-semibold">
                    Fast Response
                  </h2>
                  <p className="text-gray-200 text-xs leading-tight">
                    Immediate security reaction on call
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right Content */}
        <div className="md:order-2 order-1 flex flex-col w-full lg:w-1/2  h-full  text-white justify-end items-start">
          <div className="flex flex-col">
            <motion.h4
              className="text-accent"
              variants={fadeIn("left", "spring", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Garda Setia Waspada
            </motion.h4>
            <motion.h2
              variants={fadeIn("left", "spring", 0.1, 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Professional Security Services
            </motion.h2>
            <motion.p
              className="text-gray-300"
              variants={fadeIn("left", "spring", 0.1, 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              A professional security service provider with extensive
              experience...
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-4">
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
      </div>
    </section>
  );
};

export default HeroSection;
