import type { NextPage } from "next";
import FrameComponent1 from "../../../components/frame-component1";

export type ProgrammeType = {
  className?: string;
};

const Programme: NextPage<ProgrammeType> = ({ className = "" }) => {
  return <FrameComponent1 className={className} />;
};

export default Programme;
