"use client";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const pages = [
    { title: "Home", url: "/" },
    { title: "Projects", url: "/projects" },
    { title: "Blog", url: "/blog" },
  ];

  return (
    <div className="flex flex-col w-full top-0 sticky backdrop-blur-md border-b border-neutral-500/30 py-4 gap-4">
      <h1 className="lg:hidden font-serif text-3xl sm:text-4xl mx-auto">
        Marcelo Hernandez
      </h1>
      <ul className="inline mx-auto">
        {pages.map((page, idx) => (
          <a key={idx} href={page.url}>
            <li
              className={`
                inline hover:bg-black/15 dark:hover:bg-white/15 rounded-lg py-2 px-3 mx-2 
                ${page.url == usePathname() ? "bg-black/10 dark:bg-white/10" : ""}
              `}
            >
              {page.title}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export { NavBar };
