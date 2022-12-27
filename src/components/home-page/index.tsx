import React from "react";
import MainContainer from "../main-container";
import Sidebar from "../sidebar";

const HomePage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar className="w-1/4 bg-[#1E213A]" />
      <MainContainer className="w-3/4 bg-[#100E1D]" />
    </div>
  );
};

export default HomePage;
