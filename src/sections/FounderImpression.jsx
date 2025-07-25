// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import founderImage from "../assets/FounderImage.png";

const FounderImpression = () => {
  return (
    <section id="founder-impression-section" className="relative bg-mid-dark">
      <div className="flex md:flex-row flex-col gap-5w-full items-end justify-start">
        <div className="flex flex-col gap-5 md:order-2 order-1 md:py-20 lg:py-30 pt-10 px-10">
          <div className="flex flex-col">
            <motion.h4
              className="w-full text-accent"
              variants={fadeIn("right", "spring", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Founder Impression
            </motion.h4>
            <motion.h2
              className="w-full text-white"
              variants={fadeIn("right", "spring", 0.1, 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Erick Lembong
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <motion.p
              className="text-sm md:text-sm lg:text-base max-w-sm md:max-w-3xl lg:max-w-4xl text-white "
              variants={fadeIn("up", "spring", 0.1, 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              At PT. Garda Setia Waspada, our motto—"We Come, People Feel
              Safe"—captures our core mission: providing security as a basic
              human need and a foundation for peace and well-being. We're more
              than a service provider; we're a trusted, proactive, and
              dependable partner. Over the years, we’ve grown into a strategic
              ally across industries—from industrial zones and property to
              government—delivering integrated security and support with
              integrity, adaptability, and professionalism.
            </motion.p>
            <motion.p
              className="text-sm md:text-sm lg:text-base max-w-sm md:max-w-3xl lg:max-w-4xl text-white"
              variants={fadeIn("up", "spring", 0.1, 1.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              We believe true security goes beyond physical presence—it includes
              legal compliance, a strong corporate image, and real peace of
              mind. That’s why we invest in certified, well-trained personnel, a
              quick-response system, and transparent, audit-ready management.
              Supported by complete legal documentation and ISO/BNSP standards,
              our HSSE (Health, Safety, Security, Environment) services protect
              both people and workplaces, while strengthening our clients’
              credibility and public trust.
            </motion.p>
            <motion.p
              className="text-sm md:text-sm lg:text-base max-w-sm md:max-w-3xl lg:max-w-4xl text-white"
              variants={fadeIn("up", "spring", 0.1, 1.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              At PT. Garda Setia Waspada, success is not measured by the number
              of personnel deployed, but by the confidence and peace of mind we
              instill in our clients. This commitment to excellence,
              reliability, and long-term partnership is what drives every aspect
              of our work—and it is the foundation upon which we continue to
              grow.
            </motion.p>
          </div>
        </div>
        <div className="items-end justify-start w-full lg:w-1/2 md:order-1 order-2 pr-20 md:pr-0">
          <img
            src={founderImage}
            className="h-full w-full object-contain "
            alt="Founder"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderImpression;
