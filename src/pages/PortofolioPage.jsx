import { fadeIn } from "../utils/motion";
import { useState } from "react";
import { portfolioData } from "../constants/PortofolioData";
import { footerData } from "../constants/FooterData";
import PortofolioCard from "../components/PortofolioCard";
import FooterSection from "../sections/FooterSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const groupByYear = (data) => {
  return data.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});
};

const PortofolioPage = () => {
  const grouped = groupByYear(portfolioData);
  const sortedYears = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  const [selectedYear, setSelectedYear] = useState(sortedYears[0]);

  const handleCheckboxChange = (year) => {
    setSelectedYear(year);
  };

  const yearsToShow = sortedYears.filter((year) => year <= selectedYear);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col">
          <motion.h4
            className="text-accent"
            variants={fadeIn("left", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Our Works
          </motion.h4>
          <motion.h2
            className="text-dark"
            variants={fadeIn("left", "spring", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Portfolio Timeline
          </motion.h2>
          <motion.p
            variants={fadeIn("left", "spring", 0.1, 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Start your journey with us
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 py-6">
          {[...sortedYears].reverse().map((year, index) => (
            <motion.div
              variants={fadeIn("down", "spring", 0.1, (index + 1) * 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <input
                id={`checkbox-${year}`}
                type="checkbox"
                value={year}
                checked={year <= selectedYear}
                onChange={() => handleCheckboxChange(year)}
                className="text-accent cursor-pointer accent-accent hidden peer"
              />
              <label
                key={year}
                htmlFor={`checkbox-${year}`}
                className="flex w-fit px-5 py-2 items-center cursor-pointer peer-checked:border-2 peer-checked:text-accent hover:bg-gray-100 peer-checked:border-accent peer-checked:bg-white  rounded-lg bg-white shadow-md text-gray-500 peer-checked:font-semibold font-regular"
              >
                <span className="text-sm sm:text-lg">{year}</span>
              </label>
            </motion.div>
          ))}
        </div>
        {/* Portfolio Sections */}
        <div className="flex flex-col gap-20">
          {yearsToShow.map((year) => (
            <section
              id={year.toString()}
              key={year}
              className="flex flex-col gap-6"
            >
              {/* Year Header with Divider */}
              <div className="flex items-center gap-4 w-full">
                <div className="flex-grow h-px bg-gray-400" />
                <h3 className="text-2xl font-bold text-accent bg-white-shadow px-4">
                  {year}
                </h3>
                <div className="flex-grow h-px bg-gray-400" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {grouped[year].map((item, index) => (
                  <PortofolioCard
                    key={index}
                    id={item.id}
                    index={index}
                    title={item.name}
                    date={new Date(item.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                    kind={item.kind}
                    image={item.images?.[0]}
                    description={item.description}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <FooterSection footerData={footerData} />
    </div>
  );
};

export default PortofolioPage;
