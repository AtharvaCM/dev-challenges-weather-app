import React from "react";
import MainContainer from "../main-container";
import Sidebar from "../sidebar";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="w-screen bg-[#1E213A] md:w-1/4" />
      <MainContainer className="w-screen bg-[#100E1D] px-[7%] py-5 md:w-3/4" />
    </div>
  );
};

export default HomePage;
