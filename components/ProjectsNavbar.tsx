import React, { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{
  value: Category | "All";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = "cursor-pointer hover:text-blue-600";
  if (active === value) className += " text-blue-600";
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="Express" {...props} />
      {/* <NavItem value="django" {...props} /> */}
      <NavItem value="Mongo" {...props} />
    </div>
  );
};

export { ProjectsNavbar, NavItem };
