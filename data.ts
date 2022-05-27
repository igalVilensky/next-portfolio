import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { SiAntdesign, SiCodeproject } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";

import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "Neque porro quisquam est qui <b>dolorem</b> ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coding",
    about:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: MdDeveloperMode,
  },
  {
    title: "UI/UX Design",
    about:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: SiAntdesign,
  },
  {
    title: "Project Managment",
    about:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: SiCodeproject,
  },
];

export const languages: ISkill[] = [
  {
    name: "Java Script",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Redux",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Node.js",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git and GitHub",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Figma",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Redux",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    category: ["react"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio",
  },
  {
    id: 2,
    category: ["react"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio2",
  },
  {
    id: 3,
    category: ["react"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio3",
  },
  {
    id: 4,
    category: ["node"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio4",
  },
  {
    id: 5,
    category: ["react"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio5",
  },
  {
    id: 6,
    category: ["react"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio6",
  },
  {
    id: 7,
    category: ["node"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio7",
  },
  {
    id: 8,
    category: ["react"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio8",
  },
  {
    id: 9,
    category: ["express"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["react", "html", "scss"],
    name: "Portfolio9",
  },
];
