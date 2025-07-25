import AboutUsSection from "../sections/AboutUsSection";
import VisionMissionSection from "../sections/VisionMission";
import FounderImpression from "../sections/FounderImpression";
import FooterSection from "../sections/FooterSection";
import { footerData } from "../constants/FooterData";

const AboutUsPage = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <AboutUsSection />
      <VisionMissionSection />
      <FounderImpression />
      <FooterSection footerData={footerData} />
    </div>
  );
};

export default AboutUsPage;
