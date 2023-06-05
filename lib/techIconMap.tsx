import { ReactElement } from "react";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { SiFlutter, SiTypescript } from "react-icons/si";
import { FaReact, FaJava, FaUnity, FaJs } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { IoLogoIonic } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";

const techIconMap: { [key: string]: () => ReactElement } = {
  javascript: () => <FaJs />,
  typescript: () => <SiTypescript />,
  react: () => <FaReact />,
  nextjs: () => <TbBrandNextjs />,
  android: () => <DiAndroid />,
  ionic: () => <IoLogoIonic />,
  flutter: () => <SiFlutter />,
  java: () => <FaJava />,
  c: () => <TbBrandCpp />, // This is not the C icon but the closest available in react-icons
  unity: () => <FaUnity />,
  none: () => <BiCodeAlt />,
};

export default techIconMap;
