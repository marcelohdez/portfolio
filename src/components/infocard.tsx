import { IconType } from "react-icons";

/** A stack which displays info only, not to be clicked on */
const InfoStack = (props: {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon: IconType;
  fancy?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 items ${props.fancy ? "text-center" : ""}`}
    >
      <div
        className={`flex ${props.fancy ? "flex-col" : "flex-wrap"} gap-x-2 items-center text-xl`}
      >
        {props.fancy ? (
          <>
            <props.icon className="min-w-5" />
            <b>{props.title}</b>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <props.icon className="min-w-5" />
            <b>{props.title}</b>
          </div>
        )}
        <b className="text-black/50 dark:text-white/50">{props.subtitle}</b>
      </div>
      <div
        className={`w-full ${props.fancy ? "" : "sm:text-justify"} text-black/50 dark:text-white/50`}
      >
        {props.description}
      </div>
      <i className="text-sm text-black/40 dark:text-white/40">{props.date}</i>
    </div>
  );
};

export { InfoStack as InfoCard };
