import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn } from "../animations";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2 "
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/*  education & expirience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Development</h5>
            <p className="font-semibold">DCI(2020-2021)</p>
            <p className="my-3">
              Web Development Basic Digital Literacy, User Interface and
              Programming Basics, SPA - Single Page Applications, Backend
              Development, Final Project - Single Page Application (SPA) built
              with JavaScript and its frameworks ( MongoDB, Express, React and
              Node.js )
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Expirience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Junior Developer</h5>
            <p className="font-semibold">ARI-MOTORS(2021-2022)</p>
            <p className="my-3">
              Implementation of the existing screens for the development of a
              new comparison portal for electric commercial vehicles and other
              websites. General administrative tasks of the websites as well as
              the maintenance and the Operation of the back-end systems and
              databases.
            </p>
          </div>
        </motion.div>
      </div>
      {/* languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
