import Image from 'next/image';

const Experience = () => {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50" id='Experience'>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-gray-700 text-sm font-medium">Experience</p>
            </div>
          </div>
          <p className="text-gray-900 text-normal text-lg md:text-xl max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        {/* Experience Cards */}
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4 [&_svg]:stroke-gray-950 [&_svg]:fill-gray-950">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102 28"
              role="img"
              aria-hidden="true"
              width={120}
              height={28}
            >
              <path
                fill="var(--nav-logo)"
                d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
              ></path>
              <path
                fill="var(--nav-logo)"
                d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
              ></path>
              <polygon
                fill="var(--nav-logo)"
                points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
              ></polygon>
              <path
                fill="var(--nav-logo)"
                d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
              ></path>
              <path
                fill="var(--nav-logo)"
                d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
              ></path>
              </svg>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Independent Freelancer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1 text-gray-600">
              <li className="text-normal text-base">
                Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.
              </li>
              <li className="text-normal text-base">
                Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.
              </li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-700 md:text-right">Nov 2021 - Present</p>
          </div>
        </div>


        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
          <div className="max-md:order-1 md:w-1/4 [&_svg]:stroke-gray-950 [&_svg]:fill-gray-950">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102 28"
              role="img"
              aria-hidden="true"
              width={120}
              height={28}
            >
              <path
                fill="var(--nav-logo)"
                d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
              ></path>
              <path
                fill="var(--nav-logo)"
                d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
              ></path>
              <polygon
                fill="var(--nav-logo)"
                points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
              ></polygon>
              <path
                fill="var(--nav-logo)"
                d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
              ></path>
              <path
                fill="var(--nav-logo)"
                d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
              ></path>
              </svg>
          </div>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Full Stack Developer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1 text-gray-600">
              <li className="text-normal text-base">Worked as a full stack developer (React / Laravel).</li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-700 md:text-right">Dec 2015 - May 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
