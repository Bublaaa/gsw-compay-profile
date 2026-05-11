import wallpaper from "../assets/hero-wallpaper.webp";
import securityImages from "../assets/security-guard.webp";
import * as LucideIcons from "lucide-react";
// eslint-disable-next-line no-unused-vars
import whiteOverlay from "../assets/whiteOverlay.svg";
import shadow from "../assets/shadow.svg";
import shield from "../assets/shield.svg";
import halo from "../assets/halo.svg";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-center bg-cover bg-no-repeat w-full min-h-screen"
    >
      <ShadowSVG />
      <HaloSVG />
      <ShieldSVG />
      <WhiteOverlaySVG />
      {/* ================= CONTENT ================= */}

      <div className="relative z-40 flex min-h-screen items-center mt-20 justify-center px-4">
        <div className="text-center text-dark">
          <h1 className="font-bold leading-tight">
            Professional Workforce Solutions <br /> for Your Business Operations
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Trusted workforce partner for offices, buildings, retail, and
            corporate operations.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <motion.a
              href="#our-service"
              className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-red-100"
              variants={fadeIn("up", "fade", 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Explore Service
              <LucideIcons.MoveDown className="ml-3" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const ShadowSVG = () => {
  return (
    <div className="absolute left-1/2 top-[40%] z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <img src={shadow} alt="" className="w-[1500px] max-w-none opacity-80" />
    </div>
  );
};

const HaloSVG = () => {
  return (
    <div className="absolute left-1/2 top-[18%] sm:top-[20%] md:top-[24%] lg:top-[20%] z-20 -translate-x-1/2 pointer-events-none">
      <img
        src={halo}
        alt=""
        className="w-[700px] sm:w-[800px] md:w-[750px] lg:w-[900px] xl:w-[1000px] max-w-none opacity-80"
      />
    </div>
  );
};

const ShieldSVG = () => {
  return (
    <div className="absolute left-1/2 top-[42%] md:top-[48%] z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <img
        src={shield}
        alt=""
        className="w-[500px] sm:w-[520px] md:w-[500px] lg:w-[580px] xl:w-[650px] max-w-none"
      />
    </div>
  );
};

const WhiteOverlaySVG = () => {
  return (
    <div className="absolute bottom-1/20 left-1/2 z-30 -translate-x-1/2 pointer-events-none">
      <img src={whiteOverlay} alt="" className="w-full min-w-[1200px]" />
    </div>
  );
};
