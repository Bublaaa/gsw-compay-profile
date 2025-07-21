import AboutUsSection from "../sections/AboutUsSection";
import VisionMissionSection from "../sections/VisionMission";
import FounderImpression from "../sections/FounderImpression";
import FooterSection from "../sections/FooterSection";

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
      <AboutUsSection />
      <VisionMissionSection />
      <FounderImpression />
      <FooterSection footerData={footerData} />
    </div>
  );
};

export default HomePage;
