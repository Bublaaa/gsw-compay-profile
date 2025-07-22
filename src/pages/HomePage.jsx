import HeroSection from "../sections/HeroSection";
import OurServiceSection from "../sections/OurServiceSection";
import TestimonySection from "../sections/TestimonySection";
import FooterSection from "../sections/FooterSection";
import ImpactSection from "../sections/ImpactSection";
import OurClientsSection from "../sections/OurClientsSection";
import RecentPortofolioSection from "../sections/RecentPortofolioSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import { footerData } from "../constants/FooterData";

const HomePage = ({}) => {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroSection />
      <OurServiceSection />
      <WhyChooseUsSection />
      <RecentPortofolioSection />
      <ImpactSection />
      <TestimonySection />
      <OurClientsSection />
      <FooterSection footerData={footerData} />
    </div>
  );
};

export default HomePage;
