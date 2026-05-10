import { portfolioData } from "../constants/PortofolioData";
import { MoveRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import PortofolioCard from "../components/PortofolioCard";

const RecentPortofolioSection = () => {
  // Sort by date descending and take the 3 most recent
  const recentItems = [...portfolioData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section id="recent-portofolio" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-xl w-full md:py-40 py-10 px-5 md:px-0 items-start justify-center mx-auto md:gap-10 gap-5">
        <div className="flex md:flex-row flex-col w-full justify-between gap-5 md:items-end items-start md:px-30">
          <div className="flex flex-col">
            <motion.h4
              className="text-accent"
              variants={fadeIn("right", "spring", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Our Portfolio
            </motion.h4>
            <motion.h2
              className="text-dark"
              variants={fadeIn("right", "spring", 0.1, 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Our Latest Work
            </motion.h2>
            <motion.p
              className="max-w-2xl"
              variants={fadeIn("right", "spring", 0.1, 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              At PT. Garda Setia Waspada, we take pride in delivering skilled,
              disciplined personnel tailored to your operational needs. Our
              portfolio reflects our commitment to excellence through
              continuous, up-to-date training and professional
              development—ensuring every team we deploy is prepared, competent,
              and aligned with the latest industry standards.
            </motion.p>
          </div>
          <motion.a
            href="/our-portfolio"
            className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-red-100"
            variants={fadeIn("left", "spring", 0.1, 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            See Full Portfolio
            <MoveRight className="ml-3" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full md:px-30">
          {recentItems.map((item, index) => (
            <PortofolioCard
              key={index}
              index={index}
              id={item.id}
              title={item.name}
              date={item.date}
              kind={item.kind}
              image={item.images[0]}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPortofolioSection;
