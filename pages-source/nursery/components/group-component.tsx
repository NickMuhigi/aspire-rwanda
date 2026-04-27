import type { NextPage } from "next";
import FooterContainer from "../../../components/footer-container";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return <FooterContainer className={className} />;
};

export default GroupComponent;
