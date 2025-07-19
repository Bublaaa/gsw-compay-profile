import logo from "../assets/logo.webp";

const FooterSection = ({ footerData }) => {
  return (
    <section id="footer">
      <footer className="bg-dark">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex md:flex-row flex-col md:justify-between w-full gap-10">
            {/* Left side */}
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-row items-center gap-5">
                <img src={logo} className="h-auto w-8" alt="logo" />
                <h6 className="text-lg font-semibold text-accent">
                  PT Garda Setia Waspada
                </h6>
              </div>
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {footerData.address}
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="w-full space-y-2 md:pl-50">
              <a
                href={footerData.phoneLink}
                className="block text-sm text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent-hover transition"
              >
                {footerData.phoneNumber}
              </a>
              <a
                href={footerData.businessEmailLink}
                className="block text-sm text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent-hover transition"
              >
                {footerData.businessEmail}
              </a>
              <a
                href="https://www.larosmulti.id"
                className="block text-sm text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent-hover transition"
              >
                www.garda-setia-waspada.id
              </a>
              <a
                href="mailto:support@laros-epcc.com"
                className="block text-sm text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent-hover transition"
              >
                support@gsw.com
              </a>
            </div>
            {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6"></div> */}
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          {/* Bottom copyright */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white">
              © 2023{" "}
              <a href="#" className="text-white">
                PT Garda Setia Waspada™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
