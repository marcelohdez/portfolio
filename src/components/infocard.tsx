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
    <div className="flex flex-col gap-2 items">
      {props.fancy ? (
        <div className="flex flex-col items-center text-xl">
          <props.icon />
          <b>{props.title}</b>
          <b className="text-black/50 dark:text-white/50">{props.subtitle}</b>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:gap-2 text-xl">
          <div className="flex items-center gap-2">
            <props.icon />
            <b>{props.title}</b>
          </div>
          <b className="text-black/50 dark:text-white/50">{props.subtitle}</b>
        </div>
      )}
      <div className="w-full sm:text-justify text-black/50 dark:text-white/50">
        {props.description}
      </div>
      <i className="text-sm text-black/40 dark:text-white/40">{props.date}</i>
    </div>
  );
};

export { InfoStack as InfoCard };
