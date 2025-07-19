import securityService from "../assets/security-service.png";
import administrativeService from "../assets/administration-service.png";
import assistantService from "../assets/assistant-service.png";

import * as LucideIcons from "lucide-react";

const serviceData = [
  {
    backgroundImage: securityService,
    title: "Security Service",
    description:
      "We offer certified, well-trained security personnel who are fully prepared to serve in diverse industries and dynamic work environments with professionalism and readiness.",
    Icon: LucideIcons.Shield,
  },
  {
    backgroundImage: administrativeService,
    title: "Administrative Officer Services",
    description:
      "Our administrative staff are courteous, detail-oriented, and trained to provide efficient support for day-to-day operations with professionalism and precision.",
    Icon: LucideIcons.BookText,
  },
  {
    backgroundImage: assistantService,
    title: "Office Assistant Services",
    description:
      "We supply disciplined, trustworthy, and proactive office assistants who bring speed, responsibility, and a positive mindset to every task.",
    Icon: LucideIcons.BrushCleaning,
  },
];

const ServiceCard = ({ backgroundImage, title, description, Icon }) => {
  return (
    <div className="group relative flex flex-col w-full rounded-lg shadow-md overflow-hidden">
      {/* Image with hover scale */}
      <div className="h-1/3 w-full overflow-hidden">
        <img
          src={backgroundImage}
          alt={backgroundImage}
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 transition duration-500 group-hover:bg-accent/30" />
      </div>

      {/* Semi-transparent white layer */}
      <div className="absolute inset-0 bg-white opacity-50 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-4 mt-[-50px] px-10">
        <div className="flex flex-row p-5 w-fit items-center justify-center bg-white rounded-full shadow-md mx-auto">
          {Icon && <Icon className="text-accent w-15 h-15" />}
        </div>
        <h2 className="text-dark text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 text-sm px-2">{description}</p>
      </div>
    </div>
  );
};

const OurServiceSection = ({}) => {
  return (
    <section className="bg-white-shadow w-full h-full">
      <div className="flex flex-col max-w-screen-xl w-full h-full md:py-40 items-start justify-center mx-auto md:gap-10 gap-5">
        <div className="flex flex-col gap-5 md:px-30">
          <h4 className="text-accent">Our Service</h4>
          <h2 className="text-dark">
            We excel at delivering resources for your needs
          </h2>
          <p className="text-gray-600 max-w-2xl">
            At PT Garda Setia Waspada, we specialize in providing reliable,
            skilled, and well-trained personnel to support a wide range of
            operational needs — from security to administration — ensuring your
            business runs smoothly and securely.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 h-full md:px-30">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              backgroundImage={service.backgroundImage}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServiceSection;
