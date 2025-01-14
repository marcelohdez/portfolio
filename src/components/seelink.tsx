import { FaArrowRight } from "react-icons/fa6";

const SeeLink = (props: { text: string }) => (
  <div className="flex gap-1 items-center font-bold hover:pl-4 hover:text-black dark:hover:text-white">
    <p>{props.text}</p>
    <FaArrowRight />
  </div>
);

export { SeeLink };
