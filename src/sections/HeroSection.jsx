import wallpaper from "../assets/hero-wallpaper.png";
import securityImages from "../assets/security-guard.png";
import * as LucideIcons from "lucide-react";

const HeroSection = () => {
  return (
    // bg-center bg-no-repeat  bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-blend-multiply
    <section
      className="relative bg-dark-hover w-full h-full flex justify-center items-center bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 px-4 py-24 lg:py-36 items-end max-w-screen-xl w-full">
        {/* Left Content */}
        <div className="relative md:block hidden w-full lg:w-1/2 flex justify-right items-end mt-12 lg:mt-0">
          {/* Image */}
          <img
            src={securityImages}
            alt="security-guard"
            className="h-1/2 w-auto grayscale z-10 ml-auto"
          />

          {/* Positioned Overlay */}
          <div className="absolute bottom-0 right-0 z-20 p-4 sm:p-6 bg-accent rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Feature 1 */}
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

              {/* Feature 2 */}
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

        <div className="flex flex-col w-full lg:w-1/2 gap-5">
          <h1 className="text-lg font-semibold text-accent md:text-xl">
            Professional Security Services
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-gray-600 dark:text-white">
            A professional security service provider with extensive experience,
            and deep expertise in the industrial security sector
          </h2>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-red-100 dark:focus:ring-red-950"
            >
              Get started
              <LucideIcons.MoveRight className="ml-3" />
            </a>
          </div>
        </div>

        {/* Right Content with Image & Overlay */}
      </div>
    </section>
  );
};

export default HeroSection;
