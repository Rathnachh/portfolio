import Image from "next/image";

const Projects = () => {
  const projectData = [
    {
      name: "Neakhatka",
      project: "provide the Internship opportunity to the seeker",
      image: "/neakhatka.jpg",
      link: "https://neakhatka.com/",
    },
    {
      name: "Medical",
      project: "",
      image: "/medical.jpg",
      link: "https://medical-project-ebon.vercel.app/",
    },
    {
      name: "Neakhatka",
      project: "UI figma design ",
      image: "/Neakhatka design.png",
      link: "https://www.figma.com/design/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?node-id=163-590&t=JISHfwzpR7yLU2Oh-0",
    },
  ];

  return (
    <div id="project" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Delivered Projects
          </h2>
          <p className="mt-4 text-gray-600">
            Listed below are some of the most representative projects I&apos;ve
            worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-56">
                <a href={project.link}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  <strong>Name:</strong> {project.name}, <strong>For:</strong>{" "}
                  {project.project}{" "}
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline"
                  >
                    details
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
