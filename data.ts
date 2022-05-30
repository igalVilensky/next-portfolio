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
      "Building the front-end portion of websites and web applications—that is, the part that users actually see and interact with. Create websites and applications using HTML, CSS, and JavaScript...",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Deploy and maintain network applications. Manage the exchange of data between servers and users, develop back-end components, and connect applications with other web services....",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "Realizing an organization’s API requirements into practical results and understand the stakeholders’ vision for an API...",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coding",
    about:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    Icon: MdDeveloperMode,
  },
  {
    title: "Basic UI/UX Design",
    about:
      "Determine how users interact with products and make sure the overall user satisfaction with a product...",
    Icon: SiAntdesign,
  },
  {
    title: "Project Managment",
    about:
      "Planning and organization of a company's resources to move a specific task, event, or duty towards completion...",
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
    category: ["React"],
    deployed_url: "https://www.elektrotransporter-vergleich.de/",
    description:
      "Implementation of the existing screens for the development of a new comparison portal for electric commercial vehicles.",
    github_url:
      "https://github.com/ari-motors-team/elektrotransporter-vergleich",
    image_path: "/images/etv.png",
    tech_tag: ["React", "html", "tailwind", "next", "netlify"],
    name: "Elektrotransporter-Vergleich Portal",
  },
  {
    id: 2,
    category: ["React", "Node", "Express", "Mongo"],
    deployed_url: "https://github.com/cathacz/plantastic",
    description: "A gardening Diary made with React Native",
    github_url: "https://github.com/cathacz/plantastic",
    image_path: "/images/plantastic.png",
    tech_tag: ["React Native", "html", "scss", "node"],
    name: "A gardening Diary",
  },
  {
    id: 3,
    category: ["React"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio3",
  },
  {
    id: 4,
    category: ["Node"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio4",
  },
  {
    id: 5,
    category: ["React"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio5",
  },
  {
    id: 6,
    category: ["React"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio6",
  },
  {
    id: 7,
    category: ["Node"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio7",
  },
  {
    id: 8,
    category: ["React"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio8",
  },
  {
    id: 9,
    category: ["Express"],
    deployed_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    description: "Portfolio with vanila java script",
    github_url: "https://igalvilensky.github.io/Portfolio-with-Sass/",
    image_path: "/images/portfolio-project.jpg",
    tech_tag: ["React", "html", "scss"],
    name: "Portfolio9",
  },
];
