import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn, stagger } from "../animations";
import Head from "next/head";

const index = ({ endpoint }) => {
  // console.log("client", services);
  // console.log(endpoint);

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Igal Vilensky | Portfolio</title>
      </Head>
      <h2 className="my-3 font-medium">
        Junior Full Stack Developer (MongoDB, Express, React and Node.js) with a
        passion for creative solutions. Dedicated to learning additional
        technologies and coding languages. Looking for an entry-level position
        at a great company to be a hard-working asset to any team, to learn,
        grow and develop long-term.
      </h2>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 border-white dark:bg-dark-100 dark:border-b-[0.5px] dark:border-t-[0.5px]"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h2 className="my-3 text-xl font-bold tracking-wide">What I offer</h2>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 "
              variants={fadeInUp}
              key={index}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps = async (context: GetServerSideProps) => {
  /* calculation */

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log(process.env.VERCEL_URL);
  // console.log("server", services);

  return { props: { endpoint: process.env.VERCEL_URL || null } };
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   console.log(context);

//   const res = await fetch("http://localhost:3000/api/services");
//   const { services } = await res.json();
//   console.log({ services });
//   return { props: { services: services } };
// };
