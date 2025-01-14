import { ProjectsTable } from "@/components/projects";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsTable />
      <div className="w-full mt-6 text-center text-black/50 dark:text-white/50">
        And of course,{" "}
        <a
          href="https://github.com/marcelohdez/portfolio"
          className="underline text-black/70 dark:text-white/70"
        >
          this website
        </a>
        !
      </div>
    </div>
  );
};

export default ProjectsPage;
