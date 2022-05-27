import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import avatar from "../public/images/profileAvatar.jpg";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="">
      <Image
        src={avatar}
        alt="user avatar"
        className="mx-auto border-4 rounded-full border-purpleCustom border-r-yellowCustom"
        height="128"
        width="128"
        layout="intrinsic"
        quality={100}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan text-purpleCustom">
        <span className="text-yellowCustom">Igal </span>Vilensky
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/images/IGAL VILENSKY.jpg"
        download="IGAL VILENSKY.jpg"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* SOCIAL ICONS */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-600 dark:text-greenCustom md:w-full">
        <a
          href="https://www.facebook.com/afawefaw4496546464/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://github.com/igalVilensky"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/igalvilensky/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* ADDRESS */}
      <div className="py-4 my-5 -mx-4 bg-gray-200 dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Leipzig, Germany</span>
        </div>
        <p className="my-2">vilenskyigal@gmail.com</p>
        <p className="my-2">+49 178 309 94 33</p>
      </div>
      {/* EMAIL BUTTON */}
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-600 to-greenCustom focus:outline-none">
        <a
          href="mailto:vilenskyigal@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Me
        </a>
      </button>

      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-600 to-greenCustom"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
