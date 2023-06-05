import { ReactElement } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { DiAndroid, DiJava } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaUnity,
} from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { SiDart, SiFlutter, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const techIconMap: { [key: string]: () => ReactElement } = {
  javascript: () => <FaJs />,
  typescript: () => <SiTypescript />,
  react: () => <FaReact />,
  nextjs: () => <TbBrandNextjs />,
  android: () => <DiAndroid />,
  ionic: () => <IoLogoIonic />,
  flutter: () => <SiFlutter />,
  java: () => <DiJava />,
  python: () => <FaPython />,
  // c: () => <TbBrandCpp />, // This is not the C icon but the closest available in react-icons
  unity: () => <FaUnity />,
  dart: () => <SiDart />,
  html: () => <FaHtml5 />,
  css: () => <FaCss3Alt />,
  none: () => <BiCodeAlt />,
  undefined: () => <></>,
  null: () => <></>,
};

export default techIconMap;
