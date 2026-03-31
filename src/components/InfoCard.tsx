import { IconType } from "react-icons";

/** A stack which displays info only, not to be clicked on */
const InfoCard = (props: {
  title: string;
  subtitle: string;
  description: string;
  footnote: string;
  icon: IconType;
  fancy?: boolean;
}) => {
  const fancyClassname =
    "bg-marcelo-green-600/5 dark:bg-marcelo-green-400/10 rounded-md p-4";

  return (
    <div
      className={`flex flex-col gap-2 items ${props.fancy ? fancyClassname : ""}`}
    >
      <div className="flex flex-wrap gap-x-2 items-center text-xl">
        <props.icon />
        <b>{props.title}</b>
        <b className="text-black/50 dark:text-white/50">{props.subtitle}</b>
      </div>
      <div
        className={`w-full ${
          props.fancy
            ? "text-black/60 dark:text-white/60"
            : "text-black/50 dark:text-white/50"
        }
        "`}
      >
        {props.description}
      </div>
      <i className="text-sm text-black/40 dark:text-white/40">
        {props.footnote}
      </i>
    </div>
  );
};

export { InfoCard };
