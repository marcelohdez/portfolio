import { InfoCard } from "@/components/infocard";
import { ProjectsTable } from "@/components/projects";
import { SeeLink } from "@/components/seelink";
import { Socials } from "@/components/socials";
import { FaGraduationCap } from "react-icons/fa";
import { FaGoogle, FaPersonChalkboard } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex gap-20">
      <div className="hidden lg:block">
        <div className="flex flex-col gap-8 sticky top-[5.5rem]">
          <div className="font-serif text-5xl">Marcelo Hernandez</div>
          <Socials />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full text-black/75 dark:text-white/75">
        <div className="block lg:hidden mx-auto">
          <Socials />
        </div>
        <section id="about">
          Student at <b>Florida International University</b> and
          Engineering/Technology tutor at <b>Miami Dade College</b> interested
          in low-level programming and open-source software. Always looking to
          learn new things, already comfortable using Java, Rust, JavaScript,
          Typescript and Go.
        </section>
        <section id="projects">
          <div className="mb-4 text-black/50 dark:text-white/50">
            See some of my work below:
          </div>
          <ProjectsTable mini={true} />
        </section>
        <section id="experience">
          <InfoCard
            title="Miami Dade College"
            subtitle="Computer Science Tutor"
            description="Worked with my team of over 10 tutors to provide over one hundred
            students with insight utilizing Java, C/C++, SQL, and Python, increasing the
            students’ grade point average as well as their class participation."
            date="2023 - Present"
            icon={FaPersonChalkboard}
            fancy={true}
          />
        </section>
        <hr className="h-1 w-2/3 mx-auto border-black/10 dark:border-white/10" />
        <section id="education" className="flex flex-col gap-8">
          <InfoCard
            title="Google"
            subtitle="Tech Exchange"
            description="Mentored by Googlers while completing accredited courswork including
            Algorithms & System Design, Intro to Software Engineering, and Careers in Tech."
            date="2024 - Present"
            icon={FaGoogle}
          />
          <InfoCard
            title="Florida International University"
            subtitle="BS in Computer Science"
            description="Participated in extracurricular activities with SHPE and INIT, while
            completing coursework including Programming I and II, and Data Structures."
            date="2024 - Present"
            icon={FaGraduationCap}
          />
          <InfoCard
            title="Miami Dade College"
            subtitle="AA in Computer Science"
            description="Completed coursework including Calculus, Intro to Java, Intro to C++, and Discrete Mathematics."
            date="2022 - 2024"
            icon={FaGraduationCap}
          />
          <a href="/resume.pdf">
            <SeeLink text="See full resume" />
          </a>
        </section>
      </div>
    </div>
  );
}
