"use client";

import { usePathname } from "next/navigation";

const pages = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Blog", url: "/blog" },
];

const IsSelected = (url: string): boolean => {
  return url == usePathname();
};

const BlogBar = () => (
  <div className="flex flex-col w-full top-0 z-50 sticky bg-green-900 text-white">
    <h1 className="font-serif mx-auto py-2 text-3xl sm:text-4xl">
      The Marcelo Times
    </h1>
    <hr className="border-white/20" />
    <ul className="mx-auto py-2">
      {pages.map((page, idx) => (
        <a key={idx} href={page.url}>
          <li
            className={`
                inline hover:bg-white/15 py-2 px-3 mx-2 
                ${page.url == "/blog" ? "bg-white/10" : ""}
              `}
          >
            {page.title}
          </li>
        </a>
      ))}
    </ul>
  </div>
);

const RegularBar = () => (
  <div className="flex flex-col w-full top-0 sticky z-50 backdrop-blur-md border-b border-neutral-500/30 py-4 gap-4">
    <h1 className="lg:hidden font-serif text-3xl sm:text-4xl mx-auto">
      Marcelo Hernandez
    </h1>
    <ul className="mx-auto">
      {pages.map((page, idx) => (
        <a key={idx} href={page.url}>
          <li
            className={`
                inline hover:bg-black/15 dark:hover:bg-white/15 rounded-lg py-2 px-3 mx-2 
                ${IsSelected(page.url) ? "bg-black/10 dark:bg-white/10" : ""}
              `}
          >
            {page.title}
          </li>
        </a>
      ))}
    </ul>
  </div>
);

const NavBar = () => {
  return IsSelected("/blog") ? BlogBar() : RegularBar();
};

export { NavBar };
