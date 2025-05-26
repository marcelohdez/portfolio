import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";

const SeeLink = (props: { children: ReactNode; href: string }) => (
  <a href={props.href}>
    <div className="flex gap-1 items-center font-bold hover:pl-4 hover:text-black dark:hover:text-white">
      {props.children}
      <FaArrowRight />
    </div>
  </a>
);

export { SeeLink };
