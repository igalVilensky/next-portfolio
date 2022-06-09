import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    tech_tag,
    name,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      {/*  <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/*  <img src={image_path} alt={name} /> */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>

            <motion.div
              className="flex justify-center my-4 space-x-3 "
              variants={fadeInUp}
            >
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                href={github_url}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                href={deployed_url}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="p-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="mb-3 text-lg font-medium md:text-2xl"
              variants={fadeInUp}
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>
              {description}
            </motion.h3>
            <motion.div
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              variants={fadeInUp}
            >
              {tech_tag.map((tech) => (
                <span
                  className="px-2 py-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
