"use client";
import React from "react";

function MainComponent() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 640);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    imgSrc: string;
    innovations: string;
    url: string;
    git: string;
    reason: string;
  }

  const projects: Project[] = [
    // プロジェクトデータの詳細は省略
  ];

  interface Skill {
    id: number;
    name: string;
    level: string;
  }

  const skills: Skill[] = [
    // スキルデータの詳細は省略
  ];

  const internships = [
    // インターンシップデータの詳細は省略
  ];

  const technologiesUsed = ["React", "Tailwind CSS", "JavaScript", "Node.js"];

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen relative overflow-hidden">
      {/* 以下省略 */}
      <section id="projects" className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div
          className={`grid grid-cols-1 ${
            !isMobile ? "sm:grid-cols-2 lg:grid-cols-3" : ""
          } gap-4`}
        >
          {projects.map((project) => {
            const isSelected =
              selectedProject && selectedProject.id === project.id;
            return (
              <div
                key={project.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() =>
                  setSelectedProject(isSelected ? null : project)
                }
              >
                <img
                  src={project.imgSrc}
                  alt={`Screenshot of project titled ${project.title}`}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                {isMobile && isSelected && (
                  <div className="mt-4">
                    <p>{project.details}</p>
                    <p className="mt-4">
                      Innovations: {project.innovations}
                    </p>
                    <p className="mt-2">
                      URL:{" "}
                      <a
                        href={project.url}
                        className="text-blue-500 underline"
                      >
                        {project.url}
                      </a>
                    </p>
                    <p className="mt-2">
                      Git:{" "}
                      <a
                        href={project.git}
                        className="text-blue-500 underline"
                      >
                        {project.git}
                      </a>
                    </p>
                    <p className="mt-2">Reason: {project.reason}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {!isMobile && selectedProject && (
          <div className="mt-8 p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
              {selectedProject.title}
            </h3>
            <p className="mb-4">{selectedProject.details}</p>
            <p className="mb-4">
              Innovations: {selectedProject.innovations}
            </p>
            <p className="mb-4">
              URL:{" "}
              <a
                href={selectedProject.url}
                className="text-blue-500 underline"
              >
                {selectedProject.url}
              </a>
            </p>
            <p className="mb-4">
              Git:{" "}
              <a
                href={selectedProject.git}
                className="text-blue-500 underline"
              >
                {selectedProject.git}
              </a>
            </p>
            <p className="mb-4">Reason: {selectedProject.reason}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        )}
      </section>
      {/* 以下省略 */}
    </div>
  );
}

export default MainComponent;
