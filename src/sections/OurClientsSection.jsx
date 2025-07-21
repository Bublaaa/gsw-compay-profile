import React from "react";
import abl from "../assets/client-logo/abl.png";
import adhi from "../assets/client-logo/adhi.png";
import apexIndo from "../assets/client-logo/apex-indo.png";
import barataIndonesia from "../assets/client-logo/barata-indoensia.png";
import dayasaPaper from "../assets/client-logo/dayasa-paper.png";
import garam from "../assets/client-logo/garam.png";
import intanwijaya from "../assets/client-logo/intanwijaya-internasional.png";
import megaSurya from "../assets/client-logo/mega-surya-eratama.png";
import okiPulp from "../assets/client-logo/oki-pulp-and-paper.png";
import pelitaLogistik from "../assets/client-logo/pelita-logistik.png";
import pertamina from "../assets/client-logo/pertamina.png";
import petrokimia from "../assets/client-logo/petrokimia-gresik.png";
import ptpn from "../assets/client-logo/ptpn.png";
import pusaka from "../assets/client-logo/pusaka-lautan-berlian.png";
import sasa from "../assets/client-logo/sasa.png";
import scg from "../assets/client-logo/scg.png";
import sig from "../assets/client-logo/sig.png";
import silog from "../assets/client-logo/silog.png";
import tib from "../assets/client-logo/tib.png";
import tjiwiKimia from "../assets/client-logo/tjiwi-kimia.png";
import wika from "../assets/client-logo/wika.png";

const clientLogos = [
  { src: abl, alt: "ABL" },
  { src: adhi, alt: "Adhi" },
  { src: apexIndo, alt: "Apex Indo" },
  { src: barataIndonesia, alt: "Barata Indonesia" },
  { src: dayasaPaper, alt: "Dayasa Paper" },
  { src: garam, alt: "Garam" },
  { src: intanwijaya, alt: "Intanwijaya Internasional" },
  { src: megaSurya, alt: "Mega Surya Eratama" },
  { src: okiPulp, alt: "OKI Pulp And Paper" },
  { src: pelitaLogistik, alt: "Pelita Logistik" },
  { src: pertamina, alt: "Pertamina" },
  { src: petrokimia, alt: "Petrokimia Gresik" },
  { src: ptpn, alt: "PTPN" },
  { src: pusaka, alt: "Pusaka Lautan Berlian" },
  { src: sasa, alt: "Sasa" },
  { src: scg, alt: "SCG" },
  { src: sig, alt: "SIG" },
  { src: silog, alt: "Silog" },
  { src: tib, alt: "TIB" },
  { src: tjiwiKimia, alt: "Tjiwi Kimia" },
  { src: wika, alt: "Wika" },
];

const OurClientsSection = () => {
  return (
    <section id="our-products-section" className="bg-white-shadow w-full">
      <div className="flex flex-col md:max-w-screen-lg w-full md:py-40 py-20 px-5 items-center justify-center mx-auto gap-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="w-full text-accent dark:text-secondary heading2">
            Trusted by Industry Leaders
          </h2>
          <h5 className="w-full text-secondary dark:text-white heading5">
            Building long-term partnerships with clients across diverse
            industries.
          </h5>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 my-5">
          {clientLogos.map((logo, index) => (
            <a
              key={index}
              className="w-fit h-fit bg-white rounded-lg shadow-md"
            >
              <img
                className="object-fit w-full h-auto"
                src={logo.src}
                alt={logo.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
