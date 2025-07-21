import HeroSection from "../sections/HeroSection";
import OurServiceSection from "../sections/OurServiceSection";
import TestimonySection from "../sections/TestimonySection";
import FooterSection from "../sections/FooterSection";
import ImpactSection from "../sections/ImpactSection";
import OurClientsSection from "../sections/OurClientsSection";

const footerData = {
  address:
    "Komplek Pesona Metropolitan, Ruko Niaga Gardenia Residence Blok RA 38, Rawalumbu Kec Rawalumbu, Kota Bekasi, Jawa Barat 17116",
  phoneLink: "tel:+628123456789",
  phoneNumber: "+62 812-3456-789",
  businessEmailLink: "mailto:admin@gsw.id",
  businessEmail: "admin@gsw.id",
};
const HomePage = ({}) => {
  return (
    <div className="w-full h-full flex flex-col ">
      <HeroSection />
      <OurServiceSection />
      <ImpactSection />
      <TestimonySection />
      <OurClientsSection />
      <FooterSection footerData={footerData} />
    </div>
  );
};

export default HomePage;
