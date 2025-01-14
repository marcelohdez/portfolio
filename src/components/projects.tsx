import { readFile } from "fs/promises";
import { FaArrowRight } from "react-icons/fa6";
import { SeeLink } from "./seelink";

interface ProjectInfo {
  year: number;
  name: string;
  desc: string;
  link: string;
  tags: string[];
}

/** When mini is true, will have separated buttons of the first 5 projects only */
const ProjectsTable = async (props: { mini?: boolean }) => {
  const MINI_LIMIT = 4;
  const projects: ProjectInfo[] = [];

  const file = await readFile("public/projects.csv");
  file
    .toString()
    .split("\n")
    .filter((s) => s)
    .forEach((line) => {
      if (props.mini && projects.length == MINI_LIMIT) return;
      if (line.startsWith("#")) return;

      const fields = line.split(",");
      const project = {
        year: Number(fields[0]),
        name: fields[1],
        desc: fields[2],
        link: fields[3],
        tags: fields.slice(4, -1),
      };

      projects.push(project);
    });

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        {projects.map((p, idx) => (
          <a key={idx} href={p.link}>
            <li
              className="flex justify-between bg-marcelo-green-200 dark:bg-marcelo-green-800
              border-t border-t-black/10 hover:bg-black/10 dark:border-t-white/10
              hover:dark:bg-white/10 p-4 rounded-md"
            >
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-black/50 dark:text-white/50">{p.desc}</div>
              </div>
              <FaArrowRight />
            </li>
          </a>
        ))}
      </ul>
      {props.mini ? (
        <a href="/projects">
          <SeeLink text="See all projects" />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export { ProjectsTable };
