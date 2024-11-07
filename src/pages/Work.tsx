import React from "react";
import Link from "next/link";

const Work = () => {
  // Static data array for projects
  const projects = [
    {
      name: "CrewDogs",
      link: "https://www.crewdogs.com/",
      image: "/Crewdogs.png",
      description: "A dynamic platform created for military and aviation professionals, allowing users to connect, find accommodation, and coordinate stays during assignments and travels. The platform offers an interactive map and user-friendly interface to simplify searching and booking nearby options.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"]
    },    
    {
      name: "SVE Castings Pvt. Ltd.",
      link: "https://sve-sudarshan-reddy-cas-projects.vercel.app/",
      image: "/SVE.png",
      description: "A comprehensive portfolio for SVE Castings, showcasing its capabilities in pressure die casting and more.",
      technologies: ["React.js", "Vite", "Bootstrap", "Vercel Deployment"],
    },
    {
      name: "Queue1",
      link: "https://queue1.net/LandingPage/",
      image: "/Queue1.png",
      description: "Queue1 simplifies inventory-management software deployment with end-to-end implementation, customization, integration support, and professional consulting through the Queue1 Launchpad program",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
  ];

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

        {projects.map((project, index) => (
          <div key={index} className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
            <div className={`flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 ${index % 2 === 0 ? "md:rounded-l-xl md:border-r" : "md:order-last md:rounded-r-xl md:border-l"}`}>
              <Link href={project.link} className="w-full" target="_blank">
                <img
                  alt={`${project.name} Preview`}
                  width={1711}
                  height={1141}
                  className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 w-full"
                  src={project.image}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                {project.name}
              </p>
              <p className="text-normal text-base text-gray-900">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
                href={project.link}
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
        ))}
      </div>
    </section>
  );
};

export default Work;
