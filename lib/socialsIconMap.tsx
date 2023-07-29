import { ReactElement } from "react";
import {
  BsYoutube,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const SocialsIcon: { [key: string]: () => ReactElement } = {
  youtube: () => <BsYoutube />,
  linkedin: () => <BsLinkedin />,
  github: () => <BsGithub />,
  tiktok: () => <FaTiktok />,
  instagram: () => <BsInstagram />,
  twitter: () => <BsTwitter />,
  facebook: () => <BsFacebook />,
  none: () => <></>,
  undefined: () => <></>,
  null: () => <></>,
};

export default SocialsIcon;
