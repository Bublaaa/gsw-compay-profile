import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "+", description: "Successful Projects Completed" },
  { value: 10, suffix: "+", description: "Industries Served" },
  { value: 5, suffix: "+", description: "Years of Experience" },
  {
    value: 50,
    suffix: "+",
    description: "Highly Skilled Engineers & Technicians",
  },
  { value: 98, suffix: "%", description: "Client Satisfaction Rate" },
];

const ImpactSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section
      id="our-impact"
      ref={ref}
      className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
    >
      <div className="flex flex-col gap-5 mx-auto text-center items-center py-24 lg:py-56 px-4">
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="text-accent">Our Impact in Numbers</h2>
          <h6 className="text-white">
            Committed to delivering excellence across industries.
          </h6>
        </div>

        <div className="flex md:flex-row flex-col flex-wrap gap-10 justify-center text-white mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[200px]"
            >
              <h1 className="heading1">
                {startCount ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </h1>
              <p className="paragraph mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
