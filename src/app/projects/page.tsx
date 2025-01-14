import { ProjectsTable } from "@/components/projects";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsTable />
      <div className="w-full mt-6 text-center text-black/50 dark:text-white/50">
        And of course, this website!
      </div>
    </div>
  );
};

export default ProjectsPage;
