import logo from "../assets/logo.webp";

const AboutUsSection = () => {
  return (
    <section id="about-us-section" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-lg w-full md:py-40 pt-20 px-5 md:px-30 items-start justify-center mx-auto gap-10">
        {/* Pictures */}
        <div className="flex flex-row w-full items-center md:gap-10 gap-5">
          <img
            className="h-1/4 w-1/4 object-contain "
            src={logo}
            alt="GSW_Logo"
          />
          <div className="flex flex-col gap-2">
            <h5 className="text-accent">About Us</h5>
            <h2>PT Garda Setia Waspada</h2>
            <h6>Innovating Technical Services for Industry Leaders</h6>
          </div>
        </div>
        {/* Headline */}
        <div className="flex flex-col gap-10 w-full">
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
