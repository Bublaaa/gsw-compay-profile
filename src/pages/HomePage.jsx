import HeroSection from "../sections/HeroSection";
import OurServiceSection from "../sections/OurServiceSection";

const HomePage = ({}) => {
  return (
    <div className="w-full h-full flex flex-col ">
      <HeroSection />
      <OurServiceSection />
    </div>
  );
};

export default HomePage;
