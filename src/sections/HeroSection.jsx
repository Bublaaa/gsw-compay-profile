import logo from "../assets/logo.webp";
import * as LucideIcons from "lucide-react";

const HeroSection = ({}) => {
  return (
    // bg-center bg-no-repeat  bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-blend-multiply
    <section className="dark:bg-dark bg-white w-full flex mx-auto items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-10 px-4 py-24 lg:py-56 items-center justify-between max-w-screen-xl">
        {/* Left Content */}
        <div className="flex flex-col w-1/2 gap-5 text-center lg:text-left">
          <h1 className="text-lg font-semibold text-accent md:text-xl">
            PT. Garda Setia Waspada
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-gray-600 dark:text-white ">
            A professional security service provider with extensive experience,
            and deep expertise in the industrial security sector
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent-hover focus:ring-4 focus:ring-red-100 dark:focus:ring-red-950"
            >
              Get started
              <LucideIcons.MoveRight className="ml-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 w-1/2 items-center justify-center mx-auto flex">
          <img
            src={logo}
            alt="Company logo"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
