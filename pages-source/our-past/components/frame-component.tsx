import type { NextPage } from "next";
import FrameComponent1 from "../../../components/frame-component1";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return <FrameComponent1 className={["shared-nav-tight", className].join(" ")} />;
};

export default FrameComponent;
