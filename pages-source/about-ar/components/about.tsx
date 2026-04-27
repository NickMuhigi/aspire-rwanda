import type { NextPage } from "next";
import FrameComponent1 from "../../../components/frame-component1";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return <FrameComponent1 className={["shared-nav-about", className].join(" ")} />;
};

export default About;
