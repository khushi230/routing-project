import React from "react";

import Link from "./Link";

const SideBar = () => {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        className="mb-3"
        activeClassName="font-bold border-l-4 p-2"
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col align-start ">
      {renderedLinks}
    </div>
  );
};
export default SideBar;
