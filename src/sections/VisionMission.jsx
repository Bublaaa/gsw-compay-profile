import React from "react";

const visionMissionSectionData = [
  {
    title: "Vision",
    description: "Become a reputable and trusted technical services company",
    iconPath:
      "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z",
  },
  {
    title: "Mission",
    description: [
      "Deliver client satisfaction through tailored technical solutions.",
      "Ensure business growth and development by focusing on employee and stakeholder value.",
      "Build long-term, mutually beneficial relationships with clients through quality services and integrity.",
    ],
    iconPath:
      "M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7",
  },
  {
    title: "Value",
    description: [
      "Quality: We are dedicated to providing solutions that are reliable and  precise.",
      "Innovation: Deliver cutting-edge, future-proof services.",
      "Integrity: Transparency and ethical business practices.",
    ],
    iconPath:
      "M2.49954 9H21.4995M9.99954 3L7.99954 9L11.9995 20.5L15.9995 9L13.9995 3M12.6141 20.2625L21.5727 9.51215C21.7246 9.32995 21.8005 9.23885 21.8295 9.13717C21.8551 9.04751 21.8551 8.95249 21.8295 8.86283C21.8005 8.76114 21.7246 8.67005 21.5727 8.48785L17.2394 3.28785C17.1512 3.18204 17.1072 3.12914 17.0531 3.09111C17.0052 3.05741 16.9518 3.03238 16.8953 3.01717C16.8314 3 16.7626 3 16.6248 3H7.37424C7.2365 3 7.16764 3 7.10382 3.01717C7.04728 3.03238 6.99385 3.05741 6.94596 3.09111C6.89192 3.12914 6.84783 3.18204 6.75966 3.28785L2.42633 8.48785C2.2745 8.67004 2.19858 8.76114 2.16957 8.86283C2.144 8.95249 2.144 9.04751 2.16957 9.13716C2.19858 9.23885 2.2745 9.32995 2.42633 9.51215L11.385 20.2625C11.596 20.5158 11.7015 20.6424 11.8279 20.6886C11.9387 20.7291 12.0603 20.7291 12.1712 20.6886C12.2975 20.6424 12.4031 20.5158 12.6141 20.2625Z",
  },
];

const VisionMissionSection = () => {
  return (
    <section id="vision-mission-section" className="bg-white-shadow w-full">
      <div className="flex flex-col gap-10 mx-auto w-full md:max-w-4xl md:py-20">
        <div className="flex flex-col gap-2 items-center text-center">
          <h5 className="w-full text-secondary dark:text-white heading5">
            Vision & Mission
          </h5>
          <h1 className="text-accent">"We Come, People Feel Safe."</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10 w-full">
          <div className="flex flex-col gap-5 bg-white rounded-lg shadow-md items-center px-10 py-10">
            <h3 className="text-accent">Vision</h3>
            <p>
              To be recognized as a leading provider of highly qualified
              security personnel, delivering exceptional human resource services
              in the field of safety and protection—wherever we are present,
              people feel secure.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-white rounded-lg shadow-md items-center px-10 py-10">
            <h3 className="text-accent">Mission</h3>
            <p>
              To be recognized as a leading provider of highly qualified
              security personnel, delivering exceptional human resource services
              in the field of safety and protection—wherever we are present,
              people feel secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
