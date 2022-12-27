import React from "react";
import { MainContainerType } from "../../types/components/main-container";

const MainContainer: React.FC<MainContainerType> = ({ className }) => {
  return <div className={className}>MainContainer</div>;
};

export default MainContainer;
