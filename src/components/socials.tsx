import { FaGithub, FaLinkedin, FaEnvelope, FaFileLines } from "react-icons/fa6";

const Socials = () => {
  const socials = [
    { title: "GitHub", href: "https://github.com/marcelohdez", icon: FaGithub },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/marcelohdez",
      icon: FaLinkedin,
    },
    {
      title: "Email",
      href: "mailto:marcelohdez.inq@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "Resume",
      href: "/resume.pdf",
      icon: FaFileLines,
    },
  ];

  return (
    <ul className="flex gap-8 lg:gap-6">
      {socials.map((social, idx) => (
        <a key={idx} href={social.href} title={social.title}>
          <li className="text-3xl  text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white">
            <social.icon />
          </li>
        </a>
      ))}
    </ul>
  );
};

export { Socials };
