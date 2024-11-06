import Link from "next/link";

const Work = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="Work">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium text-gray-600">
                Work
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-900">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        {/* Wingie Project */}
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
  <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
    <Link
      href="https://sve-sudarshan-reddy-cas-projects.vercel.app/"
      className="w-full"
      target="_blank"
    >
      <img
        alt="SVE Castings Preview"
        width={1711}
        height={1141}
        className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 w-full"
        src="/SVE.png"
      />
    </Link>
  </div>
  <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
    <p className="text-lg md:text-xl font-semibold text-gray-900">
      SVE Castings Pvt. Ltd.
    </p>
    <p className="text-normal text-base text-gray-900">
      A comprehensive portfolio for SVE Castings, an alloy steel foundry specializing in Carbon Steel, Alloy Steel, Stainless Steel, Duplex & Super Duplex Steel, and Nickel Alloy castings. This platform highlights their expertise in casting production per international standards (ASTM, British, EN) with a 200-ton monthly capacity.
    </p>
    <div className="flex flex-wrap gap-2">
      {[
        "React.js",
        "Vite",
        "Bootstrap",
        "Vercel Deployment",
      ].map((tech) => (
        <div
          key={tech}
          className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1"
        >
          <p className="text-normal text-sm font-medium text-gray-700">
            {tech}
          </p>
        </div>
      ))}
    </div>
    <Link
      href="https://sve-sudarshan-reddy-cas-projects.vercel.app/"
      target="_blank"
      className="self-start rounded-lg p-1.5 hover:bg-gray-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-gray-600"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" x2="21" y1="14" y2="3"></line>
      </svg>
    </Link>
  </div>
</div>

        {/* Fiskil Project */}
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:order-last md:rounded-r-xl md:border-l">
            <Link
              href="https://fiskil.com.au"
              className="w-full"
              target="_blank"
            >
              <img
                alt="Wingie preview"
                width={1711}
                height={1141}
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 w-full"
                src="/Screensho1.png"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 md:order-first">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Fiskil
            </p>
            <p className="text-normal text-base text-gray-900">
              A platform for accessing real-time open banking and energy data to
              help you grow your business, backed with scalable back-end
              infrastructure.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Typescript",
                "Tailwindcss",
                "Material UI",
                "Redux Toolkit",
                "React Query",
                "Express.js",
                "PostgreSQL",
                "Firebase",
                "AWS Amplify",
                "Cypress",
                "Storybook",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1"
                >
                  <p className="text-normal text-sm font-medium text-gray-700">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="https://fiskil.com.au"
              target="_blank"
              className="self-start rounded-lg p-1.5 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-gray-600"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </Link>
          </div>
        </div>

        {/* Pepehousing Project */}
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
            <Link
              href="https://pepehousing.com"
              className="w-full"
              target="_blank"
            >
              <img
                alt="Wingie preview"
                width={1711}
                height={1141}
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 w-full"
                src="/Screensho1.png"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Pepehousing
            </p>
            <p className="text-normal text-base text-gray-900">
              A platform for renting a flat or room in Poland. You may browse
              hundreds of verified deals, contact the vendor, and pay online in
              a simple and secure manner.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Typescript",
                "Tailwindcss",
                "Redux Toolkit",
                "React Query",
                "Storybook",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1"
                >
                  <p className="text-normal text-sm font-medium text-gray-700">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="https://pepehousing.com"
              target="_blank"
              className="self-start rounded-lg p-1.5 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-gray-600"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
