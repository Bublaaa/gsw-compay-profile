import logo from "../assets/logo.webp";

const AboutUsSection = () => {
  return (
    <section id="about-us-section" className="bg-white-shadow w-full">
      <div className="flex flex-row md:max-w-screen-lg w-full md:py-40 py-10 px-5 md:px-30 items-start justify-center mx-auto md:gap-10 gap-5">
        {/* Pictures */}
        <div className="w-full md:w-1/3">
          <img
            className="h-auto md:h-80 w-full object-contain md:block hidden"
            src={logo}
            alt="GSW_Logo"
          />
        </div>
        {/* Headline */}
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <h5 className="text-accent">About Us</h5>
            <h2>PT Garda Setia Waspada</h2>
            <h6>Innovating Technical Services for Industry Leaders</h6>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <p>
              Garda Setia Waspada is a professional security service provider
              with extensive experience and deep expertise in the industrial
              security sector. Highly skilled personnel are continuously trained
              and developed under the guidance of experienced and certified
              professionals. This process is supported by modern facilities and
              infrastructure to ensure that every client’s security needs are
              met with the highest standards.
            </p>
            <p>
              A wide range of personnel and tailored security services are
              offered by Garda Setia Waspada, designed to meet the specific
              requirements of clients across various environments—including
              office buildings, apartments, residential areas, tourist
              attractions, warehouses, and factories. All services are delivered
              with readiness and precision, ensuring that any potential security
              challenges are addressed effectively and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
