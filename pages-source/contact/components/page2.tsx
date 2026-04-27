import type { NextPage } from "next";
import FrameComponent1 from "../../../components/frame-component1";

export type PageType = {
  className?: string;
};

const Page: NextPage<PageType> = ({ className = "" }) => {
  return <FrameComponent1 className={["shared-nav-contact", className].join(" ")} />;
};

export default Page;
