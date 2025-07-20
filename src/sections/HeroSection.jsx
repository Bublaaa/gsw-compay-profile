import wallpaper from "../assets/hero-wallpaper.png";
import securityImages from "../assets/security-guard.png";
import * as LucideIcons from "lucide-react";

const HeroSection = () => {
  return (
    // bg-center bg-no-repeat  bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-blend-multiply
    <section
      id="home"
      className="bg-dark-hover bg-center bg-cover bg-no-repeat bg-blend-multiply w-full h-full flex justify-center"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 px-4 max-w-screen-xl w-full h-full md:py-60 py-20">
        {" "}
        {/* Left Content */}
        <div className="md:order-1 order-2 relative flex w-full lg:w-1/2 h-full justify-end items-end">
          <img
            src={securityImages}
            alt="security-guard"
            className="h-auto max-h-[60vh] w-auto grayscale z-10 ml-auto"
          />
          <div className="absolute bottom-0 right-0 z-20 p-4 sm:p-6 bg-accent rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-2">
                <LucideIcons.ShieldCheck className="w-8 h-8 text-white" />
                <div>
                  <h2 className="text-white text-sm font-semibold">
                    Certified
                  </h2>
                  <p className="text-gray-200 text-xs leading-tight">
                    Certified security services provider
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <LucideIcons.Gauge className="w-8 h-8 text-white" />
                <div>
                  <h2 className="text-white text-sm font-semibold">
                    Fast Response
                  </h2>
                  <p className="text-gray-200 text-xs leading-tight">
                    Immediate security reaction on call
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="md:order-2 order-1 flex flex-col w-full lg:w-1/2  h-full gap-4 text-white justify-end items-start">
          <h4 className="text-accent text-sm uppercase">Garda Setia Waspada</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            Professional Security Services
          </h2>
          <p className="text-gray-300">
            A professional security service provider with extensive experience,
            and deep expertise in the industrial security sector
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-red-100 dark:focus:ring-red-950"
            >
              Get started
              <LucideIcons.MoveRight className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
