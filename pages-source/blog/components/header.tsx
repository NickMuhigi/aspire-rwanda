import type { NextPage } from "next";
import FrameComponent1 from "../../../components/frame-component1";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return <FrameComponent1 className={className} />;
};

export default Header;
