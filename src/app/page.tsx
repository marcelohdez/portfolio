import { InfoCard } from "@/components/InfoCard";
import { ProjectsTable } from "@/components/Projects";
import { SeeLink } from "@/components/SeeLink";
import { Socials } from "@/components/Socials";
import { FaGraduationCap } from "react-icons/fa";
import { FaGoogle, FaPersonChalkboard } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex gap-20">
      <div className="hidden lg:block">
        <div className="flex flex-col gap-4 sticky top-[5.6rem]">
          <h1 className="font-serif text-5xl">Marcelo Hernandez</h1>
          <h4 className="font-bold text-2xl text-black/50 dark:text-white/50">
            Software Engineer
          </h4>
          <Socials />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full text-black/75 dark:text-white/75">
        <div className="block lg:hidden mx-auto">
          <Socials />
        </div>
        <section id="about">
          Student Program Assistant in <b>Florida International University</b>,
          expanding Computer Science education through Break Through Tech and
          currently majoring in a Computer Science bachelor&apos;s myself.
          Interested in low-level programming and open-source software.
          Comfortable with Java, Rust, JavaScript, Typescript and Go.
        </section>
        <section id="projects">
          <div className="mb-4 text-black/50 dark:text-white/50">
            See some of my work below:
          </div>
          <ProjectsTable mini={true} />
        </section>
        <section id="experience">
          <InfoCard
            title="Florida International University"
            subtitle="Student Program Assistant"
            description="Contributing to expanding computer science education
            to hundreds of students by coordinating workshop facilities and
            curriculum development for Code.org, Break Through Tech, and more
            organizations’ initiatives."
            footnote="June 2025 - Present"
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
            footnote="Jan 2025 - May 2025"
            icon={FaGoogle}
          />
          <InfoCard
            title="Florida International University"
            subtitle="BS in Computer Science"
            description="Participated in extracurricular activities with SHPE and INIT, while
            completing coursework including Programming I and II, and Data Structures."
            footnote="Aug 2024 - May 2027 (Expected)"
            icon={FaGraduationCap}
          />
          <InfoCard
            title="Miami Dade College"
            subtitle="AA in Computer Science"
            description="Completed coursework including Calculus, Intro to Java, Intro to C++, and Discrete Mathematics."
            footnote="Aug 2022 - July 2024"
            icon={FaGraduationCap}
          />
          <SeeLink href="/resume.pdf">See full resume</SeeLink>
        </section>
      </div>
    </div>
  );
}
