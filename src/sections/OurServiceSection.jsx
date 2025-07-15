import securityService from "../assets/security-service.png";
import administrativeService from "../assets/administration-service.png";
import assistantService from "../assets/assistant-service.png";

import * as LucideIcons from "lucide-react";

const ServiceCard = ({ backgroundImage, title, description, Icon }) => {
  return (
    <div
      className="relative flex flex-col w-full md:w-1/3 py-25 bg-center bg-cover bg-no-repeat items-center justify-center px-15 rounded-lg shadow-md overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-80 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center space-y-4">
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
    <section className=" bg-white-shadow w-full h-full ">
      <div className="flex flex-col max-w-screen-xl w-full py-24 lg:py-36 items-center justify-center mx-auto">
        <h4 className="text-accent">Our Service</h4>
        <h2 className="text-dark">
          We excels at delivering resource for your needs
        </h2>
        <div className="flex flex-row mt-10 gap-5">
          <ServiceCard
            backgroundImage={securityService}
            title="Security Service"
            description="We proudly provide certified and highly trained security
                personnel ready to be deployed across a wide range of industries
                and business environments."
            Icon={LucideIcons.Shield}
          />
          <ServiceCard
            backgroundImage={administrativeService}
            title="Administrative Officer Services"
            description="At Garda Setia Waspada, we provide highly meticulous, skilled, and courteous administrative personnel who are trained to support daily operations with precision and a positive attitude."
            Icon={LucideIcons.BookText}
          />
          <ServiceCard
            backgroundImage={assistantService}
            title="Office Assistant Services"
            description="We provide alert, disciplined, honest, and responsible office assistants who are ready to support your operations with a positive attitude, speed, and reliability."
            Icon={LucideIcons.BrushCleaning}
          />
        </div>
      </div>
    </section>
  );
};
export default OurServiceSection;
