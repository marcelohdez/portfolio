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

const MiniTable = (projects: ProjectInfo[]) => (
  <div className="flex flex-col gap-4">
    <ul className="flex flex-col gap-4">
      {projects.map((p, idx) => (
        <a key={idx} href={p.link}>
          <li
            className="flex justify-between bg-marcelo-green-200 dark:bg-marcelo-green-800
              border-t border-t-black/10 dark:border-t-white/10 hover:bg-black/10
              dark:hover:bg-white/10 p-4 rounded-md"
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
    <a href="/projects">
      <SeeLink text="See all projects" />
    </a>
  </div>
);

const FullTable = (projects: ProjectInfo[]) => (
  <div>
    <table className="w-full hover:bg-marcelo-green-200 dark:hover:bg-marcelo-green-800">
      <tbody>
        <tr className="text-left">
          <th>year</th>
          <th>name/link</th>
          <th className="hidden sm:table-cell">description</th>
          <th className="hidden md:table-cell">tags</th>
        </tr>
        {projects.map((p, idx) => (
          <tr
            key={idx}
            className="border-t border-t-black/10 dark:border-t-white/10 hover:bg-black/10 dark:hover:bg-white/10"
          >
            <td>{p.year}</td>
            <td className="py-4 text-black/70 dark:text-white/70 hover:underline">
              <a href={p.link}>{p.name}</a>
            </td>
            <td className="hidden sm:table-cell">{p.desc}</td>
            <td className="hidden md:table-cell">{p.tags.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * When mini is true this will show cards, instead of a table, and of the
 * first few projects only
 */
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
        tags: fields.slice(4),
      };

      projects.push(project);
    });

  return props.mini ? MiniTable(projects) : FullTable(projects);
};

export { ProjectsTable };
