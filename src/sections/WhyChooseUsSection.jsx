import * as LucideIcons from "lucide-react";
import { fadeIn } from "../utils/motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { certificationList } from "../constants/CertificationData";
import { reasonData } from "../constants/ReasonData";

const CertificateCard = ({ title, index, pdfUrl }) => {
  const handleOpenPdf = () => {
    if (pdfUrl) window.open(pdfUrl, "_blank");
  };

  return (
    <motion.div
      onClick={handleOpenPdf}
      className="flex flex-col bg-white shadow-md text-white-shadow hover:shadow-lg p-2 rounded-lg group cursor-pointer transition-all duration-300"
      variants={fadeIn("right", "spring", 0.1, (index + 1) * 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col h-full border border-2 border-white-shadow p-1 pr-3 rounded-lg justify-between">
        <LucideIcons.CircleCheckBig className="w-15 h-15 text-accent/30 group-hover:text-accent" />
        <h5 className="text-accent/100 text-end">{title}</h5>
      </div>
    </motion.div>
  );
};

const ReasonCard = ({ icon, title, description, index }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.HelpCircle;

  return (
    <motion.div
      className="relative group"
      variants={fadeIn("right", "spring", 0.1, (index + 1) * 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute -top-10 -left-5 z-0">
        <h1 className="text-[5rem] font-bold text-accent/10 group-hover:text-accent/70 select-none transition duration-300">
          {index + 1}
        </h1>
      </div>

      {/* Main card content */}
      <div className="relative z-10 flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <IconComponent className="text-accent w-10 h-10 mb-4" />
        <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="bg-white-shadow w-full">
      <div className="max-w-screen-xl w-full mx-auto px-5 md:px-10 py-10 md:py-20">
        <div className="text-end mb-10">
          <motion.h4
            className="text-accent"
            variants={fadeIn("left", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Why Choose Us?
          </motion.h4>
          <motion.h2
            variants={fadeIn("left", "spring", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            What we deliver
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {reasonData.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              index={index}
            />
          ))}
        </div>
        <div className="text-start my-5">
          <h2 className="text-accent text-2xl md:text-4xl font-bold">
            Certifications
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-10 gap-5">
          {certificationList.map((certification, index) => (
            <CertificateCard
              key={index}
              title={certification.title}
              index={index}
              pdfUrl={certification.pdfUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
