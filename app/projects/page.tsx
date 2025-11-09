import Image from "next/image";
import { projects } from "@/components/data/projects";
export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        All Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Explore our portfolio of completed and ongoing construction projects,
        showcasing our commitment to quality and innovation.
      </p>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
