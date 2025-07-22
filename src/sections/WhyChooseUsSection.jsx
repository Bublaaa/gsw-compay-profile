import * as LucideIcons from "lucide-react";

export const certificationList = [
  { title: "ISO 9001" },
  { title: "ISO 45000" },
  { title: "ISO 14001" },
  { title: "ABUJAPI" },
  { title: "APSI" },
  { title: "Gada Utama" },
  { title: "APSI" },
  { title: "Intelijen" },
  { title: "HSSE" },
  { title: "Risk Management" },
  { title: "Fire Drill" },
  { title: "First Aid" },
];

export const reasonData = [
  {
    title: "Fully Certified & Legally Compliant",
    description:
      "Complete and active legal documentation, licenses, and operational permits.",
    icon: "BadgeCheck",
  },
  {
    title: "Responsive & Reliable Support Team",
    description:
      "Quick Response Unit is on standby, ensuring urgent matters are handled swiftly.",
    icon: "Gauge",
  },
  {
    title: "Committed to Continuous Improvement",
    description:
      "Actively participate in industry seminars and security forums organized by authorities.",
    icon: "TrendingUp",
  },
  {
    title: "Clean Reputation",
    description: "Transparent operations open to audits at any time.",
    icon: "ShieldCheck",
  },
  {
    title: "Globally Recognized Standards",
    description: "ISO certified for operations, safety, and environment.",
    icon: "Globe",
  },
  {
    title: "Flexible Collaboration",
    description:
      "We offer negotiable terms tailored to the needs of each client.",
    icon: "Handshake",
  },
];

const CertificateCard = ({ title }) => {
  return (
    <div className="flex flex-col bg-white shadow-md text-white-shadow  p-2  rounded-lg">
      <div className="flex flex-col h-full border border-2 border-white-shadow p-1 rounded-lg justify-between">
        <LucideIcons.CircleCheckBig className="w-15 h-15 text-white-shadow" />
        <h5 className="text-accent/100 text-end">{title}</h5>
      </div>
    </div>
  );
};

const ReasonCard = ({ icon, title, description, index }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.HelpCircle;

  return (
    <div className="relative">
      <div className="absolute -top-10 -left-5 z-0">
        <h1 className="text-[5rem] font-bold text-accent/10 select-none">
          {index + 1}
        </h1>
      </div>

      {/* Main card content */}
      <div className="relative z-10 flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <IconComponent className="text-accent w-10 h-10 mb-4" />
        <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="bg-white-shadow w-full">
      <div className="max-w-screen-xl w-full mx-auto px-5 md:px-10 py-10 md:py-20">
        <div className="text-end mb-10">
          <h4 className="text-accent font-semibold text-sm uppercase">
            Why Choose Us?
          </h4>
          <h2 className="text-dark text-2xl md:text-4xl font-bold">
            What we deliver
          </h2>
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
            <CertificateCard key={index} title={certification.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
