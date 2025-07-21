import founderImage from "../assets/founderImage.png";

const FounderImpression = ({}) => {
  return (
    <section
      id="founder-impression-section"
      className="relative lg:px-40 md:px-20 sm:px-10 px-5 md:py-10 py-5 bg-mid-dark"
    >
      <div className="flex flex-row gap-5 mx-auto py-10 ml-30">
        <img
          src={founderImage}
          className="h-3/4 w-auto absolute left-0 bottom-0"
          alt="Founder"
        />
        <div className="flex flex-col gap-5 ml-30">
          <div className="flex flex-col">
            <h5 className="w-full text-accent dark:text-white heading5">
              Founder Impression
            </h5>
            <h2 className="w-full text-white dark:text-secondary heading2">
              Erick Lembong
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <p className="text-sm md:text-sm lg:text-base max-w-sm md:max-w-3xl lg:max-w-4xl font-lexend text-white dark:text-white">
              At PT. Garda Setia Waspada, our guiding motto, "We Come, People
              Feel Safe," reflects our unwavering mission: to deliver a sense of
              security as a fundamental human need, laying the foundation for
              peace and well-being in everyday life. More than just a security
              provider, we strive to be a trusted partner—proactive, dependable,
              and fully committed. Over the years, we’ve evolved into a
              strategic ally across various sectors, from industrial zones and
              property management to government institutions, offering
              integrated security and operational support built on integrity,
              adaptability, and professionalism.
            </p>
            <p className="text-sm md:text-sm lg:text-base max-w-sm md:max-w-3xl lg:max-w-4xl font-lexend text-white dark:text-white">
              We believe that true security goes beyond physical presence—it
              encompasses legal compliance, a strong corporate image, and a
              genuine sense of safety. That’s why we invest in certified,
              continuously trained personnel, supported by a robust
              quick-response system and transparent, audit-ready management.
              Backed by complete legal documentation, along with ISO and BNSP
              standards, we offer comprehensive HSSE (Health, Safety, Security,
              and Environment) services. These not only safeguard workplaces and
              personnel but also elevate our clients’ credibility and public
              trust.
            </p>
            <p className="text-sm md:text-sm lg:text-base max-w-sm md:max-w-3xl lg:max-w-4xl font-lexend text-white dark:text-white">
              At PT. Garda Setia Waspada, success is not measured by the number
              of personnel deployed, but by the confidence and peace of mind we
              instill in our clients. This commitment to excellence,
              reliability, and long-term partnership is what drives every aspect
              of our work—and it is the foundation upon which we continue to
              grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderImpression;
